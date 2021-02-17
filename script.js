const nav = document.querySelector(".nav");
const title = document.querySelector(".nav .container h1 a");
const menu = document.querySelectorAll(".nav ul li a");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if(window.pageYOffset > nav.offsetHeight + 150) {
    nav.classList.add("super-nav");
    title.classList.add("super-nav");
    menu.forEach(element => {
      element.classList.add("super-nav");
    });
  } else {
    nav.classList.remove("super-nav");
    title.classList.remove("super-nav");
    menu.forEach(element => {
      element.classList.remove("super-nav");
    });
  }
}