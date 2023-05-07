let login = 'My login is "Vlad"?';
let end = "Goodbye!";

console.log("login[3]:", login[3]);
console.log("Char at 3", login.charAt(3));
console.log(login + end);

if (login.endsWith("?")) console.log("ends with '?'")
else console.log("dont end with '?'");

if (login.startsWith('A')) console.log("Start with A");
else console.log("Dont start with A");

console.log("Index of i:" + login.indexOf('i'));
console.log("Last index of i:" + login.lastIndexOf('i'));

console.log("Symbols:" + login.length);

console.log("After replace:", login.replace('"', '<'));
console.log("After replace: ", login.replaceAll(" ", "-"));

let welcome = "Hello";
console.log(welcome.repeat(3));
console.log("Hello".repeat(3));

console.log("Slice from 3 to 8", login.slice(3, 8));
console.log("Upper case", login.toUpperCase());
console.log("Lower case", login.toLowerCase());

console.log("Before substring:" + login);
console.log("After substring:" + login.substring(login.indexOf('"'), login.lastIndexOf('"')))

let email = prompt("enter your email:");
console.log(`Trimmed |${email.trim()}`)