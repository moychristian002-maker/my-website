// Project article page: project.html?p=<folder>. Data comes from projects.js.
const slug = new URLSearchParams(location.search).get("p");
const pos = Math.max(0, projects.findIndex((p) => p.folder === slug));
const p = projects[pos];
const [bg, ink] = colorWorlds[p.folder] || ["#ffffff", "#000000"];
const src = (file) => `images/${p.folder}/${file}`;
const caption = (file) => (p.captions || {})[file] || "";
const tileLabel = (file) => (p.labels || {})[file] || "";
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
groups.forEach(([label, files, text, style]) => {
  if (!files.length && !text) return;
  const heading = document.createElement("h2");
  heading.className = "article-label";
  heading.textContent = label;
  sections.appendChild(heading);
  // Optional words for the section (paragraphs split by a blank line, line breaks kept).
  if (text) {
    const body = document.createElement("div");
    body.className = style ? `section-text ${style}` : "section-text";
    text.split("\n\n").forEach((para) => {
      const el = document.createElement("p");
      el.textContent = para;
      body.appendChild(el);
    });
    sections.appendChild(body);
  }
  // Two columns; with an odd count, the last photo sits centered on its own row below.
  // Pairs of cropped photos share the square grid. A pair that includes an uncropped
  // image (a drawing, logo or board, or any photo in a "natural" project) becomes one
  // row of equal height instead, so photos of different shapes still line up.
  const isWhole = (file) => p.fit === "natural" || (p.crop || {})[file] === "whole";
  const paired = files.length % 2 ? files.slice(0, -1) : files;
  const last = files.length % 2 ? files.slice(-1) : [];
  const rows = [];
  for (let k = 0; k < paired.length; k += 2) {
    const pair = paired.slice(k, k + 2);
    const row = pair.some(isWhole);
    const prev = rows[rows.length - 1];
    if (!row && prev && !prev.row) prev.files.push(...pair); // keep square pairs in one grid
    else rows.push({ files: pair, row });
  }
  if (last.length) rows.push({ files: last, single: true });
  rows.forEach(({ files: group, row, single }) => {
    const natural = row || (single && p.fit === "natural");
    const gallery = document.createElement("div");
    gallery.className = single ? "article-gallery single" : "article-gallery";
    if (natural) gallery.classList.add("natural", single ? "natural-single" : "natural-row");
    group.forEach((file) => {
      const i = p.images.indexOf(file);
      const b = document.createElement("button");
      const crop = (p.crop || {})[file];
      if (isWhole(file)) b.classList.add("whole");
      const media = isVideo(file)
        ? `<video src="${src(file)}" poster="${poster(file)}" muted loop autoplay playsinline preload="metadata" aria-label="${p.title}, video ${i + 1}"></video>`
        : `<img src="${src(file)}" alt="${p.title}, image ${i + 1}" loading="lazy">`;
      b.innerHTML = `${media}${tileLabel(file) ? `<span class="tile-label">${tileLabel(file)}</span>` : ""}${caption(file) ? `<span class="caption">${caption(file)}</span>` : ""}`;
      if (crop && crop !== "whole") b.firstElementChild.style.objectPosition = crop;
      if (natural) {
        // Width in the row is proportional to the photo's shape, so heights match.
        const el = b.firstElementChild;
        const fit = (w, h) => { if (w && h) { b.style.flexGrow = w / h; el.style.aspectRatio = `${w} / ${h}`; } };
        if (isVideo(file)) el.addEventListener("loadedmetadata", () => fit(el.videoWidth, el.videoHeight));
        else if (el.complete) fit(el.naturalWidth, el.naturalHeight);
        else el.addEventListener("load", () => fit(el.naturalWidth, el.naturalHeight));
      }
      b.addEventListener("click", () => openAt(i));
      gallery.appendChild(b);
    });
    sections.appendChild(gallery);
  });
});
document.querySelector(".article-hero").addEventListener("click", () => openAt(0));

// Booklet: a project's original presentation at the end of the page, shown as an open
// book. Each image is a two-page spread; a portrait image (the cover) is a single page
// on the right. Turning flips one page over the spine: the right page going forward,
// the left page going back. Turn with the arrows, by clicking the left or right page,
// with the arrow keys, or by swiping.
if (p.booklet) {
  const files = p.booklet;
  const wrap = document.createElement("section");
  wrap.className = "booklet";
  wrap.innerHTML = `
    <h2 class="article-label">the booklet</h2>
    <div class="booklet-stage" tabindex="0" role="region" aria-label="Booklet: use the arrow keys to turn pages">
      <div class="booklet-half l"></div>
      <div class="booklet-half r"></div>
    </div>
    <div class="booklet-controls">
      <button class="booklet-prev" aria-label="Previous page">&lsaquo;</button>
      <span class="booklet-count"></span>
      <button class="booklet-next" aria-label="Next page">&rsaquo;</button>
    </div>`;
  sections.appendChild(wrap);

  const stage = wrap.querySelector(".booklet-stage");
  const left = wrap.querySelector(".booklet-half.l");
  const right = wrap.querySelector(".booklet-half.r");
  const count = wrap.querySelector(".booklet-count");
  const prevBtn = wrap.querySelector(".booklet-prev");
  const nextBtn = wrap.querySelector(".booklet-next");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const single = files.map(() => false);
  let at = 0;
  let busy = false;

  // Paint one side of a spread onto an element (empty for the blank side of a single page).
  const paint = (el, i, side) => {
    const blank = single[i] && side === "l";
    el.classList.toggle("filled", !blank);
    el.style.backgroundImage = blank ? "" : `url("${src(files[i])}")`;
    el.style.backgroundSize = single[i] ? "100% 100%" : "200% 100%";
    el.style.backgroundPosition = side === "l" ? "left center" : "right center";
  };
  const show = (i) => { paint(left, i, "l"); paint(right, i, "r"); };
  const status = () => {
    count.textContent = `${at + 1} / ${files.length}`;
    prevBtn.disabled = at === 0;
    nextBtn.disabled = at === files.length - 1;
  };

  const turn = (dir) => {
    const to = at + dir;
    if (busy || to < 0 || to >= files.length) return;
    const from = at;
    at = to;
    status();
    if (still) { show(to); return; }
    busy = true;
    // The page that turns: front shows where we are, back shows where we land.
    const leaf = document.createElement("div");
    leaf.className = `booklet-leaf ${dir > 0 ? "forward" : "back"}`;
    leaf.innerHTML = `<div class="front"></div><div class="back"></div>`;
    if (dir > 0) {
      paint(leaf.firstChild, from, "r");
      paint(leaf.lastChild, to, "l");
      paint(right, to, "r"); // revealed under the turning page
    } else {
      paint(leaf.firstChild, from, "l");
      paint(leaf.lastChild, to, "r");
      paint(left, to, "l");
    }
    stage.appendChild(leaf);
    leaf.addEventListener("animationend", () => { show(to); leaf.remove(); busy = false; }, { once: true });
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

  // Load every page up front (they're small) to learn which are single pages.
  Promise.all(files.map((f, i) => new Promise((done) => {
    const img = new Image();
    img.onload = () => { single[i] = img.naturalWidth < img.naturalHeight; done(); };
    img.onerror = done;
    img.src = src(f);
  }))).then(() => { show(at); status(); });
  status();
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
  lbCaption.textContent = tileLabel(p.images[index]) || caption(p.images[index]);
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
