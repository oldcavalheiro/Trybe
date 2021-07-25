const original = {
  name: "Fiesta",
  car: {
    color: "blue",
  },
};

const copied = Object.assign({}, original);

console.log("-------- before -------");
console.log("original: ", original);
console.log("copied: ", copied);

original.name = "Focus";
original.car.color = "yellow";

console.log("-------- after -------");
console.log("original: ", original);
console.log("copied: ", copied);

copied.car.color = "red";
copied.name = "Ka";

console.log("-------- after 2 -------");
console.log("original: ", original);
console.log("copied: ", copied);