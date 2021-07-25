const person = {
  name: "Bernugo",
  lastName: "Salferreira", // trilling comma
};

console.log(person);

console.table(person);

console.log(`Olá, querido ${person.name} ${person.lastName}!`);

console.log(`Olá, querido ${person["name"]} ${person["lastName"]}!`);

person.age = 33;
console.table(person);

person["isBeatiful"] = true;
console.table(person);

const personKeys = Object.keys(person);
console.log(personKeys);

console.log(`Contém a chave name? ${personKeys.includes('name')}`)
console.log(`Contém a chave xulambs? ${personKeys.includes("xulambs")}`);
console.log(`Contém a chave Bernugo? ${personKeys.includes("Bernugo")}`);

const personValues = Object.values(person);
console.log('personValues', personValues);

// const object = {};
// for (let index = 0; index < 10; index += 1) {
//   object[index] = "XABLAU";
// }

// console.table(object);
// console.log(object);

