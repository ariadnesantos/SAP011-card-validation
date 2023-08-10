import validator from './validator.js';
//Fazer a validação do e-mail aqui e mostrar a bandeira do cartão
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value;

    if (validator.isValid(cardNumber)) {
      resultDiv.textContent = "Cartão Válido!";
    } else {
      resultDiv.textContent = "Por favor, insira um cartão de crédito válido.";
    }

    document.getElementById("cardNumber").value=validator.maskify(cardNumber);
  });
});





