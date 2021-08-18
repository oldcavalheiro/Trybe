/**
 * 1. Encontrar o país com a menor população
 */
function lowestPopulation(countries) {
  return countries.sort((a, b) => a.population - b.population)[0]
    .name;
}

function lowestPopulationWithReduce(countries) {
  return countries.reduce((previousValue, currentValue) => {
    if (previousValue.population < currentValue.population) {
      return previousValue;
    }

    return currentValue;
  })
    .name;
}

module.exports = {
  lowestPopulation: lowestPopulationWithReduce,
};
