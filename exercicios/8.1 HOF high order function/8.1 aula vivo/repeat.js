// Crie uma função que:

// 1. Dado um `número`
// 2. Dada uma `função`

// Execute a `callback` a quantidade de vezes dada pelo parâmetro `numDeVezes`

const repetir = (numDeVezes, callback) => {
  for (let count = 0; count < numDeVezes; count += 1) {
    callback(count);
  }
};

repetir(3, (xulambs) => {
  console.log(`Olá, pessoal! Esta é a ${xulambs} iteração!`);
});


const numbers = [1000, 2000, 3000, 4000];

repetir(numbers.length, (index) => {
  console.log(numbers[index]);
})