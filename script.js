document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'X';
    let gameOver = false;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    };

    const checkWinner = (squares) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (let i = 0; i < winPatterns.length; i++) {
            const pattern = winPatterns[i];
            const a = pattern[0];
            const b = pattern[1];
            const c = pattern[2];
        
            if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
                gameOver = true;
        
                for (let j = 0; j < pattern.length; j++) {
                    const index = pattern[j];
                    squares[index].classList.add('winner');
                }
        
                alert(`Player ${currentPlayer} wins!`);
                render();
                return;
            }
        }

        if ([...squares].every(square => square.textContent !== '')) {
            gameOver = true;
            alert('It\'s a draw!');
            render();
        }
    };

    const render = () => {
        const status = document.getElementById('status');
        status.textContent = gameOver ? 'Game Over' : `Current Player: ${currentPlayer}`;
    };

    window.play = (cell) => {
        if (!gameOver && cell.textContent === '') {
            cell.textContent = currentPlayer;
            cell.classList.add('clicked');
            checkWinner(document.querySelectorAll('.square'));

            if (!gameOver) {
                switchPlayer();
            }
        }
    };
});
