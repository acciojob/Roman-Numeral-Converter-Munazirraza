function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let romanNumeral = '';

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    // Repeat the symbol while subtracting its value from the number
    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }

    // Handle subtractive notation by checking if the current symbol can be combined with the next symbol
    if (i % 2 === 0 && i < Object.keys(obj).length - 1) {
      const nextSymbol = obj[i + 2][0];
      const nextValue = obj[i + 2][1];

      if (num >= value - nextValue) {
        romanNumeral += nextSymbol + symbol;
        num -= value - nextValue;
      }
    }
  }

  return romanNumeral;
}

// console.log(convertToRoman(36)); // Output: XXXVI