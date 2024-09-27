const openMenuButton = document.querySelector(".open-menu-btn");
const backdropMenu = document.querySelector(".backdrop-menu");
const documentBody = document.querySelector("body");
const closeMenuButton = document.querySelector(".close-menu-btn");

openMenuButton.addEventListener("click", openMenu);

function openMenu() {
  closeMenuButton.addEventListener("click", closeMenu);
  backdropMenu.addEventListener("click", onBackdropClick);
  window.addEventListener("keydown", onEscKeyPress);
  backdropMenu.classList.add("is-open");
  documentBody.classList.add("modal-open");
}

function closeMenu() {
  closeMenuButton.removeEventListener("click", closeMenu);
  backdropMenu.removeEventListener("click", onBackdropClick);
  window.removeEventListener("keydown", onEscKeyPress);
  backdropMenu.classList.remove("is-open");
  documentBody.classList.remove("modal-open");
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    closeMenu();
  }
}

function onEscKeyPress(evt) {
  if (evt.code === "Escape") {
    closeMenu();
  }
}
