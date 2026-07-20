// =========================
// BISHTMOUNTAIN
// script.js
// =========================

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10,10,10,0.90)";
        navbar.style.padding = "14px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "none";
    }

});

// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });

        }

    });

});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// Current year in footer (optional)
const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {
    footer.innerHTML = `© ${year} BishtMountain. All Rights Reserved.`;
}

// Simple card hover animation
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "
