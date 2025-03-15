document.addEventListener('DOMContentLoaded', function() {
    const lengthInput = document.getElementById('length');
    const generateButton = document.getElementById('generate-btn');
    const passwordDisplay = document.getElementById('password-display');

    // Function to generate random password
    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Generate password when button is clicked
    generateButton.addEventListener('click', function() {
        const passwordLength = parseInt(lengthInput.value);
        const password = generatePassword(passwordLength);
        passwordDisplay.textContent = password;
    });
});
