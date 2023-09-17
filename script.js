// Add a "current" class to the currently selected item
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(item => item.classList.remove('current'));
        this.classList.add('current');
    });
});

// JavaScript function to toggle button styles and show/hide the form
function toggleButtonStylesAndForm(button) {
    const buttons = document.querySelectorAll('.btn-login, .btn-register');
    const registrationForm = document.getElementById('registration-container');
    
    buttons.forEach((btn) => {
        if (btn !== button) {
            btn.classList.remove('btn-active');
        }
    });
    
    button.classList.toggle('btn-active');
    
    // Toggle the visibility of the registration form
    if (button.classList.contains('btn-active')) {
        registrationForm.style.display = 'block';
    } else {
        registrationForm.style.display = 'none';
    }
}

// Add click event listeners to the buttons
const loginButton = document.querySelector('.btn-login');
const registerButton = document.querySelector('.btn-register');

if (loginButton && registerButton) {
    loginButton.addEventListener('click', function() {
        toggleButtonStylesAndForm(this);
    });

    registerButton.addEventListener('click', function() {
        toggleButtonStylesAndForm(this);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdownPlaceholder = document.querySelector(".dropdown-placeholder");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownPlaceholder.addEventListener("click", function () {
      this.parentElement.classList.toggle("active");
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
  
    // Close the dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!dropdownPlaceholder.contains(event.target)) {
        dropdownContent.style.display = "none";
        dropdownPlaceholder.parentElement.classList.remove("active");
      }
    });
  });
  

