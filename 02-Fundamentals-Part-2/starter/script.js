"use strict";

const friends = ["Michael", "Steven", "Peter"];
// Add elements
const newLength = friends.push(`jay`);
console.log(friends);
console.log(newLength);

const newLength1 = friends.unshift("john");
console.log(friends);
console.log(newLength1);

// Remove elements
const popped = friends.pop();
console.log(friends);
console.log(popped);

const popped1 = friends.shift();
console.log(friends);
console.log(popped1);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

friends.push(23);
console.log(friends.includes("23")); // false
console.log(friends.includes(23)); // true
console.log(friends.indexOf("23")); // -1
console.log(friends.indexOf(23)); // 3

if (friends.includes("Steven")) {
  console.log(`You have friend called Steven`);
}
