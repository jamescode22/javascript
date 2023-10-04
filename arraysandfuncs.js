//  1.	Create a function that accepts two numbers, adds them and returns the result.
function addTwo(num1, num2) {
  return num1 + num2;
}

console.log("1. " + addTwo(3, 4));

/* 2.	Write a function with the following behaviour
     -    takes an array as a parameter
     -    reverses the order of the array
     -    returns the reversed array */

function arrayReverser(arr) {
  return arr.reverse();
}

var newArray = ["first", "second", "third"];
console.log("2. " + arrayReverser(newArray).join());

// 4. Create an array with 10 items

var tenItems = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

console.log("4. " + tenItems);

// 5. Update one of the items
tenItems[4] = 5;

console.log("5. " + tenItems);

// 6. Delete half of the array
tenItems.splice(5, 5);

console.log("6. " + tenItems);

// 7. Write out each of the array methods so you become familiar with the syntax (use the array you made earlier)
//Pop
// The pop() method of Array instances removes the last element from an array and returns that element.

tenItems.pop();
console.log("7-Pop. " + tenItems);

//Push
//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

tenItems.push("New End Item");
console.log("7-Push. " + tenItems);

//Shift
// The shift() method of Array instances removes the first element from an array and returns that removed element.

tenItems.shift();
console.log("7-Shift. " + tenItems);

//Unshift
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

tenItems.unshift("NewStartItem");
console.log("7-Unshift. " + tenItems);

//Concatenating
let newItems = [8, 7, 34];
let moreThanTenItems = tenItems.concat(newItems);
console.log("7-Concat. " + moreThanTenItems);

//Splicing
// add an item at index 2, don't delete anything
tenItems.splice(2, 0, "splicedIn");

//Slicing
let justFirstTwo = tenItems.slice(0, 2);
console.log("Just first two sliced: " + justFirstTwo);

//Reverse
tenItems.reverse();

//Join

let joinStr = tenItems.join("-").toLowerCase();
console.log("Joined and lower cased: " + joinStr);

//forEach

tenItems.forEach(function (ele) {
  console.log(`Item - ${ele}`);
});

//Includes + //indexOf

if (tenItems.includes("three")) {
  console.log(
    "tenItems includes 'three' at position " + tenItems.indexOf("three")
  );
}

//Every

const arrNumbers = [1, 2, 3, 4, 5, 6, 7];

const allNumbersBelowTen = function (item) {
  return item < 10;
};

if (arrNumbers.every(allNumbersBelowTen)) {
  console.log("All numbers in the array are below ten");
}

//Some

if (arrNumbers.some((item) => item === 4)) {
  console.log("arrNumbers has a number 4");
}

//Filter
const filterFunc = function (num) {
  return num < 5;
};

let numbersBelowFive = arrNumbers.filter(filterFunc);
console.log("Filter: arrNumbers below 5: " + numbersBelowFive.join());

//Find

let itemContaining = tenItems.find((item) => item.includes("o"));
console.log("First item in tenItems containing 'o' : " + itemContaining);

//findIndex

let findItemIdx = tenItems.findIndex(function (item) {
  return item.includes("o");
});
console.log("Index of first item containing a 'o' : " + findItemIdx);

//Sort
const sortDescFunc = function (numA, numB) {
  if (numA < numB) {
    return 1;
  }
  if (numA > numB) {
    return -1;
  }
};

arrNumbers.sort(sortDescFunc);
console.log(arrNumbers.join());
