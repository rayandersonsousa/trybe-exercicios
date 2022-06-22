let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = [];

for (index = 0; index < numbers.length; index++) {
    if (numbers[index]%2 != 0) {
        odds.push(numbers[index]);
    }
}

if(odds.length !== 0) {
    for (index = 0; index < odds.length; index++) {
        console.log(odds[index]);
    }
} else {
    console.log("Nenhum valor ímpar encontrado.")
}