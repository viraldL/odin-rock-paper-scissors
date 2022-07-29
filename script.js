let playerScore = 0;
let computerScore = 0;

const playerScoreBox =  document.querySelector("#playerScore");
const computerScoreBox = document.querySelector("#computerScore")
const winnerRound = document.querySelector("#winner");
const winnerFull = document.querySelector("#winnerFull")
const computerImg = document.querySelector("#computer")
const playerImg = document.querySelector("#player")

function getComputerChoice() {
    computerImg.removeAttribute("class");
    let computerRandom = Math.floor(Math.random()*3 +1);
    let computerChoice = "";

    switch (computerRandom) {
        case 1:
            computerChoice = "rock";
            computerImg.setAttribute("class", "fa-regular fa-hand-back-fist")
            break;

        case 2:
            computerChoice = "paper";
            computerImg.setAttribute("class", "fa-regular fa-hand")
            break;
        case 3:
            computerChoice = "scissors";
            computerImg.setAttribute("class", "fa-regular fa-hand-scissors")
            break;
        default:
            computerChoice = "error";
            break;           
    }
    return computerChoice;
}

function round(playerSelection, computerSelection) {
    winnerRound.innerText = "..."
    winnerFull.innerText = ""
    if (playerSelection === null){
        playerSelection = "error";
    } else {
        playerSelection = playerSelection.toLowerCase();
    }playerScore


    if (playerSelection === computerSelection) {
        winnerRound.innerText = "Draw!";
        return console.log(`Draw!`)
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        playerScoreBox.innerText = playerScore;
        winnerRound.innerText = "You win!";
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        computerScoreBox.innerText = computerScore;
        winnerRound.innerText = "Computer win!";
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else {
        if (playerScore === 5) {
            winnerFull.innerText = "You won the game!"
            console.log("%cDraw!", "font-weight: bold; font-size: 1.5em;")
        } else if (computerScore === 5) {
            winnerFull.innerText = "You lost the game :("
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
        playerImg.removeAttribute("class")
        round(btn.id ,getComputerChoice())

        switch (btn.id) {
            case "rock":
                playerImg.setAttribute("class", "fa-regular fa-hand-back-fist")
                break;
            case "paper":
                playerImg.setAttribute("class", "fa-regular fa-hand")
                break;
            case "scissors":
                playerImg.setAttribute("class", "fa-regular fa-hand-scissors")
                break;
            default:
                break;        
        }
    })
})
