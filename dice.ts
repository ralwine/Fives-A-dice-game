// Define a function to roll a single die
function rollDie(): number {
    return Math.floor(Math.random() * 6) + 1;
}

// Define a function to roll two dice and return the sum
function rollTwoDice(): { die1: number, die2: number, rollSum: number } {
    const die1 = rollDie();
    const die2 = rollDie();
    const rollSum = die1 + die2;
    return { die1, die2, rollSum };
}

// Main function to run the program
function main() {
    const resultContainer = document.getElementById('result');
    const rollButton = document.getElementById('rollButton');

    if (resultContainer && rollButton) {
        rollButton.addEventListener('click', function() {
            const { die1, die2, rollSum } = rollTwoDice();
            let resultMessage: string;

            if (die1 === 6 && die2 === 6) {
                resultMessage = "Bus Crash!!!!!, TURN OVER!";
            } else if (die1 === die2) {
                resultMessage = "Roll again!";
            } else if (rollSum === 5 || die1 === 5 || die2 === 5) {
                resultMessage = "Roll again!";
            } else {
                resultMessage = "TURN OVER!";
            }

            if (resultContainer) {
                resultContainer.textContent = `You rolled: ${die1} and ${die2}. Result: ${resultMessage}`;
            }
        });
    }
}

// Run the main function
main();