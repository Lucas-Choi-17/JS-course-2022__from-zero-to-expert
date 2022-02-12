const myLangEng = true;
const myPopulation = 49.82;
const myIsIsland = false;

const yesCriteria = myLangEng && myPopulation < 50 && !myIsIsland;
if (yesCriteria) {
  console.log("You should live in Korea :)");
} else {
  console.log("Korea does nott meet your criteria :(");
}
