// script.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 70,
            behavior: 'smooth'
        });
    }
}

// Email form handling
const emailForm = document.getElementById('emailForm');
const emailStatus = document.getElementById('emailStatus');

emailForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simulate email sending (in a real app, this would send to a server)
    // For demo purposes, we'll just show a success message
    setTimeout(() => {
        emailStatus.innerHTML = 'Message sent successfully! We will get back to you soon.';
        emailStatus.className = 'success';
        emailForm.reset();
        
        // Clear status message after 5 seconds
        setTimeout(() => {
            emailStatus.innerHTML = '';
            emailStatus.className = '';
        }, 5000);
    }, 1000);
});

// Handle window scroll for navigation highlighting
window.addEventListener('scroll', function() {
    const sections = ['home', 'about', 'services', 'products', 'contact'];
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            
            if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
            }
        }
    });
});

// Initialize active link on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set home as active by default
    document.querySelector('.nav-link[href="#home"]').classList.add('active');
});