function getComputerChoice() {
    let randomValue=Math.random();
    if (randomValue < 0.33) {
        return "rock";
    } else if (randomValue < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Empate!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`Ganaste! ${humanChoice} vence a ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Perdiste! ${computerChoice} vence a ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("Puntaje final:");
  console.log("Humano:", humanScore);
  console.log("Computadora:", computerScore);
}

playGame();