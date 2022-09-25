// burgerMenu in navbar
let burgerMenu = document.getElementById("burger_menu");
let burgerBtn = document.getElementById("burger_btn");

burgerBtn.addEventListener("click", function (e) {
  if (burgerMenu.style.display == "none") {
    burgerMenu.style.display = "flex";
} else {
        burgerMenu.style.display = "none";
  }
});
// hide menu onscroll
window.onscroll = function () {
  burgerMenu.style.display = "none";
};