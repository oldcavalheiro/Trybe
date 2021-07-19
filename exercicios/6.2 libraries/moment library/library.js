// https://momentjs.com/
// npm install moment --save
  // ao instalar cria arquivo: package-lock.json

// import library
let moment = require("moment");

let brasilTetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow();

console.log(fromNow);

/*
CDN ( Content Delivery Network )
https://cdnjs.com/libraries

// https://cdnjs.com/libraries/moment.js

vantages:
* Layout da página;
* Acessibilidade;
* Manipulação DOM;
* Efeitos e animação;
* Gráficos e quadros;
* Suporte para dispositivos móveis;
*/
