//scores variables
let playerScore = 0;
let computerScore = 0;

//DOM elements
const btns = document.querySelectorAll(".btns i");
const playerScoreBox =  document.querySelector("#playerScore");
const computerScoreBox = document.querySelector("#computerScore")
const winnerRound = document.querySelector("#winner");
const winnerFull = document.querySelector("#winnerFull")
const computerImg = document.querySelector("#computer")
const playerImg = document.querySelector("#player")
const reset = document.querySelector("#reset")

//randomly generate computer choice
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

//play round
function round(playerSelection, computerSelection) {
    //reset the texts at start
    winnerRound.innerText = "..."
    winnerFull.innerText = ""

    //if null - error "for console version"
    if (playerSelection === null){
        playerSelection = "error";
    } else {
        playerSelection = playerSelection.toLowerCase();
    }

    //check who won the single round
    if (playerSelection === computerSelection) {
        winnerRound.innerText = "Draw!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        playerScoreBox.innerText = playerScore;
        winnerRound.innerText = "You win!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        computerScoreBox.innerText = computerScore;
        winnerRound.innerText = "Computer win!";
    }    
}

//check if someone won
function checkWin() {
    if (playerScore === 5){
        winnerFull.style.opacity = "1";
        winnerFull.innerText = "You won the game!"
        return 1;
    } else if (computerScore === 5) {
        winnerFull.style.opacity = "1";
        winnerFull.innerText = "You lost the game :("
        return 1;
    }
}

//rock paper scissors buttons
btns.forEach(btn => {
    btn.addEventListener("click", function(){
        //if someone won - stop the game else - play
        if (checkWin()) {
            alert(`Restart the game by clicking "Reset" button!`);
        } else {

        //remove class before adding new one
        playerImg.removeAttribute("class")

        //play round
        round(btn.id ,getComputerChoice())
        
        //check if someone won
        checkWin()

        //putting the icon aboce as a player choice
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
    }
    })
})

//reset btn
reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    computerScoreBox.innerText = computerScore;
    playerScoreBox.innerText = playerScore;
    winnerRound.innerText = "..."
    winnerFull.style.opacity = "0"
})
