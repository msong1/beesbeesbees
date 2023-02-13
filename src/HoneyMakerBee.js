var HoneyMakerBee = function() {
  // Bee is the superclass
  Bee.call(this);

  // change properties
  this.age = 10;
  this.job = 'make honey';

  // create new properties
  this.honeyPot = 0;
};

// set the prototype and re-assign the constructor
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// create new methods
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

