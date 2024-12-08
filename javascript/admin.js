// Register a new user (POST request)
app.post("/api/register", (req, res) => {
    const { fullname, email, password, phone, address } = req.body;
    // Check if user already exists
    const existingUser = users.find(user => user.fullname === fullname);
    if (existingUser) {
        return res.status(400).json({ error: "User already exists!" });
    }
    // Create a new user object
    const newUser = {
        fullname,
        email,
        password,
        phone,
        address,
        cart: [],
        purchaseHistory: [],
        notifications: [],
        query: []
    };
    users.push(newUser);
    alert("User registered successfully!")
    console.log(users)
    res.status(201).json({ message: "User registered successfully!", user: newUser });
});

// Get all users (GET request)
app.get("/api/users", (req, res) => {
    res.json(users);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





























// admin.js

// Retrieve user data from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Function to display users in a table
function displayUsers() {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Clear previous data

    users.forEach((user, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1); // Remove user from the array
    localStorage.setItem("users", JSON.stringify(users)); // Update localStorage
    displayUsers(); // Refresh the table
}

// Initialize table on page load
displayUsers();
