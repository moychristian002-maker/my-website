// Small, quiet UI effects shared by both pages. Loaded last, after the cards
// (script.js) and galleries (project.js) exist and fade.js has restored the scroll.
//   1. Scroll reveal: things below the fold fade and rise in as they scroll into view.
//   2. Card hover (homepage): the page takes on the hovered project's color world.
(() => {
  const root = document.documentElement;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // 1. Scroll reveal --------------------------------------------------------
  // Anything already on screen is left alone, so the cover-photo morph from fade.js
  // always lands on a visible card and nothing blinks on load.
  if (!reduceMotion && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(
      ".card, .entry, .section-title, .article-label, .section-text, .article-gallery > button, .booklet"
    );
    const pending = new Set();
    // Items that arrive together (a row) get a small stagger, left to right, top to bottom.
    const show = (els) => {
      els
        .map((el) => [el, el.getBoundingClientRect()])
        .sort(([, a], [, b]) => a.top - b.top || a.left - b.left)
        .forEach(([el], i) => {
          pending.delete(el);
          observer.unobserve(el);
          el.style.transitionDelay = `${Math.min(i, 5) * 80}ms`;
          el.classList.add("is-visible");
          // Once in place, drop the reveal styles so hover effects respond instantly.
          el.addEventListener("transitionend", () => {
            el.classList.remove("reveal", "is-visible");
            el.style.transitionDelay = "";
          }, { once: true });
        });
    };
    const observer = new IntersectionObserver((entries) => {
      show(entries.filter((e) => e.isIntersecting).map((e) => e.target));
    }, { threshold: 0.12 });

    // Backup for big jumps (anchor links, fast scrolling): anything on screen shows.
    let queued = false;
    const sweep = () => {
      queued = false;
      show([...pending].filter((el) => {
        const r = el.getBoundingClientRect();
        return r.top < innerHeight && r.bottom > 0;
      }));
      if (!pending.size) removeEventListener("scroll", onScroll);
    };
    const onScroll = () => { if (!queued) { queued = true; setTimeout(sweep, 60); } };

    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add("reveal");
      pending.add(el);
      observer.observe(el);
    });
    if (pending.size) addEventListener("scroll", onScroll, { passive: true });
  }

  // 2. Card hover: preview the project's color world -------------------------
  // Uses the same --page-bg / --page-ink variables as fade.js, so clicking flows
  // straight into the page transition.
  if (finePointer && typeof colorWorlds !== "undefined") {
    const HOME = ["#ffffff", "#000000"];
    let timer = null;
    const paint = ([bg, ink]) => {
      root.style.setProperty("--page-bg", bg);
      root.style.setProperty("--page-ink", ink);
    };
    document.querySelectorAll(".card").forEach((card) => {
      const world = colorWorlds[card.dataset.folder];
      if (!world) return;
      card.addEventListener("mouseenter", () => {
        clearTimeout(timer);
        root.classList.add("tinting");
        paint(world);
      });
      card.addEventListener("mouseleave", () => {
        timer = setTimeout(() => {
          root.classList.remove("tinting");
          paint(HOME);
        }, 150);
      });
    });
  }
})();
