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
