const { cities } = require('../data');

console.table(cities);

// 2. Encontre todas as cidades do estado de Tocantins (TO)
console.log('As cidades do estado de Tocantins são:');

const citiesFromTocantins = cities
  .filter((city) => city.state === 'TO');

console.table(citiesFromTocantins);
