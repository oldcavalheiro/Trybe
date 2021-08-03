const { numbers } = require('../data');

console.table(numbers);

// 1. Somar todos os elementos do array `numbers`

const reducer = (accumulator, currentValue, index) => {
  console.log('---------------------');
  console.log(`accumulator = ${accumulator}`);
  console.log(`currentValue = ${currentValue}`);
  console.log(`index = ${index}`);

  return accumulator + currentValue;
};

// const summation = numbers.reduce(reducer);

const summation = numbers.reduce(reducer, 0);

console.log(`O somátório é = ${summation}`);
