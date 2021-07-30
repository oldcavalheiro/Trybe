const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// `find`: encontra o primeiro elemento em um array que bate com uma condição;
// Se não encontrar nenhum elemento, retorna unidefined;

users.find((valor, indice, array) => {
  // return true / false
});

// encontrar a primeira pessoa que não é motorista
const firstNotDriver = users.find((user) => user.isDriver === false);
console.log('A primeira pessoa que não é motorista é', firstNotDriver);

// A primeira pessoa cujo nome é Maggie
console.log(users.find((value) => value.firstName === "Maggie"));


// Exercicio 1: primeiro número do array que é divisível por 3 e 5
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}
console.log(findDivisibleBy3And5())

// Exercicio 2: primeiro nome com cinco letras
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 5);
}
console.log(findNameWithFiveLetters());

// Exercicio 3: música com id igual a 31031685
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}
console.log(findMusic('31031685'))