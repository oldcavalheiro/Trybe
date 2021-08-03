// Exemplo 1
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

let { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// Exemplo 2 usando metodos
let movies = [
  {
    title: 'Waterworld',
    score: 62,
    year: 1995
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2019
  },
  {
    title: 'Alien',
    score: 90,
    year: 1979
  }
]
// movies.filter((movie) => movie.score >= 90)
console.log(movies.filter(({ score }) => score > 90));

// Exemplo 3: atribuindo outro nome a key
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: classAssigned, c: subject } = student;

console.log(nome); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// Exemplo 4:
const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => (
  `${name} is ${age} years old and likes ${likes.join(', ')}.`
);

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(
  personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.',
);

// Exemplo 5: 
// função filterPeople dada uma lista de pessoas,
// retorna todas as pessoas australianas que nasceram no século 20:
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (arr) => arr.filter(
  ({ nationality, bornIn }) =>
    nationality === 'Australian'
    && bornIn > 1900 && bornIn <= 2000,
);

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(
  filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' },
);
assert.deepStrictEqual(
  filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' },
);