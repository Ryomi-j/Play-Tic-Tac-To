let editedPlayer = 0;

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

const player1EditBtn = document.getElementById("player1-edit-btn");
const player2EditBtn = document.getElementById("player2-edit-btn");
const cancelConfigBtn = document.getElementById("cancel-config-btn");

player1EditBtn.addEventListener("click", openPlayerConfig);
player2EditBtn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
