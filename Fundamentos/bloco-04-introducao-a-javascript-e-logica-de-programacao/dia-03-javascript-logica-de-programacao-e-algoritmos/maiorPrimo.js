let maiorPrimo = 0;

for (let numAtual = 2; numAtual <= 50; numAtual += 1) {
  let ehPrimo = true;
  for (let divAtual = 2; divAtual < numAtual; divAtual += 1) {
    if (numAtual % divAtual === 0) {
      ehPrimo = false;
    }
  }
  if (ehPrimo) {
    maiorPrimo = numAtual;
  }
}

console.log(maiorPrimo);