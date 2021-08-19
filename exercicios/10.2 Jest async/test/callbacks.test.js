const { describe, expect, it, beforeEach } = require('@jest/globals');
const { getGreeting, hackTheDb, restartDb } = require('../src/callbacks');

// eslint-disable-next-line max-lines-per-function
describe('A função getGreeting', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', (done) => {
    const expectedString = 'Oi galerinha! Meu nome é Xuxa'
      + ' e minha comida favorita é algodão doce.';
    
    function callback(error, result) {
      // pode ser toBe porque vamos verificar uma String
      expect(result).toBe(expectedString);
      done();
    }

    getGreeting(({ name }) => name === 'Xuxa', callback);
  });

  it('retorna erro quando falha', (done) => {
    const expectedError = new Error('Explodiu');

    function callback(error, result) {
      // TEM que ser toEqual porque vamos verificar um Objeto
      expect(error).toEqual(expectedError);
      done();
    }

    hackTheDb();
    getGreeting(({ name }) => name === 'Xuxa', callback);
  });
});
