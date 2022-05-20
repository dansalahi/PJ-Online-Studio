const menu = document.getElementById("menu");
const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");

menuOpenBtn.addEventListener("click", () => {
  menu.classList.add("menu--open");
  menu.style.transition = "all 0.3s ease-in-out";
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

window.addEventListener("resize", () => {
  menu.classList.remove("menu--open");
  menu.style.transition = "none";
});
