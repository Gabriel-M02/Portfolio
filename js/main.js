// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===============================
// ACTIVE PAGE HIGHLIGHT
// ===============================
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#38bdf8";
    }
});

// ===============================
// SMOOTH SCROLL (Future Ready)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
