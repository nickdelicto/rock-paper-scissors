let rock = "rock";
let paper = "paper";
let scissors = "scissors";

/* Declare a function "getComputerChoice" to randomly return either,
'Rock', 'Paper' or 'Scissors' */
function getComputerChoice() {
let array = [rock, paper, scissors];
let random = (Math.floor(Math.random() * array.length));
return array[random];
}

let computerSelection;
let playerSelection;

/* Define function taking the user input and computer's random choice,
as arguments.*/
function playRound(playerSelection, computerSelection) {
    do {
        playerSelection = prompt("Rock, Paper, Scissors, shoot!").toLowerCase();
    } while (playerSelection !== rock && playerSelection !== paper && playerSelection !== scissors);

    computerSelection = getComputerChoice();

    if ((playerSelection === rock) && (computerSelection === scissors)) {
        return "player";
    } else if ((playerSelection === scissors) && (computerSelection === paper)) {
        return "player";
    } else if ((playerSelection === paper) && (computerSelection === rock)) {
        return "player";
    } else if ((playerSelection === rock) && (computerSelection === paper)) {
        return "computer";
    } else if ((playerSelection === paper) && (computerSelection === scissors)) {
        return "computer";
    } else if ((playerSelection === scissors) && (computerSelection === rock)) {
        return "computer";
    } else if (playerSelection === computerSelection) {
        return "tie";
    }
}

/* Define a function game(). Do a loop calling the playRound function
5 times. For each loop, tally finalPlayerScore and finalComputerScore*/
function game() {
    let finalPlayerScore = 0
    let finalComputerScore = 0

    for (let i = 1; i <= 5; i++) {
        let roundResult = playRound(playerSelection, computerSelection)

        if (roundResult === "player") {
            finalPlayerScore++;
            console.log(`You win in round ${i}!`);
        } else if (roundResult === "computer") {
            finalComputerScore++;
            console.log(`You lose in round ${i}!`);
        } else if (roundResult === "tie") {
            console.log(`You tie in round ${i}!`);
        }
    }
    
    if (finalPlayerScore > finalComputerScore) {
        console.log(`You Win! Your score: ${finalPlayerScore} / 5. Computer score: ${finalComputerScore} / 5.`);
    } else if (finalPlayerScore < finalComputerScore) {
        console.log(`You Lose! Your score: ${finalPlayerScore} / 5. Computer score: ${finalComputerScore} / 5.`);
    } else if (finalPlayerScore === finalComputerScore) {
        console.log(`It's a Tie! Your score: ${finalPlayerScore} / 5. Computer score: ${finalComputerScore} / 5.`)
    }
} console.log(game());

