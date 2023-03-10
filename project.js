const characterAmountRange = document.getElementById("characterAmountRange");
// Grabs value from IDs
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");

const form = document.getElementById("passwordGen");
const passwordDisplay = document.getElementById("passwordDisplay");

const uppercaseCharCodes = arrayLowToHigh(65, 90);
const lowercaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)).concat(arrayLowToHigh(91, 96)).concat(arrayLowToHigh(123, 126));

characterAmountNumber.addEventListener(`input`, syncCharacterAmount);
characterAmountRange.addEventListener(`input`, syncCharacterAmount); // Links input to both elements

form.addEventListener("submit", e => {
    e.preventDefault() // prevents page refresh when button is clicked.
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked; // 
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = lowercaseCharCodes
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
    if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }

    return passwordCharacters.join("")
    // This will access the Character codes table.
    // The value given represents a character; symbols, numbers and upper and lowercase letters.
    String.fromCharCode(65) // This works better than hard coding several Arrays that include all characters.
};

function arrayLowToHigh(low, high) {
    const arr = [];
    for (let i = low; i <= high; i++) { // This will loop through each character until the low number is equal to the high number, grabbing all characters within the range.
        arr.push(i);
    };
    return arr;
};

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
};

// const includeUppercase = document.getElementById("includeUppercase");

// const includeNumbers = document.getElementById("includeNumbers");

// const includeSymbols = document.getElementById("includeSymbols");

// includeUppercase.addEventListener("input", addUppercase);

// function addUppercase ($("includeUppercase").is(":checked")) {
//     if (e) {

//     }
// }

// includeNumbers.addEventListener("input", addNumbers);

// includeSymbols.addEventListener("input", addsymbols);