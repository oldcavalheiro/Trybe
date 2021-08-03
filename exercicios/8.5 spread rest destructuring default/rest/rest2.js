const assert = require('assert');

/**
 * Formatar a data no seguinte padrão:
 * 
 * dia/mês/ano
 */
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