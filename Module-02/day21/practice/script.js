// 1. GET HTML ELEMENTS
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const error = document.getElementById("error");
const count = document.getElementById("count");
const themeButton = document.getElementById("themeButton");

// 2. SAVE HELPER
// Save an array to localStorage
function save(people) {
    localStorage.setItem("people", JSON.stringify(people));
}
// 3. LOAD HELPER
// Load the array from localStorage
function load() {

    const savedData = localStorage.getItem("people");

    // Nothing saved yet
    if (savedData === null) {
        return [];
    }

    try {
        return JSON.parse(savedData);
    } catch (error) {
        console.log("Saved data is corrupted.");

        return [];
    }
}
// 4. LOAD SIGNUPS
let people = load();

// 5. SHOW NUMBER OF PEOPLE
function showCount() {
    count.textContent =
        `${people.length} people have signed up.`;
}
showCount();

// 6. THEME TOGGLE
// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "Light Mode";
}


// Change theme when button is clicked
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if (isDark) {

        localStorage.setItem("theme", "dark");
        themeButton.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "Dark Mode";
    }
});

// 7. FORM SUBMIT
form.addEventListener("submit", function (event) {
    // Stop the page from refreshing

    event.preventDefault();
    // Read and trim the values
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    // Clear previous error
    error.textContent = "";

    // 8. VALIDATE NAME
    if (name.length < 2) {

        error.textContent =
            "Name must be at least 2 characters.";

        return;
    }

    // 9. VALIDATE PHONE

    const ethiopianPhoneRegex =
        /^(09\d{8}|\+2519\d{8})$/;


    if (!ethiopianPhoneRegex.test(phone)) {

        error.textContent =
            "Please enter a valid Ethiopian phone number.";

        return;
    }

    // 10. CREATE NEW PERSON

    const newPerson = {
        name: name,
        phone: phone
    };

    // 11. ADD TO ARRAY
    people.push(newPerson);

    // 12. SAVE TO LOCAL STORAGE
    save(people);
    // 13. CLEAR FORM
    form.reset();
    // Clear error
    error.textContent = "";

    // 14. UPDATE COUNT
    showCount();
});
