const { cities, states } = require("../data");

console.table(cities);
console.table(states);

/**
  * Transforme o array de objetos cities em um array de strings 
  * com o seguinte formato:
  * 
  * `A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}`
 */

const citiesAndStateNames = cities.map((city) => {
  const state = states.find((estado) => {
    return estado.short === city.state;
  });

  return `A cidade de ${city.name} fica no estado de ${state.name}`;
});

console.log(citiesAndStateNames);