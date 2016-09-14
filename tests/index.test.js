const expect = require('chai').expect;
const dinosaurs = require('../src/index.js');

describe('all', () => {
  it('Should be an array of strings', () =>
    expect(dinosaurs.all).to.satisfy(array => array.every(dinosaur => typeof dinosaur === 'string'))
  );

  it('Should contain Antrodemus', () => {
    expect(dinosaurs.all).to.include('Antrodemus');
  });
});

describe('random', () => {
  it('Should return a random dinosaur', () => {
    const dino = dinosaurs.random();
    expect(dinosaurs.all).to.include(dino);
  })

  it('Should return a an array of random dinosaurs if passed a number', () => {
    const dinos = dinosaurs.random(3);
    expect(dinos).to.have.length(3);
    expect(dinosaurs.all).to.include.members(dinos);
  });

  it('Should throw an error if numbers below 1 are passed as parameter', () => {
    expect(() => dinosaurs.random(-1)).to.throw(Error);;
  })
})
