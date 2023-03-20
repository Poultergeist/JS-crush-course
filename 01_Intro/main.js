// -------------- data type -----------------
let price = 123.5;              // number
let email = 'blabla@ukr.net'    // string
let isValid = true;             // boolean
let emptyObj = null;            // null
let undefinedVar = undefined;   // undefined

console.log("type of price: " + typeof(price));
console.log("type of email: " + typeof(email));
console.log("type of isValid: " + typeof(isValid));
console.log("type of emptyObj: " + typeof(emptyObj));
console.log("type of undefinedVar: " + typeof(undefinedVar));

// -------------- browser dialogs -----------
alert("some alert message");

const username = prompt('Enter your name:');

// interpolation `text ${expresion} text`
console.log(`Hello, dear ${username}!`);

// ----------- operators -----------
// ariphmetic: + - * / %

// operator +{string data} - convert string to number
const width = +prompt("enter square side:");

console.log(`Increment: ${width + 1}`);
console.log(`Area of the square: ${width * width}`);

// {number} ** {step} - return stepin of a number
console.log(`Stepin: ${width ** 3}`);