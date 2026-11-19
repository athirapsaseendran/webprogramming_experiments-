// Registration Form Validation

document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address";
        valid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password is required";
        valid = false;
    }
    else if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters";
        valid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password";
        valid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match";
        valid = false;
    }

    // Registration successful
    if (valid) {
        alert("Registration successful!");
        document.getElementById("registerForm").reset();
    }

});


// Login Form Validation

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let valid = true;

    // Clear previous errors
    document.getElementById("loginEmailError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("loginEmailError").textContent =
            "Email is required";
        valid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("loginEmailError").textContent =
            "Enter a valid email address";
        valid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("loginPasswordError").textContent =
            "Password is required";
        valid = false;
    }
    else if (password.length < 8) {
        document.getElementById("loginPasswordError").textContent =
            "Password must contain at least 8 characters";
        valid = false;
    }

    // Login successful
    if (valid) {
        alert("Login successful!");
        document.getElementById("loginForm").reset();
    }

});