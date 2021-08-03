const { numbers } = require('../data');

console.table(numbers);

// 1. Encontre o maior valor no array de numbers

const numbersComparator = (accumulator, currentValue) => {
  console.log('---------------------');
  console.log(`accumulator = ${accumulator}`);
  console.log(`currentValue = ${currentValue}`);

  if (accumulator > currentValue) {
    return accumulator;
  }
  
  return currentValue;
};

const maxNumber = numbers.reduce(numbersComparator);

console.log(`maxNumber = ${maxNumber}`);