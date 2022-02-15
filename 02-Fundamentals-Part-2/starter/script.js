"use strict";

function logger() {
  console.log(`My name is Lucas`);
}
logger();
logger();
logger();

function fruitProcesser(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcesser(5, 0);
console.log(appleJuice);
console.log(fruitProcesser(5, 0));

const appleOrangeJuice = fruitProcesser(2, 4);
console.log(appleOrangeJuice);
