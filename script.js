const pages = [...document.querySelectorAll(".page")];
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const pageCounter = document.getElementById("pageCounter");
let currentPage = 0;

function updateBook() {
  pages.forEach((page, index) => {
    const flipped = index < currentPage;
    page.classList.toggle("flipped", flipped);
    page.setAttribute("aria-label", `Portfolio page ${index + 1}${flipped ? ", turned" : ""}`);
  });

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length;
  pageCounter.textContent = currentPage === 0
    ? `Cover · 1 / ${pages.length}`
    : currentPage === pages.length
      ? `Back cover · ${pages.length} / ${pages.length}`
      : `Page ${currentPage + 1} / ${pages.length}`;
}

function nextPage() {
  if (currentPage < pages.length) {
    currentPage += 1;
    updateBook();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage -= 1;
    updateBook();
  }
}

nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", previousPage);

pages.forEach((page, index) => {
  page.addEventListener("click", (event) => {
    if (event.target.closest("a, button, input, textarea")) return;
    if (index >= currentPage) nextPage();
    else previousPage();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") nextPage();
  if (event.key === "ArrowLeft") previousPage();
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.getElementById("formStatus");
  if (!event.currentTarget.reportValidity()) return;
  status.textContent = "Thanks! This demo form is ready for backend integration.";
  event.currentTarget.reset();
});

updateBook();
