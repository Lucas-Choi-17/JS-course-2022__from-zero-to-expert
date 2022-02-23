"use strict";

const lucas = [
  "Lucas",
  "Choi",
  2022 - 1997,
  "student",
  ["Michael", "Peter", "Steven"],
];

// Looping Backwards
for (let i = lucas.length - 1; i >= 0; i--) {
  console.log(i, lucas[i]);
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♀️`);
  }
}
