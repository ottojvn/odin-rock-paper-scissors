let playerScore;
let computerScore;
let resultText;
const selections = this.document.querySelectorAll("#selections > button");
const resetButton = this.document.querySelector("#resetButton");

function getComputerChoice() {
  const selections = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * selections.length);
  const sel = selections[index];

  return sel;
}

function playRound() {
  playerSelection = this.id;
  computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    resultText = "It's a tie!";
    gameUpdate();
    return;
  }

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    resultText = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    gameUpdate();
    return;
  }

  computerScore++;
  resultText = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  gameUpdate();
  return;
}

function gameUpdate() {
  const playerScoreDisplay = document.querySelector("#playerScore");
  const computerScoreDisplay = document.querySelector("#computerScore");
  const resultDisplay = document.querySelector("#result");

  if (playerScore == 5) {
    resultText = "The player wins!";
    gameEnd();
  } else if (computerScore == 5) {
    resultText = "The computer wins!";
    gameEnd();
  }

  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  resultDisplay.textContent = resultText;
}

function gameReset() {
  playerScore = 0;
  computerScore = 0;
  resultText = "Click one of the buttons to start the game";

  selections.forEach((selection) =>
    selection.addEventListener("click", playRound)
  );
  resetButton.removeEventListener("click", gameReset);
  resetButton.style.visibility = "hidden";
  gameUpdate();
  return;
}

function gameEnd() {
  selections.forEach((selection) =>
    selection.removeEventListener("click", playRound)
  );

  resetButton.addEventListener("click", gameReset);
  resetButton.style.visibility = "visible";
}

gameReset();
gameUpdate();
