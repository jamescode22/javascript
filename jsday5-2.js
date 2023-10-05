/// EXPORT NAMED ////
const isFormal = false;

let person = {
  firstName: "Bob",
  lastName: "Smith",
};

let printGreeting = (formal, person) =>
  `${formal ? "Good afternoon" : "Howdy"} my name is ${person.firstName} ${
    person.lastName
  }`;

export { printGreeting, person, isFormal };

/// EXPORT DEFAULT ///
let version = {
  curVers: 1.45,
  versPrint: function () {
    return `Current version is ${this.curVers}`;
  },
};

export default version;
