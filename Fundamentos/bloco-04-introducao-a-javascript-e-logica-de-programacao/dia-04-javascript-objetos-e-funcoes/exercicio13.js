function repeteMais (numeros) {
  let contaNumero = 0;
  let contaRepetido = 0;
  let indexNumRepetido = 0;
  for(let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contaNumero += 1;
      }
    }
    if (contaNumero > contaRepetido) {
      contaRepetido = contaNumero;
      indexNumRepetido = index;
    }
    contaNumero = 0;
  }
  return numeros[indexNumRepetido];
}

console.log(repeteMais([2, 3, 2, 5, 8, 2, 3]))