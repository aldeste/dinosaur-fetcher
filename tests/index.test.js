const expect = require('chai').expect;
const dinosaurs = require('../src/index.js');

describe('all', () => {
  it('Should be an array of strings', () =>
    expect(dinosaurs.all).to.satisfy(array => array.every(dinosaur => typeof dinosaur === 'string'))
  );

  it('should contain Antrodemus', () => {
    expect(dinosaurs.all).to.include('Antrodemus');
  });
});

describe('random', () => {
  it('should return a random dinosaur', () => {
    const dino = dinosaurs.random();
    expect(dinosaurs.all).to.include(dino);
  })

  it('should return a an array of random items, if passed a number', () => {
    const dinos = dinosaurs.random(3);
    expect(dinos).to.have.length(3);
    dinos.map(dino => {
        expect(dinosaurs.all).to.include(dino);
    });
  });
})
