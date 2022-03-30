const currentProblem = document.querySelector('.expression');
let problemNumber = document.querySelector('.currentProblem');
let displayAnswers = document.querySelectorAll('li');
let currentScore = document.querySelector('.currentScore');
let correctAnswer = null;
let currentAnswers = null;
let currentExpression = null;
let num1 = 0;
let num2 = 0;

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getAnswerArray() {
  let answerArray = [getRandomNumber(82), getRandomNumber(82),
  getRandomNumber(82), correctAnswer];
  answerArray = shuffleArray(answerArray);
  for (i = 0; i < displayAnswers.length; i++) {
    displayAnswers[i].innerText = answerArray[i];
  }
  return shuffleArray(answerArray);
}

function getRandomProblem() {
  num1 = getRandomNumber(10);
  num2 = getRandomNumber(10);
  correctAnswer = num1 * num2;
  currentExpression = num1 + ' x ' + num2;
  currentProblem.innerText = currentExpression;
}

function shuffleArray(arr) {
  return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

function startOver() {
  getRandomProblem();
  newArray = getAnswerArray();
  let problemToggle = document.querySelectorAll('.show-hide');
  problemToggle.forEach((problems) => {
    problems.classList.remove('hidden');
  });
  problemNumber.innerText = 0;
  currentScore.innerText = 0;
}

function addToUserScore() {
  currentScore.innerText = Number(currentScore.innerText) + 1;
}

function selectingAnswer() {
  if (selectedAnswer == correctAnswer) {
    addToUserScore();
  }
  getRandomProblem();
}

function addToProblemCount() {
  problemNumber.innerText = Number(problemNumber.innerText) + 1;
}

document.addEventListener('DOMContentLoaded', () => {
  getRandomProblem();

  let newArray = getAnswerArray();

  const btnStartButton = document.getElementById('btnStartOver');
  btnStartButton.addEventListener('click', (event) => {
    startOver();
  });

  let selectedAnswer = document.querySelectorAll('li');
  selectedAnswer.forEach((answer) => {
    answer.addEventListener('click', (event) => {
      if (answer.innerText == num1 * num2) {
        addToUserScore();
        getRandomProblem();
        getAnswerArray();
        addToProblemCount();
      } else {
        getRandomProblem();
        getAnswerArray();
        addToProblemCount();
      }
      if (problemNumber.innerText == 10) {
        let problemToggle = document.querySelectorAll('.show-hide');
        problemToggle.forEach((problems) => {
          problems.classList.add('hidden');
        });
      }
    });
  });
});