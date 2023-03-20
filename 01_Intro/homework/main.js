// ------1-------
let curr_year = 2023;
const user_year = +prompt("Enter your birth year:");
alert(`Your age is ${curr_year - user_year}`);

// ------2-------
const r = +prompt("Enter circle radius:");
alert(`Circle area is: ${Math.PI * (r**2)}`);

// ------3-------
const dist = +prompt("Enter distance between two cities:");
const time = +prompt("Enter time for travel (in hours):");
alert(`Speed you need to reach to arrive on: ${dist / time}`);

// ------4-------
const usd = +prompt("Enter usd:");
alert(`Euro: ${usd * 0.933}`);

// ------5-------
const spaceGB = +prompt("Enter capacity in GB:");
let spaceMB = spaceGB * 1024;
alert(`You can save ${(spaceMB - (spaceMB % 820))/820} files with size 820MB on flash drive and will be ${spaceMB % 820} free space`);
