
    const words = ["Full Stack", "Web Developer"];
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            const typingAnimation = document.getElementById("typing-animation");
            typingAnimation.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            const typingAnimation = document.getElementById("typing-animation");
            typingAnimation.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, 1000);
    });
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', () => {
            link.classList.add('highlighted');
            setTimeout(() => {
                link.classList.remove('highlighted');
            }, 1000); // Remove the highlight after 1 second (1000 milliseconds)
        });
    });
