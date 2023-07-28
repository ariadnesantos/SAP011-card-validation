import validator from './validator.js';
console.log(validator);
// ESCUTAR OS EVENTOS DE DOM, chamar validator.isValid() e validator.maskify()

  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const expiryDate = document.getElementById("expiryDate");
  const cvc = document.getElementById("cvc");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    //criar const e chamar o number do cartão
    validator.validateCreditCard(number);
  });

  function checkInputs() {
    const nameValue = name.value;
    const emailValue = email.value;
    const expiryDateValue = expiryDate.value;
    const cvcValue = cvc.value;

    if (nameValue === "") {
      setErrorFor(name, "O nome de usuário é obrigatório.");
    } else {
      setSuccessFor(name);
    }

    if (emailValue === "") {
      setErrorFor(email, "O e-mail é obrigatório.");
    } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um e-mail válido.");
    } else {
      setSuccessFor(email);
    }

    if (expiryDateValue === "") {
      setErrorFor(expiryDate, "A data de validade do cartão é obrigatória.");
    } else {
      setSuccessFor(expiryDate);
    }

    if (cvcValue === "") {
      setErrorFor(cvc, "O código de verificação do cartão é obrigatório.");
    } else {
      setSuccessFor(cvc);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.classList.contains("success");
    });

    if (formIsValid) {
      console.log("O formulário está 100% válido!");
      // Adicionar aqui o código para enviar o formulário ou realizar outras ações
    }
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.classList.remove("success");
    formControl.classList.add("error");
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList.remove("error");
    formControl.classList.add("success");
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

    

