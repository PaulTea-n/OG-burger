window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header__nav");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 60) {
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
  }
});

// =============================================

// Отримайте всі посилання навігації
const navLinks = document.querySelectorAll("nav a");

// Переберіть всі розділи на сторінці
document.querySelectorAll("section").forEach((section) => {
  // Отримайте верхню границю розділу
  const sectionTop = section.offsetTop - 50;

  // При скролі до верхньої границі розділу
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= sectionTop) {
      // Отримайте ідентифікатор розділу
      const id = section.getAttribute("id");

      // Видаліть клас active з усіх посилань навігації
      navLinks.forEach((link) => link.classList.remove("active"));

      // Додайте клас active до посилання з відповідним ідентифікатором
      document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
    }
  });
});
