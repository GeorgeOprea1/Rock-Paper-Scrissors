const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerScoreDisplay = document.getElementById("computer-score");
const playerScoreDisplay = document.getElementById("player-score");
const possibleChoices = document.querySelectorAll("button");
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
  })
);

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    computerChoice = "rock";
  } else if (random === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scrissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    playerScore;
    computerScore;
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    playerScore += 1;
  } else if (computerChoice === "rock" && playerChoice === "scrissors") {
    computerScore += 1;
  } else if (computerChoice === "paper" && playerChoice === "scrissors") {
    playerScore += 1;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore += 1;
  } else if (computerChoice === "scrissors" && playerChoice === "rock") {
    playerScore += 1;
  } else if (computerChoice === "scrissors" && playerChoice === "paper") {
    computerScore += 1;
  }
  computerScoreDisplay.innerHTML = computerScore;
  playerScoreDisplay.innerHTML = playerScore;
}
