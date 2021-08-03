const { cities } = require('../data');

console.table(cities);

// 3. Encontre todas as cidades que começam com a letra C
console.log('As cidades que começam com a letra C são:');

const citiesWithC = cities.filter((city) => city.name.toUpperCase().startsWith('C'));

console.table(citiesWithC);