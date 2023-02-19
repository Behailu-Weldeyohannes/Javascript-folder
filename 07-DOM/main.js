// DOM Intro
// JS -> HTML, CSS (DOM - Document Object Model)
// console.log(document.body);
/*
const p = document.createElement("p");

p.innerText = "Hello world";

document.body.append(p);
document.body.style.background = "palegoldenrod";
p.style.color = "#05f";

p.addEventListener("click", () => console.log("clicked"));
*/
// Get single and multiple element
// console.log(el)

// const links = document.querySelectorAll('a');
// // console.log(link);

// links.forEach(link => {
//   if (link.matches('a[href="/login"]')) {
//     const loginLink = link;
//     console.log(loginLink);  
//   }
// })
// const divs = document.getElementsByTagName("div");
// console.log(divs);

//create and modify html elements
/*
const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = "<strong> This is a new post </strong>";
document.body.append(newPost);
document.body.prepend(newPost);
const post = document.querySelector('.post');
post.prepend(newPost);
*/
/*
const title = document.querySelector('h1');
title.innerHTML = "Creating and modifying HTMl elements";

const tagline = document.createElement('h2');
tagline.className = "tagline";
tagline.innerHTML = "I can create HTML elements!";
// title.append(tagline)
title.appendChild(tagline);
*/
/*
// add css style

const post = document.querySelector('.post');
// post.style.display='none';
// post.style.background='blue';
// post.style.backgroundColor='#fff';
post.classList.remove("post");
*/
// const post = document.querySelector(".post");
// post.addEventListener("click", (event) => {
//   //console.log(event);
//   console.log("Do you want to edit this post?");
// });

// to select all

// const posts = document.querySelectorAll(".post");
// posts.forEach((post) => {
//   post.addEventListener("click", (event) => {
//     //   console.log(event.target);
//     console.log("Do you want to edit this post?");
//   });
// });


// document.body.addEventListener('click', event => {
//     console.log('Do you want to edit this post?');
// })


// document.body.addEventListener("click", (event) => {
//   if (!event.target.closest(".post")) return;

//   console.log("Do you want to edit this post?");
// });

const title = document.querySelector('h1');
title.addEventListener('click', event =>{
    console.log(event.target.textContent);
})

// document.body.addEventListener('click', event => {
//     console.log(event.target.textContent);
// })
document.body.addEventListener('mouseover', event => {
    console.log(event.target.textContent);
})

