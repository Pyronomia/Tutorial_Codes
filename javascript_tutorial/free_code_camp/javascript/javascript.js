var myName = "Sinmi";
// var is used for declaration which can be manipulated later
// const also declares but cannot be manipulated
console.log(myName);

var c = "I am a ";
console.log(c);
c = c + "string";
console.log(c);

// incrementing amd decrementing var by one
var myVar = 87;
myVar++;
console.log(myVar);
myVar--;
console.log(myVar);

// Decimal numbers sometimes referred to as floating point or floats

// remainder operator

var remainder = 11 % 3;
console.log(remainder);

// shorcut for addition and subtraction
var d = 9;
d += 9;
console.log(d);
d -= 10;
console.log(d);
d *= 2;
console.log(d);
d /= 3;
console.log(d);

// double quoted strings
var string = 'I am a "double quoted" string';
// or  "I am a \"double quoted\" string";
// or `I am a "double quoted" string`;

/*
CODE OUTPUT

\n - newline
\r - carriage return
\t - tab
\b - backspace
\f - form feed

*/

var myName = "Sinmi";
var myStr = "Hello, my name is " + myName + " and I am tall";

console.log(myStr);

// Finding length of string
var myName2 = "Loveth";
var myNameLength = myName2.length;
console.log(myNameLength);

// index
var index = myName2[0];
console.log(index);

// you cant change the content of a string with index yo can only assign a new value

// to get the last letter of string
var lastLetter = myName2[myNameLength - 1];
console.log(lastLetter);
// you could use it to get other nth-to-last letters

// Word blank

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result =
    "I " + myVerb + " my " + myAdjective + " " + myNoun + " very " + myAdverb;

  return result;
}

console.log(wordBlanks("car", "good", "drove", "fast"));

// when carrying out console.log on a function, it needs to have the return syntax within the function or else it will return undefined

//when calling out a function without console..log within the funciton, it will not return anything

// Arrays allow you to store different elements(strings, numbers) in a place

var myArray = ["Sinmi", 17];
// you can have nested arrays(an array inside an array)
var ourData = myArray[0];
console.log(ourData);

// you could use array index to modify elements in the array

var myyArray = [
  [1, 2, 3],
  [3, 4],
];
var myData = myyArray[0][1];
console.log(myData);

// Appending element to the end of an array (returns new)
myArray.push(["John", 23]);
console.log(myArray);

//Removing last element from arrays (returns removed element)
var removedFromOurArray = myArray.pop();
console.log(myArray);
console.log(removedFromOurArray);

//Removing first element from arrays
// myArray.shift() -  returns removed element

// Appending element to the beginning of array
// myArray.unshift("Happy") - returns new length

// FUNCTIONS
function ourReusableFunction() {
  console.log("Hey guys");
}

ourReusableFunction();

function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

ourFunctionWithArgs(10, 20);
// Global and local scopes
// using var in a function declares the variable only locally
// when you have local and global variables with the same name the local variable takes precedence over the global variable(in css terms the local variable will have more specificity)

// Returning in functions
function returnTest(num) {
  return num + 5;
}
console.log(returnTest(10));

/* you can store what is being returned in a function inside a variable i.e from the function above
var addition = returnTest(5)
addition variable will be 10
*/

// A queue is am abstract data structure  where items are kept in order
// JSON.stringify changes an array to a string
// its the whole array o so even with the square bracket
/*
 var stin = "the br";
 var arr = [1, 2, 3];
 stin += JSON.stringify(arr);
 console.log(stin);
*/

// STAND-IN-LINE
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// IF STATEMENTS
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  } else {
    return "No, it's false";
  }
}

console.log(ourTrueOrFalse(false));

function equalityOperator(val) {
  if (val == 10) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(equalityOperator(10));

// normal equality operator converts both values being compared to the same datatype but the strict equality operator does not do that so if  they are not of the same datatype but of the same value the strict equality operator does not regard them as the same

function inequalityOperator(val) {
  if (val !== 10) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(inequalityOperator("10"));

// you could apply this to all other operators like >, >=, < etc

function testLogicalAnd(val) {
  if ((val <= 50 && val >= 25) || val <= 25) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(20));

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(1));

// SWITCH STATEMENTS(another way of writing else if statements)
// switch statements automatically use the strict equality operator when comparing values

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
    //   break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;

    case 5:
    case 6:
    case 7:
      answer = "same case";
      break;
    default:
      answer = "code_names";
      break;
  }
  return answer;
}
console.log(caseInSwitch(2));

// In switch statements you cannot return more than one thing, once something has been returned, every other return statement shall be ignored

var count = 0;
function cardGame(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "K":
    case "Q":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}
cardGame(2);
cardGame(6);
cardGame("J");
cardGame(3);
cardGame(8);
cardGame("A");
console.log(cardGame());

// OBJECTS
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
  socks: "hose",
};
// Accessing objects
var hatValue = testObj.hat;
console.log(hatValue);

var shirtValue = testObj["shirt"];
console.log(shirtValue);

// when using brackets to access objects you can also use variables that have the same value as what you want to access
var shoe = "shoes";
var shoeValue = testObj[shoe];
console.log(shoeValue);

console.log(testObj.socks);
testObj["socks"] = "long socks";
// or testObj.socks = "long socks"
console.log(testObj.socks);

// Adding properties to objects
testObj.shorts = "short shorts";
console.log(testObj);
testObj["shin-guard"] = "plastic";
console.log(testObj);

// deleting properties from objects
delete testObj["socks"];

// you can use objects for lookups instead of switch statements because they are faster  and use less code

// Checking if an object has a property
function checkObj(checkProp) {
  if (testObj.hasOwnProperty(checkProp)) {
    return testObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("socks"));

//Accesing nested objects
var nestedObj = {
  car: {
    inside: {
      "glove box": "sweets",
    },
  },
};

nestedObj.car.inside["glove box"];

// OBJECTS PROJECT
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    album: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

// keeping a copy of collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop == "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

console.log(collectionCopy);
updateRecords(1245, "tracks", "Stereo Hearts");
updateRecords(2468, "artist", "");
console.log(updateRecords(5439, "tracks", "Lonely"));

// LOOPS
var ourArray = [];

var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}

console.log(ourArray);

var ourrArray = [];
for (var i = 1; i < 6; i++) {
  ourrArray.push(i);
}
console.log(ourrArray);

var anotherArray = [];
for (var i = 10; i >= 0; i -= 2) {
  anotherArray.push(i);
}
console.log(anotherArray);

var ourArr = [10, 22, 7, 11];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);

// NESTED FOR LOOPS
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

// A do while loop always runs the program first before checking the condition so even if the condition was not met it will run it once before breaking

var doWhile = [];
var f = 10;

do {
  doWhile.push(f);
  f++;
} while (f < 9);

console.log(f, doWhile);

// LOOPS PROJECT
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Kristan",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristan",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
    numbers: "123",
  },
];
function lookUpProfile(name, prop) {
  var matchCount = 0;
  var data = [];

  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      matchCount++; // this is so that if two elements have the same name but one doesnt have the same property, instead of two or more "No such Property"
      if (contacts[i].hasOwnProperty(prop)) {
        data.push(contacts[i][prop]);
      }
    }
  }

  if (matchCount > 0) {
    if (data.length > 0) {
      return data.length === 1 ? data[0] : data;
      // shorthand for the if else statement
    } else {
      return "No such property";
    }
  }

  //   for (var i = 0; i < data.length; i++) {
  //     if (data[i] !== "No such contact" && data[i] !== "No such property") {
  //       for (var j = 0; j < data.length; j++) {
  //         if (data[j] === "No such property" || data[j] === "No such contact") {
  //           data.splice(j, 1);
  //           j--;
  //         }
  //       }
  //     }
  //   }
  return "No such contact";
}

console.log(lookUpProfile("Kristan", "number"));

// RANDOM NUMBERS
var random = Math.random();
function randomFraction() {
  return Math.floor(random * 20);
}

console.log(randomFraction());
console.log(random);

//Random number in a range
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(0, 100));

// ParseInt
function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));

// Radix specifies the base of the number in the string so it returns the number in base 10 when used

// TERNARY OPERATOR (Another way of writing if/else statements)
function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual("2", 2));

// Nested Ternary Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-1));

// let doesnt allow you to declare a variable twice but its possible to set a variable again once it has already been declared.. example below
let catName = "Quincy";
catName = "Beau";
// This is allowed but if you use let twice it shows an error

// USE STRICT.. prevents common coding mistakes

// NOTE: the scope of let is a block scope i.e within these {} but var is not limited to that although when in a function it doesnt appear globally
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is " + i);
  }
  console.log("Function scope i is " + i);
  return i;
}

checkScope();

// CONST - it is read only, you cannot re-assign a const

function printManyTimes(str) {
  "use strict ";

  const SENTENCE = str + " is cool";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}

printManyTimes("Free Code Camp");

// An array defined using const cannot be re-assigned but can be mutated
const s = [5, 7, 2];

function mutateArray() {
  "use strict";
  s.push(2);
  // or
  s[0] = 3;
  s[3] = 5;
}
mutateArray();
console.log(s);

// Freezing items in an object
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

// ARROW FUNCTIONS
const MAGIC = () => new Date();
console.log(MAGIC());
// ARROW FUNCTIONS with parameters
const MYCONCAT = (arr1, arr2) => arr1.concat(arr2);
console.log(MYCONCAT([1, 2], [3, 4, 5]));

// higher order ARROW FUNCIONS
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squaredList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squaredList(realNumberArray);
console.log(squaredIntegers);

// higher order ARROW FUNCIONS
// Default functions
const defaultFunction = function (number, value = 1) {
  return number + value;
};
console.log(defaultFunction(5, 5));
console.log(defaultFunction(5));

// REST OPERATOR - Allows you to pass in any number of arguments in a function
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 8, 9, 10, 12));

// SPREAD OPERATOR - spreads contents of an array into new variable which makes it so that if the former array is altered, the new variable isn't affected;
const arrr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arrr2;
(function () {
  arrr2 = [...arrr1];
  arrr1[0] = "Potato";
})();
console.log(arrr2);

// Destructuring assignment is a way of neatly assigning values taken from an object to a variable

const voxel = { x: 3.6, y: 7.6, z: 6.5 };
const { x: o, y: p, z: q } = voxel;
console.log(q);

// Explanation for whats happening above, the name after the equal to sign is the object from which we are assigning variable from
// in the syntax before the equal to sign, x is a element in the object voxel and its value is being assigned to o. The same thing is happening to the others(y,z)

// DESTRUCTURING IN NESTED OBJECTS
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// You can also destructure from an array but the difference is that you cant pick which element you're destructuring, it just goes in order according to the number of variables put in
const [z, x, , y] = [1, 2, 3, 4, 5];
console.log(z, x, y);

// You can also switch the places of variables via destructuring
var v = 8,
  w = 6;
(() => {
  "use strict";
  // v = w;
  // w = v; this wont work!

  [v, w] = [w, v];
})();
console.log(v);
console.log(w);

// you can use the rest operator to remove items from array and assign the rest of the items to a variable
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);
console.log(source);
console.log(arr);

// You can use destructuring to pass in  the only elements you need in an object into a function parameter rather than passing the whole object
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = function half({ max, min }) {
  return (max + min) / 2.0;
};
console.log(stats);
console.log(half(stats));

// CREATING STRINGS USING TEMPLATE LITERALS
const person = {
  name: "Akintayo Sinmiloluwa",
  age: 17,
};

// Template literal with multi-line interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// Template literal project
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];

  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

// If you want to create an object where the keys(properties) are equivalent to the values (in a function) you could use this shortcut
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Akintayo Sinmiloluwa", 17, "male"));

// shortcut for writing a function inside an object
const bicycle = {
  gear: 2,
  // setGear: function (newGear) {
  //   "use strict";
  //   this.gear = newGear;
  // }, instead of doing this... do whats below
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);

// Using class syntax to create constructor function

// let SpaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// }; instead of this... do whats below

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

let zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

// GETTERS AND SETTERS
// Getters allow you to get the value of an object's private variable without the user gaining access to that variable and setters allow you to  set a new value to that private variable while also running logic functions and potentially displaying error messages if some certain conditons are not met

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      updatedTemp = (5 / 9) * (updatedTemp - 32);
      if (updatedTemp < 20) {
        throw console.error("Invalid Fahrenheit Temp");
      }
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 90;
console.log(thermos.temperature);

// IMPORT AND EXPORT
import { capitalizeString } from "./string_function.js";
console.log(capitalizeString("hey!"));

// To import everything from a file
import * as practiceImport from "./string_function.js";
console.log(practiceImport);

// To import a default export you would not put {} immediately after import
