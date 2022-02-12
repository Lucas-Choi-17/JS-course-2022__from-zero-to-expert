const numNeighbors = Number(
  prompt("How many neighbor countries does your country have?")
);

if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
