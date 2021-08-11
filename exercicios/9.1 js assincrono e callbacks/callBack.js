const assert = require('assert');
const { get } = require('http');

// course example
const resultadoFinal = (resultado) => {
  console.log(resultado);
}

const funcSoma = (num1, num2, callBack) => {
  let soma = num1 + num2;
  callBack(soma); // callBack === resultadoFinal as param (with soma as param)
}

// com callBack* 
funcSoma(10, 8, resultadoFinal);

/* sem o callBack*
let resultadoSoma = funcSoma(10, 8);
resultadoFinal(resultadoSoma);
*/

// exercicio 1 
// Complete a função getUser de forma que ela receba uma outra função como parâmetro
// para que possa realizar as operações abaixo sobre a pessoa retornada.
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 2000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = callBack => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callBack(user));
  }, delay());
};

/* not working  assert.timeout() https://api.qunitjs.com/assert/timeout/
setTimeout(() => {
  assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich");
  assert.strictEqual(getUser(userNationality), "Ivan is Russian");
}, 3000); */

getUser(userFullName);
getUser(userNationality);
