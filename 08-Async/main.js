// callback

// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
//     console.log("done");
// })


// setTimeout()
// addEventListener()

// Promises
                // States of a promise:
                // pending
                // fulfilled
                // rejected

// const promise = new Promise((resolve, reject) =>{
// setTimeout(()=> resolve('done'), 1000)
// })

// promise.then(value=> console.log(value))
// .catch(()=> console.log('failure'));
// const promise = new Promise((resolve, reject) =>{
// setTimeout(()=> reject(Error("Promise failed")), 1000)
// })

// promise.then(value=> console.log(value))
// .catch(error => console.error(error))
// .finally(() => console.log('done'))
/*

const promise = new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(position => {
    resolve(position);
}, error => {
    reject(error)
})
})

promise.then(position => console.log(position))
.catch(error => console.log(error))
.finally(()=> console.log("done"))
*/

// make weather request

// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com
// GET /posts/1 - single blog post

// const getData = fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => response.json())
// // .then(data => console.log(data))
// .then(data => console.log(data.title))
// console.log(getData);
/*
// POST /posts
const blogPost = {
  title: "Cool post",
  body: "lkajsdflkjasjlfda",
  userId: 1,
};
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(blogPost)
// })
//   .then(response => response.json())
//   .then(data => console.log(data))

//error
fetch("https://jsonplaceholder.typicode.com/pots/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// https://github.com/public-apis/public-apis
*/
//  const getData = fetch("https://jsonplaceholder.typicode.com/users/3")
// .then(response => response.json())
// // .then(data => console.log(data))
// .then(data => console.log(data))

// console.log(getData);
// fetch("https://jsonplaceholder.typicode.com/users/3")
//   .then((response) => response.json())
//   .then(data => console.log(data.company))
//   .catch(error => console.log(error));

/*
fetch("https://jsonplaceholder.typicode.com/users/3")
// fetch("https://jsonplaceholder.typicode.com/uers/3") //test for error
.then(response => {
    if(!response.ok){
 throw new Error(response.status);
    }
    return response.json();
})
.then(person => {
    console.log(person.name);
    console.log(person.company.name);

})
.catch(err => console.log(err))
*/

// async wait


// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));

// const getBlogPost = async () => {}


// function getBlogPost() {
//    const promise =  new Promise((resolve, reject) => {
//        setTimeout(() => resolve('blog post'), 1000) 
//     });
//     promise
//     .then(value => console.log(value))
//     .finally(()=> console.log("done"))
// }

// getBlogPost()

// async function getBlogPost(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(()=> resolve('blog post'), 1000);
//     });
//     const result = await promise;
//     console.log(result);
//     console.log('done');
// }

// getBlogPost()
/*
async function  getPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
   const data = await  response.json();
   console.log(data);
}

getPost();
*/

// error with async-await
/*
async function runAsync(){
    try{
await Promise.resolve('Hello world');
null.someProperty = true;
    }
    catch(error){
        console.error(error);
    }
    
}
runAsync();
*/
/*
async function getGithubUser(){
    try {
//  const response = await fetch("https://api.github.com/users/behailu-weldeyohannes");  // this works 
   const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk')  // this thows error
// await response.json();
const data = await response.json();
console.log(data);
if (!response.ok){
    throw new Error(response.status)
}
    }
    catch(error){
        alert(error.message);
console.error(error);
    }
 

}

getGithubUser()
*/
/*
fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then((person) =>
    console.log(`${person.name} works for ${person.company.name}`)
  )
  .catch((err) => console.error(err));
// rewrite the above with async wait
*/
  async function getInfo(){
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/3"
      );
     
      const person = await response.json();
      console.log(person);
      if (!response.ok) {
        throw new Error(response.status);
      }
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  }

  getInfo();