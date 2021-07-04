// 5.função que receba um array de inteiros
// e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3]; // 2




let counts = {};

array.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)
