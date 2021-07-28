const assert = require('assert');

// ****************
// ** Exemplo 1: **
// ****************
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// 3. Teste se a função sum lança um erro quando os parâmetros são 4 e '5'
assert.strictEqual(typeof sum, 'function'); // sum é função
assert.strictEqual(sum(4, 5), 9); // 1.Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(0, 0), 0); // 2.Teste se o retorno de sum(0, 0) é 0
// um parametro inesparado testa o teste
// assert.strictEqual(sum(4, 5), 10);

// 3.Teste se a função sum lança um erro para parametros string (4, '5')
// doesNotThrow testa o teste: assert.doesNotThrow(() => {
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);
// 4.mensagem de erro é "parameters must be numbers"
// /^ expressões regulares $/ 
// testa o teste alterando expressão regular
// exemplo: parameter must be numbers

// ****************
// ** Exemplo 2: **
// ****************
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

// 1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// 2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) NAO retorna o array esperado
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

let myList = [5, 6, 7, 8];
myRemove(myList, 5);
// 3.Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(myList, [5, 6, 7, 8]);
console.log(myRemove(myList, 5));

// ****************
// ** Exemplo 3: **
// ****************
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

myList = [1, 2, 3, 4];

// 1.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// 2.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3.verifique se o array passado por parâmetro sofreu alterações
myRemoveWithoutCopy(myList, 1);
assert.strictEqual(myList.length, 3);

// 4.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// ****************
// ** Exemplo 4: **
// ****************
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(25), 'buzz');
assert.strictEqual(myFizzBuzz(17), 17);
assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);

// ****************
// ** Exemplo 5: **
// ****************
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj2 === obj3);

assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);