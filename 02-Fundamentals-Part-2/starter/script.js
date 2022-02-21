"use strict";

const lucas = {
  firstName: "Lucas",
  lastName: "Choi",
  age: 2022 - 1997,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(lucas);

console.log(lucas.lastName);
console.log(lucas["lastName"]);

const nameKey = "Name";
console.log(lucas["first" + nameKey]);
console.log(lucas["last" + nameKey]);

const interestedIn = prompt(
  "What po you want to know about Lucas? Choose between firstName, lastName, age, job, and friends"
);

if (lucas[interestedIn]) {
  console.log(lucas[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job, and friends`
  );
}
lucas.location = "Korea";
lucas["twitter"] = "@lucasChoi";
console.log(lucas);

console.log(
  `${lucas.firstName} has ${lucas.friends.length} friends, and his best friend is called ${lucas.friends[0]}`
);
