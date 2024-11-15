// Menu Icon Toggle
let menuIcon = document.querySelector('#menu-icon'); // Fixed typo
let navbar = document.querySelector('.navbar'); // Fixed typo

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Sticky Navbar & Scroll Sections Active Link
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu icon toggle and navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");
    const darkModeIcon = document.getElementById('darkMode-icon');
    darkModeIcon.addEventListener('click', () => {
        console.log("Dark mode icon clicked");
        document.body.classList.toggle('dark-mode');
    });
});
