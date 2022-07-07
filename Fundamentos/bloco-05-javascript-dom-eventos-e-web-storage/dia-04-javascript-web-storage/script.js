window.onload = function() {
  let select = document.querySelector('select');
  select.addEventListener('change', function(){
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = select.value;

    localStorage.setItem('background-color', selected.value);
  })

  let newFontSize = document.querySelector('input[name = "font-size"]');
  newFontSize.addEventListener('change', function(){
    let paragrafo = document.querySelector('p');
    paragrafo.style.fontSize = `${newFontSize.value}px`;

    localStorage.setItem('font-size', `${newFontSize.value}px`);
  })


  let newBackground = localStorage.getItem('background-color');
  document.body.style.backgroundColor = newBackground;

  let userFontSize = localStorage.getItem('font-size');
  let paragrafo = document.querySelector('p');
  paragrafo.style.fontSize = userFontSize;
}

let numbers = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 5, 8];
let phone = [];
if (numbers.length !== 11) {
  console.log('Array com tamanho incorreto.')
} else {
  for (let index2 = 0; index2 < numbers.lenght; index2 += 1) {
    let check = 0;
    for (let index3 = 0; index3 < numbers.length; index3 += 1) {
      if (index3 === index2) {
        check = check +1;
      }
    }
    if (index2 < 0 || index2 > 9 || check >=3) {
      console.log('não é possível gerar um número de telefone com esses valores');
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
      phone += '(' + numbers[index];
    } else if (index === 1) {
      phone += numbers[index] + ') ';
    } else if (index === 6) {
      phone += numbers[index] + '-';
    } else {
      phone += numbers[index];
    }
  }
}

console.log(phone);