
// if 
/*
const prefersDarkMode =false;
const prefersSolarizedMode = true;

if(prefersDarkMode){
    console.log('dark mode set!');
    document.body.style.background = 'black'
} else if(prefersSolarizedMode){
 console.log("solarized mode set!");
 document.body.style.background = "palegoldenrod";
}



else{
    console.log('light mode set!')
    document.body.style.background = 'ghostwhite'
}
*/
// case
/*
const colorMode = "solarized";

switch (colorMode) {
  case "solarized":
    console.log("solarized mode set!");
    document.body.style.background = "palegoldenrod";
    break;
  case "dark":
    console.log("dark mode set!");
    document.body.style.background = "black";
    break;
  default:
    console.log("light mode set!");
    document.body.style.background = "ghostwhite";
}
*/

// time based greeting
/*
const time = "morning";

if (time === "morning"){
    console.log("Good morning")
} else if(time === "afternoon"){
    console.log("Good afternoon")
}
else if(time === "evening"){
    console.log("Good evening")

} else{
    console.log("Good night")
}

*/
/*
// time switch
const time = "morning"
switch (time) {
  case "morning":
    console.log("Good morning!");
    break;
  case "afternoon":
    console.log("Good afternoon!");
    break;
  case "evening":
    console.log("Good evening!");
    break;
  default:
    console.log("Good night!");
}
*/
/*
//  shorten conditionals with ternaries
const isAuthenticated = false;

// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
// //   console.log("Please log in!");
//   cartItemCount = 0;
// }

const cartItemCount = isAuthenticated ? 1 : 0;
console.log(cartItemCount);
*/
/*
const age = 20;

if (age < 10) {
  greeting = "Hey there";
} else if (age > 18) {
  greeting = "Greetings";
} else if (age > 10) {
  greeting = "What's up?";
} else {
  greeting = "That's an interesting age!";
}
console.log(greeting);
*/
// const age = 20;
// const greeting = age < 10 ? "Hey, there" : "That's an interesting age!";
// console.log(greeting)
// const age = 11;
// const greeting = age < 10 ? "Hey, there" : age > 18 ? "Greeting" : age > 10 ? "What's up" : "That's an interesting age!"
// console.log(greeting)
/*

// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

const isAuthenticated = true;

shoppingCart = isAuthenticated ? "ipad" : ""
console.log("shoppingCart: ", shoppingCart);

// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if 

const age = 18;
let allowedAccess;

allowedAccess = age > 17 ? true : false
console.log("allowedAccess: ", allowedAccess);
*/

// short-circuting
const response = "";

// let username;

// if (response) {
//   username = response;
// } else {
//   username = "guest";
// }

// console.log(username);

// const username = response ? response : "guest"
const username = response || "guest"
console.log(username)
