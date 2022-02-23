"use strict";

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
  for (let k = 0; k <= listOfNeighbours[i].length - 1; k++) {
    console.log(`Neighbour: ${listOfNeighbours[i][k]}`);
  }
}
