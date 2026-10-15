// Project article page: project.html?p=<folder>. Data comes from projects.js.
const slug = new URLSearchParams(location.search).get("p");
const pos = Math.max(0, projects.findIndex((p) => p.folder === slug));
const p = projects[pos];
const [bg, ink] = colorWorlds[p.folder] || ["#ffffff", "#000000"];
const src = (file) => `images/${p.folder}/${file}`;

// The page takes on the project's color world.
document.body.style.setProperty("--page-bg", bg);
document.body.style.setProperty("--page-ink", ink);
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

// Remaining images become the process gallery; each opens full-size.
const gallery = document.getElementById("gallery");
const rest = p.images.slice(1);
if (!rest.length) document.getElementById("process-label").hidden = true;
rest.forEach((file, i) => {
  const b = document.createElement("button");
  b.innerHTML = `<img src="${src(file)}" alt="${p.title}, image ${i + 2}" loading="lazy">`;
  b.addEventListener("click", () => openAt(i + 1));
  gallery.appendChild(b);
});
document.querySelector(".article-hero").addEventListener("click", () => openAt(0));

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
const lbCount = document.getElementById("lb-count");
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
  document.body.style.overflow = "";
}

function show() {
  lbImg.src = src(p.images[index]);
  lbImg.alt = `${p.title}, image ${index + 1}`;
  lbCount.textContent = `${index + 1} / ${p.images.length}`;
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
