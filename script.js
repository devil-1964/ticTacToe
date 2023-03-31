const boxes = document.querySelectorAll(".box");
let currentPlayer = "X";
let gameOver = false;

function handleBoxClick(e) {
	if (gameOver) return;
	if (e.target.textContent !== "") return;
	
	e.target.textContent = currentPlayer;
	
	if (checkWin()) {
		gameOver = true;
		alert(`${currentPlayer} wins!`);
		return;
	}
	
	if (checkTie()) {
		gameOver = true;
		alert("Tie game!");
		return;
	}
	
	currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	
	return winningCombos.some(combo => {
		return combo.every(index => {
			return boxes[index].textContent === currentPlayer;
		});
	});
}

function checkTie() {
	return Array.from(boxes).every(box => {
		return box.textContent !== "";
	});
}

boxes.forEach(box => {
	box.addEventListener("click", handleBoxClick);
});
