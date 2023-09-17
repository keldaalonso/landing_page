// Add a "current" class to the currently selected item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(item => item.classList.remove('current'));
        this.classList.add('current');
    });
});
