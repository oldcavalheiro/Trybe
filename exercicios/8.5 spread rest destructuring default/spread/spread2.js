const assert = require('assert');

const onlineGames = ['Dota', 'Lol', 'CS:GO', 'Tibia'];
const offlineGames = ['Simcity', 'San Andreas', 'Mario', 'Stardew Valley'];

const awesomeGames = [...onlineGames, ...offlineGames];
// const awesomeGamesTrampo = [onlineGames[0], onlineGames[1], offlineGames[0]]

assert.deepStrictEqual(
  awesomeGames,
  ['Dota', 'Lol', 'CS:GO', 'Tibia', 'Simcity', 'San Andreas', 'Mario', 'Stardew Valley'],
);