document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.login-container form');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get username and password values from the input fields
        var usernameInput = document.querySelector('input[type="text"]');
        var passwordInput = document.querySelector('input[type="password"]');

        var username = usernameInput.value;
        var password = passwordInput.value;

        // Check if username and password are correct
        if (username === "yashdhadod" && password === "123") {
            window.history.back();
        } else {
            alert("Invalid username or password. Please try again.");
            // Clear the input fields
            usernameInput.value = '';
            passwordInput.value = '';
        }
    });
});
