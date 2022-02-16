"use strict";

// Function declaration
function calAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calAge1(1997);
console.log(age1);

// Function expression
const calAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calAge2(1997);
console.log(age2);
// anonymous function
