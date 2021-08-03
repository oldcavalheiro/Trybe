const assert = require('assert');
const { number } = require('prop-types');

/**
 * Receber uma quantidade indefinida de parâmetros na função
 * e retornar a soma de todos eles
 */
function sumAll(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

assert.strictEqual(sumAll(1, '2'), '12');
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);