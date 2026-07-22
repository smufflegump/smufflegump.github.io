/**
    Author: Sierra Dalton
    File: script.js
    Date: 07/22/2026
**/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Update copyright year dynamically in the footer
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Sierra Dalton. All rights reserved.`;
    }

    // 2. Client-side form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const fullName = document.getElementById('fullName').value.trim();
            const userEmail = document.getElementById('userEmail').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!fullName || !userEmail || !message) {
                event.preventDefault();
                alert('Please fill out all required fields before submitting.');
                return;
            }

            // Simple email format check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(userEmail)) {
                event.preventDefault();
                alert('Please enter a valid email address.');
                return;
            }

            // Success feedback mock
            event.preventDefault();
            alert('Thank you for your message! Your form has been successfully simulated.');
            contactForm.reset();
        });
    }
});