// 1. Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

// 2.
console.log(`\n2. e agora qual a ordem de impressão?`);
setTimeout(() => console.log(planetDistanceFromSun(mars)), 2000); // C
console.log(planetDistanceFromSun(venus)); // A
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 3000); // B

// 3. getPlanet imprime planeta depois de 4 segundos
const getPlanet = (planet) =>
  setTimeout(() => console.log(`\n3. Returned planet: ${planet}`), 4000);

getPlanet("mars"); // imprime Marte depois de 4 segundos

// 4. Retorna temperatura de marte entre 4 a 7 segundos
const messageDelay = () => (Math.floor(Math.random() * 7000)) + 4000;

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`\n4. Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo