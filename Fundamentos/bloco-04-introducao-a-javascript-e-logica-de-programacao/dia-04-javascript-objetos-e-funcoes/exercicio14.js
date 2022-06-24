function somatorio(numero) {
  somaTotal = 0;
  for (index = 1; index <= numero; index += 1) {
    somaTotal = somaTotal + index;
  }
  return somaTotal;
}

console.log(somatorio(5))