/*  1.	Create a defensive check inside a function that 
handles if the inputs to the function are invalid/non existent. */

const aPerson = {
  firstName: "Steve",
  lastName: "Stevens",
};

function greeting(p) {
  if (p && p.firstName && p.lastName) {
    console.log(`Hello ${p.firstName} ${p.lastName}`);
  }
}

greeting(aPerson);

/* ************************************************ */
// 2.	Create a timer than console.logs a message after 5 seconds

const timer = setTimeout(() => console.log("Hello"), 5000);

/* 3.	Create a timer than consoles.logs a message every 5
  seconds */

const everyFiveSecs = setInterval(() => console.log("Hi"), 5000);

/*  4.	Create a function, inside the function add a second 
function, and again add a third function into the second function */
/* 5.	Create 3 variable, then define 3 the variables in the 
correct place so that: */
// 6.	The first variable is accessible inside every function
/* 7.	The second variable is accessible inside the second and 
third function only */
// 8.	The third variable is accessible inside the third function only
/* 9.	Define a 4th variable inside the 3rd function. This variable 
should be accessible by every function */
/* 10.	Create a scope inside the 3rd function, place a variable 
inside it that is only accessible inside that scope */

let firstVar = "FirstVar";

function first() {
  function second() {
    let secondVar = "SecondVar";
    function third() {
      let thirdVar = "ThirdVar";
      {
        let scopeVar = "ScopeVar";
      }
    }
  }
}

// 11.  Write out a try catch block with finally

function greeting(personObj) {
  try {
    if (personObj && personObj.name) {
      console.log(`Hello ${personObj.name}`);
    } else {
      throw new Error("Invalid person object");
    }
  } catch (err) {
    console.log("Error: " + err.message);
  } finally {
    console.log("This gets logged regardless of error");
  }
}

let person1 = { incorrect: "Mike" };
let person2 = { name: "Bob" };
greeting(person1);
greeting(person2);

// 12.  Duplicate an object so mutating the original does not mutate the copy

let object1 = {
  firstName: "Bob",
  age: 33,
};

let object2 = JSON.parse(JSON.stringify(object1));
object2.firstName = "Jake";

console.log(object1);
console.log(object2);
