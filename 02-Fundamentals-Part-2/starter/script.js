const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]); // Michael
console.log(friends[1]); // Steven
console.log(friends[2]); // Peter

console.log(friends.length);
console.log(friends[friends.length - 1]); // last element of friends array

friends[2] = "Jay";
console.log(friends);

const firstName = `Lucas`;
const lucas = [firstName, `Choi`, 2022 - 1997, "student", friends];
console.log(lucas);

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years1 = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[2]),
  calcAge(years1[3]),
  calcAge(years1[years1.length - 1]),
];
console.log(ages);
