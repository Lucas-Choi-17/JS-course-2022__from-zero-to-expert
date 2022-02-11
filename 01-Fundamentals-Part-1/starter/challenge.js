/*
Use the BMI example from Challenge #1, 
and the code you already wrote, 
and improve it.

Your tasks:
1. Print a nice output to the console, 
saying who has the higher BMI. 
The message is either "Mark's BMI is higher than John's!" 
or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let description;
if (markBMI > johnBMI) {
  description = `Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`;
} else if (markBMI < johnBMI) {
  description = `John's BMI(${johnBMI}) is higher than Mark's(${markBMI})`;
} else {
  description = `Mark's and John's BMI is same(${markBMI})`;
}

console.log(description);
