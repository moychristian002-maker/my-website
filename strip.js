// Homepage filmstrip, recreating Christian's inspiration (Rue Studio): every project's cover
// in one thin row across the middle of the screen, newest first. The selected project sits
// bigger, toward the left, with its number, title and subtitle above its top-left corner.
// Swipe, drag, scroll sideways on a trackpad, use the arrow keys or click a small photo to
// move along; click the big photo to open the project (fade.js morphs it into the project
// page). Until someone touches it, the strip moves on by itself every few seconds.
(() => {
  const strip = document.getElementById("strip");
  const track = document.getElementById("strip-track");
  if (!strip || !projects.length) return;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const n = projects.length;
  const RATIO = 0.75; // photo width / height (3:4, as in the inspiration)
  const MOVE_MS = 650; // a little longer than the CSS transition
  const titleEl = document.getElementById("strip-title");
  const subEl = document.getElementById("strip-sub");

  // Three copies of the list, so the strip never runs out at either end. The selection
  // always settles back into the middle copy, which is what screen readers see.
  const items = [];
  for (let copy = 0; copy < 3; copy++) {
    projects.forEach((p) => {
      const a = document.createElement("a");
      a.className = "strip-item";
      a.href = `project.html?p=${p.folder}`;
      a.dataset.folder = p.folder;
      a.draggable = false;
      a.tabIndex = -1;
      if (copy !== 1) a.setAttribute("aria-hidden", "true");
      a.innerHTML = `<div class="strip-img"><img src="images/${p.folder}/${p.images[0]}" alt="${copy === 1 ? p.title : ""}" draggable="false"></div>`;
      a.project = p;
      track.appendChild(a);
      items.push(a);
    });
  }

  let active = n; // index into items
  let offset = 0; // px, while a finger or mouse is dragging the strip
  let big = 0, small = 0, gap = 0, anchor = 0; // photo heights, spacing, selected photo's left edge (px)

  // Proportions measured from the inspiration: the big photo is 40% of the screen's height,
  // the small ones a little under half of that, and the big one starts 20% in from the left.
  const measure = () => {
    const phone = innerWidth < 700;
    big = Math.min(innerHeight * 0.4, (innerWidth * (phone ? 0.5 : 0.3)) / RATIO);
    small = big * 0.465;
    gap = Math.max(6, small * 0.09);
    anchor = innerWidth * (phone ? 0.12 : 0.2);
    const host = strip.parentElement;
    host.style.setProperty("--big", `${big}px`);
    host.style.setProperty("--small", `${small}px`);
    host.style.setProperty("--gap", `${gap}px`);
    host.style.setProperty("--anchor", `${anchor}px`);
  };

  // Every photo before the selected one is small, so its position is easy to work out.
  const place = () => {
    const x = anchor - active * (small * RATIO + gap) + offset;
    track.style.transform = `translateX(${x}px)`;
    items.forEach((it, k) => it.classList.toggle("is-active", k === active));
  };
  const instantly = (fn) => {
    strip.classList.add("no-anim");
    fn();
    void track.offsetWidth;
    strip.classList.remove("no-anim");
  };

  const updateCaption = () => {
    const p = items[active].project;
    titleEl.textContent = p.title;
    subEl.textContent = p.tag;
    tint();
  };

  // While the strip is in view, the page takes on the selected project's color world, like
  // hovering a card further down. The About blurb and the rest of the page stay off-white.
  // Uses the same --page-bg / --page-ink variables as fade.js and the card hover.
  const HOME = ["#f4f3ee", "#000000"];
  let tintReady = false; // set once everything below is in place
  let heroInView = true;
  let painted = "";
  function tint() {
    if (!tintReady) return;
    const world = (!introOn && heroInView && colorWorlds[items[active].project.folder]) || HOME;
    if (world.join() === painted) return;
    painted = world.join();
    document.documentElement.style.setProperty("--page-bg", world[0]);
    document.documentElement.style.setProperty("--page-ink", world[1]);
  }

  // Once a move has finished, hop back to the same photo in the middle copy (it looks identical).
  let settle = null;
  const recenter = () => {
    if (drag) return;
    const k = (((active - n) % n) + n) % n + n;
    if (k !== active) { active = k; instantly(place); }
  };
  const go = (k) => {
    active = Math.max(0, Math.min(items.length - 1, k));
    offset = 0;
    place();
    updateCaption();
    clearTimeout(settle);
    settle = setTimeout(recenter, reduceMotion ? 0 : MOVE_MS);
  };

  // Coming back from a project opened from the strip: select it again, so the photo morphs
  // back onto the strip (fade.js looks for it there).
  let returning = false;
  try {
    const last = sessionStorage.getItem("last-project");
    if (sessionStorage.getItem("last-source") === "strip" && /project\.html/.test(document.referrer)) {
      const i = projects.findIndex((p) => p.folder === last);
      if (i >= 0) { active = n + i; returning = true; }
    }
  } catch (e) {}

  measure();
  instantly(place);
  updateCaption();
  if (document.fonts) document.fonts.ready.then(() => { measure(); instantly(place); });
  addEventListener("resize", () => { measure(); instantly(place); });
  // Intro: the landing opens with Christian's "about" blurb on its own, so it's read before
  // the work. The "(VIEW WORK →)" button fades it out and brings in the filmstrip. Skipped
  // when coming back from a project and
  // once seen this session; the nav's ABOUT link (#intro) brings it back.
  const hero = strip.closest(".hero");
  const host = strip.parentElement;
  const intro = document.getElementById("intro");
  let introOn = false;
  let seen = false;
  try { seen = sessionStorage.getItem("intro-seen") === "1"; } catch (e) {}
  const arrive = () => {
    if (reduceMotion) return;
    host.classList.remove("arriving");
    void host.offsetWidth;
    host.classList.add("arriving");
  };
  const showIntro = () => {
    if (!intro) return;
    introOn = true;
    hero.classList.add("intro-on");
    clearTimeout(timer);
    tint();
  };
  const hideIntro = () => {
    if (!introOn) return;
    introOn = false;
    hero.classList.remove("intro-on");
    try { sessionStorage.setItem("intro-seen", "1"); } catch (e) {}
    if (location.hash === "#intro") history.replaceState(null, "", location.pathname + location.search);
    arrive();
    schedule(SHOW_MS + 1200);
    tint();
  };
  // Only the "(VIEW WORK →)" button swaps the blurb for the strip: moving the mouse,
  // scrolling or swiping leaves the text where it is (Christian's choice), and the page
  // scrolls down to the work as usual.
  document.getElementById("intro-go")?.addEventListener("click", hideIntro);
  // The nav's ABOUT link brings the blurb back.
  document.querySelectorAll('a[href="#intro"]').forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo({ top: 0 });
    showIntro();
  }));

  // Moves on by itself until the first touch, hover, focus or button press (not during the intro).
  let touched = false;
  let visible = true;
  let timer = null;
  const SHOW_MS = 3500;
  const schedule = (delay = SHOW_MS) => {
    clearTimeout(timer);
    if (touched || reduceMotion || introOn) return;
    timer = setTimeout(() => {
      if (!touched && visible && !document.hidden && !introOn) go(active + 1);
      schedule();
    }, delay);
  };
  const stop = () => { touched = true; clearTimeout(timer); };
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(strip);
    // Color only while most of the landing is on screen; scrolling down to the work turns it off.
    new IntersectionObserver(([e]) => { heroInView = e.intersectionRatio >= 0.5; tint(); }, { threshold: [0, 0.5, 1] }).observe(hero);
  }
  schedule(returning ? SHOW_MS : SHOW_MS + 1200);
  if (intro && (location.hash === "#intro" || (!returning && !seen))) showIntro();
  else if (!returning) arrive();
  // Arriving from a project page's ABOUT link (index.html#intro): start at the very top,
  // not wherever the browser scrolled to find #intro.
  if (intro && location.hash === "#intro") requestAnimationFrame(() => scrollTo({ top: 0, behavior: "instant" }));
  // After fade.js has set the page's starting colors.
  requestAnimationFrame(() => { tintReady = true; tint(); });
  strip.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") stop(); });
  strip.addEventListener("focusin", stop);

  // Dragging (mouse or finger): the strip follows, then lands on the nearest photo.
  let drag = null;
  let suppressClick = false;
  strip.addEventListener("pointerdown", (e) => {
    stop();
    if (e.button !== 0) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
    suppressClick = false;
  });
  strip.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.hypot(dx, e.clientY - drag.y) > 6) {
      drag.moved = true;
      strip.classList.add("dragging");
      try { strip.setPointerCapture(drag.id); } catch (err) {}
    }
    if (!drag.moved) return;
    offset = dx;
    place();
  });
  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const moved = drag.moved;
    drag = null;
    strip.classList.remove("dragging");
    if (!moved) return; // a tap: handled by the click below
    suppressClick = true;
    let steps = Math.round(-offset / (small * RATIO + gap));
    if (!steps && Math.abs(offset) > 40) steps = -Math.sign(offset);
    go(active + steps);
  };
  strip.addEventListener("pointerup", endDrag);
  strip.addEventListener("pointercancel", endDrag);

  // A click on a small photo selects it; a click on the big one opens the project.
  strip.addEventListener("click", (e) => {
    const item = e.target.closest(".strip-item");
    if (suppressClick) { e.preventDefault(); suppressClick = false; return; }
    if (!item) return;
    if (item !== items[active]) {
      e.preventDefault();
      stop();
      go(items.indexOf(item));
    }
  });

  // Trackpad: a two-finger sideways swipe scrolls through the strip, one photo per
  // ~80px of movement. Up and down still scrolls the page; sideways swipes over the
  // strip don't trigger the browser's back/forward gesture.
  let wheelX = 0;
  let wheelQuiet = null;
  // Mouse scroll wheel: with the cursor over the strip, each notch moves one photo
  // (down = next, up = previous). Mouse notches are told apart from trackpad scrolling,
  // so scrolling up and down on a trackpad still scrolls the page.
  const isMouseNotch = (e) =>
    e.deltaX === 0 && e.deltaY !== 0 &&
    (e.deltaMode !== 0 || (e.wheelDeltaY && Math.abs(e.wheelDeltaY) % 120 === 0));
  strip.addEventListener("wheel", (e) => {
    if (isMouseNotch(e)) {
      e.preventDefault();
      stop();
      go(active + Math.sign(e.deltaY));
      return;
    }
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    stop();
    clearTimeout(wheelQuiet);
    wheelQuiet = setTimeout(() => { wheelX = 0; }, 200);
    wheelX += e.deltaX * (e.deltaMode === 1 ? 16 : 1);
    const STEP = 80;
    if (Math.abs(wheelX) >= STEP) {
      const steps = Math.trunc(wheelX / STEP);
      wheelX -= steps * STEP;
      go(active + steps);
    }
  }, { passive: false });

  strip.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
    else if (e.key === "Enter") items[active].click();
  });
})();
