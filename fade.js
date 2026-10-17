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
const HOME = ["#ffffff", "#000000"];
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

if (morph) {
  // The crossfade handles color, so the page takes its colors at once.
  root.classList.add("instant");
  paint(colorsFor(new URL(location.href)));
  root.classList.remove("entering", "leaving");
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("instant")));

  if (onProjectPage) {
    nameHero(document.getElementById("hero-img"));
    try { sessionStorage.setItem("last-project", new URL(location.href).searchParams.get("p")); } catch (e) {}
  } else {
    // Arriving home from a project: its card is where the cover photo shrinks back to.
    addEventListener("pagereveal", (e) => {
      let folder = null;
      try { folder = sessionStorage.getItem("last-project"); } catch (err) {}
      if (!e.viewTransition || !folder) return;
      nameHero(cardImg(folder));
      e.viewTransition.finished.finally(() => nameHero(null));
    });
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) nameHero(card.querySelector(".card-img"));
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
