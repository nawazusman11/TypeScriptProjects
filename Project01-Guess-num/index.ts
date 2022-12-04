#! /usr/bin/env node

import  * as PromptSync from "prompt-sync";
const message = PromptSync();
let guesses = [];

console.log("Guess the number from 1-20");
var rounds = 3;

while (rounds > 0) {
 
  let actualNum = Math.floor(Math.random() * 20) + 1;

  let guessNum = message("Guess the number: ");

  if (actualNum == Number(guessNum)) {
    console.log(
      ` Congratualtions ${actualNum} is the correct guess. Game ending!!!`
    );
    break;
  } else {
    console.log(`Correct Number: ${actualNum}`);
    console.log(`Your Guess: ${guessNum}`);
    guesses.push(guessNum);
    console.log(`Previous Guesses\n [${guesses}]`);
    rounds--;
    console.log(`Remaining Guesses: ${rounds}`);
  }

  if (rounds == 0) {
    console.log("You have run out of guess limit.");

    let addGuesses = message("Do you want to add more guesses?  y/n ");
    if (addGuesses == "y" || addGuesses == "Y" || addGuesses == "Yes") {
      rounds = Number(message("Enter number of guesses: "));
      console.log(`Remaining guess tries updated to : ${rounds}`);
    }
  }
}
