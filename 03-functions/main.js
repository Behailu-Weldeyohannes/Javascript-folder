/*
function echo(input, greeting){
    return `${greeting} ${input}`
}

const result = echo(42, "Hi");
console.log(result)

const user1 = "Reed";
const user2 = "Doug";
// const message = `User (user) says: (text)`;

function sendUserMessage(user, text){
console.log(`User ${user} says: ${text}`)
}

sendUserMessage(user1, "Hey there")
sendUserMessage(user2, "What's up")

*/

// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number.
/*
function splitBill(amount, numPeople){
 return `Each person needs to pay ${amount / numPeople}`
}

// const bill = splitBill(100, 5);
// console.log(bill)
// Testing your solution
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))
*/

/*
// closures
// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}

const countingDown = countdown(20, 5);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
*/

// Function with default parameters
/*

function convertTemperature(celsius, decimalPlaces = 1) {
  // celsius to fahrenheit
  //   decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));
*/
/*
// Arrow function

const username = "john";

const capitalize = (name) =>{
  return`${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

console.log(capitalize(username));
*/
/*
function handleLikePost(step){
  let likeCount = 0;
  return function addLike(args){
    likeCount += step;
    return likeCount;
  }
}

const doubleLike = handleLikePost(2);
console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());



function getData(baseUrl) {
  return function (route) {
    fetch(`${baseUrl}${route}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
}

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
// getSocialMediaData('/comments');
getSocialMediaData('/posts');
// getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');
*/
/*
const getData = baseUrl => route => callback =>  
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  
        

const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');

const getSocialMediaPosts = getSocialMediaData('/posts');
const getSocialMediaComments = getSocialMediaData('/comments');

getSocialMediaPosts(posts => {
  posts.forEach(post => console.log(post.title));  
});
// getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');

*/
/*
// Naming functions

// functions - actions

// create a todo
function createTodo() {}
// update a todo
function updateTodo() {}
// check off todo
function checkCompleteTodo() {}
// delete todo
function deleteTodo() {}

// getting a todo
function getTodo() {}

// getting user
function fetchUser() {}
*/