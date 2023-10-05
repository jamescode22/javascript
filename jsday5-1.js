// Create two JS files
// Add a variable, object and function (use fat arrow)
// Export all three
// Add a fourth variable and make it the default export
// Import all the items from one file to the other (remember type="module")

import version from "./jsday5-2.js";
import { person, printGreeting, isFormal } from "./jsday5-2.js";

console.log(version.versPrint());
console.log(printGreeting(isFormal, person));

/********************************************************* */
/********************************************************* */
// Create a function with default parameters
// Create a template literal string
// Use Trim
// Use a function to create an object

function makePizza(name = "American Hot", toppings = ["Pepperoni", "Peppers"]) {
  return {
    name: name,
    toppings: toppings,
    orderPizza: function () {
      console.log(
        `I'd like to order a ${this.name.trim()}, with ${this.toppings.join(
          ", "
        )}`
      );
    },
  };
}

const pizza = makePizza();
pizza.orderPizza();

const pizza2 = makePizza("    Spicy Beef    ", ["Beef", "Jalapenos"]);
pizza2.orderPizza();

/********************************************************* */
/********************************************************* */
// Create a constructor function
// Create an instance of the function
// Extend the prototype with a new function

function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}

const myCar = new Car("Skoda", "Octavia", "Grey");

Car.prototype.describe = function () {
  return `This car is a ${this.make} ${this.model} in ${this.color}`;
};

console.log(myCar.describe());

/********************************************************* */
/********************************************************* */
// Create an object with a method
// Invoke the method using Call, Apply and Bind

const salad = {
  ingredients: ["Tomato", "Cucumber", "Lettuce", "Chicken", "Ranch"],
  describeSalad: function (servedInThing, servedInSize) {
    // remove and save the last ingredient
    const finalIngredient = this.ingredients.pop();
    // conbine the rest with commas
    let ingredList = this.ingredients.join(", ");
    // return the list in a gramatically correct format
    return `${ingredList} and ${finalIngredient}, served in a ${servedInSize} ${servedInThing}`;
  },
};

console.log(salad.describeSalad());

// Call with a different context
const salad2 = { ingredients: ["Tuna", "Mayo", "Olives"] };
console.log(salad.describeSalad.call(salad2, "bowl", "large"));

const salad3 = { ingredients: ["Egg", "Potato", "Tomato"] };
console.log(salad.describeSalad.apply(salad3, ["bowl", "small"]));

const descFunc = salad.describeSalad.bind(salad2, "bowl", "large");
console.log(descFunc());
