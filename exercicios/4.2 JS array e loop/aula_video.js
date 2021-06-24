let pizzas = ['4 queijos', 'mussarela', 'marguerita', 'palmito'];
pizzas.push("peito de peru"); // add no final do array

console.log("menu de sabores: " + pizzas);
console.log("Qtd de sabores: ", pizzas.length);
console.log(pizzas[0]);

for (let index = 0; index < pizzas.length; index++ ) {
    console.log(pizzas[index]);
}

pizzas.pop("peito de peru"); // remove ultimo iten no array

console.log(pizzas);

console.log(pizzas.indexOf('mussarela'))