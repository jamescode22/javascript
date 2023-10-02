//
/*
1. In a series of variables store:
a.       A string
b.       A number
c.       A Boolean
*/

var myName = `James`;
var aSmallNumber = 5;
var notTrueBool = false;

// 2. Add two numbers
var newNumber = aSmallNumber + 34;

// 3. Concatenate two string
var newString = `My name is ` + myName;

// 4. Create an IF statement which checks if a variable matches another variable, if so it should console log a message

if (aSmallNumber == 3) {
  console.log("Q4. SmallNumber is 3");
}

// 5. Extend the IF statement to have an ELSE IF to show an alternative message if the first comparison fails

if (aSmallNumber == 3) {
  console.log("Q5. aSmallNumber is 3");
} else if (aSmallNumber == 4) {
  console.log("Q5. aSmallNumber is 4");
}

// 6. Extend one of the IF statements to check if two things are true, if so show a message

if (aSmallNumber == 3) {
  console.log("Q6. aSmallNumber is 3");
} else if (aSmallNumber == 4) {
  console.log("Q6. aSmallNumber is 4");
} else {
  console.log("Q6. aSmallNumber is something other than 3 or 4");
}

// 7. Convert the IF statement to a Switch statement

switch (aSmallNumber) {
  case 3:
    console.log("Q7. aSmallNumber is 3");
    break;
  case 4:
    console.log("Q7. aSmallNumber is 4");
    break;
  default:
    console.log("Q7. aSmallNumber is something other than 3 or 4");
}

// 8.  Store name, age and height in an Object

var person = {
  firstName: `Alex`,
  age: 34,
  height: `5'10"`,
};

console.log(
  `The person's name is ${person.firstName}, age is ${person.age} and height is ${person.height}`
);

// 9. Create a FOR loop that shows a message 10 times

for (var i = 1; i <= 10; i++) {
  console.log(i);
}
