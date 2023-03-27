// ---- 1 ----

const num = +prompt("1.Enter a number 0-9 (if you enter more then 1 it will take the last one)");
switch (num % 10) {
    case 1:
        alert("!")
        break;
    case 2:
        alert("@")
        break;
    case 3:
        alert("#")
        break;
    case 4:
        alert("$")
        break;
    case 5:
        alert("%")
        break;
    case 6:
        alert("^")
        break;
    case 7:
        alert("&")
        break;
    case 8:
        alert("*")
        break;
    case 9:
        alert("(")
        break;
    case 0:
        alert(")")
        break;
    default:
        alert("Incorrect input");
}

const year = +prompt("2.Enter year:");
alert(`${year} is ${!((year % 400 == 0) || ((year % 4 == 0) && !(year % 100 == 0))) ? "not " : ""}leap`);

let date_str;
let date;
let day;
let month;
let _year;
let leap;
do {
    date_str = prompt("Enter a date (DD.MM.YYYY):");
    date = date_str.split(".");
    day = +date[0];
    month = +date[1];
    _year = +date[2];
    leap = (year % 400 == 0) || ((year % 4 == 0) && !(year % 100 == 0));
} while (date.length != 3 || day > 31 || month > 12 || (month == 2 && ((!leap && day > 28) || (leap && day > 29))));

day = day + 1;
if(month == 2) {
    if(leap && day > 29) {
        day = 1;
        month = month + 1;
    }
    else if(day > 28) {
        day = 1;
        month = month + 1;
    }
}
else if(month == 12 && day > 31) {
    day = 1;
    month = 1;
    _year = _year + 1;
}
else if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) && (day > 31)) {
    day = 1;
    month = month + 1;
}
else if (day > 30){
    day = 1;
    month = month + 1;
}

alert(`The next day is: ${day + "." + month + "." + _year}`);

// ---- 2 ----
let i = +prompt("1.Enter start of range:");
const _i = +prompt("1.Enter end of range:");
let sum = 0;
for (i; i <= _i; i++)
    sum = sum + i;
alert(`The sum in this range is ${sum}`);

let num_ = +prompt("2.Enter the number:");
let count = 0;
do {
    num_ = num_ / 10;
    count = count + 1;
} while(num_ > 1);
alert(`The count of digits in number is ${count}`);

let num_str;
let arr_num;
do {
    num_str = prompt("3.Enter 10 numbers:");
    arr_num = num_str.split(" ");
} while (arr_num.length != 10)
let pos = 0;
let neg = 0;
let zero = 0;
let odd = 0;
let even = 0;

for (let f = 0; f < 10; f++) {
    arr_num[f] > 0 ? pos++ : arr_num[f] < 0 ? neg++ : zero++;
    arr_num[f] % 2 === 0 ? even++ : odd++;
}
alert(`Count of positive: ${pos}, negative: ${neg}, zeros: ${zero}.\nAlso count of even: ${even}, odd: ${odd}`);

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let i_ = 0;
while (confirm(`3.${weekdays[index]}. Do you want to see the next day?`)) {
    i_ = (i_ + 1) % 7;
}
