document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.en-savoir-plus').addEventListener('click', function() {
        document.querySelector('#presentation').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobile-menu').addEventListener('click', function() {
        document.getElementById('main-nav').classList.toggle('show');
    });
});