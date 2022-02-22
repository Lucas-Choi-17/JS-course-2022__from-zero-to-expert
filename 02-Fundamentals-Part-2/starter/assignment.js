"use strict";

const populations = [52, 334, 1466, 383];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i <= populations.length - 1; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
