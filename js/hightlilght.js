const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach((navLink, index) => {
        navLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior (scrolling to the section)

            // Remove the 'highlighted' class from all sections and links
            sections.forEach((section) => {
                section.classList.remove('highlighted');
            });
            navLinks.forEach((link) => {
                link.classList.remove('highlighted');
            });

            // Add the 'highlighted' class to the clicked link and corresponding section
            navLink.classList.add('highlighted');
            sections[index].classList.add('highlighted');

            setTimeout(() => {
                navLink.classList.remove('highlighted');
                sections[index].classList.remove('highlighted');
            }, 1000); // Remove the highlight after 1 second (adjust as needed)
        });
    });