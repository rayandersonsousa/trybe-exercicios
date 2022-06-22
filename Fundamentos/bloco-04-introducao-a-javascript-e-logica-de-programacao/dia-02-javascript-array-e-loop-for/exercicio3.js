let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;

for (index = 0; index < numbers.length; index++) {
    sum = numbers[index] + sum;
}

media = sum / numbers.length;
console.log(media);