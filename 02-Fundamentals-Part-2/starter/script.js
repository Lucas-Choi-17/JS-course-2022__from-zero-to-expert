"use strict";

const lucas = {
  firstName: "Lucas",
  lastName: "Choi",
  birthYear: 1997,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  // Challenge
  // "Lucas is a 25-year old student, and he has a/no driver's license"
  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`;
  },
};
console.log(lucas.calcAge());
console.log(lucas.age);
console.log(lucas.age);
console.log(lucas.age);

console.log(lucas.getSummary());
