// Function to convert a number to Roman numeral
function intToRoman(num) {
    // Roman symbol array
    const romanSymbols = [
        { value: 100000, symbol: 'C̅' }, // 100000 is represented by 'C̅' in some extended forms
        { value: 10000, symbol: 'X̅' },  // 10000 is represented by 'X̅' in some extended forms
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (const symbol of romanSymbols) {
        while (num >= symbol.value) {
            result += symbol.symbol;
            num -= symbol.value;
        }
    }

    return result;
}

// Convert button click event handler
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", function () {
    const inputNumber = document.getElementById("inputNumber").value;
    const num = parseInt(inputNumber);

    if (!isNaN(num) && num >= 0 && num <= 100000) {
        const romanNumeral = intToRoman(num);
        const outputElement = document.getElementById("output");
        outputElement.textContent = ` ${romanNumeral}`;
    } else {
        alert("Invalid input. Please enter a valid integer between 0 and 100000.");
    }
});
