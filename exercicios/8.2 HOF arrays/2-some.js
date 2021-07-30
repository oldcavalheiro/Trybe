const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

// some: retorna true se ao menos 1 elemento do array bater com
// uma condição. Caso contrário, retorna `false`.

// Se parece com o operador lógico OR -> ||

// const condicao = (valor, indice, arrayOriginalCompleto) => {
//   // tem OBRIGATORIAMENTE que retornar um boolean
//   // return true / false;
// };

// ages.some(condicao)

// Queremos mostrar uma propaganda com uma foto de uma
// cerveja, mas não queremos mostrá-la para nenhum das pessoas
// se algum dos membros do grupo for menor de 18 anos.

// tem alguma pessoas menor de idade? // lessThan18

const condicao = (valor) => {
  console.log(`valor: ${valor}`);
  return valor < 18;
};

console.log("Alguma idade menor que 18 no array ages? ", ages.some(condicao));

console.log("-------------------");

console.log(
  "Alguma idade menor que 18 no array moreAges? ",
  moreAges.some(condicao)
);

// COMO A FUNÇÃO SOME SE PARECE POR DENTRO?
const mySome = (array, callbackfn) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callbackfn(element, index, array)) {
      return true; // Early return
    }
  }

  return false;
};

console.log("-------------------");
const temAlgumValorMenorQue18 = mySome(ages, (age) => {
  return age < 18;
});

console.log(
  `Alguma idade menor que 18 no array ages? ${temAlgumValorMenorQue18}`
);

// Exercicio 1: existe aluma Ana?
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((currentName) => currentName === name);
}
console.log(hasName(names, 'Ana')); // true