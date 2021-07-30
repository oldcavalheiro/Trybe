# Array.prototype.map()

O método `map()` invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

O novo array conterá sempre a mesma quantidade de elementos do array original.

## Sintaxe

```javascript
const mapper = (currentValue, index, originalArray) => {
  // Função cujo retorno produz o elemento do novo Array.
  // TEM que retornar algo, caso contrário será criado um novo
  // array de undefined
};

const newArray = anArray.map(mapper)
```

Consulte mais [aqui na documentação][docs]!

[docs]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map