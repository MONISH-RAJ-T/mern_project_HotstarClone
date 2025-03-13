document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create a user object
    const user = {
        name: name,
        email: email,
        password: password,
    };

    // Save user data to local storage
    const isSignupSuccessful = saveUser(user);

    // If signup is successful, redirect to login page
    if (isSignupSuccessful) {
        alert("Signup successful! Redirecting to login page...");

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000); // 2000 milliseconds = 2 seconds
    }
});

// Function to save user data to local storage
function saveUser(user) {
    // Get existing users from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const isEmailRegistered = users.some((u) => u.email === user.email);
    if (isEmailRegistered) {
        alert("This email is already registered. Please use a different email.");
        return false; // Signup failed
    }

    // Add the new user to the list
    users.push(user);

    // Save the updated list back to local storage
    localStorage.setItem("users", JSON.stringify(users));
    return true; // Signup successful
}