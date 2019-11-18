import { hamburger, navMenu } from "./globalvars.js";
let hamburgerClicked = false; // whether the hamburger menu is active or not

/*
* activate/deactivate hamburger menu on click
*/
hamburger.addEventListener('click', function (event) {
    event.preventDefault();
    if (hamburgerClicked === false) {
        navMenu.classList.add("navmenu--visible");
        navMenu.classList.remove("navmenu--invisible");
        hamburgerClicked = true;
    }
    else {
        navMenu.classList.add("navmenu--invisible");
        navMenu.classList.remove("navmenu--visible");
        hamburgerClicked = false;
    }
});

/*
* activate/deactivate hamburger menu on window resize
*/
window.addEventListener('resize', function (event) {
    event.preventDefault();
    if (window.innerWidth >= 1000) {
        navMenu.classList.add("navmenu--visible");
        navMenu.classList.remove("navmenu--invisible");
    }
    else {
        navMenu.classList.add("navmenu--invisible");
        navMenu.classList.remove("navmenu--visible");
        hamburgerClicked = false;
    }
});

/*
* determine if the navigation menu should be shown on load
*/
window.addEventListener('load', function (event) {
    event.preventDefault();
    if (window.innerWidth >= 1000) {
        navMenu.classList.add("navmenu--visible");
        navMenu.classList.remove("navmenu--invisible");
    }
    else {
        navMenu.classList.add("navmenu--invisible");
        navMenu.classList.remove("navmenu--visible");
        hamburgerClicked = false;
    }
});