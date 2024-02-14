document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.login-container form');

    form.addEventListener("submit", function(event) {
        event.preventDefault();  
        var usernameInput = document.querySelector('input[type="text"]');
        var passwordInput = document.querySelector('input[type="password"]');

        var username = usernameInput.value;
        var password = passwordInput.value;
        
        if (username === "yashdhadod" && password === "123") {
            window.history.back();
        } else {
            alert("Invalid username or password. Please try again.");
            usernameInput.value = '';
            passwordInput.value = '';
        }
    });
});
