"use strict";

const populations = [52, 334, 1466, 383];
const percentages3 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
