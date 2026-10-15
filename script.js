// Homepage: builds the filter buttons and the project grid. Project data lives in projects.js.
const grid = document.getElementById("project-grid");
const filters = document.getElementById("filters");

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
  const card = document.createElement("a");
  card.className = "card";
  card.href = `project.html?p=${p.folder}`;
  card.dataset.category = p.category;
  const world = colorWorlds[p.folder];
  if (world) card.style.setProperty("--accent", world[1] === "#ffffff" ? world[0] : world[1]);
  card.innerHTML = `
    <div class="card-img"><img src="${src(p, p.images[0])}" alt="${p.title}" loading="lazy"></div>
    <h3>${p.title}</h3>
    <p>${p.tag}</p>`;
  grid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
