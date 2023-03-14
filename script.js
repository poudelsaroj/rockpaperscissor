// Define variables to store player and computer moves
let playerMove;
let computerMove;

// Define a function to generate a random computer move
function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

// Define a function to play the game and display the result
function playGame(playerMove) {
    // Get the computer's move
    computerMove = getComputerMove();

    // Display the player's move
    const playerChoiceElement = document.getElementById('player-choice');
    playerChoiceElement.textContent = playerMove;


    // Display the computer's move
    const computerChoiceElement = document.getElementById('computer-choice');
    computerChoiceElement.textContent = computerMove;



    // Determine the result of the game
    let result;
    if (playerMove === computerMove) {
        result = "It's a tie!";
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Display the result of the game
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;

}

// Attach event listeners to the buttons
const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function () {
    playGame('rock');
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function () {
    playGame('paper');
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function () {
    playGame('scissors');
});

// Attach event listener to the reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    // Clear the player and computer moves
    playerMove = undefined;
    computerMove = undefined;

    // Clear the move and result displays in the HTML
    const playerChoiceElement = document.getElementById('player-choice');
    playerChoiceElement.textContent = '';
    const computerChoiceElement = document.getElementById('computer-choice');
    computerChoiceElement.textContent = '';
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
});
