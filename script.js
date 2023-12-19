const rockButton = document.querySelector('.rock');
rockButton.value = "rock";
const paperButton = document.querySelector('.paper');
paperButton.value = "paper";
const scissorsButton = document.querySelector('.scissors');
scissorsButton.value = "scissors";


rockButton.addEventListener('click', (e) => {
    playRound(e.target.value, getComputerChoice())
});

paperButton.addEventListener('click', (e) => {
    playRound(e.target.value, getComputerChoice())
});

scissorsButton.addEventListener('click', (e) => {
    playRound(e.target.value, getComputerChoice())
});


function getComputerChoice() {
    let array = [rockButton.value, paperButton.value, scissorsButton.value];
    let random = (Math.floor(Math.random() * array.length));
    return array[random];
}

let computerSelection;
let playerSelection;

const body = document.querySelector('body');
const display = document.createElement('div');
body.appendChild(display);

let finalPlayerScore = 0;
let finalComputerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === rockButton.value) && (computerSelection === scissorsButton.value)) {
        finalPlayerScore++
        display.textContent = `You win this round. Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
    } else if ((playerSelection === scissorsButton.value) && (computerSelection === paperButton.value)) {
        finalPlayerScore++
        display.textContent = `You win this round. Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
    } else if ((playerSelection === paperButton.value) && (computerSelection === rockButton.value)) {
        finalPlayerScore++
        display.textContent = `You win this round. Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
    } else if ((playerSelection === rockButton.value) && (computerSelection === paperButton.value)) {
        finalComputerScore++
        display.textContent = `You lose this round. Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
    } else if ((playerSelection === paperButton.value) && (computerSelection === scissorsButton.value)) {
        finalComputerScore++
        display.textContent = `You lose this round. Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
    } else if ((playerSelection === scissorsButton.value) && (computerSelection === rockButton.value)) {
        finalComputerScore++
        display.textContent = `You lose this round. Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
    } else if (playerSelection === computerSelection) {
        display.textContent = `You tie this round. Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
    }

    if (finalPlayerScore === 5 || finalComputerScore === 5) {
        if (finalPlayerScore > finalComputerScore) {
            display.textContent = `Congrats! You've won the game! 
            Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`;
        } else {
            display.textContent = `Sorry! You've lost the game! 
            Player: ${finalPlayerScore} vs. Computer: ${finalComputerScore}`; 
        }

        finalPlayerScore = 0;
        finalComputerScore = 0;
    }
}


