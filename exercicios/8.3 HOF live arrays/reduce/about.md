# Array.prototype.reduce()

O método `reduce()` executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

## Sintaxe

```javascript
const reducer = (accumulator, currentValue[, index[, originalArray]]) => {
  // Função que é executada em cada valor no array.
  // O que for retornado aqui, irá chegar na próxima iteração no parâmetro `accumulator`
};

// Retorna um novo array com os elementos que passaram no teste
const newArray = anArray.reduce(reducer[, initialValue])
```

A função **reducer** recebe quatro parâmetros:

1. Acumulador (acc)
2. Valor Atual (cur)
3. Index Atual (idx)
4. Array original (src)

O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

Consulte mais [aqui na documentação][docs]!

[docs]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce