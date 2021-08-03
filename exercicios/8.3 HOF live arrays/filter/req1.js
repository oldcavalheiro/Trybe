const { names } = require('../data');

console.table(names);

// 1. Encontre todas as pessoas cujo nome começa com a letra A
console.log('As pessoas cujo nome começa com a letra A são:');

const mustBeIncluded = (param1) => 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  // name[0].localeCompare("a", 'en', { sensitivity: "base" }) === 0;
  param1[0].toUpperCase() === 'A';

const filteredNames = names.filter(mustBeIncluded);

console.table(filteredNames);
