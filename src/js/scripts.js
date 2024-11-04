/*!
 * Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
 * Copyright 2013-2024 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    // Tambahkan kode untuk navbar transparan di sini
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY === 0) {
            // Ketika di paling atas
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("navbar-solid");
        } else {
            // Ketika di-scroll
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("navbar-solid");
        }
    });

    // Set initial state
    const navbar = document.querySelector(".navbar");
    if (window.scrollY === 0) {
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-solid");
    }
});
