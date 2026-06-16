// Set a dynamic greeting based on the time of day
function setGreeting() {
    var greetingElement = document.getElementById('greeting');
    if (!greetingElement)
        return;
    var hour = new Date().getHours();
    var greeting = 'Hello';
    if (hour < 12) {
        greeting = 'Good morning';
    }
    else if (hour < 18) {
        greeting = 'Good afternoon';
    }
    else {
        greeting = 'Good evening';
    }
    greetingElement.textContent = greeting + '!';
}
// Handle contact form submission with a thank you alert
function handleContactFormSubmission() {
    var form = document.querySelector('.contact-form');
    if (!form)
        return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        form.reset();
    });
}
// Enable modal for UI/UX project screenshots
function enableScreenshotModal() {
    // Example implementation: open modal when screenshot is clicked
    var screenshots = document.querySelectorAll('.screenshot');
    screenshots.forEach(function (screenshot) {
        screenshot.addEventListener('click', function () {
            // Replace with your modal logic
            alert('Screenshot modal would open here.');
        });
    });
}
// Scroll fade-in effect for sections
// (Removed duplicate implementation of enableScrollFade)
document.addEventListener('DOMContentLoaded', function () {
    setGreeting();
    handleContactFormSubmission();
    enableScreenshotModal();
    // Theme toggle switch logic
    var themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode', themeSwitch.checked);
        });
        themeSwitch.checked = document.body.classList.contains('dark-mode');
    }
    // Enable scroll fade-in
    enableScrollFade();
});
// Adds a scroll fade-in effect to elements with the 'fade-in' class
function enableScrollFade() {
    var fadeEls = document.querySelectorAll('.scroll-fade');
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeEls.forEach(function (el) { return observer.observe(el); });
}
