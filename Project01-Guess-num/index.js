var ps = require("prompt-sync");
var message = ps();
var guesses = [];
console.log("Guess the number from 1-20");
var rounds = 3;
while (rounds > 0) {
    //console.log(guessNum);
    var actualNum = Math.floor(Math.random() * 20) + 1;
    var guessNum = message("Guess the number: ");
    if (actualNum == guessNum) {
        console.log(" Congratualtions ".concat(actualNum, " is the correct guess. Game ending"));
        break;
    }
    else {
        console.log("Correct Num: ".concat(actualNum));
        console.log("Your Guess: ".concat(guessNum));
        guesses.push(guessNum);
        console.log("Previous Guesses\n [".concat(guesses, "]"));
        rounds--;
        console.log("Remaining Guesses: ".concat(rounds));
    }
    if (rounds == 0) {
        console.log("You have run out of guess limit.");
        var addGuesses = message("Do you want to add more guesses?  y/n ");
        if (addGuesses == "y" || addGuesses == "Y" || addGuesses == "Yes") {
            rounds = message("Enter number of guesses: ");
            console.log("Remaining guess tries updated to : ".concat(rounds));
        }
    }
}
