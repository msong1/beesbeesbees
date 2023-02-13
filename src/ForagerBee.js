var ForagerBee = function() {
  // Bee is the superclass
  Bee.call(this);

  // change properties
  this.age = 10;
  this.job = 'find pollen';

  // add new properties
  this.canFly = true;
  this.treasureChest = [];

};

// set up the class relationship, re-assign the constructor
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// add new methods
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

