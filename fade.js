// Page transitions. Each page has a color world: white for the homepage, the project's
// own colors for a project page.
//
// In browsers with cross-document View Transitions (Chrome, Edge, Safari 18.2+), the
// clicked project's cover photo grows from its homepage card into the project page's
// cover (and shrinks back on the way home), while the rest of the page crossfades.
// Other browsers get a color fade: the content fades out, the background fades to the
// next page's color, and the next page fades in. The head of each page applies the
// stored color before the first paint, so nothing flashes.
const FADE_MS = 600;
const HOME = ["#f4f3ee", "#000000"];
const root = document.documentElement;
const morph = "PageRevealEvent" in window;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const onProjectPage = /project\.html$/.test(location.pathname);

function colorsFor(url) {
  if (!/project\.html$/.test(url.pathname)) return HOME;
  const slug = url.searchParams.get("p");
  const folder = projects.some((p) => p.folder === slug) ? slug : projects[0].folder;
  return colorWorlds[folder] || HOME;
}

function paint([bg, ink]) {
  root.style.setProperty("--page-bg", bg);
  root.style.setProperty("--page-ink", ink);
}

// The one element that morphs between pages carries the name "hero".
function nameHero(el) {
  document.querySelectorAll("[data-hero]").forEach((n) => { n.style.viewTransitionName = ""; delete n.dataset.hero; });
  if (el) { el.style.viewTransitionName = "hero"; el.dataset.hero = ""; }
}
const cardImg = (folder) => document.querySelector(`.card[data-folder="${CSS.escape(folder || "")}"] .card-img`);
// A project opened from the homepage filmstrip (strip.js) returns to the strip, not its grid card.
const stripImg = (folder) => document.querySelector(`.strip-item.is-active[data-folder="${CSS.escape(folder || "")}"] .strip-img`);

if (morph) {
  // The crossfade handles color, so the page takes its colors at once.
  root.classList.add("instant");
  paint(colorsFor(new URL(location.href)));
  root.classList.remove("entering", "leaving");
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("instant")));

  if (onProjectPage) {
    nameHero(document.getElementById("hero-img"));
    try { sessionStorage.setItem("last-project", new URL(location.href).searchParams.get("p")); } catch (e) {}
    document.querySelector(".back").addEventListener("click", () => {
      try { sessionStorage.setItem("back-to-work", "1"); } catch (e) {}
    });
  } else {
    // Arriving home from a project by a link: reopen the homepage where it was left
    // (or at the linked section), instantly, so the cover photo lands on a card that
    // is already in place. The back button restores the position by itself.
    let folder = null, y = null, back = null, fromStrip = false;
    try {
      folder = sessionStorage.getItem("last-project");
      y = sessionStorage.getItem("home-scroll");
      back = sessionStorage.getItem("back-to-work");
      fromStrip = sessionStorage.getItem("last-source") === "strip";
      sessionStorage.removeItem("back-to-work");
    } catch (e) {}
    const target = (fromStrip && stripImg(folder)) || cardImg(folder);
    const onStrip = !!target && target.classList.contains("strip-img");
    const nav = performance.getEntriesByType("navigation")[0];
    if (nav && nav.type === "navigate" && /project\.html/.test(document.referrer)) {
      root.style.scrollBehavior = "auto";
      const anchor = location.hash && document.querySelector(location.hash);
      if (anchor) anchor.scrollIntoView();
      else if (back) {
        if (y !== null) scrollTo(0, +y);
        // After previous/next, the last project may be another card; bring it into view.
        const r = !onStrip && target && target.getBoundingClientRect();
        if (r && (r.top < 0 || r.bottom > innerHeight)) target.scrollIntoView({ block: "center" });
      }
      requestAnimationFrame(() => requestAnimationFrame(() => { root.style.scrollBehavior = ""; }));
    }
    // The card the photo returns to should not wait on lazy loading.
    if (target) target.querySelector("img").loading = "eager";

    addEventListener("pagereveal", (e) => {
      if (!e.viewTransition || !folder) return;
      nameHero(target);
      e.viewTransition.finished.finally(() => nameHero(null));
    });
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card, .strip-item");
    if (!card || e.defaultPrevented) return; // a drag on the strip, or picking a small photo, is not an open
    const fromStrip = card.classList.contains("strip-item");
    nameHero(card.querySelector(fromStrip ? ".strip-img" : ".card-img"));
    try {
      sessionStorage.setItem("home-scroll", String(scrollY));
      sessionStorage.setItem("last-source", fromStrip ? "strip" : "grid");
    } catch (err) {}
  });
} else {
  // Color fade fallback.
  const arrive = () => requestAnimationFrame(() => requestAnimationFrame(() => {
    paint(colorsFor(new URL(location.href)));
    root.classList.remove("entering", "leaving");
  }));
  arrive();
  addEventListener("pageshow", (e) => { if (e.persisted) arrive(); });

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href]");
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (link.target === "_blank" || link.hasAttribute("download")) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !/(index|project)\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.search === location.search) return; // same-page anchor
    if (reduceMotion) return;

    e.preventDefault();
    const colors = colorsFor(url);
    try { sessionStorage.setItem("page-fade", JSON.stringify(colors)); } catch (err) {}
    root.classList.add("leaving");
    paint(colors);
    setTimeout(() => { location.href = url.href; }, FADE_MS);
  });
}
try { sessionStorage.removeItem("page-fade"); } catch (e) {}
