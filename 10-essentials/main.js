/*

// Modules - allow us to share code between files
// Modules - allow us to share code between files
// import {getDate, year as currentYear} from  './utils/date.js';
import getDate from "./utils/date.js";
const year = 2022
class App{
   constructor(){
    this.render()
   } 

   render(){
    const root = document.getElementById('root');
    root.innerHTML = `
    
    <div className="date">Date:${getDate()}</div>
    `;
   }
}

new App()


// <div className="date">Date:${getDate()}, <br />  Year: ${currentYear}</div>
*/
// This

/*

this: reference to an object
4 Rules to 'this'. How is it called?

1) in the global context
2) as a method on an object
3) as a constructor function or class constructor
4) as a DOM event handler

*/

// global onject

// function whatIsThis() {
//   console.log(this);
//  this.something = 2;
//  console.log(something);
// }

// whatIsThis();

// method of object

// const user = {
//   first: "Reed",
//   last: "Barger",
//   greetUser() {
//     console.log(`Hi, ${this.first} ${this.last}`);
//   },
// };

// user.greetUser()
// as method
// const userInfo = {
//   title: "Programmer",
//   user: {
//     first: "Reed",
//     last: "Barger",
//     greetUser() {
//       console.log(`Hi, ${this.first} ${this.last}`);
//     },
//   },
// };

// userInfo.user.greetUser();

//as a constructor function or class constructor

// class User{
//     constructor(first, age){
//     this.first = first;
//     this.age = age;
//     }

//     getAge(){
//         console.log( `${this.first} age is ${this.age}`);
//     }
// }
//  const user = new User("Bob", 24);

//  user.getAge()

//
// function User(first, age){
// this.first = first;
// this.age = age;
// }

// User.prototype.getAge = function(){
//    console.log(`${this.first} age is ${this.age}`);
// }

// const user2 = new User('Jane', 25);
// user2.getAge();

// event handler

// const button = document.createElement('button');
// button.textContent = 'Click';
// document.body.appendChild(button);

// button.addEventListener('click', function(){
//     console.log(this);
// })

//// call(), apply(), bind()

/*

function whatIsThis() {
  console.log(this);
}

const test = whatIsThis.call({first: "Reed"});
console.log(test);



const user = {
  name: "Reed",
  title: "Programmer",
};

function printUser() {
  console.log(`${this.name} is a ${this.title}`);
}

printUser.call(user);
printUser.apply(user);
*/

/*
const user = {
  name: "Reed",
  title: "Programmer",
};

function printBio(city, country) {
  console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
}

printBio.call(user, "London", 'England'); // we can apply arguments
printBio.apply(user, ['London', 'England']); // arguments as an array

*/

// bind() // for the life of the program
/*
const user = {
  name: "Reed",
  title: "Programmer",
};

function printUser() {
  console.log(`${this.name} is a ${this.title}`);
}

printUser.call(user);
printUser.apply(user);
const userDescription = printUser.bind(user);
userDescription()

const user2 = {
  name: "Doug",
  title: "Entrepreneur",
};

printUser.bind(user2); //for the life of the program
printUser.call(user2); // changed

userDescription();
*/
/*
// state - data to be managed in app
// state -> status
// state - data to be managed in app
// state -> status

class App {
  constructor() {
    this.state = {
      isAuth: false,
      error: "",
    };

    this.checkAuth();
    this.render();
    // this.$userMessage = document.getElementById("user-message");
  }

  checkAuth() {
    const user = false;
    if (user) {
      this.state = { ...this.state, isAuth: true };
      //   this.$userMessage.textContent = "Welcome back!";
    } else {
      this.state = { ...this.state, error: "You must sign in!" };
      //   this.$userMessage.textContent = "You must sign in!";
      //   this.$userMessage.style.color = "red";
    }
  }

  render() {
    const { isAuth, error } = this.state;

    document.getElementById("root").innerHTML = `
      <div style="color: ${error && "red"}">
        ${isAuth ? "Welcome back!" : error}
      </div>
    `;
  }
}

new App();
*/

// reducers - helps us manage app state

// const reducer = (state, action) => newState;

// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// counterReducer(0, { type: 'INCREMENT' }); // 1
// const result = counterReducer(1, { type: 'DECREMENT' }); // 0
// console.log(result === 0);

/*
const initialUser = {
  name: "Mark",
  email: "mark@gmail.com",
};

function userReducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload.email };
    default:
      return state;
  }
}

const result = userReducer(initialUser, {
  type: "CHANGE_EMAIL",
  payload: { email: "mark@compuserve.com" },
});
console.log(result.email === "mark@compuserve.com");
*/

// write declarative code avoid imperative 

// Imperative - code for a computer / declarative - code for people

//imperative
/*

const people = ["Doug", "Fred", "Jane"];
const invitations = [];

for (let i = 0; i < people.length; i++) {
  invitations[i] = `Hi ${people[i]}, come to my party!`;
}

console.log(invitations);
*/
//declarative
const people = ["Doug", "Fred", "Jane"];
const invitations = people.map((person) => `Hi ${person}, come to my party!`);

console.log(invitations);
