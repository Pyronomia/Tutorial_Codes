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
