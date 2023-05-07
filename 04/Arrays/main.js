// ---------------- create array using Array()
var array = new Array(10);

// set value
array[0] = 100;
array[1] = 200;
array[2] = 300;

console.log("Array lendth:" + array.length);
console.log("Array:" + array);

var array = new Array(3, 6, 10, -3, 485);
console.log("Array:" + array);

// ------------ create array using []
var array = []; //empty array
var array = [4, 6, 123, 1, 604, -4, 0, 123, 44];

console.log("Array:" + array);
console.log("Last item:" + array[array.length - 1]);

array[20] = 99;
console.log("Element 20: " + array[20]);
console.log("Array lenth:" + array.length);

console.log(array[0] + " ");
console.log(array[1] + " ");
console.log(array[2] + " ");

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(const item of array) {
    console.log(item);
}

for(const item in array) {
    console.log(item);
}

array.forEach((item) => {
    console.log(item);
})

array.push(777);
array.pop();
array.shift();
array.unshift(555);
console.log("First 123:" + array.indexOf(123));
console.log("Last 123:" + array.lastIndexOf(123));
console.log("Found:" + array.find((elem) => elem < 0))
console.log("Default sort:" + array.sort());

array.sort((a, b) => a - b);
console.log("");
console.log("Custom sort:" + array);
array.splice(2, 3);
console.log("Spliced:" + array);
const copy = array.slice(1, array.length - 1);
console.log("Copied:" + copy);
array = [4, 6, 8, 1, 13, 16, -4, 0, 99];

const filtered = array.filter((el) => el % 2 == 0);
console.log("Filtered:" + filtered);
const colors = ['red', 'brown', 'green', 'gold', 'silver'];

const str = colors.join(" - ");
console.log("Str after join:" + str);