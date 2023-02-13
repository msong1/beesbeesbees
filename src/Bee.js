var Bee = function() {
  Grub.call(this);
  // we want to inherit some properties from Grub
  // but also want to change some properties
  // re-assign those properties
  this.age = 5;
  this.color = 'yellow';
  // skip this.food since we want to keep it same as Grub class

  // add a new property
  this.job = 'keep on growing';
};

// when a 'function' is made, prototype is made, too.
// set the sub-super class relationship
Bee.prototype = Object.create(Grub.prototype);
// now the Bee.prototype is replaced as an instance of Grub.prototype.
// Thus, Bee.prototype will have all the methods of Grub.prototype
// including '.constructor' method which will point to 'Grub' function
// we'd want to keep the '.constuctor' methods pointing at 'Bee' function.
// Thus, re-assign the constructor proprerty of Bee prototype
Bee.prototype.constructor = Bee;


