function startNewGame() {
  if (!players[0].name || !players[1].name) {
    alert("Please set custom player names for both players!");
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

// li를 선택하는 경우
// function selectGameField(event) {
//   event.target.textContent = players[activePlayer].symbol;
//   event.target.classList.add("disabled");

//   switchPlayer()
// }

// ol을 선택하는 경우
function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    // ol의 li 이외 부분을 클릭하는 경우 배제
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col -1;
  const selectedRow = selectedField.dataset.row -1;

  if(gameData[selectedRow][selectedColumn] > 0) {
    alert('Please select an empty field');
    return
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");


  gameData[selectedRow][selectedColumn] = activePlayer +1

  switchPlayer();
}
