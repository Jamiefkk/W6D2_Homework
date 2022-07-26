const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;

  beforeEach(function () {
    park = new Park('Jurassic Park', 45);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('tricero', 'omnivore', 20);
    dinosaur3 = new Dinosaur('big daddy', 'carnivore', 80);
    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 45);


  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });
    

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 45)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [])

  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1, dinosaur2])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2); 
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [dinosaur1])
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.attractsTheMost('t-rex');
    assert.equal(actual, 'big daddy')
  });

  xit('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaursOfASpecies();
    assert.deepEqual(actual, [dinosaur1, dinosaur4])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalVisitorsDay();
    assert.deepEqual(actual, 195)
  });


  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalVisitorsYear();
    assert.deepEqual(actual, 71175)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalRevenuePerYear();
    assert.deepEqual(actual, 3202875)
  });

});
