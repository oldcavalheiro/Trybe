// Application Progamming Interface
// API é uma forma de trafegar dados entre aplicações.
// oda API é um back-end, mas nem todo back-end é uma API

// back-end padrão:
// acessar site faz um request ao servidor,
// que te retorna um template como response

// API
// acessar site faz um request ao API
// geralmente retorna JSON como response

/* JSON - Java Script Object Notation
{
  "trybers": [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}
*/
// compatível com Python, Java, PHP, Ruby, entre outras.

// Assincrono (ao mesmo tempo) > Sincrono (fila)
// para fazer uma função executar somente depois de outra passou a usar callbacks
// callbacks crescia de forma descontrolada criando "callBack hell"
// Para contornar o problema, as callbacks deram lugar às Promises

/*
promise é assincrona
promise tem 3 estados: Pending , Fulfilled e Rejected
quando executada : Pending
retorna : Fulfilled ou Rejected

        return:     interrompe a execução da função
resolve/reject: NAO interrompe a execução da função
*/

/*
/* syntaxe:
const promise = new Promise((resolve, reject) => {
  // code
});
.then(()=>)
.then(()=>)
.catch(()=>);
*/

// simular uma situação de sucesso e erro
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
  // chaining: cada .then espera o then anterior para ser executado
  // retorna number e o joga em uma string
  .then(number => `Que sucesso número foi ${number}`)

  // recebe no param msg o retorno do then anterior (`string ${number}`) e exibe a msg
  .then(msg => console.log(msg))

  // em caso de reject executa o catch.
  .catch(number => console.log(`Que fracasso número foi ${number}`));