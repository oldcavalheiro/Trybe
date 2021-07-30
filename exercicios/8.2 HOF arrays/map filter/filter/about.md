# Array.prototype.filter()

O método `filter()` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

## Sintaxe

```javascript
const predicateCallback = (currentValue, index, originalArray) => {
  // Função é um predicado, para testar cada elemento do array. 
  // Retorna true para manter o elemento, false caso.
};

// Retorna um novo array com os elementos que passaram no teste
const newArray = anArray.filter(predicateCallback)
```

Consulte mais [aqui na documentação][docs]!

[docs]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter