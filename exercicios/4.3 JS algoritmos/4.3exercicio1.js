/* 1. dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
Por exemplo:
n = 3
***
***
***
*/
let n = 5;
let texto = '';

for (i = 0; i < n; i += 1){
    texto = texto + '*';
    
    // exercicio 2 triangulo retangulo
    console.log(texto);
}

// exercicio 1 quadrado
for (i = 0; i < n; i += 1){
    console.log(texto);
}

