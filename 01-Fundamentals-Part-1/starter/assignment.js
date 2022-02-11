const country = "Korea";
const continent = "Asia";
let population = 52.82;

const isIsland = "true";
let language = "Korean";

const average = 33;

let description = `${country}'s population is `;
if (population >= average) {
  description += `above average.`;
} else {
  description += `${average - population} million below average.`;
}
console.log(description);

population = 13;
description = `${country}'s population is `;
if (population >= average) {
  description += `above average.`;
} else {
  description += `${average - population} million below average.`;
}
console.log(description);

population = 130;
description = `${country}'s population is `;
if (population >= average) {
  description += `above average.`;
} else {
  description += `${average - population} million below average.`;
}
console.log(description);
