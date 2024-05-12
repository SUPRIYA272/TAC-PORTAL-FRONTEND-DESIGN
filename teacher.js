document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var facultyId = document.getElementById("facultyId").value;
    var password = document.getElementById("password").value;

    // Reset previous error messages
    document.getElementById("facultyIdError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Validate Faculty ID
    if (facultyId.trim() === "") {
        document.getElementById("facultyIdError").textContent = "Please enter Faculty ID.";
        return;
    } else if (facultyId.length !== 4) {
        document.getElementById("facultyIdError").textContent = "Faculty ID must be 4 digits.";
        return;
    }

    // Validate Password
    if (password.trim() === "") {
        document.getElementById("passwordError").textContent = "Please enter Password.";
        return;
    } else if (password.length !== 5) {
        document.getElementById("passwordError").textContent = "Password must be 5 digits.";
        return;
    }

    // If validation passes, simulate form submission (replace with actual logic)
    window.location.href = "dash.html"; // Redirect to dashboard
});
