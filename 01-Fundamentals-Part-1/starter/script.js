// Type Convesion
const inputYear = `1991`;
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I'm " + 23 + " years old");
console.log("I'm " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);

let n = "1" + 1; // '11'
n = n - 1; // '10'
console.log(n);
