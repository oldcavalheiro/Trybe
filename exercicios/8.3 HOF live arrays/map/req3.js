const { cities, states, regions } = require('../data');

console.table(cities);
console.table(states);
console.table(regions);

/**
 * Transforme o array de objeto cities em um array de 
 * objetos no seguinte formato:
 * 
 * ```
 * {
 *   state: "Amazonas",
 *   city: "Manaus",
 *   region: "Norte"
 * }
 * ```
 */
