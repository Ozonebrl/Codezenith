const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form from submitting
    const popup = document.getElementById("popup");
    popup.style.display = "flex";  // Show popup
});

// Close the popup when the "X" button is clicked
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";  // Hide popup
});

// Close the popup when clicking outside of the popup content
window.addEventListener("click", function (event) {
    const popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";  // Hide popup if clicked outside
    }
});
