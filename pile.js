// Homepage photo pile, next to the name: a stack of featured projects (`featured` in
// projects.js), each shown by its cover photo. Drag or swipe the top photo away to see
// the next one; it tucks in at the back of the pile. A tap opens the project (fade.js
// morphs the photo into the project page). Until someone touches it, the pile shuffles
// on its own every few seconds so visitors notice it moves.
(() => {
  const pile = document.getElementById("pile");
  if (!pile || typeof featured === "undefined") return;
  const items = featured.map((f) => projects.find((p) => p.folder === f)).filter(Boolean);
  if (!items.length) return;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const titleEl = document.getElementById("pile-title");
  const subEl = document.getElementById("pile-sub");
  const countEl = document.getElementById("pile-count");
  const caption = titleEl.parentElement;
  const TILTS = [-3, 4, -6, 2, 5, -2]; // each photo keeps its own slight tilt in the pile
  const OFFSETS = [[0, 0], [10, 8], [-12, 14], [6, 20]]; // [x, y] px for the top 4 layers
  const FLY_MS = 380;
  const accent = (p) => {
    const w = colorWorlds[p.folder];
    return w ? (w[1] === "#ffffff" ? w[0] : w[1]) : "";
  };

  const cards = items.map((p, i) => {
    const a = document.createElement("a");
    a.className = "pile-card";
    a.href = `project.html?p=${p.folder}`;
    a.dataset.folder = p.folder;
    a.draggable = false;
    a.style.setProperty("--tilt", `${TILTS[i % TILTS.length]}deg`);
    a.innerHTML = `<div class="pile-img"><img src="images/${p.folder}/${p.images[0]}" alt="${p.title}" draggable="false"></div>`;
    a.project = p;
    pile.appendChild(a);
    return a;
  });
  let order = cards.slice(); // order[0] is the top photo

  // Coming back from a project opened from the pile: put it on top again, so the photo
  // morphs back onto the pile (fade.js looks for it there).
  let returning = false;
  try {
    const last = sessionStorage.getItem("last-project");
    if (sessionStorage.getItem("last-source") === "pile" && /project\.html/.test(document.referrer)) {
      const k = order.findIndex((c) => c.dataset.folder === last);
      if (k > 0) order = order.slice(k).concat(order.slice(0, k));
      returning = k >= 0;
    }
  } catch (e) {}

  // Place every photo at its spot in the pile.
  const layout = () => {
    order.forEach((card, d) => {
      const [x, y] = OFFSETS[Math.min(d, OFFSETS.length - 1)];
      card.style.zIndex = String(order.length - d);
      card.style.transform = `translate(${x}px, ${y}px) rotate(calc(var(--tilt) * ${d ? 1 : 0.35}))`;
      const top = d === 0;
      card.classList.toggle("is-top", top);
      card.tabIndex = -1;
      card.setAttribute("aria-hidden", top ? "false" : "true");
      card.setAttribute("aria-label", `${card.project.title}: open project`);
    });
  };

  // The caption shows the photo that is (or is about to be) on top.
  let captionTimer = null;
  const updateCaption = (instant, p = order[0].project) => {
    const set = () => {
      titleEl.textContent = p.title;
      titleEl.style.color = accent(p);
      subEl.textContent = p.tag;
      countEl.textContent = `${items.indexOf(p) + 1} / ${items.length}`;
      caption.classList.remove("swap");
    };
    clearTimeout(captionTimer);
    if (instant || reduceMotion) return set();
    caption.classList.add("swap");
    captionTimer = setTimeout(set, 180);
  };

  layout();
  updateCaption(true);

  // Photos drop onto the pile one by one (bottom first, the top photo last).
  if (!reduceMotion && !returning) {
    order.slice().reverse().forEach((card, i) => {
      card.classList.add("dropping");
      card.style.animationDelay = `${450 + i * 110}ms`;
      card.addEventListener("animationend", () => {
        card.classList.remove("dropping");
        card.style.animationDelay = "";
      }, { once: true });
    });
  }

  // Send the top photo to the back: it flies out to one side (from wherever it was
  // dragged to), drops behind the others, and slides back into the pile.
  let busy = false;
  const next = (dir = 1) => {
    if (busy) return;
    busy = true;
    const card = order[0];
    card.classList.remove("dragging");
    card.style.transform = `translate(${dir * 115}%, -6%) rotate(${dir * 16}deg)`;
    setTimeout(() => {
      order.push(order.shift());
      card.style.zIndex = "0";
      void card.offsetWidth; // commit the new stacking before it slides back in
      layout();
      busy = false;
    }, reduceMotion ? 0 : FLY_MS);
    updateCaption(false, order[1 % order.length].project);
  };

  // Bring the back photo to the top: it slides out from under the pile, then on top.
  const prev = () => {
    if (busy) return;
    busy = true;
    const card = order[order.length - 1];
    card.style.transform = `translate(-115%, -6%) rotate(-16deg)`;
    setTimeout(() => {
      order.unshift(order.pop());
      card.style.zIndex = String(order.length + 1);
      void card.offsetWidth;
      layout();
      busy = false;
    }, reduceMotion ? 0 : FLY_MS);
    updateCaption(false, card.project);
  };

  // Auto-shuffle until the first touch, hover, focus or button press.
  let touched = false;
  let visible = true;
  let timer = null;
  const SHUFFLE_MS = 4000;
  const schedule = (delay = SHUFFLE_MS) => {
    clearTimeout(timer);
    if (touched || reduceMotion) return;
    timer = setTimeout(() => {
      if (!touched && visible && !document.hidden) next(1);
      schedule();
    }, delay);
  };
  const stop = () => { touched = true; clearTimeout(timer); };
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(pile);
  }
  schedule(returning ? SHUFFLE_MS : 450 + items.length * 110 + 900 + SHUFFLE_MS);
  pile.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") stop(); });
  pile.addEventListener("focusin", stop);

  // Dragging the top photo.
  let drag = null;
  let suppressClick = false;
  pile.addEventListener("pointerdown", (e) => {
    const card = e.target.closest(".pile-card");
    stop();
    if (!card || card !== order[0] || busy || e.button !== 0) return;
    drag = { card, id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, dy: 0, t: performance.now(), moved: false, vx: 0 };
    suppressClick = false;
  });
  pile.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) > 6) {
      drag.moved = true;
      drag.card.classList.add("dragging");
      try { drag.card.setPointerCapture(drag.id); } catch (err) {}
    }
    if (!drag.moved) return;
    const now = performance.now();
    drag.vx = (dx - drag.dx) / Math.max(1, now - drag.t);
    drag.dx = dx;
    drag.dy = dy;
    drag.t = now;
    drag.card.style.transform = `translate(${dx}px, ${dy * 0.35}px) rotate(${dx * 0.06}deg)`;
  });
  const endDrag = (e, cancelled) => {
    if (!drag || e.pointerId !== drag.id) return;
    const { card, moved, dx, vx } = drag;
    drag = null;
    if (!moved) return; // a tap: the link opens the project
    suppressClick = true;
    if (!cancelled && (Math.abs(dx) > 90 || (Math.abs(dx) > 40 && Math.abs(vx) > 0.6))) next(Math.sign(dx || vx));
    else { card.classList.remove("dragging"); layout(); } // spring back
  };
  pile.addEventListener("pointerup", (e) => endDrag(e, false));
  pile.addEventListener("pointercancel", (e) => endDrag(e, true));
  // A drag should not also open the project.
  pile.addEventListener("click", (e) => {
    if (suppressClick || busy) { e.preventDefault(); suppressClick = false; }
  });

  document.getElementById("pile-next").addEventListener("click", () => { stop(); next(1); });
  document.getElementById("pile-prev").addEventListener("click", () => { stop(); prev(); });
  pile.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    else if (e.key === "Enter") order[0].click();
  });
})();
