// Initialize SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800, // Adjust the speed as needed
    speedAsDuration: true
});

// Get the button
var scrollBtn = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
scrollBtn.addEventListener("click", function() {
    scroll.animateScroll(0);
});
