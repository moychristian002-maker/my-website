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
    // Hide a year heading when none of its projects match the filter.
    grid.querySelectorAll(".year-heading").forEach((heading) => {
      heading.hidden = !grid.querySelector(`.card[data-year="${heading.dataset.year}"]:not([hidden])`);
    });
  });
  filters.appendChild(b);
});

// Projects are listed by year, most recent first, each year under its own heading.
let lastYear = null;
projects.forEach((p) => {
  if (p.year && p.year !== lastYear) {
    lastYear = p.year;
    const heading = document.createElement("h3");
    heading.className = "year-heading";
    heading.dataset.year = p.year;
    heading.textContent = p.year;
    grid.appendChild(heading);
  }
  const card = document.createElement("a");
  card.className = "card";
  card.href = `project.html?p=${p.folder}`;
  card.dataset.category = p.category;
  card.dataset.folder = p.folder;
  card.dataset.year = p.year || "";
  const world = colorWorlds[p.folder];
  if (world) card.style.setProperty("--accent", world[1] === "#ffffff" ? world[0] : world[1]);
  card.innerHTML = `
    <div class="card-img"><img src="${src(p, p.images[0])}" alt="${p.title}" loading="lazy"></div>
    <h3>${p.title}</h3>
    <p>${p.tag}</p>`;
  grid.appendChild(card);
});

