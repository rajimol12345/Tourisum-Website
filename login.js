var Email = document.getElementById("Email");
var error = document.getElementById("error");
var password = document.getElementById("password");

function validate() {
    let emailRegexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    let isValid = true; // Initialize isValid as true by default

    // Email validation
    if (!emailRegexp.test(Email.value)) {
      alert("Invalid email ID");  // Show an alert for invalid email
      error.innerHTML = ""; // Clear the error message
        isValid = false; // Email is invalid
    } else {
      alert("valid email ID");  // Show an alert for invalid email
      error.innerHTML = ""; // Clear the error message
    }

    // Password validation
    if (password.value.length <= 5) {
        alert("Password is too short. It must be at least 6 characters.");
        password.style.border = "2px solid red";
        isValid = false; // Password is too short
    } else {
        password.style.border = "2px solid green";
    }

    // If any validation fails, return false to prevent form submission
    return isValid;
}
