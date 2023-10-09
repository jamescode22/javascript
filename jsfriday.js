/* **************************************** */
// Destructure an array

const scores = [99, 10, 34, 59, 23, 9, 22, 34, 55, 65, 32];
scores.sort((x, y) => (x < y ? 1 : -1));

const [goldScore, silverScore, bronzeScore, ...restOfScores] = scores;

console.log(
  `Gold score: ${goldScore}, silver score: ${silverScore}, bronze score: ${bronzeScore}`
);

/* **************************************** */
// Destructure an object
// Change the name of one of the item you pull out of the object
// Add a default value to the name above

const touristDestination = {
  name: "Buckingham Palace",
  address: {
    city: "London",
    country: "UK",
  },
};

const {
  name: tName,
  address: { city: tCity, country: tCountry, postcode: tPostcode = "AA1 1BB" },
} = touristDestination;
console.log(tName, tCity, tCountry, tPostcode);

/* **************************************** */
// Use the array method Flat

const arrayToFlatten = [1, 2, [3, 4, 5, [6, 7, 8]]];
const flatArray = arrayToFlatten.flat(2);
console.log(flatArray);

/* **************************************** */
// Use Array.from

const letterArray = Array.from("Javascript".toUpperCase());
letterArray.sort((x, y) => (Math.random() > 0.5 ? 1 : -1));
console.log(`SOLVE THIS ANAGRAM: ${letterArray.join("-")}`);

/* **************************************** */
/* **************************************** */
// Use Array.isArray

const isAnArray = ["A", "B"];
console.log(Array.isArray(isAnArray));

/* **************************************** */
/* **************************************** */

// Use the object property shorthand
function getObject() {
  // Make a random number
  const randomNumber = Math.round(Math.random() * 100);
  // Make a random string
  let randomString = "";
  const possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI";
  for (let i = 0; i < 10; i++) {
    let randomPos = Math.floor(Math.random() * possibleChars.length);
    randomString += possibleChars.substring(randomPos, randomPos + 1);
  }

  return {
    randomNumber,
    randomString,
  };
}

console.log(
  "RANDOM THINGS: ",
  getObject().randomNumber,
  getObject().randomString
);

/* **************************************** */
/* **************************************** */

// Use the function shorthand in an object
// Use Rest on an array

const sum = (a, b, c, d) => a + b + c + d;
const anArray = [1, 2, 3, 4];
console.log(sum(...anArray));

// Use Rest on an object

const dailyFoods = {
  breakfast: "toast",
  lunch: "sandwich",
  dinner: "chicken tikka masala",
  snacks: "banana, crisps",
};

const { breakfast, lunch, ...otherFood } = dailyFoods;
console.log(otherFood);

// Use Spread on an array

const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2);

// Use Spread on an Object

const obj1 = {
  a: "jam",
  b: "peanuts",
  c: "banjo",
};

const obj2 = {
  d: "hairspray",
  e: "toast",
  f: "orange squash",
};

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

/* **************************************** */
// Create a class (any concept you like)

class Snack {
  constructor(name, portionGrams, calsPerPortion) {
    this.name = name;
    this.portionGrams = portionGrams;
    this.calsPerPortion = calsPerPortion;
  }
}

/* **************************************** */
// Extend the class into two other classes

class Crisps extends Snack {
  constructor(name, portionGrams, calsPerPortion, crispType) {
    super(name, portionGrams, calsPerPortion);
    this.crispType = crispType;
  }

  describe() {
    return `Try ${this.name.toUpperCase()}, a delicious ${
      this.crispType
    } crisp with only ${this.calsPerPortion} (${this.portionGrams}g serving).`;
  }
}

/////

class ChocolateBar extends Snack {
  constructor(name, portionGrams, calsPerPortion, hasNuts) {
    super(name, portionGrams, calsPerPortion);
    this.hasNuts = hasNuts;
  }
  doesHaveNuts() {
    return `You ask if ${this.name} has nuts?  The answer is ${
      this.hasNuts ? "Yes" : "No"
    }!`;
  }
}

////

const doritos = new Crisps("doritos", 30, 200, "triangular");
console.log(doritos.describe());

const fruitandnut = new ChocolateBar("fruit and nut", 25, 250, true);
console.log(fruitandnut.doesHaveNuts());
