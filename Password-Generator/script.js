// DOM Elements
const passwordInput = document.querySelector('.Password');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const generateButton = document.getElementById('generateButton');

// Character sets
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%&_|:.";
let allChars = uppercase + lowercase + numbers + specialChars;

// Update slider value display
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// Function to generate password
function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}

// Generate password on button click
generateButton.addEventListener('click', () => {
    const length = parseInt(lengthSlider.value);
    const password = generatePassword(length);
    passwordInput.value = password; // Display generated password
});
