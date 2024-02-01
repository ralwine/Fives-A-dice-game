// Define a function to roll a single die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}
// Define a function to roll two dice and return the sum
function rollTwoDice() {
    var die1 = rollDie();
    var die2 = rollDie();
    var rollSum = die1 + die2;
    return { die1: die1, die2: die2, rollSum: rollSum };
}
// Main function to run the program
function main() {
    var resultContainer = document.getElementById('result');
    var rollButton = document.getElementById('rollButton');
    console.log('Button clicked');
    if (resultContainer && rollButton) {
        rollButton.addEventListener('click', function () {
            var _a = rollTwoDice(), die1 = _a.die1, die2 = _a.die2, rollSum = _a.rollSum;
            var resultMessage;
            if (die1 === 6 && die2 === 6) {
                resultMessage = "Bus Crash!!!!!, TURN OVER!";
            }
            else if (die1 === die2) {
                resultMessage = "Roll again!";
            }
            else if (rollSum === 5 || die1 === 5 || die2 === 5) {
                resultMessage = "Roll again!";
            }
            else {
                resultMessage = "TURN OVER!";
            }
            if (resultContainer) {
                resultContainer.textContent = "You rolled: ".concat(die1, " and ").concat(die2, ". Result: ").concat(resultMessage);
            }
        });
    }
}
// Call the main function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', main);
