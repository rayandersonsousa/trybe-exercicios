let n = 5;
let simbolo = '*';
let linha = ''

if (n > 1) {
  for (let index = 0; index < n; index += 1){
    linha = linha + simbolo;
  }

  for (let index = 0; index < n; index += 1){
    console.log(linha);
  }
}