var RetiredForagerBee = function() {
  // ForagerBee is the superclass
  ForagerBee.call(this);

  // change properties
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

// set up the class relationship, re-assign the constructor
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// change methods
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

// add new methods
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};