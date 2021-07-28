/*  TDD (Test-driven development)
1 - Escrever um teste que falha
2 - Fazer o teste passar
3 - Refatorar o código */

const assert = require('assert'); // Sintaxe para incluir o módulo assert

//assert.strictEqual(50, 50); // Sem erros: 50 == 50
//assert.strictEqual(50, 70); // AssertionError: 50 == 70

function division(x, y) {
  return x / y;
}
const expected = division(9, 3);
assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');


const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];
assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

/*
https://nodejs.org/api/assert.html
https://www.w3schools.com/nodejs/ref_assert.asp

assert()	            Checks if a value is true. Same as assert.ok()
deepEqual()	          Checks if two values are equal
deepStrictEqual()	    Checks if two values are equal, using the strict equal operator (===)
doesNotThrow()
equal()	              Checks if two values are equal, using the equal operator (==)
fail()	              Throws an Assertion Error
ifError()	            Throws a specified error if the specified error evaluates to true
notDeepEqual()	      Checks if two values are not equal
notDeepStrictEqual()	Checks if two values are not equal, using the strict not equal operator (!==)
notEqual()	          Checks if two values are not equal, using the not equal operator (!=)
notStrictEqual()	    Checks if two values are not equal, using the strict not equal operator (!==)
ok()	                Checks if a value is true
strictEqual()	        Checks if two values are equal, using the strict equal operator (===)
*/

// throw 
// exceção definida pelo usuário

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

// TDD: Test Driven Development