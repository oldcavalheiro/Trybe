/* faça uma pirâmide como no exemplo:
  *
 ***
*****
*/
let n = 5;
let texto = '';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let x = 0; x <= meio; x += 1) {
  for (let y = 0; y <= n; y += 1) {
    if (y > esquerda && y < direita) {
      texto = texto + '*';
    } else {
      texto = texto + ' ';
    }
  }
  console.log(texto);
  texto = '';
  direita += 1;
    esquerda -= 1;
};
