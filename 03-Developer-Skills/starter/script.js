// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Problem 1

// What is temp amplitude?
// Answer: difference between highest and lowest temp

// How to compute max and min temperature?
// - find max and min value in temp array

// What is a sensor error? And what to do?
// - ignore sensor errors

// - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    min = min < temps[i] ? min : temps[i];
    max = max > temps[i] ? max : temps[i];
  }
  console.log(max, min);
  return max - min;
};
console.log(calcTempAmplitude(temperatures));

// Problem 2

// function should now receive 2 arrays of temps

// With 2 arrays, should we implement functionality twice?
// No! merge two arrays
// How to merge arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let min = temps[0];
  let max = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    min = min < temps[i] ? min : temps[i];
    max = max > temps[i] ? max : temps[i];
  }
  console.log(max, min);
  return max - min;
};
const temperaturesNew = [4, -3, -8, -3, 'error', 11, 12, 6, 10, 14, 9, 5];

console.log(calcTempAmplitudeNew(temperatures, temperaturesNew));
