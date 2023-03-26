// ---- 1 ----
const km = +prompt("Enter count of kilometers:");
let miles = 0.621371 * km;
alert(`${km} kilometers equals to ${miles} miles`);

// ---- 2 ----
let time_str;
let time;
do {
time_str = prompt("Enter current time (XX:XX):");
time = time_str.split(":");
} while (time[0] > 24 || time[1] >= 60 || time[0] < 0 || time[1] < 0 || (time[0] == 24 && time[1] != 0));
let hours_left = 23 - time[0];
let minutes_left = 60 - time[1];
if(minutes_left === 60) {
    hours_left = hours_left + 1;
    minutes_left = 0;
}
alert(`Time left until the end of day: ${hours_left}:${minutes_left}`)

// ----3----
let three_digit;
do {
    three_digit = +prompt("Enter 3-digit number");
} while(!(three_digit >= 100 && three_digit < 1000));
let digit_1 = three_digit % 10;
let digit_2 = (three_digit % 100 - digit_1) / 10;
let digit_3 = (three_digit - (digit_2 * 10 + digit_1)) / 100;
let reverse = digit_1 * 100 + digit_2 * 10 + digit_3;
alert(`Reversed to ${three_digit} is ${reverse}`);
