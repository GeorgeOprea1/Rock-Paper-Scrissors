const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerScoreDisplay = document.getElementById("computer-score");
const playerScoreDisplay = document.getElementById("player-score");
const possibleChoices = document.querySelectorAll("button");
const container = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
const startGame = document.getElementById("start-game");
const endBtn = document.getElementById("end-btn");
const endGame = document.getElementById("end-game");
const winner = document.getElementById("winner");
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    getComputerChoice();
    getResult();
    gameOver();
  })
);

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    computerChoice = "rock";
  } else if (random === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    playerScore;
    computerScore;
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    playerScore += 1;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    computerScore += 1;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    playerScore += 1;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore += 1;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    playerScore += 1;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerScore += 1;
  }
  computerScoreDisplay.innerHTML = computerScore;
  playerScoreDisplay.innerHTML = playerScore;
}

startBtn.addEventListener("click", () => {
  startGame.style.display = "none";
  endGame.style.visibility = "hidden";
  container.style.visibility = "visible";
  playerChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
});

endBtn.addEventListener("click", () => {
  endGame.style.visibility = "hidden";
  startGame.style.display = "";
  container.style.visibility = "hidden";
});

function gameOver() {
  if (playerScore === 10) {
    endGame.style.visibility = "visible";
    startGame.style.display = "none";
    container.style.visibility = "hidden";
    winner.innerHTML = "You won!!!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 10) {
    endGame.style.visibility = "visible";
    startGame.style.display = "none";
    container.style.visibility = "hidden";
    winner.innerHTML = "You lose!!!";
    playerScore = 0;
    computerScore = 0;
  }
}
