const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const winText = document.getElementById('winText');
const loseText = document.getElementById('loseText');
const choiceButtons = document.querySelectorAll('.choice-btn');

let secretNumber = Math.floor(Math.random() * 10) + 1;

function showResult(won) {
  winText.classList.toggle('hidden', !won);
  loseText.classList.toggle('hidden', won);
}

function resetTurn() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  guessInput.value = '';
  guessInput.focus();
  winText.classList.remove('hidden');
  loseText.classList.add('hidden');
}

function handleGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 10) {
    alert('Choose a number from 1 to 10.');
    guessInput.focus();
    return;
  }

  if (guess === secretNumber) {
    showResult(true);
  } else {
    showResult(false);
  }
}

guessBtn.addEventListener('click', handleGuess);

guessInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleGuess();
  }
});

choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.choice === 'yes') {
      resetTurn();
    } else {
      window.location.reload();
    }
  });
});

showResult(true);
guessInput.focus();
