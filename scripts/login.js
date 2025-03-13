document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Get users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the matching email
    const user = users.find((u) => u.email === email);

    // Check if the user exists and the password matches
    if (user && user.password === password) {
        // alert("Login successful! Redirecting to the main page...");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});