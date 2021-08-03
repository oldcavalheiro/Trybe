// 1. transforme a matriz em um array
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flatten(arrays));

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
