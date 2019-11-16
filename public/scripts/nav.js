const nav = document.querySelector('nav'); // whole nav element
const navLogo = document.getElementById('navlogo'); // navigation logo
const navOptions = document.querySelectorAll('#navoption'); // array of navigation options
const hamburger = document.getElementById('hamburger'); // hamburger menu icon
let hamburgerClicked = false; // whether the hamburger menu is active or not
const navMenu = document.getElementById('navMenu'); // container for the navigation options

/*
* change navigation colour on scroll
*/
window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY >= 50) {
        nav.classList.add("nav-scrolled");
        nav.classList.remove("nav-nonscrolled");

        navMenu.classList.add("navmenu-scrolled");
        navMenu.classList.remove("navmenu-nonscrolled");

        hamburger.classList.add("hamburger-scrolled");
        hamburger.classList.remove("hamburger-nonscrolled");

        navlogo.src = "images/logo-blacktext.png";
        for (i = 0; i < navOptions.length; ++i) {
            navOptions[i].classList.add("navoption-scrolled");
            navOptions[i].classList.remove("navoption-nonscrolled");
        }
    } else {
        nav.classList.add("nav-nonscrolled");
        nav.classList.remove("nav-scrolled");

        navMenu.classList.add("navmenu-nonscrolled");
        navMenu.classList.remove("navmenu-scrolled");

        hamburger.classList.add("hamburger-nonscrolled");
        hamburger.classList.remove("hamburger-scrolled");

        navlogo.src = "images/logo.png";
        for (i = 0; i < navOptions.length; ++i) {
            navOptions[i].classList.add("navoption-nonscrolled");
            navOptions[i].classList.remove("navoption-scrolled");
        }
    }
});

/*
* activate/deactivate hamburger menu on click
*/
hamburger.addEventListener('click', function (event) {
    event.preventDefault();
    if (hamburgerClicked === false) {
        navMenu.classList.add("navmenu-visible");
        navMenu.classList.remove("navmenu-invisible");
        hamburgerClicked = true;
    }
    else {
        navMenu.classList.add("navmenu-invisible");
        navMenu.classList.remove("navmenu-visible");
        hamburgerClicked = false;
    }
});

/*
* activate/deactivate hamburger menu on resize
*/
window.addEventListener('resize', function (event) {
    event.preventDefault();
    if (window.innerWidth >= 800) {
        navMenu.classList.add("navmenu-visible");
        navMenu.classList.remove("navmenu-invisible");
    }
    else {
        navMenu.classList.add("navmenu-invisible");
        navMenu.classList.remove("navmenu-visible");
        hamburgerClicked = false;
    }
});