const pizzas = ["Frango com Catupiry", "Marguerita", "Gratinada", "4 Queijos"];

// comparar e ordernar // compare

pizzas.sort((a, b) => {
  // Tem que retornar um number
  // -1, 0, +1
});

// ordenação crescente
function ascComparator(leftHandSide, rightHandSide) {
  if (leftHandSide < rightHandSide) {
    return -1;
  }
  if (leftHandSide > rightHandSide) {
    return 1;
  }
  return 0;
}

// ordenação decrescente
function descComparator(leftHandSide, rightHandSide) {
  console.log(`leftHandSide: ${leftHandSide}`);
  console.log(`rightHandSide: ${rightHandSide}`);
  console.log(`-------------------`);

  if (leftHandSide > rightHandSide) {
    return -1;
  }
  if (leftHandSide < rightHandSide) {
    return 1;
  }
  return 0;
}

console.log(pizzas.sort(ascComparator));
console.log(pizzas.sort(descComparator));

const numbers = [8, 3, 2, 10, 6, 6, 7, 1, 9, 4];

// console.log(numbers.sort(ascComparator));
// console.log(numbers.sort(descComparator));

// lhs = 2, rhs = 1 -> 2 - 1 = 1
// lhs = 1, rhs = 2 -> 1 - 2 = -1
// lhs = 1, rhs = 1 -> 1 - 1 = 0
console.log(numbers.sort((lhs, rhs) => lhs - rhs));
console.log(numbers.sort((lhs, rhs) => rhs - lhs));

// Exercicio 1:
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((personA, personB) => personA.age - personB.age);

console.log(people);