// Exemplo 1
setTimeout(() => {
  console.log('Comprar parafusos')
  console.log('Adicionar ao estoque')
}, 2000); // 2000 = 2000ms = 2seg.

console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');



// Exemplo 2: qual ordem vai exibir os console.logs e seus resultados?
let timeA = 100;
let timeB = 50;
let numA = 4;
let numB = 6;
let numC = 2;

const sum = (a, b) => a + b;

setTimeout(() => {
  numC = sum(numA, numB);
  console.log(numC); // console.1
}, timeA);

console.log(numC); // console.2

setTimeout(() => {
  console.log(sum(numA, numC) === numB); // console.3
}, timeB);

// Exemplo 3:
// 1.Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C