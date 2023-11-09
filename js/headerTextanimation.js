document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const typingAnimation = document.getElementById("typing-animation");
    const textToType = " Full Stack Web Developer";
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingAnimation.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Adjust the typing speed as needed
        }
    }

    typeText();
});