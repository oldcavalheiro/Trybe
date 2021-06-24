// 1. percorra o array imprimindo todos os valores nele contidos
console.log("exercicio 1");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 2. some todos os valores contidos no array e imprima o resultado
console.log("\nexercicio 2");
let soma = 0;
for (var i = 0; i < numbers.length; i++) {
    soma = soma + numbers[i];
}
console.log(soma); // 278

// 3. calcule a média aritmética dos valores contidos no array;
console.log("\nexercicio 3"); // qtdElementos contado com i no 2.
console.log(soma / i); // i declarado com var (outscoped).

/* 4. Com o mesmo código do exercício anterior,
 caso o valor final seja maior que 20, 
 imprima a mensagem: "valor maior que 20". 
 Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */
 console.log("\nexercicio 4");
if (soma/i > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}

// 5. Utilizando for , descubra qual o maior valor contido no array.
console.log("\nexercicio 5");
i = 0; // zerando contador
let maiorNumero = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (maiorNumero > numbers[i]) {
        continue;
    } else { maiorNumero = numbers[i];}
}
console.log(maiorNumero);

/* 6. Descubra quantos valores ímpares existem no array;
Caso não exista nenhum, imprima "nenhum valor ímpar encontrado" */
console.log("\nexercicio 6");
let nImpares = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 0) {
        continue
    } else { nImpares += 1; }
}
console.log(nImpares);

// 7. Utilizando for , descubra qual o menor valor contido no array.
console.log("\nexercicio 7");
let menorNumero = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (menorNumero < numbers[i]) {
        continue;
    } else { menorNumero = numbers[i];}
}
console.log(menorNumero);