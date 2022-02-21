"use strict";

const myCountry = {
  country: "Korea",
  capital: "Seoul",
  language: "Korean",
  population: 52,
  neighbours: ["North Korea", "Japan", "China"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
