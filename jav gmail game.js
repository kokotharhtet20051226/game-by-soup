let randomNumber;

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('message').style.color = '#333';
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'red';
    } else if (guess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number.';
        message.style.color = 'green';
    } else if (guess < randomNumber) {
        message.textContent = 'Too low. Try again.';
        message.style.color = 'blue';
    } else {
        message.textContent = 'Too high. Try again.';
        message.style.color = 'blue';
    }
}

restartGame(); // Start the game initially
