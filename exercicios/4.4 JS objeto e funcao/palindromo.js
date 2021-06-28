
function palindromo(palavra) {
    for (let caracter in palavra) {
        console.log(
            caracter
            + palavra[caracter]
            + " "
            + ((palavra.length - 1) - caracter)
            + palavra[(palavra.length - 1) - caracter])
        if (palavra[caracter] != palavra[(palavra.length - 1) - caracter]) {
            return false;
        }
    }
    return true;
}

console.log(palindromo('arara'));

