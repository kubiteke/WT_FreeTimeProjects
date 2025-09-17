// Rock(taş)-Water(su)-Air(hava)-Paper(kağıt)-Sponge(sünger)-Scissors(makas)-Fire(Ateş) oyunu

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function rockWaterAirPaperSpongeScissorsFire(userChoice) {
  let computerChoices = [
    "Rock",
    "Water",
    "Air",
    "Paper",
    "Sponge",
    "Scissors",
    "Fire",
  ];

  let n = getRandomInt(1, 7) - 1;
  computerChoice = computerChoices[n];

  let gameResult = `Your choice is: ${userChoice}. Computer Choice is: ${computerChoice} `;

  if (userChoice === computerChoice) {
    return `${gameResult} Draw!`;
  } else if (
    userChoice === "Rock" &&
    (computerChoice === "Fire" ||
      computerChoice === "Scissors" ||
      computerChoice === "Sponge")
  ) {
    return `${gameResult}. You won!`;
  } else if (
    userChoice === "Fire" &&
    (computerChoice === "Scissors" ||
      computerChoice === "Sponge" ||
      computerChoice === "Paper")
  ) {
    return `${gameResult} You won!`;
  } else if (
    userChoice === "Scissors" &&
    (computerChoice === "Sponge" ||
      computerChoice === "Paper" ||
      computerChoice === "Air")
  ) {
    return `${gameResult} You won!`;
  } else if (
    userChoice === "Sponge" &&
    (computerChoice === "Paper" ||
      computerChoice === "Air" ||
      computerChoice === "Water")
  ) {
    return `${gameResult} You won!`;
  } else if (
    userChoice === "Paper" &&
    (computerChoice === "Air" ||
      computerChoice === "Water" ||
      computerChoice === "Rock")
  ) {
    return `${gameResult} You won!`;
  } else if (
    userChoice === "Air" &&
    (computerChoice === "Water" ||
      computerChoice === "Rock" ||
      computerChoice === "Fire")
  ) {
    return `${gameResult} You won!`;
  } else if (
    userChoice === "Water" &&
    (computerChoice === "Rock" ||
      computerChoice === "Fire" ||
      computerChoice === "Scissors")
  ) {
    return `${gameResult} You won!`;
  } else {
    return `${gameResult} You lost`;
  }
}

console.log(rockWaterAirPaperSpongeScissorsFire("Air"));
