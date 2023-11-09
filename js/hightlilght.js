document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".highlightable");

    // Function to highlight the current section
    function highlightSection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                    if (navLink.getAttribute("href").substring(1) === targetId) {
                        navLink.classList.add("active");
                    }
                });
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(highlightSection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
    });

    // Observe each section
    sections.forEach((section) => {
        observer.observe(section);
    });

    // Handle click events
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});