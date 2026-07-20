// ======================================
// BISHTMOUNTAIN
// script.js
// ======================================

// Navbar background on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.backdropFilter = "blur(14px)";
        navbar.style.boxShadow = "none";

    }

});

// Smooth fade animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// Expedition card hover

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Active navigation link

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

console.log("✅ BishtMountain website loaded successfully.");
