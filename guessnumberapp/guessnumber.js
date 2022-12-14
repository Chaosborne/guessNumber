'use strict';

let checkBtn = document.querySelector('.check');
let restartBtn = document.querySelector('.again');
let guessMessage = document.querySelector('.guess-message');
let question = document.querySelector('.question');
let input = document.querySelector('.number-input');
let scoreDisplay = document.querySelector('.label-score .score');
let highScore = document.querySelector('.label-highscore .highscore');
let rndInt = 0;
let attempt = 0;
let score = 0;

// Message sender
let messageSender = function (msg) {
  guessMessage.textContent = msg;
};

// Randomizer
let getRandomInt = function () {
  rndInt = Math.trunc(Math.random() * 20) + 1;
};
getRandomInt();

// Body color change
let setBodyColor = function (color) {
  document.body.style.backgroundColor = color;
};

// Check Result
checkBtn.addEventListener('click', () => {
  attempt++;
  let inputNumber = Number(input.value);
  let highScoreNumber = Number(highScore.textContent);

  if (!inputNumber || inputNumber < 0) {
    messageSender('Введите число');
  } else if (inputNumber === rndInt) {
    messageSender('Вы угадали!');
    setBodyColor('green');
    checkBtn.disabled = true;
    question.textContent = rndInt;
    scoreDisplay.textContent = score;
    score = Math.floor(1000 / attempt);
    if (score > highScoreNumber) {
      highScore.textContent = score;
    }
  } else if (inputNumber > rndInt) {
    messageSender('Слишком много!');
  } else if (inputNumber < rndInt) {
    messageSender('Слишком мало!');
  }
});

// New game
restartBtn.addEventListener('click', () => {
  score = 0;
  attempt = 0;
  getRandomInt();
  checkBtn.disabled = false;
  messageSender('Начни угадывать!');
  setBodyColor('black');
  question.textContent = '???';
  input.value = '';
  scoreDisplay.textContent = 0;
});
