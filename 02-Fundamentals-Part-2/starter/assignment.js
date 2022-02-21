"use strict";

const neighbours = new Array(`North Korea`, `China`, `Japan`);
neighbours.push(`Utopia`);
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes(`Germany`)) {
  console.log(`Probably not a central European country :D`);
}

neighbours[
  neighbours.indexOf(`North Korea`)
] = `Democratic People's Republic of Korea`;
console.log(neighbours);
