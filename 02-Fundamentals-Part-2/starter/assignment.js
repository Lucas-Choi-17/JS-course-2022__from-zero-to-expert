"use strict";

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const korea1 = percentageOfWorld1(52);
const usa1 = percentageOfWorld1(348);
const india1 = percentageOfWorld1(1466);

console.log(`Korea : ${korea1}`);
console.log(`USA : ${usa1}`);
console.log(`India : ${india1}`);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const korea2 = percentageOfWorld2(52);
const usa2 = percentageOfWorld2(348);
const india2 = percentageOfWorld2(1466);

console.log(`Korea : ${korea2}`);
console.log(`USA : ${usa2}`);
console.log(`India : ${india2}`);
