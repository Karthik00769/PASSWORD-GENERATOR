document.addEventListener('DOMContentLoaded', () => {
    const passbox = document.querySelector('.passbox');
    const rangeInput = document.querySelector('input[type="range"]');
    const lengthDisplay = document.querySelector('.col span');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const generateButton = document.querySelector('.genebutton');

    const charSets = {
        lower: 'abcdefghijklmnopqrstuvwxyz',
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+'
    };
    const generatePassword = (length, options) => {
        const availableChars = Object.keys(options)
            .filter(option => options[option])
            .map(option => charSets[option])
            .join('');
    if (!availableChars) return '';
        return Array.from({ length }, () => availableChars[Math.floor(Math.random() * availableChars.length)]).join('');
    };
    rangeInput.addEventListener('input', () => {
        lengthDisplay.textContent = rangeInput.value;
    });
    generateButton.addEventListener('click', () => {
        const length = parseInt(rangeInput.value);
        const options = {
            lower: lowercaseCheckbox.checked,
            upper: uppercaseCheckbox.checked,
            numbers: numbersCheckbox.checked,
            symbols: symbolsCheckbox.checked
        };
        passbox.value = generatePassword(length, options);
    });
});