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

let checkBtn = document.querySelector('.check');
let restartBtn = document.querySelector('.again');
let guessMessage = document.querySelector('.guess-message');
let question = document.querySelector('.question');
let input = document.querySelector('.number-input');
let scoreDisplay = document.querySelector('.label-score .score');
let highScore = document.querySelector('.label-highscore .highscore');
let score = 0;
let attempt = 0;

let getRndInteger = function (min1, max1, min2, max2) {
  return (
    (Math.floor(Math.random() * (max1 - min1 + 1)) + min1) *
    (Math.floor(Math.random() * (max2 - min2 + 1)) + min2)
  );
};
let rndInt = getRndInteger(1, 10, 1, 2);

checkBtn.addEventListener('click', () => {
  attempt++;
  let inputNumber = Number(input.value);
  let highScoreNumber = Number(highScore.textContent);

  if (!inputNumber || inputNumber < 0) {
    guessMessage.textContent = 'Введите число!';
  } else {
    if (inputNumber === rndInt) {
      guessMessage.textContent = 'Вы угадали!';
      checkBtn.disabled = true;
      question.textContent = rndInt;
      document.body.style.backgroundColor = 'green';
      score = Math.floor(1000 / attempt);

      scoreDisplay.textContent = score;
      if (score > highScoreNumber) {
        highScore.textContent = score;
      }
    } else {
      if (inputNumber > rndInt) {
        guessMessage.textContent = 'Введённое число больше загаданного';
      } else if (inputNumber < rndInt)
        guessMessage.textContent = 'Введённое число меньше загаданного';
    }
  }
});

restartBtn.addEventListener('click', () => {
  score = 0;
  attempt = 0;
  rndInt = getRndInteger(1, 10, 1, 2);
  checkBtn.disabled = false;
  guessMessage.textContent = 'Начни угадывать';
  document.body.style.backgroundColor = 'black';
  question.textContent = '???';
  input.value = '';
  scoreDisplay.textContent = 0;
});
