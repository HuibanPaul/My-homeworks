let roundWinner = [];
let butoane = document.querySelectorAll("button");
console.log(butoane);

let computerChoice = function () {
  const variantePosibile = ["Rock", "Paper", "Scissors"];
  return variantePosibile[Math.floor(Math.random() * variantePosibile.length)];
};
let winner = function (computerChoice, playerChoice) {
  console.log(playerChoice);
  console.log(computerChoice);
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
    winner(computerChoice(), this.id);
  });
});
