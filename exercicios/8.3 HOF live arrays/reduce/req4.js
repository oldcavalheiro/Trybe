const assert = require('assert');
const { cities, states, regions } = require('../data');

console.table(cities);
console.table(states);
console.table(regions);

/*
 * Transforme o array de cidades em um objeto no seguinte formato:
 *
 * const output = {
 *   N: [
 *     { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
 *     { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
 *   ],
 *   NE: [
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *   ],
 *   etc...
 * };
*/

const reducer = (accumulator, city) => {
  console.log(accumulator);
  console.log(city);
};

const output = cities.reduce(reducer);

console.log(output);

const expected = {
  N: [
    { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
    { city: 'Belém', state: 'Pará', region: 'Norte' },
    { city: 'Porto Nacional', state: 'Tocantins', region: 'Norte' },
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais', region: 'Sudeste' },
    { city: 'Presidente Prudente', state: 'São Paulo', region: 'Sudeste' },
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
    { city: 'Touros', state: 'Rio Grande do Norte', region: 'Nordeste' },
    { city: 'Jericoacoara', state: 'Ceará', region: 'Nordeste' },
  ],
  S: [
    { city: 'Cascavel', state: 'Paraná', region: 'Sul' },
  ],
};

assert.deepStrictEqual(output, expected);
