function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const description1 = describeCountry(`Korea`, 52, `Seoul`);
const description2 = describeCountry(`USA`, 334, `Washington D.C.`);
const description3 = describeCountry(`India`, 1466, `New Delhi`);
console.log(description1);
console.log(description2);
console.log(description3);
