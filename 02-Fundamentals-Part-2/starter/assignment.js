"use strict";

const percentageOfWorld1 = (population) => (population / 7900) * 100;

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  console.log(
    `${country} has ${population} million people which is about ${percentage}% of the world`
  );
}
describePopulation(`Korea`, `52.21`);
describePopulation(`USA`, `348`);
describePopulation(`India`, `1466`);
