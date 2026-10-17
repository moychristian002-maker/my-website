// Color fade between pages. Each page has a color world: white for the homepage,
// the project's own colors for a project page. On leaving, the content fades out
// and the background fades to the next page's color; the next page starts in that
// color and fades its content back in. The head of each page applies the stored color
// before the first paint, so nothing flashes.
const FADE_MS = 600;
const HOME = ["#ffffff", "#000000"];
const root = document.documentElement;

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

// Arrive: fade from the stored color (if any) to this page's color, then show the content.
function arrive() {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    paint(colorsFor(new URL(location.href)));
    root.classList.remove("entering", "leaving");
  }));
}
arrive();
try { sessionStorage.removeItem("page-fade"); } catch (e) {}

// Coming back with the browser's back button restores the page as it was left.
addEventListener("pageshow", (e) => { if (e.persisted) arrive(); });

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href]");
  if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if (link.target === "_blank" || link.hasAttribute("download")) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || !/(index|project)\.html$|\/$/.test(url.pathname)) return;
  if (url.pathname === location.pathname && url.search === location.search) return; // same-page anchor
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  e.preventDefault();
  const colors = colorsFor(url);
  try { sessionStorage.setItem("page-fade", JSON.stringify(colors)); } catch (err) {}
  root.classList.add("leaving");
  paint(colors);
  setTimeout(() => { location.href = url.href; }, FADE_MS);
});
