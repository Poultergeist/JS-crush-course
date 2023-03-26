// ------------- cycles --------------
// types: for, while, do while, for in, for of

let counter = 0;

while (counter < 10) {
    console.log("One more cycle iteration invoke");
    counter++;
}

for (let counter = 0; counter < 10; ++counter){
    console.log("One more cycle iteration invoke");
}

let password = prompt("Enter a password");
while (password.length <= 8) {
    console.warn("Too short! Try to input more then 8 characters!");
    password = prompt("Enter a password again:");
}

do {
    password = prompt("Enter a password");
    if (password.length <= 8)
        console.warn("Too short! Try to input more then 8 characters!");
} while(password.length <= 8)