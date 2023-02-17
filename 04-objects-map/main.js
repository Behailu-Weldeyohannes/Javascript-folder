//  Managing key-value pair
/*
const blue = '#00f'
const orange = '#06f'

// const colors = `${blueColor} ${orangeColor}`;

// const colors = {
// yellow: '#ff0',
// blue: blue,
// orange: orange
// }
// console.log(colors);
const colors = {yellow: '#ff0',blue, orange}
// console.log(colors);
// objectName.key
console.log(colors.blue);

// variables - boxes; objects - file cabinets

const obj = {
    sayHi(){
        console.log('Hi')
    }
}
// objectName.methodName();
obj.sayHi()

*/
/*
const bar = "Fun";
const cafe = "Kahldis";
const restaurant = "Beteseb";

const favoraitePlaces = {
    bar,
    cafe,
    restaurant,
    greeting(){
        console.log(`Welcome to ${bar}`);
        
    }
}

favoraitePlaces.greeting()

*/

/*
  undefined, null, boolean, number, string, symbol
*/
/*
// primitive - passed by value

const num = 'hello world';
const anotherNum = 'hello world';
console.log(num === anotherNum); // true

const obj = {};
const anotherObj = {};
console.log(obj === anotherObj); // false

// object - passed by reference
const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);
*/

// Get and Modify Object data

// const colors = {
//   red: "#f00",
//   orange: "#f60",
// };
// function getColor(){
//     console.log(colors);  
//     console.log(colors.red);  
//     console.log(colors.orange);  
// }

// getColor()
/*
const colors = {
    yellow: '#ff0',
  red: "#f00",
  orange: "#f60",
  'white color': '#ffffff'
};

// console.log(colors.yellow);

colors.red = '#f00'
colors.red = '#f00'
console.log(colors);
console.log('white color' + colors['white color']);
*/
/*
const color = "black";
const hexCode = "#000";

const colors = {
  "yellow Color": "#ff0",
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode,
};

// colors[color] = hexCode;
// console.log(colors);

function getColor(key){
    return colors[key]
}
console.log(getColor('orange'));

delete colors['yellow Color'];
delete colors.blue;
console.log(colors);
*/

// object destructuring

/*
const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer",
  },
};

// const {username, email} = user // destructuring 
// function displayUser(){
//     console.log(`username: ${user.username}, email: ${user.email}`);
//     console.log(`username: ${username}, email: ${email}`);
// }
// displayUser()
// const {title} = user.details
// const {name, username, email, details} = user
// const {name, username, email, details:{title}} = user
// function displayUserBio(){
//     console.log(`${name} is a ${title}.`);
// }

// displayUserBio()

function displayUserBio({name, username, email, details:{title}}){
    console.log(`${name} is a ${title}`);
}

displayUserBio(user)
*/
/*
const recommendations = {
  pancakes: "Nowhere Man",
  riceBowls: "Pompoko",
  beer: "The Craft Beer Co.",
  coffee: "Coffee Roasters",
  small_plates: "Venetian Plates",
  music: {
    traditional: "Fiddler's Elbow",
    jazz: "The Paris House",
  },
};

const { beer, coffe } = recommendations;

const {
  music: { traditional, jazz },
} = recommendations;

console.log(jazz);

function displayMusicPlaces({ music: { traditional, jazz } }) {
  console.log(`Head to ${traditional} or ${jazz} to listen to great music!`);
}

displayMusicPlaces(recommendations);
*/

// Merge objects with Object Spread
/*
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
};


const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword",
};

// Object.assign(user, newUser)
Object.assign({}, user, newUser)
// const mergedBad = Object.assign(user, newUser);
const mergedGood = Object.assign({}, user, newUser);
// console.log(mergedBad);
console.log(mergedGood);
// console.log(mergedGood);
console.log(user);
*/
/*
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword",
};

const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
// console.log(Object.assign({}, user, newUser, { verified: false }));
*/

// How maps can do what objects can't
/*
const nums = {
  1: 1,
  true: true,
};

console.log(Object.keys(nums));

new Map([
  [1, 1],
  [true, true],
]);
const map1 = new Map([
  [1, 1],
  [true, true],
]);
console.log(map1);

map1.set('key', 'value');
console.log([...map1.keys()]);
map1.forEach((value, key) => {
  console.log(key, value);
});
*/

/*
const user1 = { name: "john" };
const user2 = { name: "mary" };

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = 
new WeakMap([
    [user1, secretKey1],
    [user2, secretKey2]
])

console.log(secretKeyMap);
const key = secretKeyMap.get(user1)
console.log(key);

const user = {
  name: "john",
  verified: true,
};

const userMap = new Map([
    ["name", "John"], 
    ["verified", true]
]
)

console.log(userMap);
console.log(userMap.size);
*/
/*

const favouritePlace = {
  music: "jazz",
  name: "Paris House",
};

const favouritePlaceMap = new Map([
  ["music", "jazz"],
  ["name", "Paris House"],
  ["visited", true],
  ["averageBill", 17.4]
]);

favouritePlaceMap.get('music')
const result = favouritePlaceMap.get('music')
console.log(result);
*/
//Methods with Arrow function
/*
const userData = {
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    // console.log(`User (username) is a (title)`);
    console.log(`User ${userData.username} is a ${userData.title}`);
    console.log(`User ${this.username} is a ${this.title}`); // this is the same as userData
  },
};
userData.getBio()
*/

const userData = {
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`); // this is the same as userData
  },
//   getBio: () => {
//     console.log(`User ${this.username} is a ${this.title}`); // this is the same as userData
//   },
  askToFriend(){
    // setTimeout(function(){
    //     console.log(`Would you like to friend ${this.username}?`);

    // }, 2000); // undefined 
    setTimeout(() => {
        console.log(`Would you like to friend ${this.username}?`);

    }, 2000); // gives result
  }
};
userData.getBio()
userData.askToFriend()