const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("result")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerscore = 0
let computerscore = 0

function playGame(playerChoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)]
    let result = "";
    if (playerChoice === computerchoice) {
        result = "It's a TIE..."
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerchoice === "scissors") ? "You WIN" : "You LOSE"
                break;
            case "paper":
                result = (computerchoice === "rock") ? "You WIN" : "You LOSE"
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You WIN" : "You LOSE"
                break;
        }
    }
    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${computerchoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext")

    switch (result) {
        case "You WIN": resultDisplay.classList.add("greentext");
            playerscore++;
            playerScoreDisplay.textContent = playerscore
            break;
        case "You LOSE": resultDisplay.classList.add("redtext");
            computerscore++;
            computerScoreDisplay.textContent = computerscore
            break;
    }
}
