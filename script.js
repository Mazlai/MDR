document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.en-savoir-plus').addEventListener('click', function() {
        document.querySelector('#presentation').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    mobileMenu.addEventListener('click', function() {
        mainNav.classList.toggle('show');
    });
});