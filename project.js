// Project article page: project.html?p=<folder>. Data comes from projects.js.
const slug = new URLSearchParams(location.search).get("p");
const pos = Math.max(0, projects.findIndex((p) => p.folder === slug));
const p = projects[pos];
const [bg, ink] = colorWorlds[p.folder] || ["#ffffff", "#000000"];
const src = (file) => `images/${p.folder}/${file}`;
const caption = (file) => (p.captions || {})[file] || "";
// Videos (.mp4) play silently on a loop in the gallery, like moving photos; each has a
// matching "-poster.jpg" still that shows while it loads.
const isVideo = (file) => /\.mp4$/i.test(file);
const poster = (file) => src(file.replace(/\.mp4$/i, "-poster.jpg"));

// The page takes on the project's color world (applied with a fade by fade.js).
document.title = `${p.title} — Christian Moy`;

document.getElementById("hero-img").src = src(p.images[0]);
document.getElementById("hero-img").alt = p.title;
document.getElementById("title").textContent = p.title;
document.getElementById("subtitle").textContent = p.tag;

const body = document.getElementById("body");
(descriptions[p.folder] || "").split("\n\n").filter(Boolean).forEach((para) => {
  const el = document.createElement("p");
  el.textContent = para;
  body.appendChild(el);
});

// Optional facts (course, professor, materials), shown as a short list under the write-up.
const details = document.getElementById("details");
(p.details || []).forEach(([term, value]) => {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = term;
  dd.textContent = value;
  details.append(dt, dd);
});
if (p.details) details.hidden = false;

// Remaining images become the gallery; each opens full-size. A project can split
// them into labeled `sections` (e.g. process vs. the finished piece).
const sections = document.getElementById("sections");
const groups = p.sections || [["process & details", p.images.slice(1)]];
groups.forEach(([label, files]) => {
  if (!files.length) return;
  const heading = document.createElement("h2");
  heading.className = "article-label";
  heading.textContent = label;
  sections.appendChild(heading);
  // Two columns; with an odd count, the last photo sits centered on its own row below.
  const paired = files.length % 2 ? files.slice(0, -1) : files;
  const last = files.length % 2 ? files.slice(-1) : [];
  [paired, last].forEach((group, n) => {
    if (!group.length) return;
    const gallery = document.createElement("div");
    gallery.className = n ? "article-gallery single" : "article-gallery";
    group.forEach((file) => {
      const i = p.images.indexOf(file);
      const b = document.createElement("button");
      const crop = (p.crop || {})[file];
      if (crop === "whole") b.classList.add("whole");
      const media = isVideo(file)
        ? `<video src="${src(file)}" poster="${poster(file)}" muted loop autoplay playsinline preload="metadata" aria-label="${p.title}, video ${i + 1}"></video>`
        : `<img src="${src(file)}" alt="${p.title}, image ${i + 1}" loading="lazy">`;
      b.innerHTML = `${media}${caption(file) ? `<span class="caption">${caption(file)}</span>` : ""}`;
      if (crop && crop !== "whole") b.firstElementChild.style.objectPosition = crop;
      b.addEventListener("click", () => openAt(i));
      gallery.appendChild(b);
    });
    sections.appendChild(gallery);
  });
});
document.querySelector(".article-hero").addEventListener("click", () => openAt(0));

// Booklet: a project's original presentation at the end of the page, one page at a
// time. Turn pages with the arrows, by clicking the left or right half of the page,
// with the arrow keys, or by swiping.
if (p.booklet) {
  const pages = p.booklet;
  const wrap = document.createElement("section");
  wrap.className = "booklet";
  wrap.innerHTML = `
    <h2 class="article-label">the booklet</h2>
    <div class="booklet-stage" tabindex="0" role="region" aria-label="Booklet: use the arrow keys to turn pages">
      <img class="booklet-page" alt="">
    </div>
    <div class="booklet-controls">
      <button class="booklet-prev" aria-label="Previous page">&lsaquo;</button>
      <span class="booklet-count"></span>
      <button class="booklet-next" aria-label="Next page">&rsaquo;</button>
    </div>`;
  sections.appendChild(wrap);

  const stage = wrap.querySelector(".booklet-stage");
  const page = wrap.querySelector(".booklet-page");
  const count = wrap.querySelector(".booklet-count");
  const prevBtn = wrap.querySelector(".booklet-prev");
  const nextBtn = wrap.querySelector(".booklet-next");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let at = 0;
  let busy = false;

  const render = () => {
    page.src = src(pages[at]);
    page.alt = `${p.title}, booklet page ${at + 1}`;
    count.textContent = `${at + 1} / ${pages.length}`;
    prevBtn.disabled = at === 0;
    nextBtn.disabled = at === pages.length - 1;
  };

  // The old page stays on top as a copy and swings away, revealing the new one.
  const turn = (dir) => {
    const to = at + dir;
    if (busy || to < 0 || to >= pages.length) return;
    if (still) { at = to; render(); return; }
    busy = true;
    const leaf = page.cloneNode();
    leaf.className = `booklet-leaf ${dir > 0 ? "forward" : "back"}`;
    stage.appendChild(leaf);
    at = to;
    render();
    leaf.addEventListener("animationend", () => { leaf.remove(); busy = false; }, { once: true });
  };

  prevBtn.addEventListener("click", () => turn(-1));
  nextBtn.addEventListener("click", () => turn(1));
  stage.addEventListener("click", (e) => {
    const r = stage.getBoundingClientRect();
    turn(e.clientX - r.left < r.width / 2 ? -1 : 1);
  });
  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); turn(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); turn(-1); }
  });
  let touchX = null;
  stage.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) turn(dx < 0 ? 1 : -1);
    touchX = null;
  });

  render();
  // Load the rest of the pages once the booklet is near, so turning is instant.
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    pages.forEach((f) => { new Image().src = src(f); });
    obs.disconnect();
  }, { rootMargin: "600px" }).observe(stage);
}

// Previous / next project links.
const prev = projects[(pos - 1 + projects.length) % projects.length];
const next = projects[(pos + 1) % projects.length];
const prevLink = document.getElementById("prev-link");
const nextLink = document.getElementById("next-link");
prevLink.href = `project.html?p=${prev.folder}`;
prevLink.innerHTML = `<span>previous</span>${prev.title}`;
nextLink.href = `project.html?p=${next.folder}`;
nextLink.innerHTML = `<span>next</span>${next.title}`;

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbVideo = document.getElementById("lb-video");
const lbCount = document.getElementById("lb-count");
const lbCaption = document.getElementById("lb-caption");
lightbox.style.setProperty("--lb-bg", bg);
lightbox.style.setProperty("--lb-ink", ink);
let index = 0;

function openAt(i) {
  index = i;
  show();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function close() {
  lightbox.hidden = true;
  lbVideo.pause();
  document.body.style.overflow = "";
}

function show() {
  const file = p.images[index];
  const video = isVideo(file);
  lbImg.hidden = video;
  lbVideo.hidden = !video;
  if (video) {
    lbVideo.poster = poster(file);
    lbVideo.src = src(file);
    lbVideo.play().catch(() => {});
  } else {
    lbVideo.pause();
    lbVideo.removeAttribute("src");
    lbImg.src = src(file);
    lbImg.alt = `${p.title}, image ${index + 1}`;
  }
  lbCount.textContent = `${index + 1} / ${p.images.length}`;
  lbCaption.textContent = caption(p.images[index]);
}

function step(n) {
  index = (index + n + p.images.length) % p.images.length;
  show();
}

lightbox.querySelector(".lb-close").addEventListener("click", close);
lightbox.querySelector(".lb-prev").addEventListener("click", () => step(-1));
lightbox.querySelector(".lb-next").addEventListener("click", () => step(1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

document.getElementById("year").textContent = new Date().getFullYear();
