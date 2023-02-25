window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header__nav");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 60) {
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
  }
});
