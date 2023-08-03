import validator from './validator.js';

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const expiryDate = document.getElementById("expiryDate");
const cvc = document.getElementById("cvc");
const number = document.getElementById("creditCardNumber");
const result = document.getElementById("result");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

  if (validator.isValid(number.value)) {
    result.innerHTML = "Cartão válido";
  } else {
    result.innerHTML = "Cartão inválido";
  }
});

function checkInputs() {
  const nameValue = name.value;
  const emailValue = email.value;
  const expiryDateValue = expiryDate.value;
  const cvcValue = cvc.value;

  if (nameValue.trim() === "") {
    setErrorFor(name, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(name);
  }

  if (emailValue.trim() === "") {
    setErrorFor(email, "O e-mail é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um e-mail válido.");
  } else {
    setSuccessFor(email);
  }

  if (expiryDateValue.trim() === "") {
    setErrorFor(expiryDate, "A data de validade do cartão é obrigatória.");
  } else {
    setSuccessFor(expiryDate);
  }

  if (cvcValue.trim() === "") {
    setErrorFor(cvc, "O código de verificação do cartão é obrigatório.");
  } else {
    setSuccessFor(cvc);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.classList.remove("success");
  formControl.classList.add("error");
  small.innerText = message;
  small.style.visibility = "visible";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.classList.remove("error");
  formControl.classList.add("success");
  small.style.visibility = "hidden";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


