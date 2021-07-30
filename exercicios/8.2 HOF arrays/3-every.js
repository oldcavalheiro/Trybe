const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

// Função every: retorna `true` se TODOS os elementos do array
// baterem com uma condição. Retorna `false`, caso contrário.

// Se parece com o operador lógico AND -> &&

ages.every((value, index, array) => {
  // Tem que retornar um boolean
});

// todas as pessoas são maiores de idade?

const todasAsPessoasEmAgesMaioresDeIdade = ages.every((valor) => {
  return valor >= 18;
});

console.log(
  `Todas as pessoas em ages são maiores de idade? `,
  todasAsPessoasEmAgesMaioresDeIdade
);

console.log(
  `Todas as pessoas em moreAges são maiores de idade? `,
  moreAges.every((value) => value >= 18) // Fira Code -> font ligatures
);

// Exercicio 1: Todos são maior de idade?
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((person) => person.age >= minimumAge);
}

console.log(verifyAges(people, 18));