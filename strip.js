// Homepage filmstrip, after Christian's inspiration (Rue Studio): every project's cover in
// one row across the screen, newest first. The selected project sits bigger in the middle,
// with its number, title and subtitle above. Swipe, drag, scroll sideways on a trackpad,
// use the arrows or click a small photo to move along; click the big photo to open the
// project (fade.js morphs it into the project page). Until someone touches it, the strip
// moves on by itself every few seconds.
(() => {
  const strip = document.getElementById("strip");
  const track = document.getElementById("strip-track");
  if (!strip || !projects.length) return;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const n = projects.length;
  const RATIO = 0.8; // photo width / height (4:5, like the project cards)
  const MOVE_MS = 650; // a little longer than the CSS transition
  const num = (k) => String(k + 1).padStart(2, "0");
  const accent = (p) => {
    const w = colorWorlds[p.folder];
    return w ? (w[1] === "#ffffff" ? w[0] : w[1]) : "";
  };
  const indexEl = document.getElementById("strip-index");
  const titleEl = document.getElementById("strip-title");
  const subEl = document.getElementById("strip-sub");
  const countEl = document.getElementById("strip-count");

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
  let big = 0, small = 0, gap = 0; // photo heights and spacing in px

  // Size the strip so the caption, arrows and "see all work" fit in the first screen:
  // measure where the hero would end without the strip, and give the strip what's left.
  const measure = () => {
    strip.style.setProperty("--big", "0px");
    const more = document.querySelector(".strip-more");
    const end = more ? more.getBoundingClientRect().bottom + scrollY : 0;
    big = innerWidth < 700
      ? Math.min((innerWidth * 0.6) / RATIO, innerHeight * 0.5)
      : Math.max(170, Math.min(innerHeight - end - 28, 420));
    small = big * 0.5;
    gap = Math.max(10, big * 0.045);
    strip.style.setProperty("--big", `${big}px`);
    strip.style.setProperty("--small", `${small}px`);
    strip.style.setProperty("--gap", `${gap}px`);
  };

  // Every photo before the selected one is small, so its position is easy to work out.
  const place = () => {
    const x = strip.clientWidth / 2 - (active * (small * RATIO + gap) + (big * RATIO) / 2) + offset;
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
    const i = projects.indexOf(p);
    indexEl.textContent = `(${num(i)})`;
    titleEl.textContent = p.title;
    titleEl.style.color = accent(p);
    subEl.textContent = p.tag;
    countEl.textContent = `${num(i)} / ${String(n).padStart(2, "0")}`;
  };

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
  if (!reduceMotion && !returning) strip.parentElement.classList.add("arriving");

  // Moves on by itself until the first touch, hover, focus or button press.
  let touched = false;
  let visible = true;
  let timer = null;
  const SHOW_MS = 3500;
  const schedule = (delay = SHOW_MS) => {
    clearTimeout(timer);
    if (touched || reduceMotion) return;
    timer = setTimeout(() => {
      if (!touched && visible && !document.hidden) go(active + 1);
      schedule();
    }, delay);
  };
  const stop = () => { touched = true; clearTimeout(timer); };
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(strip);
  }
  schedule(returning ? SHOW_MS : SHOW_MS + 1200);
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
  strip.addEventListener("wheel", (e) => {
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

  document.getElementById("strip-next").addEventListener("click", () => { stop(); go(active + 1); });
  document.getElementById("strip-prev").addEventListener("click", () => { stop(); go(active - 1); });
  strip.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
    else if (e.key === "Enter") items[active].click();
  });
})();
