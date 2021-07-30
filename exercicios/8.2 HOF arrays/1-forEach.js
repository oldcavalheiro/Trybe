const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nomes = ["Thiago", "Hugo", "Bernardo"];

// exibir um valor por vez

function imprimirValores(valor, indice, vetor) {
  console.log(`valor[${indice}]: `, valor);
  console.log(vetor);
}

nomes.forEach(imprimirValores);

// numbers.forEach((valor) => console.log(valor));



// Como funciona forEach por dentro?

function myForEach(array, blockfn) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    blockfn(element, index, array);
  }
}

const funcao = (valor, i) => console.log(`valor[${i}] = ${valor}`);

myForEach(nomes, funcao);
