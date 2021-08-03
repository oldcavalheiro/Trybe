// Exemplo 1 user undefined
const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!

// Exemplo 2
function multiply(a, b) {
  a = (typeof a !== 'undefined') ? a : 1;
  b = (typeof b !== 'undefined') ? b : 1;
  return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5
console.log(multiply()); // 1

// Exemplo 3
const assert = require('assert');

const sum = (num1 = 0, num2 = 0) => num1 + num2;

assert.strictEqual(sum(1, 1), 2);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(2), 2);
assert.strictEqual(sum(), 0);
