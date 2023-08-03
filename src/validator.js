const validator = {
  isValid: function (creditCardNumber) {
    const cleanedNumber = creditCardNumber.replace(/\s/g, '');
    const digitsArray = Array.from(cleanedNumber).map(Number);

    digitsArray.reverse();

    let sum = 0;
    for (let i = 0; i < digitsArray.length; i++) {
      if (i % 2 !== 0) {
        let doubleDigits = digitsArray[i] * 2;
        if (doubleDigits > 9) {
          doubleDigits -= 9;
        }
        sum += doubleDigits;
      } else {
        sum += digitsArray[i];
      }
    }

    // Verificar se o resultado da soma é um múltiplo de 10
    return sum % 10 === 0;
  },
  maskify: function (creditCardNumber) {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    }
    const maskedString = '#'.repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4);
    return maskedString;
  },
};

export default validator;

 