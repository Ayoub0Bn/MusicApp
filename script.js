// script.js
let scrolling = false; // Flag to track if auto-scrolling is active

function autoScroll() {
    const scrollStep = 1;
    const delay = 50;

    if (scrolling) {
        window.scrollBy(0, scrollStep);

        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            window.scrollTo(0, 0);
        }

        setTimeout(autoScroll, delay);
    }
}

// Toggle auto-scrolling on button click
const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', function () {
    scrolling = !scrolling; // Toggle scrolling flag
    if (scrolling) {
        autoScroll();
    }
});

// Start auto-scrolling from the top when the page loads
window.onload = function () {
    autoScroll();
};

