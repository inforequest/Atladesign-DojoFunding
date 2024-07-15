document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var navMenu = document.getElementById('navMenu');
    var bodyContent = document.querySelectorAll('body > *:not(.header)');
    var closeMenu = document.getElementById('closeMenu');

    hamburgerMenu.addEventListener('click', function() {
        if (navMenu.classList.contains('show')) {
            closeMenu.style.display = 'none'; // Hide the close menu button
            hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
            navMenu.classList.remove('show');
            bodyContent.forEach(function(element) {
                element.classList.remove('blur');
            });
        } else {
            hamburgerMenu.style.display = 'none'; // Hide the hamburger menu button
            closeMenu.style.display = 'block'; // Show the close menu button
            navMenu.classList.add('show');
            bodyContent.forEach(function(element) {
                element.classList.add('blur');
            });
        }
    });

    closeMenu.addEventListener('click', function() {
        closeMenu.style.display = 'none'; // Hide the close menu button
        hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
        navMenu.classList.remove('show');
        bodyContent.forEach(function(element) {
            element.classList.remove('blur');
        });
    });

    navMenu.addEventListener('click', function() {
        closeMenu.style.display = 'none'; // Hide the close menu button
        hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
        navMenu.classList.remove('show');
        bodyContent.forEach(function(element) {
            element.classList.remove('blur');
        });
    });

    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu.style.display = 'none'; // Hide the close menu button
            hamburgerMenu.style.display = 'block'; // Show the hamburger menu button
            navMenu.classList.remove('show');
            bodyContent.forEach(function(element) {
                element.classList.remove('blur');
            });
        });
    });
});