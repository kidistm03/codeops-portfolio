const form = document.getElementById("signupp");
//get input name,email,phone,password
const nameInput = document.getElementById("fname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("emaill");
const passwordInput = document.getElementById("passwordd");

// Error elements below each input
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const errorDiv = document.getElementById("error");
const countDiv = document.getElementById("count");

// Regular Expressions (Regex) for testing input pattern
// Ethiopian phone numbers starting with 09, 07, or +251
// const nameRegex=/^/$;
// const phoneRegex=/^(?:\+251|0)9\d{8}$/;
// const emailRegex=/^[\w.]+@[\w.]+\.\w+$/;
// const passwordRegex=/^[A-Z]+[a-z]+[,.$%#@!;:-_='&*\+-\^]+{8,}$/;
const phonePattern = /^(?:\+251|0)[97]\d{8}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Function to clear all error messages below inputs
function clearErrors() {
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    errorDiv.textContent = "";
}


// Function to show total users on load and update
function showUserCount() {
    let savedData = localStorage.getItem("usersList");
    
    if (savedData) {
        let usersArray = JSON.parse(savedData);
        countDiv.textContent = "Total users: " + usersArray.length;
    } else {
        countDiv.textContent = "Total users: 0";
    }
}

showUserCount();

form.addEventListener("submit", function(event) {
    // Stop page from reloading
    event.preventDefault();
s
    clearErrors();

    // Read values
    let nameValue = nameInput.value.trim();
    let phoneValue = phoneInput.value.trim();
    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value;

    if (nameValue.length < 2) {
        nameError.textContent = "Error: Name must be at least 2 letters long.";
        return;
    }

    if (phonePattern.test(phoneValue) === false) {
        phoneError.textContent = "Error: Please enter a valid Ethiopian phone number (09... or +2519...).";
        return;
    }

    if (emailPattern.test(emailValue) === false) {
        emailError.textContent = "Error: Please enter a valid email address.";
        return;
    }

    if (passwordValue.length < 8) {
        passwordError.textContent = "Error: Password must be at least 8 characters long.";
        return;
    }
    
    if (/[A-Z]/.test(passwordValue) === false) {
        passwordError.textContent = "Error: Password needs at least 1 capital letter.";
        return;
    }

    if (/[a-z]/.test(passwordValue) === false) {
        passwordError.textContent = "Error: Password needs at least 1 small letter.";
        return;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue) === false) {
        passwordError.textContent = "Error: Password needs at least 1 special character.";
        return;
    }

    // Save to localStorage 

    let newUser = {
        name: nameValue,
        phone: phoneValue,
        email: emailValue
    };

    let currentUsers = [];
    let existingStorage = localStorage.getItem("usersList");

    if (existingStorage) {
        currentUsers = JSON.parse(existingStorage);
    }

    currentUsers.push(newUser);
    localStorage.setItem("usersList", JSON.stringify(currentUsers));

    // Clear inputs and refresh count
    form.reset();
    clearErrors();
    showUserCount();

    
});


// function validate({ fname, phone,emaill,password }) {
//     if (name.trim().length < 2)
//         return "Enter your full name.";
//     if (!phone) return "Phone is required.";
//     return ""; // "" means all good
// }
// const error = validate({ fname, phone,emaill,password});
// if (error) { show(error); return; }