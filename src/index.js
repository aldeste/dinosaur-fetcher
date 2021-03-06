const dinosaurs = require('./dinosaurs.json');

/**
 * Generates a random number
 * @param  {Number} min Minimum value
 * @param  {Number} max Maximum value
 * @return {Number}     A random number between min and max
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get a random value from an array
 * @param  {Array}  arr Array of values
 * @param  {Number} min Minimum key value
 * @param  {Number} max Maximum key value
 * @return              Random value from initial array
 */
function getRandomArrValue(arr, min = 0, max = arr.length - 1) {
  return arr[getRandomInt(min, max)];
}

/**
 * Returns a random dinosaur or more random dinosaurs if number is set
 * @param  {Number}       number If set, returns an array of dinosaurs
 * @return {String|Array}        Single dinosaur or array of dinosaurs
 */
function random(number = 1) {
  if (1 > number) {
    throw Error(`Can't use numbers bellow 1, ${number} passed`);
  }

  if (number === 1) {
    return getRandomArrValue(dinosaurs);
  } else {
    const l = dinosaurs.length - 1;
    return new Array(number).fill().map(() => getRandomArrValue(dinosaurs, 0, l));
  }
}

module.exports = {
    all: dinosaurs,
    random
};
