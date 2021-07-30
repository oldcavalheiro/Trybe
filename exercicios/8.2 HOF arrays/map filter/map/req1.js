const { cities } = require("../data");

console.table(cities);

/**
 * Transforme o array de objetos cities em um array de strings 
 * com o seguinte formato:
 * 
 * "${nomeDaCidade} - ${siglaDoEstado}"
 */

const citiesAndStateCodes = cities.map((city) => {
  return `${city.name} - ${city.state}`;
});

console.log('Formato: ${nomeDaCidade} - ${siglaDoEstado}');
console.log(citiesAndStateCodes);
