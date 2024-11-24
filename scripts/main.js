const tttGameButtons = document.querySelectorAll('.ttt-game-box');
const turnText = document.querySelector('.ttt-game-turn');
const playerOne = 'X';
const playerOnePosition = [];
const playerTwo = '0';
const playerTwoPosition = [];
let currentPlayer;
let turnCounter = 0;
let clickCounter = 0;
let isPlayerOneTurn = false;
const winningPositions = ['123', '456','789','147','258','369','159','357'];

// START THE GAME

for (let i = 0; i < tttGameButtons.length; i++) {
    // CHANGING THE TURN
    tttGameButtons[i].addEventListener('click', () => {
        if (isPlayerOneTurn === false) {
            currentPlayer = 'X'
            tttGameButtons[i].textContent = currentPlayer;
            playerOnePosition.push(tttGameButtons[i].value);
            
            isPlayerOneTurn = true;
        } else {
            currentPlayer = '0';
            tttGameButtons[i].textContent = currentPlayer;
            playerTwoPosition.push(tttGameButtons[i].value);

            isPlayerOneTurn = false;
        };
        console.log(playerOnePosition, playerTwoPosition);
        checkingWinningCondition();
    });
};


// CHECKING WHETHER A USER WON THE GAME OR NOT

function checkingWinningCondition() {
    for (const winningPosition of winningPositions) {
        if (playerOnePosition.includes(winningPosition)) {
            console.log('You won the game.')
        } else {
            console.log('Keep going');
        };
    };
};