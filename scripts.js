document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll('.medical-icon');

    icons.forEach(icon => {
        // Randomize the position of the icons across the entire screen
        const topPosition = Math.random() * 90 + '%'; // Between 0% and 90%
        const leftPosition = Math.random() * 90 + '%'; // Between 0% and 90%

        icon.style.top = topPosition;
        icon.style.left = leftPosition;

        // Randomize the rotation of the icons
        const rotation = Math.random() * 360; // Between 0 and 360 degrees
        icon.style.transform = `rotate(${rotation}deg)`;
    });
});
// Function to check for screen sharing
function detectScreenSharing() {
    setInterval(() => {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        const screenWidth = screen.width;
        const screenHeight = screen.height;

        // If the browser dimensions change drastically, it could indicate screen sharing
        if (currentWidth < screenWidth || currentHeight < screenHeight) {
            alert("Screen sharing detected! Closing the app.");
            window.location.href = "about:blank"; // Redirect to a blank page
        }
    }, 1000); // Check every second
}

