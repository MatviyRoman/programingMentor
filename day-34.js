// https://www.codewars.com/kata/basic-subclasses-adam-and-eve/

// https://www.codewars.com/kata/56ff9b53140fcca90b000530/

class Dog {
  constructor(name, age, gender, species, legs, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = legs;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}

// class Dog {
//   constructor(name, age, gender, species, legs, size, master, loyal) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = species;
//     this.legs = legs;
//     this.size = size;
//     this.master = master;
//     this.loyal = loyal;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Labrador extends Dog {
//   constructor(dog, mod) {
//     super(dog);
//     this.model = mod;
//   }
//   show() {
//     return this.dog() + this.model;
//   }
// }

// https://www.codewars.com/kata/55a144eff5124e546400005a
