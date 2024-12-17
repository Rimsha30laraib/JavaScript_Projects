document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-link').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const skillsSection = document.getElementById('about-section');
        skillsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });

    document.getElementById('home-link').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const skillsSection = document.getElementById('home-section');
        skillsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });

    document.getElementById('contact-link').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const skillsSection = document.getElementById('contact-section');
        skillsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });

    document.getElementById('project-link').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const skillsSection = document.getElementById('project-section');
        skillsSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    });
});
