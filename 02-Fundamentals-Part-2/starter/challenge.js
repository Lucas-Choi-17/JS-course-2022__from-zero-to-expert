/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores
is calculated (so one average score per team).
A team only wins if it has at least double the average score of
the other team. Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the
average of 3 scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score
of each team as parameters ('avgDolhins' and 'avgKoalas'),
and then logs the winner to the console, together with the
victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for
both Data1 and Data 2
5. Ignore draws this time
Test data:
Data 1: Dolphins score 44, 23 and 71. 
Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41.
Koalas score 23, 34 and 27
Hints:
To calculate average of 3 values, add them all together and
divide by 3
To check if number A is at least double number B, check for
A >= 2 * B.
Apply this to the team's average scores
*/

// data 1
// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;

// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;
// data 2
const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;

const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
function checkWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
  } else if (koalasAvg >= 2 * dolphinsAvg) {
    console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`);
  } else {
    console.log(`No team wins...`);
  }
}

const dolphinsAverage = calcAverage(
  dolphinsScore1,
  dolphinsScore2,
  dolphinsScore3
);
const koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);
console.log(dolphinsAverage, koalasAverage);
checkWinner(dolphinsAverage, koalasAverage);
