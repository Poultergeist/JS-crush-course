const array = [];
for(let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 101);
    console.log(`[${i}] = ${array[i]}`);
}

console.log(array.sort((a, b) => b - a));

const arr = array.slice(0, array.length);
console.log(arr.fill(0, array.length / 2, array.length));

let even = 0;
array.forEach(a => {
    console.log(`Condition: ${a}/7, result: ${a/7}, is divided by 7: ${a % 7 === 0}`);
    if(a % 2 === 0) even++;
});

const removthree = array.slice(3, array.length);
console.log(removthree);
console.log(even);

let duplicates = false;
array.forEach((a, i, array) => {
    if(a === array[i+1]) duplicates = true;
});
console.log(`array ${duplicates ? "have" : "have no"} duplicates`);
console.log("==================================================");

/*--------------- Strings ----------------------*/

/**
 * Capitalizes the first letter of the string.
 *
 * @returns {string} - A new string with the first letter capitalized.
 */
String.prototype.capitalizeFirstLetter = function() {
    if(this.length === 0) {
        return this;
    }
    return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * Reverses the order of characters in the string.
 *
 * @returns {string} - A new string with the characters reversed.
 */
String.prototype.reverse = function() {
    let ret = "";
    for(let i = 0; i < this.length; i++) {
        ret += this[this.length - (i + 1)];
    }
    return ret;
};

/**
 *
 * Parses the URL and returns an array containing information about the URL.
 * @returns {Array} - An array containing information about the URL.
 * The first element of the array is the domain name, including the top-level domain.
 * The second element of the array is the path of the URL.
 */
String.prototype.urlDetails = function() {
    const urlInfo = this.split("://");
    const withoutProtocol = urlInfo[1].slice(urlInfo[1][0] === "/" ? 1 : 0).split("/");
    return [urlInfo[0], withoutProtocol[0], withoutProtocol.remove(withoutProtocol[0]).join("/")]
}

/**
 * Removes all elements from the array that are equal to the specified value.
 *
 * @param {string} separator - The value to remove from the array.
 * @returns {string[]} - A new array with the specified value removed.
 */
Array.prototype.remove = function(separator) {
    if(!separator) {
        separator = "";
    }
    let ret = [];
    for(let i = 0; i < this.length; i++) {
        if(this[i] !== separator)
            ret.push(this[i]);
    }
    return ret;
};

const str = prompt("Enter your message");
console.log(`Count of spaces in your message: ${str.split(" ").length - 1}`);

console.log(`Your string with capitalized first letter: ${str.capitalizeFirstLetter()}`);

console.log(`Count of words in your message: ${str.split(" ").remove().length}`);
/*, ${str.split(" ").remove("1").remove().join(" ")} you can try this if you want to know how .remove works*/

const prm = prompt("Enter a phrase").split(" ").remove().join(" ");

const abbr = prm.split(" ");
abbr.forEach((y, i, a) => {a[i] = y.charAt(0)});
console.log(`Abbreviation for your message: ${abbr.join("").toUpperCase()}`);

console.log(`Is this string palindrome? ${prm === prm.reverse()}`);

const url = prompt("Enter url")
console.log(`Protocol: ${url.urlDetails()[0]}, domain name: ${url.urlDetails()[1]}, path: ${url.urlDetails()[2]}`)
