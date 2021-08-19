const { describe, expect, it } = require('@jest/globals');
const { getGreeting, restartDb, hackTheDb } = require('../src/promises');

// Teste de sucesso

const expectedString = 'Salve! Meu nome é João Corça e minha comida favorita é churrasco.';
const expectedError = new Error('Explodiu');

describe('DONE - A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', (done) => {
    getGreeting(({ name }) => name === 'João Corça')
      .then((result) => {
        expect(result).toBe(expectedString);
        done();
      });
  });

  it('retorna o erro correto quando falha', (done) => {
    hackTheDb();
    getGreeting(({ name }) => name === 'João Corça')
      .catch((error) => {
        expect(error).toEqual(expectedError);
        done();
      });
  });
});

describe('RETURN + CHAIN A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  // eslint-disable-next-line arrow-body-style
  it('retorna corretamente a string', () => {
    return getGreeting(({ name }) => name === 'João Corça')
      .then((result) => {
        expect(result).toBe(expectedString);
      });
  });

  it('retorna o erro correto quando falha', () => {
    hackTheDb();
    return getGreeting(({ name }) => name === 'Xuxa')
      .catch((error) => {
        expect(error).toEqual(expectedError);
      });
  });
});

describe('RETURN + RESOLVES/REJECTS A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  // eslint-disable-next-line arrow-body-style
  it('retorna corretamente a string', () => {
    return expect(getGreeting(({ name }) => name === 'João Corça'))
      .resolves.toBe(expectedString);
  });
  
  it('retorna o erro correto quando falha', () => {
    hackTheDb();
    return expect(getGreeting(({ name }) => name === 'João Corça'))
      .rejects.toEqual(expectedError);
  });
});

describe('ASYNC/AWAIT A função getGreeting,', () => {
  beforeEach(() => {
    restartDb();
  });

  it('retorna corretamente a string', async () => {
    const result = await getGreeting(({ name }) => name === 'João Corça');
    expect(result).toBe(expectedString);
  });

  it('retorna o erro correto quando falha', async () => {
    try {
      hackTheDb();
      await getGreeting(({ name }) => name === 'João Corça');
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
  });
});
