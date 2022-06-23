let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1 ){
  
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }

}

console.log(maiorPalavra)