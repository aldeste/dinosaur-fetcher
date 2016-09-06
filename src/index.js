const uniqueRandomArray = require('unique-random-array');
const dinosaurs = require('./dinosaurs.json');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrValue(arr, min = 1, max = arr.length) {
  return arr[getRandomInt(min, max)];
}

function random(number = 1) {
  if (number === 1) {
    return getRandomArrValue(dinosaurs);
  } else {
    const l = dinosaurs.length;
    return new Array(number).map(() => getRandomArrValue(dinosaurs, 1, l));
  }
}

module.exports = {
    all: dinosaurs,
    random: random
};
