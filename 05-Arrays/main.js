/*
// const todos = {}
const todos = []

const todo1 = {
    text: 'Wash the dishes',
    complete: false
};
const todo2 = {
    text: 'Do laundary',
    complete: false
};

todos[1] = todo1;
todos[0] = todo2;
// console.log(todos);

todos.push(todo1, todo2)
console.log(todos); // order maintained 
todos.pop();

// const index = [todos.length -1]
// console.log(index);

const favouriteSongs = [];

favouriteSongs.push("Like a rolling stone");
favouriteSongs.push("Blowing in the wind");
favouriteSongs.push("Mr Tambourine man");
favouriteSongs.push("It aint me");

console.log(favouriteSongs);

console.log(favouriteSongs[favouriteSongs.length - 1]);

favouriteSongs.pop();

console.log(favouriteSongs[favouriteSongs.length - 1]);
*/

/*
// check elements in array

const tempratures = [69, 82, 73, 64];

console.log(tempratures.indexOf(82));
console.log(tempratures.indexOf(52) > -1);
console.log(tempratures.includes(52));

const temperatures2 = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

// const result = temperatures2.some(temperature => temperature.isRecordTemp === true);
const result = temperatures2.every(temperature => !temperature.isRecordTemp);
console.log(result);
*/
/*
const songs = [
  { song: "Shape of You", timesStreamed: 2.384, wonGrammy: true },
  { song: "One Dance", timesStreamed: 1.791, wonGrammy: false },
  { song: "Rockstar", timesStreamed: 1.781, wonGrammy: false },
  { song: "Closer", timesStreamed: 1.688, wonGrammy: false },
  { song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true },
];

const hasWonGrammy = songs.some((song) => song.wonGrammy);
console.log(hasWonGrammy);

const allMegaHits = songs.every((song) => song.timesStreamed > 1.5);
console.log(allMegaHits);
*/
/*
const temperatures = [
  { degrees: 69, isRecordTemp: false},
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false },
];

// const newTemp = 
// temperatures.map(temp => {
//     temp.isRecordTemp = true; // modifies existing
//     temp.isHigh = true; // modifies existing
//     return temp;
// })
// console.log(newTemp);
/*
const newTemps = temperatures.map((temperature) =>
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
);
// console.log(newTemps);


newTemps.forEach(temperature => {
    if (temperature.isHigh){
       console.log(
         `Temperature ${temperature.degrees} was a record high last week!`
       );   
    }
})

temperatures
  .map(temperature => 
temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
)
  .forEach(temperature => {
   if (temperature.isHigh) {
     console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
   }
})
// console.log(newTemps);
*/
// get subset of arrays
/*

const restaurants = [
  { name: "Cap City Diner", milesAway: 2.2 },
  { name: "Chop Shop", milesAway: 4.1 },
  { name: "Northstar Cafe", milesAway: 0.9 },
  { name: "City Tavern", milesAway: 0.5 },
  { name: "Shake Shack", milesAway: 5.3 },
];


const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'));
console.log(results);
const results2 = restaurants.filter(
  (restaurant) => restaurant.name.startsWith("C") && restaurant.milesAway < 3
);
console.log(results2);
const results3 = restaurants.find(
  (restaurant) => restaurant.name.toLowerCase().includes("north") && restaurant.milesAway < 3
);
console.log(results3);
*/
/*
// reduce
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 },
];
const total = menuItems.reduce((accumulator, menuItem) => {
  return accumulator + menuItem.price;
}, 0);
console.log(total);
*/
/*
const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },
];

// const sumOfCars = cars.reduce((accumulator, car)=>{
// return accumulator + car.weight;
// }, 0)

// console.log(sumOfCars);
const sumOfCars = cars.reduce((accumulator, car)=>{
  if(car.isElectric)
  {
return accumulator + car.weight;
  } else
  {
    return accumulator
  }

}, 0)

console.log(sumOfCars);
*/
/*
const numbers = [1, 2, 3, 4, 5, 6];

const doubleNumbers = 
numbers.reduce((acc, num)=> {
acc.push(num * 2);
return acc
},[]);
console.log(doubleNumbers);

const doubleNum = numbers.map(num => num * 2)

console.log(doubleNum);
*/
/*
const numbers = [1, 2, 3, 4, 5, 6];

const res =
numbers.reduce((acc, num)=>{
  if(num > 3) 
  {
 acc.push(num);
  } 
  return acc
},[])

console.log(res);


const greThree = numbers.filter(num => num > 3)
console.log(greThree);
const MorethanThree = numbers.map(num => num * 3)
console.log(MorethanThree);

const greaterNumbers = numbers.reduce( (acc, num) => (num > 3 ? acc.concat(num) : acc),[]);
*/
/*
// avoid mutations with array spread
const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

// const allMenuIdeas = lunchMenuIdeas.concat("Club Sandwich"); // do not mutate
// const allMenuIdeas = lunchMenuIdeas;
const allMenuIdeas = [...lunchMenuIdeas];

// allMenuIdeas.push("Club Sandwich"); //mutate
allMenuIdeas.push("Club Sandwich"); 


console.log(lunchMenuIdeas);
console.log(allMenuIdeas);
*/
/*
// spread operators
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
  ...breakfastMenuIdeas,
  "Harvest Salad",
  "Southern Fried Chicken",
  ...dinnerMenuIdeas,
];
console.log(allMenuIdeas);
console.log(allMenuIdeas.slice(1,3));

//find and replace
const saladIndex = allMenuIdeas.findIndex(idea => idea === "Harvest Salad")
const finalMenuIdea = [
  ...allMenuIdeas.slice(0, saladIndex),
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1),
];
console.log(finalMenuIdea);

//delete

const finalMenuIdeas = [
  ...all
]


const finalMenuIdeas2 = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1),
];
// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, saladIndex),
//   "Garden Salad",
//   ...allMenuIdeas.slice(saladIndex + 1)
// ];

console.log(finalMenuIdeas2);

*/
/*
// array destururing
const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon",
];

// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];
//console.log(first, second, third);

let [first, second, third] = finalMenuItems
// console.log(first, second, third);
console.log('before:',{first}, {second}, {third});
// swap

[second, first] = [first, second]
console.log('after:', {first}, {second}, {third});

const [winner, ...losers] = finalMenuItems;
console.log({winner, losers});

*/
/*

const fishDishes = [
  "Salmon Rillettes",
  "Grilled Tuna Provencal",
  "Fish and Chips",
];
const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;

// console.log(chefsFishDishes);
// console.log(regularFishDishes);
// console.log(regularMeatDishes);
// console.log(chefsMeatDishes);

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsMeatDishes, chefsFishDishes];
let regularDishes = [...regularFishDishes, regularMeatDishes];
console.log(chefsDishes);
console.log(regularDishes);

*/
//turn objects into flexible arrays

// for-in loop
// const obj = { one: 1, two: 2 };

// for(const key in obj){
//   console.log('key', obj[key]);
// }
// Object.keys(), Object.values(), Object.entries()
/*
const user = {
  name: "John",
  age: 29,
};

console.log(Object.keys(user));

const ageExists = Object.keys(user).includes("age");
console.log(ageExists);

const value = Object.keys(user).map(key => user[key])
console.log(value);
const value2 = Object.values(user);
console.log(value2);

console.log(Object.entries(user));
const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95,
};

const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense)=> acc + expense, 0);

console.log(monthlyTotal);
*/
/*
const users = {
  2345234: {
    name: "John",
    age: 29,
  },
  8798129: {
    name: "Jane",
    age: 42,
  },
  1092384: {
    name: "Fred",
    age: 17,
  },
};

const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }
  return acc;
}, []);
console.log(usersOver20);
*/
// get unique sets of data

const customerDishes = [
  "Chicken Wings",
  "Fish Sandwich",
  "Beef Stroganoff",
  "Grilled Cheese",
  "Blue Cheese Salad",
  "Chicken Wings",
  "Reuben Sandwich",
  "Grilled Cheese",
  "Fish Sandwich",
  "Chicken Pot Pie",
  "Fish Sandwich",
  "Beef Stroganoff",
];

// const set =
// new Set([1,2,3]).size

// console.log(set);
// const numbers = new Set([[1], [1], [3]]);

// for (const num of numbers) {
//   console.log(num);
// }
// const uniqueDishes = [...new Set(customerDishes)];

// console.log(uniqueDishes);

//for loop

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// the same with the above
numbers.forEach((number) => {
  console.log(number);
});
/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/