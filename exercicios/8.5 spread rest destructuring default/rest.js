const assert = require('assert');
// Exemplo 1 soma N parametros
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

function soma(...nums) {
  return nums.reduce((total, el) => total + el)
}
console.log(soma(1, 2, 3, 4, 5)); // 15

assert.strictEqual(sum(1, '2'), '12');
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4, 5), 15);

// Exemplo 2 choosing some element in array
function raceResults(gold, silver, ...todoRestante) {
  console.log(`medalha de ouro vai para: ${gold}`)
  console.log(`medalha de prata vai para: ${silver}`)
  console.log(`e obrigado a todos os outros: ${todoRestante}`)
}
raceResults('Rodrigo', 'Sandra', 'Aledxandre', 'Raphael', 'Felipe');

// Exemplo 3:
// Formatar a data no seguinte padrão:
// dia/mês/ano
const formatDate = (year, month, day) => `${day}/${month}/${year}`;
assert.strictEqual(
  formatDate('1991'), 'undefined/undefined/1991',
);

assert.strictEqual(
  formatDate('1981', '7', '31', '22', '47', '12'), '31/7/1981',
);

assert.strictEqual(
  formatDate(...['1981', '7', '31', '22', '47', '12']), '31/7/1981',
);