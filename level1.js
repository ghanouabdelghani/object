// 1
// const dog = {};
// 2
// console.log(dog);
// 3
//Method 1 direct declaration
//  const dog = {
//    name: "Rex",
//    legs: 4,
//    color: "brown",
//    age: 10,
//   bark: () => console.log("woof woof"),
//  };
// console.log(dog);
//  dog.bark();

// Method 2 Class and Instance

// Super Class (Classe Mére)
class Dog {
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
// Sub Class (Fille)

// 4
 const Dog1 = new Dog("Rex", 4, "Brown", 10);

 console.log(Dog1);

//5
class Dog2 extends Dog {
  constructor(name, legs, color, age, breed) {
    super(name, legs, color, age);
    this.breed = breed;
  }
  getDogInfo() {
    console.log(
      `this dog name is ${this.name}, and it's ${this.age} years old`
    );
  }
}

const dog4 = new Dog2("Rex", 4, "Brown", 10, "chiwawa");

console.log(dog4);
dog4.getDogInfo();

// let maxSkills = 0;
// let userWithMaxSkills;

// for (const user in users) {
//   if (users[user].skills.length > maxSkills) {
//     maxSkills = users[user].skills.length;
//     userWithMaxSkills = user;
//   }
// }

// console.log(userWithMaxSkills, 'has the most skills with a total of', maxSkills);

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// let ages = [33, 54, 56, 76, 78, 90, 78, 55];
// let max = ages[0];
// for (let index = 0; index < ages.length; index++) {
//   if (ages[i] < max) {
//     max = ages[i];
//   }
// }
// let maxSkills = users.Alex.skills.length;
// let maxUser = "";
// for (let user in users) {
//   console.log(users[user].skills.length);
//   if (users[user].skills.length > maxSkills) {
//     maxSkills = users[user].skills.length;
//     maxUser = user;
//   }
// }

// console.log(maxSkills);
// console.log(maxUser);

// let cont = 0;
// for (let user in users) {
// }

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// let mearnUsers = [];
// for (let user in users) {
//   if (
//     users[user].skills.includes("react" && "Express" && "Node" && "MongoDB")
//   ) {
//     mearnUsers.push(user);
//   }
// }
// console.log(mearnUsers);

// const newUser = { name: "ghanou", age: 18 };
// users.newUser = newUser;

// console.log(users);

// const keys = Object.keys(users.Alex);
// console.log(keys);
// const values = Object.values(users.Alex);
// console.log(values);
