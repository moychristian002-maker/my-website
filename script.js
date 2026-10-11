// To add a project: put its images in images/<folder>/ and add an entry here.
// The first image in the list is used as the cover.
const projects = [
  {
    title: "Custom Basketball",
    tag: "Product Design · Hand Painting",
    folder: "custom-basketball",
    images: ["img-1567.jpg", "img-0945.jpg", "img-1568.jpg", "img-1571.jpg", "img-1573.jpg"],
  },
  {
    title: "Custom Totes",
    tag: "Product Design · Merchandise",
    folder: "custom-totes",
    images: ["dsc02234.jpg", "img-2167.jpg", "img-2169.jpg", "img-2172.jpg", "img-2173.jpg"],
  },
  {
    title: "Dickies Workshop",
    tag: "Apparel · Workshop",
    folder: "dickies-workshop",
    images: ["img-1364.jpg", "img-1366.jpg", "img-1374.jpg", "img-4699.jpg"],
  },
  {
    title: "ArcStart: Basswood Model",
    tag: "Architecture · University of Michigan",
    folder: "arcstart-basswood",
    images: ["img-7796.jpg", "img-7797.jpg", "img-7798.jpg", "img-7799.jpg", "img-7800.jpg", "img-7801.jpg", "img-7802.jpg"],
  },
  {
    title: "Handwritten Typography",
    tag: "Typography · Custom Typeface",
    folder: "handwritten-typography",
    images: ["handwritten-typography1.jpg", "handwritten-typography2.jpg"],
  },
  {
    title: "Sports Photography",
    tag: "Photography",
    folder: "photography-sports",
    images: ["0p1a4392.jpg", "0p1a4399.jpg", "0p1a4414.jpg", "0p1a4435.jpg", "0p1a4551.jpg", "0p1a4563.jpg"],
  },
  {
    title: "Seven Sisters",
    tag: "Photography · England",
    folder: "photography-seven-sisters",
    images: [
      "20251007-140406000-ios.jpg", "20251007-141413000-ios.jpg", "20251007-163238000-ios.jpg",
      "20251007-163312000-ios.jpg", "20251007-163825000-ios.jpg", "20251007-164105000-ios.jpg",
      "20251007-164112000-ios.jpg",
    ],
  },
];

const grid = document.getElementById("project-grid");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCaption = document.getElementById("lb-caption");
let current = null;
let index = 0;

const src = (p, file) => `images/${p.folder}/${file}`;

projects.forEach((p) => {
  const card = document.createElement("button");
  card.className = "card";
  card.innerHTML = `
    <div class="card-img"><img src="${src(p, p.images[0])}" alt="${p.title}" loading="lazy"></div>
    <h3>${p.title}</h3>
    <p>${p.tag}</p>`;
  card.addEventListener("click", () => open(p));
  grid.appendChild(card);
});

function open(p) {
  current = p;
  index = 0;
  show();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function close() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function show() {
  lbImg.src = src(current, current.images[index]);
  lbImg.alt = `${current.title}, image ${index + 1}`;
  lbCaption.textContent = `${current.title} — ${index + 1} / ${current.images.length}`;
}

function step(n) {
  index = (index + n + current.images.length) % current.images.length;
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
