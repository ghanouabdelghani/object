const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// const personAccount = {
//   firstName: "",
//   lastName: "",
//   incomes: [],
//   expenses: [],
//   totalIncomes() {
//     // let somme = 0;

//     // for (let i = 0; i < this.incomes.length; i++) {
//     //   somme = somme + this.incomes[i].income;
//     // }
//     // return somme;
//     return this.incomes.reduce((incomObj, numObj) => {
//       return incomObj.income + numObj.income;
//     });
//   },
//   totalExpense() {},
//   accountInfo() {},
//   addIncome(income, description) {
//     this.incomes.push({
//       income,
//       description,
//     });
//   },
//   addExpense() {},
//   accountBalance() {},
// };

// personAccount.addIncome(300, "salary");
// personAccount.addIncome(500, "gift");
// console.log(personAccount.incomes);
// console.log(personAccount.totalIncomes());

// incomes: [
//   {
//     income: 0,
//     description: ''
//   }
// ],

// expenses: [
//   {
//     income: 0,
//     description: ''
//   }
// ],

const personAccount = {
  firstName: "",
  lastName: "",

  incomes: [],
  expenses: [],

  totalIncome() {
    // this function calculates the total of incomes
    let total = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      total = total + this.incomes[i].income;
    }

    return total;
  },
  totalExpense() {
    // this function calculates the total of expenses
    let totale = 0;
    for (let index = 0; index < this.expenses.length; index++) {
      totale = totale + this.expenses[index].expense;
    }
    return totale;
  },
  accountInfo() {
    // this function displays the account information
  },
  addIncome(income, description) {
    // this function creates new incomes
    this.incomes.push({
      income,
      description,
    });
  },
  addExpense(expense, description) {
    // this function creates new expenses
    this.expenses.push({
      expense,
      description,
    });
  },
  accountBalance() {
    // this function displays the account balance
    return this.totalIncome() - this.totalExpense();
  },
};

personAccount.addIncome(300, "Salary");
personAccount.addIncome(700, "Gift");
personAccount.addIncome(1000, "Sugar Daddy");
personAccount.addIncome(1000, "Sugar Daddy");
console.log(personAccount.totalIncome());
personAccount.addExpense(250, "shoes");
personAccount.addExpense(700, "iphone");
console.log("walou", personAccount.expenses);
personAccount.totalExpense;
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

const signUp = (X) => {
  // adds a user to the collection if he/she doesn't exist
  // if the user exists, throws an error
};

const signIn = (X) => {
  // allows the user to sign in (se connecter)
};

const rateProduct = () => {
  // creates an object inside the ratings property so
  // ratings: [
  //   {
  //     userId: 'aléatoire',
  //    rate: 0-5
  // ],
};

const averageRating = () => {
  // calculates the average rating of a product
};

const likeProduct = () => {
  // allows to add a like to a product if it doesn't exist
  // removes the existing likes if it exists before
};
