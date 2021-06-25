/* imprima com asteriscos um triângulo invertido de tamanho n
Exemplo: n = 5
    *
   **
  ***
 ****
*****
*/                  //   y - coluna
let n = 5;          //   |            
let texto = '';     //   |
let posicao = n;    //  _|________ x - linha

for (let x = 0; x < n; x += 1){
    for (let y = 0; y <= n; y += 1) {
        if (y < posicao) {
            texto = texto + ' ';
        } else {
            texto = texto + '*';
        }
    }
    console.log(texto);
    texto = '';
    posicao -= 1;
}
