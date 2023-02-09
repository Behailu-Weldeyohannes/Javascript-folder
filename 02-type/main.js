/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

let message = "some string";

// console.log(typeof window);

// 1) Explicit type conversion
console.log(Boolean(message));
// 2) Implicit type conversion (coercion)


// falsy (false)
        // false
        // 0
        // ''
        // null
        // undefined
        // NaN
// 1) Avoid direct comparisons in conditionals

const username = null;

if (!username) {
  console.log('no user');
}


// 2) Use triple equals === (strict equals operator) 

if (null === undefined) {
  console.log('equals');
} else {
  console.log('not equals');
}

// 3) Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals')
}
// truthy (true)

if ('hello') {
  console.log('run');
} else {
  console.log('skipped');
}

// Challenge 1:
// What will the following console logs display? (they're all true and false)

// console.log("Challenge 1:")
// console.log(!undefined); // true
// console.log(Boolean(NaN)); // false
// console.log(false === false); // true
// console.log(5 === "5"); // false
// console.log("Hello" == "hello"); // false

// Challenge 2:
// What will the following console logs display? (they're all true and false)
console.log("Challenge 2:")
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(!null); // true
console.log(!!"hello"); // true

// Challenge 3:
// List all the falsy values in JavaScript
undefined
NaN
null
0
""
false


