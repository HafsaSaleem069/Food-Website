// home.js

// Array to store user data
let users = [];

// Event listener for the Register button
document.getElementById("RegisterButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve values from input fields
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Validate passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user object
    const user = { fullname, email, username, phone, address };
    users.push(user);

    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form fields
    document.querySelector("form").reset();

    alert("User registered successfully!");
});
