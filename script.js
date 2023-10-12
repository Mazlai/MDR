document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.en-savoir-plus').addEventListener('click', function() {
        document.querySelector('#presentation').scrollIntoView({ behavior: 'smooth' });
    });
});