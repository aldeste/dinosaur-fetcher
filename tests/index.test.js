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
    const randomItem = dinosaurs.random();
    expect(dinosaurs.all).to.include(randomItem);
  })

  it('should return a an array of random items, if passed a number', () => {
    const randomItems = dinosaurs.random(3);
    expect(randomItems).to.have.length(3);
    randomItems.map(dino => {
        expect(dinosaurs.all).to.include(dino);
    });
  });
})
