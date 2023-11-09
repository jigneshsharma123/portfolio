document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Show the notification
    const notification = document.getElementById("notification");
    notification.textContent = "Work in Process";
    notification.style.display = "block";

    // Hide the notification after a few seconds (adjust as needed)
    setTimeout(function () {
        notification.style.display = "none";
    }, 3000); // Display for 3 seconds
});
