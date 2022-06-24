function verificaFimPalavra(palavra, finalPalavra) {
  palavra = palavra.split('');
  finalPalavra = finalPalavra.split('');
  controle = true;
  for (let index = 0; index < finalPalavra.length; index += 1) {
    if (palavra[palavra.length - finalPalavra.length + index] != finalPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificaFimPalavra('joaofernando', 'fernan'))