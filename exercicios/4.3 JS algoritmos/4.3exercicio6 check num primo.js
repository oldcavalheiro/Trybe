// verificar se é número primo
let divisor = 1;
let numberToCheck = 31;

for (let i = 2; i <= numberToCheck; i += 1) {
  if (numberToCheck % i === 0) divisor += 1;
}

if (divisor === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');