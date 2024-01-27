// Define a function to roll a single die
function rollDie(): number {
  // Generate a random number between 1 and 6
  return Math.floor(Math.random() * 6) + 1;
}

// Define a function to roll two dice and return the sum
function rollTwoDice(): string {
  const die1 = rollDie();
  const die2 = rollDie();
  //return die1 + die2;
  console.log(`You rolled: ${die1} and ${die2}`);
  // Main function to run the program
  if (die1 === 6 && die2 === 6) {
    return "Bus Crash!";
  } else if (die1 === die2) {
    return "Roll again!";
  } else {
    return "TURN OVER!";
  }
}

// Run the main function
//main();
console.log(rollTwoDice());