// Define a function to roll a single die
function rollDie(): number {
    // Generate a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}

// Define a function to roll two dice and return the sum
function rollTwoDice(): number {
    const die1 = rollDie();
    const die2 = rollDie();
    return die1 + die2;
}

// Main function to run the program
function main() {
    const rollSum = rollTwoDice();
    if (rollSum === 12) {
        console.log("Bus Crash!");
    } else {
        console.log(`You rolled: ${rollSum}`);
    }
}

// Run the main function
main();