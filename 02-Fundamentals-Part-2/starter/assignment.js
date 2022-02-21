"use strict";

const korea = 52;
const usa = 334;
const india = 1466;
const canada = 383;

const populations = new Array(korea, usa, india, canada);
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentages = [
  percentageOfWorld1(korea),
  percentageOfWorld1(usa),
  percentageOfWorld1(india),
  percentageOfWorld1(canada),
];

console.log(percentages);
