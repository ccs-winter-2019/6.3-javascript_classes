// function Fruit(){
//   this.sweet = true;
//   this.hasSeeds = true;
// }
//
// function Apple() {
//
// }
//
// Apple.prototype = new Fruit();
//
// let apple = new Apple();
// console.log('sweet', apple.sweet);

// Fruit acts as our constructor function
class Fruit {
  constructor(sweet, hasSeeds) {
    // this.sweet = true;
    // this.hasSeeds = true;
    this.sweet = sweet || 'true';
    this.hasSeeds = hasSeeds || 'true';
  }
}

var redDelicious = new Fruit();
var grannySmith = new Fruit('true', 'false');

console.log('redDelicious hasSeeds', redDelicious.hasSeeds);
console.log('grannySmith hasSeeds', grannySmith.hasSeeds);

class Animal {
  constructor(context) {
    this.eyes = 'blue';
    this.isFurry = context.isFurry || 'true';
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(context) {
    // If there is a constructor present in the subclass, it needs to first call super() before using "this"
    // We have a constructor in the subclass Dog
    // We must call super before using the keywork "this"
    super(context);
    this.color = context.color;
    this.name = context.name;
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

var joey = new Dog({name: 'Joey', isFurry: 'false', color: 'brown'});
var oz = new Dog({color: 'brown', name: 'Oz'});

joey.speak(); // Joey barks
oz.speak(); // Oz barks
