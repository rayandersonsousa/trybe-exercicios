
function verificaPalindromo (palavra) {
  let palavraReverse = palavra.split('').reverse().join('');

  if (palavraReverse === palavra) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo('arara'));
