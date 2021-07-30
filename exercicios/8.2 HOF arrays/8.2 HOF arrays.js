// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
// Array.prototype methods

// ************* forEach **************
// each element pass through parameter specified
// Exemplo 1:
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// Exemplo 2:
let names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


// ************* find **************
// return first element that match parameter specified
// Exemplo 1:
numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.find(verifyEven);
console.log(isEven);

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2); // 30

// Exemplo 2:
names = ['Irene', 'João', 'Fernando', 'Maria'];
const findNameWithFiveLetters = names.find((name) => name.length < 5);
console.log(findNameWithFiveLetters); // João

// Exemplo 3:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
};

console.log(findMusic('31031685'));
// { id: '31031685', title: 'Partita in C moll BWV 997' }

// ************* some **************
// true if at least one element match parameter specified
names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((currentName) => currentName === name);
}
console.log('some1 has name Ana?', hasName(names, 'Ana')); // true

// ************* every **************
// true if all elements match parameter specified
let people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((person) => person.age >= minimumAge);
}

console.log('all >= age 18?', verifyAges(people, 18)); // false

// ************* sort **************
people.sort((personA, personB) => personA.age - personB.age);
console.log(people);

const array = [1, 2, 3];

// ************* map **************
// creates a new array passins through function
const myMap = array.map(x => x * 2);
console.log(myMap); // [ 2, 4, 6 ]

// ************* filter **************
// creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'exuberant', 'elite', 'destruction'];
const result = words.filter(word => word.length < 6);
console.log(result); // [ 'spray', 'limit', 'elite' ]

// ************* reduce **************
// reduce method executes function (that you provide) on each element of the array,
// resulting in a single output value.
const sum = (accumulator, currentValue) => accumulator + currentValue;
console.log(array.reduce(sum)); // 6