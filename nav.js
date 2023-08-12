const menu = document.querySelector(".fa-bars");
const navigasi = document.querySelector(".nav");
const close = document.querySelector(".fa-x");

menu.addEventListener("click", function () {
  navigasi.style.zIndex = 2;
});

close.addEventListener("click", function () {
  navigasi.style.zIndex = -9999;
});
