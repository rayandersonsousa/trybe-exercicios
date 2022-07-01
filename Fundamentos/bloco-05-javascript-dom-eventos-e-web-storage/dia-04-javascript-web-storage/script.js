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