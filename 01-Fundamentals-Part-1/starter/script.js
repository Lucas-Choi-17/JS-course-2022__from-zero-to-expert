/*
// Math operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2^3 = 2*2*2
const firstName = "Lucas";
const lastName = "Choi";
console.log(firstName + " " + lastName);

// Assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
// <, >, <=, >=

const isFullAge = ageSarah >= 18;
console.log(typeof isFullAge);

console.log(now - 1991 > now - 2018);
*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

let averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);

averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
