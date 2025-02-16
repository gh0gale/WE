document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    let usernameError = document.getElementById("usernameError");
    let emailSuccess = document.getElementById("emailSuccess");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    
    let isValid = true;

    if (username.length < 3 || username.length > 25) {
        usernameError.textContent = "Username must be between 3 and 25 characters.";
        usernameError.style.color = "red";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    if (email.includes("@") && email.includes(".")) {
        emailSuccess.style.color = "green";
    } else {
        emailSuccess.textContent = "";
        isValid = false;
    }

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)";
        passwordError.style.color = "red";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Please enter the password again";
        confirmPasswordError.style.color = "red";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }


    if (isValid) {
        // alert("Form submitted successfully!");
        Swal.fire({
            title: "Submitted!",
            icon: "success",
            draggable: true
          });
        document.getElementById("signupForm").reset();
    }
});
