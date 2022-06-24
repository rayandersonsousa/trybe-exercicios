function maiorPalavra (palavras) {
  let mPalavra = palavras[0];
  for (let indice in palavras) {
    if (palavras.length < palavras[indice].length) {
      mPalavra = palavras[indice];
    }
  }
  return mPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))