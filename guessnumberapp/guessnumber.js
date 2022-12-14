'use strict';

// DOM - представление структуры страницы, которое создается браузером при ее загрузке
// Event handler - то, что выполняется по событию

// комп загадал число от 1 до 20
// нужно его угадать, вводя в окошко
//
// каждый раз, как не угадываем число, количество очков уменьшается на 1
// пишется подсказка "Слишком много" или "Слишком мало"
// когда угадываешь, то вместо вопросов появляется загаданное число, экран становится зеленым
// под очками отображается лучший результат, сначала 0, а потом рассчитанный
// есть кнопка "Сначала!" - загадать заново, интерфейс возвращается к предыдущему состоянию

// 1. Механизм загадывания числа от 1 до 20
// 2. Сравнивание загаданного и введенного чисел
// 3. Если равно, то сообщение "Вы угадали!"
// 4. Начисление очков +1
// 5. Если не равно, то сообщение "Попробуйте еще!"
// 6. Реализация перезагрузки игры "Сначала"

// let getRndInteger = function (min, max) { return (Math.floor(Math.random() * (max - min + 1)) + min1); };
// let rndInt = getRndInteger(1, 20);

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
