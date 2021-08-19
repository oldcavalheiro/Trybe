/*
 * Implementação utilizando Promises das funções 
 * do banco de dados em memória.
 */

/**
 * Este array simula uma coleção em um banco de dados não-relacional.
 */
const db = [
  {
    id: 123,
    name: 'Xuxa',
    favoriteFood: 'algodão doce',
    greeting: 'Oi galerinha!',
  },
  {
    id: 321,
    name: 'João Corça',
    favoriteFood: 'churrasco',
    greeting: 'Salve!',
  },
  {
    id: 404,
    name: 'Faustina O\'Missing',
    favoriteFood: null,
    greeting: 'Oi.',
  },
];

/**
 * Esta variável abaixo, juntamente com as duas funções, hackTheDb() 
 * e restartDb() permitem controlar a simulação de uma falha.
 */
let shouldFail = false;

function hackTheDb() {
  shouldFail = true;
}

function restartDb() {
  shouldFail = false;
}

/**
 * Esta função simula uma função que busca no banco de dados.
 * 
 * @param {*} filter 
 * @returns uma Promise que resolve para o objeto encontrado pela função filter
 */
function findOne(filter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        return reject('Explodiu');
      }

      const queryResults = db.find(filter);
      
      resolve(queryResults);
    }, 100);
  });
}

/**
 * Esta função utiliza a função de cima para montar uma string a partir da
 * pessoa usuária recuperada do "banco de dados".
 * 
 * @param {*} filter 
 * @returns uma Promise que resolve para uma frase de saudação.
 */
async function getGreeting(filter) {
  try {
    const { greeting, name, favoriteFood } = await findOne(filter);
    const greetingString = `${greeting} Meu nome é ${name}`
      + ` e minha comida favorita é ${favoriteFood}.`;

    return greetingString;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getGreeting,
  hackTheDb,
  restartDb,
};
