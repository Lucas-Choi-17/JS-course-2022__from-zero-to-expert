"use strict";

const calAge = (birthYear) => 2022 - birthYear;
const age = calAge(1991);
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1997, `Choi`));
