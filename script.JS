let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(index) {
    if (gameBoard[index] === "" && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById("board").children[index].innerText = currentPlayer;
        checkWin();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById("message").innerText = `${currentPlayer} فاز!`;
            document.getElementById("message").style.color = "#27ae60";
            document.getElementById("message").style.display = "block";
            gameActive = false;
        }
    }

    if (!gameBoard.includes("") && gameActive) {
        document.getElementById("message").innerText = "تعادل!";
        document.getElementById("message").style.color = "#333";
        document.getElementById("message").style.display = "block";
        gameActive = false;
    }
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    document.getElementById("message").style.display = "none";
    Array.from(document.getElementById("board").children).forEach(cell => {
        cell.innerText = "";
        cell.style.backgroundColor = "#eee";
    });
}
