const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.classList.toggle("open");
  if (modal.classList.contains("open")) {
    // Only if the modal is fading in
    body.classList.add("no-scroll");
  }
});

overlay.addEventListener("transitionend", () => {
  if (!modal.classList.contains("open")) {
    // Only if the modal is fading out
    body.classList.remove("no-scroll");
  }
});
