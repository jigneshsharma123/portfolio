const skillItems = document.querySelectorAll('.skills-list li');

skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.3}s`;
});