"use strict";

const myCountry = {
  country: "Korea",
  capital: "Seoul",
  language: "Korean",
  population: 52,
  neighbours: ["North Korea", "Japan", "China"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry.isIsland);
