const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 2;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

const player1EditBtn = document.getElementById("player1-edit-btn");
const player2EditBtn = document.getElementById("player2-edit-btn");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");

// li를 선택하는 경우
// const gameFields = document.querySelectorAll("#game-board li");

// ol을 선택하는 경우
const gameBoardElement = document.getElementById("game-board");

player1EditBtn.addEventListener("click", openPlayerConfig);
player2EditBtn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// li를 선택하는 경우
// for (const gameField of gameFields) {
//   gameField.addEventListener("click", selectGameField);
// }

// ol을 선택하는 경우
gameBoardElement.addEventListener("click", selectGameField);
