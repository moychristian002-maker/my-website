// Small, quiet UI effects shared by both pages. Loaded last, after the cards
// (script.js) and galleries (project.js) exist and fade.js has restored the scroll.
//   1. Scroll reveal: things below the fold fade and rise in as they scroll into view.
//   2. Card hover (homepage): the page takes on the hovered project's color world.
//   3. Title letters: the homepage name and project titles rise in letter by letter.
//   4. Text lines: under a project title, the subtitle, write-up and details rise in line by line.
//   5. Hero lines: on the homepage, the credential and contact links rise in after the name.
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
    const HOME = ["#f4f3ee", "#000000"];
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

  // 3. Title letters ---------------------------------------------------------
  let titleStart = 0; // when the title letters began, so the text below can follow them
  // The homepage name and each project title: letters rise in one after another
  // from behind the baseline, once on load. Screen readers get the plain title.
  if (!reduceMotion) {
    document.querySelectorAll(".hero h1, #title").forEach((h) => {
      const text = h.textContent.trim();
      if (!text) return;
      h.setAttribute("aria-label", text);
      h.textContent = "";
      let i = 0;
      text.split(/\s+/).forEach((word, w) => {
        if (w) h.append(" ");
        const wordEl = document.createElement("span");
        wordEl.className = "word";
        wordEl.setAttribute("aria-hidden", "true");
        [...word].forEach((letter) => {
          const c = document.createElement("span");
          c.className = "char";
          c.textContent = letter;
          c.style.setProperty("--i", i++);
          wordEl.appendChild(c);
        });
        h.appendChild(wordEl);
      });
      h.classList.add("split");
      titleStart = performance.now();
    });
  }

  // 4. Text lines --------------------------------------------------------------
  // Under a project title, the subtitle, write-up and details rise in line by line
  // (the title's motion, per line). Lines are found at the current width once the
  // fonts are ready; when the last one lands, the blocks get their plain text back
  // so they reflow normally on resize and read normally for copy and screen readers.
  const subtitle = document.getElementById("subtitle");
  if (!reduceMotion && subtitle && subtitle.textContent.trim()) {
    const AFTER_TITLE = 750; // ms after the title letters are created (they start at 450ms)
    const STAGGER = 60;  // ms between lines
    const MAX_STEPS = 14; // later lines share the last delay, so long write-ups don't drag
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const timeout = new Promise((done) => setTimeout(() => done("late"), 600));

    Promise.race([fontsReady, timeout]).then((result) => {
      if (result === "late") return; // the existing fade shows the text instead
      const base = Math.max(0, titleStart + AFTER_TITLE - performance.now());
      const blocks = [];
      let n = 0;

      const line = (html) => {
        const outer = document.createElement("span");
        outer.className = "line";
        const inner = document.createElement("span");
        inner.className = "line-in";
        inner.innerHTML = html;
        inner.style.animationDelay = `${base + Math.min(n++, MAX_STEPS) * STAGGER}ms`;
        outer.appendChild(inner);
        return outer;
      };

      // Split plain text into the lines it actually wraps to.
      const splitText = (el) => {
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words.map((w) => `<span class="w">${w.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span>`).join(" ");
        const rows = [];
        el.querySelectorAll(".w").forEach((w) => {
          const top = w.offsetTop;
          const last = rows[rows.length - 1];
          if (last && Math.abs(last.top - top) < 4) last.words.push(w.innerHTML);
          else rows.push({ top, words: [w.innerHTML] });
        });
        el.textContent = "";
        rows.forEach((r) => el.appendChild(line(r.words.join(" "))));
      };

      const keep = (el) => { blocks.push([el, el.innerHTML]); el.classList.add("split-lines"); };

      keep(subtitle);
      splitText(subtitle);
      const body = document.getElementById("body");
      body.classList.add("split-lines");
      body.querySelectorAll("p").forEach((para) => { keep(para); splitText(para); });

      // Details: each "course / professor / materials" row is already one line.
      const details = document.getElementById("details");
      if (details && !details.hidden && details.children.length) {
        keep(details);
        const rows = [];
        for (let el = details.firstElementChild; el; el = el.nextElementSibling) {
          if (el.tagName === "DT") rows.push([el.textContent, ""]);
          else if (el.tagName === "DD" && rows.length) rows[rows.length - 1][1] = el.textContent;
        }
        details.textContent = "";
        const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
        rows.forEach(([term, value]) => details.appendChild(line(`<span class="dt">${esc(term)}</span><span class="dd">${esc(value)}</span>`)));
      }

      // Hand back the plain text once the last line has landed. A timer backs this up,
      // so the text can never stay hidden behind its mask if an animation stalls.
      let restored = false;
      const restore = () => {
        if (restored) return;
        restored = true;
        blocks.forEach(([el, html]) => { el.innerHTML = html; });
      };
      const all = document.querySelectorAll(".line-in");
      const lastLine = all[all.length - 1];
      if (lastLine) lastLine.addEventListener("animationend", restore, { once: true });
      setTimeout(restore, base + Math.min(n, MAX_STEPS) * STAGGER + 800 + 700);
    });
  }

  // 5. Hero lines ----------------------------------------------------------------
  // On the homepage, the credential under the name and then the contact links rise in
  // line by line, right after the name's letters. The original markup comes back once
  // they land, so the links behave normally.
  const credential = document.querySelector(".hero .credential");
  const contact = document.querySelector(".hero .hero-contact");
  if (!reduceMotion && credential) {
    const START = Math.max(0, titleStart + 600 - performance.now()); // the name starts at 150ms
    const STAGGER = 120;
    const saved = [[credential, credential.innerHTML]];
    let n = 0;
    const wrap = (html) => {
      const outer = document.createElement("span");
      outer.className = "line";
      const inner = document.createElement("span");
      inner.className = "line-in";
      inner.innerHTML = html;
      inner.style.animationDelay = `${START + n++ * STAGGER}ms`;
      outer.appendChild(inner);
      return outer;
    };
    const lines = credential.innerHTML.split(/<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean);
    credential.textContent = "";
    lines.forEach((html) => credential.appendChild(wrap(html)));
    if (contact) {
      saved.push([contact, contact.outerHTML]);
      const row = wrap("");
      contact.replaceWith(row);
      row.firstChild.appendChild(contact);
      row.classList.add("hero-contact-line");
    }
    let restored = false;
    const restore = () => {
      if (restored) return;
      restored = true;
      credential.innerHTML = saved[0][1];
      const row = document.querySelector(".hero-contact-line");
      if (row && contact) row.replaceWith(contact);
    };
    const last = document.querySelectorAll(".hero .line-in");
    if (last.length) last[last.length - 1].addEventListener("animationend", restore, { once: true });
    setTimeout(restore, START + n * STAGGER + 800 + 700);
  }
})();
