/*
Object.entries() returns an array of a given object's [key, value] pairs
Object.keys()    returns an array of a given object's names
Object.values()  returns an array of a given object's values*/

const person = {
  name: "Bernugo",
  lastName: "Salferreira", // trilling comma
};

console.log(person);

console.table(person);

console.log(`Olá, querido ${person.name} ${person.lastName}!`);
console.log(`Olá, querido ${person["name"]} ${person["lastName"]}!`);

// add age dentro de person
person.age = 33;
console.table(person);

// add isBeatiful
person["isBeatiful"] = true;
console.table(person);

const personKeys = Object.keys(person);
console.log('Object.keys', personKeys);

console.log(`Contém a chave name? ${personKeys.includes('name')}`)
console.log(`Contém a chave xulambs? ${personKeys.includes("xulambs")}`);
console.log(`Contém a chave Bernugo? ${personKeys.includes("Bernugo")}`);

const personValues = Object.values(person);
console.log('Object.values', personValues);

//const personValues = Object.entries(person);
console.log('Object.entries', Object.entries(person));

// const object = {};
// for (let index = 0; index < 10; index += 1) {
//   object[index] = "XABLAU";
// }

// console.table(object);
// console.log(object);

