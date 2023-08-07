document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event){
    event.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value;

    if (isValid(cardNumber)){
      resultDiv.textContent = "Cartão Válido!";
    } else {
      resultDiv.textContent = "Por favor, insira um cartão de crédito válido.";
    }

    maskify(cardNumber);
  });
});

function isValid(cardNumber){
  const cleanedNumber=cardNumber.replace(/\s/g,"");
  const digitsArray=Array.from(cleanedNumber).map(Number);

  digitsArray.reverse();

  let sum=0;
  for (let i = 0; i < digitsArray.length; i++) {
    if(i % 2 !== 0){
      let doubleDigits = digitsArray[i] * 2;
      if(doubleDigits > 9) {
        doubleDigits -= 9;
      }
      sum += doubleDigits;
    }else{
      sum += digitsArray[i];
    }
  }
  return sum % 10 === 0;
}

function maskify(cardNumber) {
  const masked=cardNumber.slice(0, -4).replace(/\d/g,"#")+cardNumber.slice(-4);
  document.getElementById("cardNumber").value=masked;
}
const validator = {isValid, maskify}
export default validator;