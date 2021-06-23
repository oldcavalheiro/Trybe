/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let a = "TORRE"; // bispo cavalo torre rainha dama rei
a = a.toLocaleLowerCase();

if (a == 'peao') {
    console.log("peao -> vertical");
} else if (a == 'bispo') {
    console.log("bispo -> diagonais");
} else if (a == 'cavalo') {
    console.log("cavalo -> L ");
} else if (a == 'torre') {
    console.log("torre -> horizontal e vertical");
} else if (a == 'dama' || a == 'rainha') {
    console.log("dama ou rainha -> todas direcoes ");
} else if (a == 'rei') {
    console.log("rei -> todas direcoes");
} else {
    console.log("peca invalida");
}
    