let numbers = [32, 15, 3, 2, -5, 56, 10];

let sumNumbers = numbers.reduce((result, number) => result + number);
console.log(sumNumbers); // 113

// Ou seja:
let getSum = (result, number) => result + number;
sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


// função que some todos os números pares do array
numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

let getEven = (number) => number % 2 === 0;
let sumPair = (currentValue, number) => currentValue + number;

sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152
console.log(18 + 4 + 76 + 54); // 152