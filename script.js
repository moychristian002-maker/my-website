// To add a project: put its images in images/<folder>/ and add an entry here.
// The first image in the list is used as the cover. `category` must match a filter below.
const categories = ["Apparel & Objects", "Architecture", "Graphic & Interaction", "Photography"];

const projects = [
  {
    title: "Britpop in the Streets",
    tag: "Design Perspectives · Design in London Exhibition",
    category: "Apparel & Objects",
    folder: "design-perspectives-britpop-jeans",
    images: [
      "20251016-131807414-ios.jpg", "20251016-131807173-ios.jpg", "design-perspectives-exhibition.jpg", "pants.jpg",
      "20251015-162148581-ios.jpg", "20251015-213942165-ios.jpg", "20251016-025705095-ios.jpg",
      "20251016-025707684-ios.jpg", "20251016-130604196-ios.jpg", "20251016-130609928-ios.jpg",
      "20251016-130616885-ios.jpg", "20251015-132707498-ios.jpg",
    ],
  },
  {
    title: "Olivia Dean Shirt",
    tag: "Apparel · Hand Embroidery",
    category: "Apparel & Objects",
    folder: "olivia-dean-shirt",
    images: [
      "img-3009.jpg", "img-2849.jpg", "img-2829.jpg", "img-2835.jpg", "img-2841.jpg",
      "img-2842.jpg", "img-2857.jpg", "img-2924.jpg", "dsc04701.jpg",
    ],
  },
  {
    title: "Custom Denim Jacket",
    tag: "Apparel · Hand Painting",
    category: "Apparel & Objects",
    folder: "custom-denim",
    images: ["img-1658.jpg", "img-1659.jpg", "img-1660.jpg", "img-1661.jpg", "img-0955.jpg"],
  },
  {
    title: "Senior Shirt",
    tag: "Apparel · Appliqué & Embroidery",
    category: "Apparel & Objects",
    folder: "senior-shirt",
    images: [
      "20260831-214656384-ios.jpg", "20260831-214611147-ios.jpg", "20260831-214726736-ios.jpg",
      "20260831-033155072-ios.jpg", "20260831-033207602-ios.jpg", "20260831-033215446-ios.jpg",
      "20260831-033228773-ios.jpg",
    ],
  },
  {
    title: "Custom Basketball",
    tag: "Product Design · Hand Painting",
    category: "Apparel & Objects",
    folder: "custom-basketball",
    images: ["img-1567.jpg", "img-0945.jpg", "img-1568.jpg", "img-1571.jpg", "img-1573.jpg"],
  },
  {
    title: "Custom Totes",
    tag: "Product Design · Merchandise",
    category: "Apparel & Objects",
    folder: "custom-totes",
    images: [
      "dsc02234.jpg", "img-2166.jpg", "img-2167.jpg", "img-2168.jpg", "img-2169.jpg",
      "img-2170.jpg", "img-2171.jpg", "img-2172.jpg", "img-2173.jpg",
    ],
  },
  {
    title: "Custom Shirt",
    tag: "Dickies 247 Workshop",
    category: "Apparel & Objects",
    folder: "dickies-workshop",
    images: ["img-1364.jpg", "img-1366.jpg", "img-1374.jpg", "img-4699.jpg"],
  },
  {
    title: "Pavilion",
    tag: "Architecture · Model & Axonometric",
    category: "Architecture",
    folder: "architecture-pavilion",
    images: [
      "img-5254.jpg", "img-5257.jpg", "60cd3d24-203b-40f4-8562-266551f4b4f1.jpg",
      "0f388bec-a149-4c7e-88c0-a62f68e508a5.jpg",
    ],
  },
  {
    title: "Cube",
    tag: "Architecture · Model & Drawings",
    category: "Architecture",
    folder: "architecture-cube",
    images: [
      "img-5200.jpg", "cube-frame.jpg", "img-5173.jpg", "oblique-01.jpg", "elevation-1-3-01.jpg",
      "elevation-2-4-01.jpg", "section-plan-1-01.jpg", "section-plan-2-01.jpg",
    ],
  },
  {
    title: "Basswood Model",
    tag: "University of Michigan · ArcStart",
    category: "Architecture",
    folder: "arcstart-basswood",
    images: [
      "img-7796.jpg", "img-7793.jpg", "img-7797.jpg", "img-7798.jpg", "img-7799.jpg",
      "img-7800.jpg", "img-7801.jpg", "img-7802.jpg",
    ],
  },
  {
    title: "ArcStart: 3D Forms",
    tag: "Architecture · Isometric & Concept",
    category: "Architecture",
    folder: "arcstart-3d-forms",
    images: [
      "forms-02.jpg", "forms-01.jpg", "forms-03.jpg", "forms-04.jpg", "forms-06.jpg",
      "forms-07.jpg", "forms-08.jpg", "forms-09.jpg", "isometric-01.jpg", "isometric-02.jpg",
    ],
  },
  {
    title: "CineSense",
    tag: "Designing Interactive Experiences · UX",
    category: "Graphic & Interaction",
    folder: "designing-interactive-experiences",
    images: [
      "cinesense.jpg", "general-user-journey-map-1.jpg", "bsl-cinema.jpg", "companion.jpg",
      "haptic.jpg", "img-1659.jpg", "img-1660.jpg", "img-1661.jpg",
    ],
  },
  {
    title: "Husky Volleyball Graphics",
    tag: "Graphic Design · Northeastern Athletics",
    category: "Graphic & Interaction",
    folder: "graphics-volleyball",
    images: [
      "foggy-windowgraphic.jpg", "callaway-thirdsgraphicjim13746.jpg", "daniels-thirdsgraphicjim14619.jpg",
      "king-thirdjim14226.jpg", "meirelles-thirdsgraphicjim14204.jpg",
    ],
  },
  {
    title: "Ukrainian Melodies",
    tag: "Graphic Design · Poster Series",
    category: "Graphic & Interaction",
    folder: "graphics-ukrainian-melodies",
    images: [
      "20261013-164409000-ios.jpg", "20261013-163845580-ios.jpg", "20261013-163846071-ios.jpg",
      "20261013-163847681-ios.jpg", "20261013-163848022-ios.jpg",
    ],
  },
  {
    title: "Dawn of the Mourning Son",
    tag: "Graphic Design · Theater Poster",
    category: "Graphic & Interaction",
    folder: "graphics",
    images: ["dawn-of-the-mourning-son.jpg"],
  },
  {
    title: "Handwritten Typography",
    tag: "Typography · Custom Typeface",
    category: "Graphic & Interaction",
    folder: "handwritten-typography",
    images: ["handwritten-typography1.jpg", "handwritten-typography2.jpg"],
  },
  {
    title: "TEDxNortheasternLDN",
    tag: "Event Design · 22 ft. Sign",
    category: "Graphic & Interaction",
    folder: "tedx",
    images: ["copy-of-img-5242.jpg", "copy-of-img-5299.jpg"],
  },
  {
    title: "The Basics of Volley",
    tag: "Northeastern Women’s Volleyball",
    category: "Photography",
    folder: "photography-sports",
    images: [
      "0p1a4392.jpg", "0p1a4399.jpg", "0p1a4414.jpg", "0p1a4435.jpg", "0p1a4551.jpg", "0p1a4563.jpg",
      "20260926-171918000-ios.jpg", "20260926-175621000-ios.jpg", "20260926-180555000-ios.jpg",
      "20260926-181336000-ios.jpg", "20260926-185303000-ios.jpg", "20260926-193210000-ios.jpg",
      "20260926-223622000-ios.jpg", "20260926-223640000-ios.jpg",
    ],
  },
  {
    title: "The Art of Flânerie",
    tag: "ARTF1110 Making Things",
    category: "Photography",
    folder: "making-things-flanerie",
    images: [
      "flanerie-06.jpg", "flanerie-01.jpg", "flanerie-02.jpg", "flanerie-03.jpg", "flanerie-04.jpg",
      "flanerie-05.jpg", "flanerie-07.jpg", "flanerie-08.jpg", "flanerie-09.jpg", "flanerie-10.jpg",
      "flanerie-11.jpg", "flanerie-12.jpg",
    ],
  },
  {
    title: "Seven Sisters Cliffs",
    tag: "Taken on Sony Cybershot",
    category: "Photography",
    folder: "photography-seven-sisters",
    images: [
      "20251007-140406000-ios.jpg", "20251007-141413000-ios.jpg", "20251007-163238000-ios.jpg",
      "20251007-163312000-ios.jpg", "20251007-163825000-ios.jpg", "20251007-164105000-ios.jpg",
      "20251007-164112000-ios.jpg",
    ],
  },
];

// Each project's "color world" (gallery background, text color), pulled from its own palette.
// Projects not listed here fall back to the black & white base.
const colorWorlds = {
  "design-perspectives-britpop-jeans": ["#eff2f7", "#c4161c"],
  "olivia-dean-shirt": ["#f4efe6", "#2b2b2b"],
  "custom-denim": ["#dde5ee", "#2c4a6e"],
  "senior-shirt": ["#eef1ea", "#3f6b4a"],
  "custom-basketball": ["#f4e7da", "#a8481a"],
  "custom-totes": ["#f4eee2", "#4a6d8c"],
  "dickies-workshop": ["#57260f", "#dba66c"],
  "architecture-pavilion": ["#ece6da", "#6e5530"],
  "architecture-cube": ["#111111", "#d9c9a3"],
  "arcstart-basswood": ["#f1ede6", "#5a4a38"],
  "arcstart-3d-forms": ["#e9e5ee", "#6b3f8c"],
  "designing-interactive-experiences": ["#0b0b10", "#a58cff"],
  "graphics-volleyball": ["#c41414", "#ffffff"],
  "graphics-ukrainian-melodies": ["#f3ecd9", "#1f4e8c"],
  "graphics": ["#2d2a35", "#f2a679"],
  "tedx": ["#111111", "#e62b1e"],
  "photography-sports": ["#c41414", "#ffffff"],
  "making-things-flanerie": ["#eceee6", "#3d4a1f"],
  "photography-seven-sisters": ["#2b2b2b", "#f5d9b5"],
};

const grid = document.getElementById("project-grid");
const filters = document.getElementById("filters");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbTitle = document.getElementById("lb-title");
const lbSub = document.getElementById("lb-sub");
const lbCount = document.getElementById("lb-count");
let current = null;
let index = 0;

const src = (p, file) => `images/${p.folder}/${file}`;

["All", ...categories].forEach((c, i) => {
  const b = document.createElement("button");
  b.textContent = c;
  b.className = i === 0 ? "active" : "";
  b.addEventListener("click", () => {
    filters.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    grid.querySelectorAll(".card").forEach((card) => {
      card.hidden = c !== "All" && card.dataset.category !== c;
    });
  });
  filters.appendChild(b);
});

projects.forEach((p) => {
  const card = document.createElement("button");
  card.className = "card";
  card.dataset.category = p.category;
  const world = colorWorlds[p.folder];
  if (world) card.style.setProperty("--accent", world[1] === "#ffffff" ? world[0] : world[1]);
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
  const [bg, ink] = colorWorlds[p.folder] || ["#ffffff", "#000000"];
  lightbox.style.setProperty("--lb-bg", bg);
  lightbox.style.setProperty("--lb-ink", ink);
  lbTitle.textContent = p.title;
  lbSub.textContent = p.tag;
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
  lbCount.textContent = `${index + 1} / ${current.images.length}`;
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
