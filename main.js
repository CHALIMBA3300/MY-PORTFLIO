"use strict";
// Set a dynamic greeting based on the time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement)
        return;
    const hour = new Date().getHours();
    let greeting = 'Hello';
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
    const form = document.querySelector('.contact-form');
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
    const screenshots = document.querySelectorAll('.screenshot');
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            // Replace with your modal logic
            alert('Screenshot modal would open here.');
        });
    });
}
// Scroll fade-in effect for sections
// (Removed duplicate implementation of enableScrollFade)
// Toggle the mobile nav menu open/closed and close it on link click
function enableMobileNavToggle() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!navToggle || !navMenu)
        return;
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    setGreeting();
    handleContactFormSubmission();
    enableScreenshotModal();
    enableMobileNavToggle();
    // Theme toggle switch logic
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode', themeSwitch.checked);
        });
        themeSwitch.checked = document.body.classList.contains('dark-mode');
    }
    // Enable scroll fade-in
    enableScrollFade();
});
// Adds a scroll fade-in effect to elements with the 'scroll-fade' class
function enableScrollFade() {
    const fadeEls = document.querySelectorAll('.scroll-fade');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
}
