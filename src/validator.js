
  //validator.isValid(creditCardNumber): creditCardNumber é um string com o número do cartão a ser verificado. Esta função deve retornar um boolean, dependendo de sua validade, de acordo com o algoritmo de Luhn.
  //validator.maskify(creditCardNumber): creditCardNumber é um string com o número do cartão e esta função deve retornar um string onde todos, exceto os últimos quatro caracteres, são substituídos por um número (#) ou 🐱. 
  //Essa função deve sempre manter os quatro últimos caracteres intactos, mesmo quando o string for mais curto.
  //Exemplo de uso:
  //maskify('4556364607935616') === '############5616'
  //maskify(     '64607935616') ===      '#######5616'
  //maskify(               '1') ===                '1'
  //maskify(                '') ===                ''
  
  //1° Verificar se o cartão é válido

  // Passo 1 - inverter o número do cartão
  function validateCreditCard(number) {
    const invertedCard = number.split("").reverse().join("");
  // Passo 2 - Transformar os caracteres em números e criar um array
    const digits = invertedCard.split("").map(Number);
  // Passo 3 - Dobrar os dígitos em posições pares (índices ímpares)
    for (let i = 1; i < digits.length; i += 2) {
      digits[i] *= 2;
  // Se o dígito dobrado for maior que 9, preciso subtrair 9
    if (digits [i] > 9) {
      digits[i] -=9;
    }
    }
  // Passo 4 - Somar todos os dígitos
    const sumDigits = digits.reduce((total, digit) => total + digit, 0);
  // Passo 5 - Verificar se a soma é múltipla de 10
    return sumDigits % 10 === 0;
    }
  // Passo 6 - Adicionar o evento de escuta ao botão 'verification' (eu achooo) ou coloco no index?



//Fiquei confusa sobre quais informações deixar aqui e quais passar para o index.js
//Onde exatamente vai o const validator?
    const validator = {
 validateCreditCard, //import e export
  };

export default validator;
