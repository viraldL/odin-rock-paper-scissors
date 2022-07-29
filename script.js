let playerScore = 0;
let computerScore = 0;

const playerScoreBox =  document.querySelector("#playerScore");
const computerScoreBox = document.querySelector("#computerScore")

function getComputerChoice() {
    let computerRandom = Math.floor(Math.random()*3 +1);
    let computerChoice = "";

    switch (computerRandom) {
        case 1:
            computerChoice = "rock";
            break;

        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "error";
            break;           
    }
    return computerChoice;
}

function round(playerSelection, computerSelection) {
    if (playerSelection === null){
        playerSelection = "error";
    } else {
        playerSelection = playerSelection.toLowerCase();
    }playerScore


    if (playerSelection === computerSelection) {
        return console.log(`Draw!`)
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else {
        if (playerScore === computerScore) {
            console.log("%cDraw!", "font-weight: bold; font-size: 1.5em;")
        } else if (playerScore > computerScore) {
            console.log(`%cYou won the game! Your score is ${playerScore}!`, "font-weight: bold; font-size: 1.5em;")
        } else if (computerScore > playerScore) {
            console.log(`%cYou lost the game :(. Your score is ${playerScore}!`, "font-weight: bold; font-size: 1.5em;")
        }

        return console.log(`Type "rock", "paper" or "scissors"`)
    }
}

function game() {

        // round(prompt("Rock, paper or scissors?") ,getComputerChoice());

}



const btns = document.querySelectorAll(".btns i")

btns.forEach(btn => {
    btn.addEventListener("click", function(){
        round(btn.id ,getComputerChoice())
    })
})
