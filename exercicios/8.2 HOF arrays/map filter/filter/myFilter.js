const { numbers, names, cities } = require("../data");

console.log("Como a função filter seria por dentro? 🤔");

function myFilter(originalItems, mustBeIncluded) {
  const newArray = [];
  
  originalItems.forEach((element) => {
    if (mustBeIncluded(element)) {
      newArray.push(element);
    }
  });

  return newArray;
}

// Listar os números maiores que 5
const deveSerIncluido = (myParameter) =>  myParameter > 5;
 
const filteredNumbers = myFilter(numbers, deveSerIncluido)

console.log('originalNumbers =', numbers);
console.log('filteredNumbers =', filteredNumbers);

// Listar os números maiores que 8 e os menores que 5
const req2 = (num) => num > 8 || num < 5;

const req2Result = myFilter(numbers, req2);
console.log('req2Result =', req2Result);



// Listar os números entre 5 e 8

// Listar os nomes que começam com A

// Listar os nomes que começam com J

// Listar as cidades da região Norte

// Listar as cidades da região Nordeste e Sudeste
