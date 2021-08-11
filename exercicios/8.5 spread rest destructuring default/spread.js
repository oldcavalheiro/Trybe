const assert = require('assert');

// Exemplo 1: spread as parameter
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
console.log(imc(...patientInfo)); // 20.76

// Exemplo 2: spread with method
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Exemplo 3
const names = ['Fernanda', 'Bernardo', 'Joicy', 'Giovanni', 'Karine'];
// console.log(names);
// console.log(names[0], names[1], names[2], names[3], names[4]);
console.log(...names);

// Exemplo 4
const onlineGames = ['Dota', 'Lol', 'CS:GO', 'Tibia'];
const offlineGames = ['Simcity', 'San Andreas', 'Mario', 'Stardew Valley'];

const awesomeGames = [...onlineGames, ...offlineGames];
// const awesomeGamesTrampo = [onlineGames[0], onlineGames[1], offlineGames[0]]

assert.deepStrictEqual(
  awesomeGames,
  ['Dota', 'Lol', 'CS:GO', 'Tibia', 'Simcity', 'San Andreas', 'Mario', 'Stardew Valley'],
);

// Exemplo 5
// No aplicativo Uber, por exemplo, conseguimos ver a localização
// A gente consegue ver a localização da pessoa motorista no mapa
// Vamos supor que o app receba as coordenadas neste seguinte formato

const point = [1.0, 2.2];
const otherPoint = [0.1, 3.5, -99.6, 77.8, 34];

const printPointCoordinates = (x, y, z = 0) =>
  `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;

assert.strictEqual(
  printPointCoordinates(...point, -6.6),
  'Point coordinates are x = 1, y = 2.2 and z = -6.6',
);

assert.strictEqual(
  printPointCoordinates(...point),
  'Point coordinates are x = 1, y = 2.2 and z = 0',
);

assert.strictEqual(
  printPointCoordinates(...otherPoint),
  'Point coordinates are x = 0.1, y = 3.5 and z = -99.6',
);


