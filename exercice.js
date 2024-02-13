const dog = {
  name: "hani",
  legs: 4,
  color: "black",
  age: 5,
  bark: () => console.log("woof woof"),
};

console.log(dog);
dog.bark();

class Dogy {
  constructor(name, legs, color, age) {
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.age = age;
  }

  bark() {
    console.log("Woof Woof");
  }
}

const Dog5 = new Dogy("Rex", 4, "Brown", 10);

console.log(Dog5);

class dog1 extends Dogy {
  constructor(name, color, age, legs, breed) {
    super(name, color, age, legs);
    this.breed = breed;
  }
  getDoginfo() {
    console.log(`this dog name is ${this.name} and it's ${this.age} years old`);
  }
}

const boolby = new dog1("Rex", 4, "Brown", 10, "pitbull");
console.log(boolby);
boolby.getDoginfo();
