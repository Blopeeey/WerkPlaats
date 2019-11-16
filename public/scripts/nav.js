const nav = document.querySelector('nav');
const navLogo = document.getElementById('navlogo');
const navOptions = document.querySelectorAll('#navoption');
const hamburger = document.getElementById('hamburger');
let hamburgerClicked = false;
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY >= 50) {
        nav.style.backgroundColor = '#FFFFFF';
        navMenu.style.backgroundColor = '#FFFFFF';
        hamburger.style.backgroundImage = "url(\"images/hamburger-black.svg\")";
        navlogo.src = "images/logo-blacktext.png";
        for (i = 0; i < navOptions.length; ++i) {
            navOptions[i].style.color = "#000000";
        }
    } else {
        nav.style.backgroundColor = 'transparent';
        navMenu.style.backgroundColor = 'transparent';
        hamburger.style.backgroundImage = "url(\"images/hamburger-white.svg\")";
        navlogo.src = "images/logo.png";
        for (i = 0; i < navOptions.length; ++i) {
            navOptions[i].style.color = "#FFFFFF";
        }
    }
});

hamburger.addEventListener('click', function (event) {
    event.preventDefault();
    if (hamburgerClicked === false) {
        navMenu.style.display = "flex";
        hamburgerClicked = true;
    }
    else {
        navMenu.style.display = "none";
        hamburgerClicked = false;
    }
});

window.addEventListener('resize', function (event) {
    event.preventDefault();
    if (window.innerWidth >= 800) {
        navMenu.style.display = "flex";
    }
    else {
        navMenu.style.display = "none";
        hamburgerClicked = false;
    }
});