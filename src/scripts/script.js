window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".header__nav");
    const scrollPosition = window.scrollY;

    // Додаємо класи для десктопного меню
    if (scrollPosition > 60) {
        navbar.classList.add("navbar-dark");
    } else {
        navbar.classList.remove("navbar-dark");
    }

    // Додаємо класи для мобільного меню
    const mobNavbar = document.querySelector(".container__mob-menu");
    if (scrollPosition > 60) {
        mobNavbar.classList.add("navbar-dark");
    } else {
        mobNavbar.classList.remove("navbar-dark");
    }
});
// =============================================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    toggleMenu();
});

// Close mobile menu when clicking on a menu item
document.querySelectorAll(".header__link").forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

// Close mobile menu when clicking outside of it or on the menu itself
document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
    }
});

// Close mobile menu when clicking on the menu itself
navMenu.addEventListener("click", () => {
    closeMenu();
});

// Toggle menu function
function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Toggle aria-expanded attribute
    let menuOpen = navMenu.classList.contains("active");
    hamburger.setAttribute("aria-expanded", menuOpen);
}

// Close menu function
function closeMenu() {
    if (navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", false);
    }
}

// =============================================

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
    ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
});
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        zoom: {
            maxRatio: 2,
        },
        grabCursor: true,
        simulateTouch: true,
    });
});