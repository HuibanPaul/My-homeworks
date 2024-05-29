let roundWinner = [];
let butoane = document.querySelectorAll("button");
console.log(butoane);
let tabelaDeScor = document.getElementById("scoretable");
let pc = document.getElementById("pc");
let user = document.getElementById("user");

let computerChoice = function () {
  const variantePosibile = ["Rock", "Paper", "Scissors"];
  return variantePosibile[Math.floor(Math.random() * variantePosibile.length)];
};
let reset = () => {
  roundWinner = [];
  tabelaDeScor.innerText = "Let the game begin!";
  pc.innerText = 0;
  user.innerText = 0;
};

let winner = function (computerChoice, playerChoice) {
  console.log(playerChoice);
  console.log(computerChoice);
  let playerChoiceinput = document.getElementById("player-choice");
  let computerChoiceinput = document.getElementById("computer-choice");
  playerChoiceinput.value = playerChoice;
  computerChoiceinput.value = computerChoice;
  if (
    (computerChoice === "Rock" && playerChoice === "Paper") ||
    (computerChoice === "Scissors" && playerChoice === "Rock") ||
    (computerChoice === "Paper" && playerChoice === "Scissors")
  ) {
    roundWinner.push("Player");
  } else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Scissors" && playerChoice === "Paper") ||
    (computerChoice === "Paper" && playerChoice === "Rock")
  ) {
    roundWinner.push("Computer");
  } else {
    roundWinner.push("Tie");
  }
};
butoane.forEach((buton) => {
  buton.addEventListener("click", function () {
    if (this.id === "reset") {
      return reset();
    }
    winner(computerChoice(), this.id);
    console.log(roundWinner);
    let computerWins =
      roundWinner.filter((round) => round === "Computer").length === 3;
    let computerWinsNr = roundWinner.filter(
      (round) => round === "Computer"
    ).length;
    let playerWins =
      roundWinner.filter((round) => round === "Player").length === 3;
    let playerWinsNr = roundWinner.filter((round) => round === "Player").length;

    if (computerWins) {
      tabelaDeScor.innerText = "Calculatorul castiga!";

      console.log("Calculatorul castiga!");
      roundWinner = [];
    }
    if (playerWins) {
      tabelaDeScor.innerText = "Jucatorul castiga!";

      console.log("Jucatorul castiga!");
      roundWinner = [];
    }
    pc.innerText = computerWinsNr;
    user.innerText = playerWinsNr;
  });
});
