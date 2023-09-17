// Add a "current" class to the currently selected item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(item => item.classList.remove('current'));
        this.classList.add('current');
    });
});

// JavaScript function to toggle button styles
function toggleButtonStyles(button) {
    const buttons = document.querySelectorAll('.btn-login, .btn-register');
    
    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove('btn-active');
        }
    });
    
    button.classList.toggle('btn-active');
}

// Add click event listeners to the buttons
const loginButton = document.querySelector('.btn-login');
const registerButton = document.querySelector('.btn-register');

if (loginButton && registerButton) {
    loginButton.addEventListener('click', function() {
        toggleButtonStyles(this);
    });

    registerButton.addEventListener('click', function() {
        toggleButtonStyles(this);
    });
}

