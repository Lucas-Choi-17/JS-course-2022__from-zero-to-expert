"use strict";

const lucas = [
  "Lucas",
  "Choi",
  2022 - 1997,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < lucas.length; i++) {
  console.log(lucas[i], typeof lucas[i]);

  // types[i] = typeof lucas[i];
  types.push(typeof lucas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

//continue and break
console.log(`---- ONLY STRINGS ----`);
for (let i = 0; i < lucas.length; i++) {
  if (typeof lucas[i] !== "string") continue;
  console.log(lucas[i], typeof lucas[i]);
}

console.log(`---- BREAK WITH NUMBER ----`);
for (let i = 0; i < lucas.length; i++) {
  if (typeof lucas[i] === "number") break;
  console.log(lucas[i], typeof lucas[i]);
}
