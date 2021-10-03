let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(`Random Number: ${randomNumber}`);
let finalOutput = document.querySelector(".final-output");

let guessButton = document.querySelector(".btnGuess");
console.log(guessButton);
guessButton.addEventListener("onclick", guessNumber);
let guesses = [];

finalOutput.value = `Guess a Number between 1 & 100, you got ${
  6 - guesses.length
} guesses`;

function guessNumber(event) {
  event.preventDefault();
  let guess = document.querySelector(".inputs-Values").value;
  
  console.log(`guess value => ${guess}`);
  //Collect input from the user
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess <= 0 || guess > 100 || (guess = "")) {
    finalOutput.value = "Please enter a number between 1 and 100";
    
    console.log("the value is not within accepted criteria");
    // console.log(`the guess value is now reset`)
  } else if (guess > randomNumber && guesses.length < 6) {
    guesses.push(guess);
    
    finalOutput.value = `Number is too high, try again, ${
      6 - guesses.length
    } guesses remaining`;
  } else if (guess < randomNumber && guesses.length < 6) {
    guesses.push(guess);
    // guess = "";
    finalOutput.value = `Number is too low, try again, ${
      6 - guesses.length
    } guesses remaining`;
  } else if (guess == randomNumber) {
    guesses.push(guess);
    // guess = "";
    finalOutput.value = `Guess is correct. You win! it took you ${guesses.length} guesses!`;
    guesses = [];
  } else {
    finalOutput.value = `Sorry, you reached the tries limit, the number was ${randomNumber} press new game?`;
    // guess = "";
    guesses = [];
  }
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  guess = "";
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
