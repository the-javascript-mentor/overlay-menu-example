const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("open");
});
