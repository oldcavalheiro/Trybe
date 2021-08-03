const { numbers } = require('../data');

const myMap = (array, mapper) => {
  const accumulator = [];

  array.forEach((element, index, originalArray) => {
    const mappedItem = mapper(element, index, originalArray);
    accumulator.push(mappedItem);
  });

  return accumulator;
};

// 1. Multiplicar todos os números de numbers por 2 
// e armazenar em um novo array
console.log('originalNumbers =', numbers);

const mapper = (element) => element * 2;

const multipliedNumbers = myMap(numbers, mapper);

console.log('multipliedNumbers =', multipliedNumbers);
