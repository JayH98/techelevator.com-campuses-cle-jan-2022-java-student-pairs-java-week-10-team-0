

let correctAnswer = null;
let currentExpression = null;

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getAnswerArray() {
  let answerArray = [getRandomNumber(82), getRandomNumber(82), 
    getRandomNumber(82), correctAnswer];
  return shuffleArray(answerArray);
}

function getRandomProblem() {
  let num1 = getRandomNumber(10);
  let num2 = getRandomNumber(10);
  correctAnswer = num1 * num2;
  currentExpression = num1 + ' x ' + num2;
}

function shuffleArray(arr) {
  return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

document.addEventListener('DOMContentLoaded', () => {
  const currentProblem = document.querySelector('.expression');
  getRandomProblem();
  currentProblem.innerText = currentExpression;

  let displayAnswers = document.querySelectorAll('li');
  let currentAnswers = getAnswerArray();
  for (i = 0; i < displayAnswers.length; i++) {
    displayAnswers[i].innerText = currentAnswers[i];
  }

  // function selectingAnswer() {
  //   let countScore = 0;
  //   currentScore = display.querySelector('.currentScore');
  //   if (selectedAnswer = correctAnswer) {
      
  //   }
  // }
  
  // function setOfRandomProblems {
  //   let problemSet = getRandomProblem(10)
  // }


  //Above want function that if correctAnswer was clicked is true  -Move to the next problem.
  // Update the current problem number. Update the score.

  // Else if above function when !correctAnswer was clicked on true -Move to the next problem.
  //Update the current problem number. Score is NOT updated.

// For problems out of 10 and score: Once 1/10 goes to  10/10 the next problem will begin again
// with 1/10 and the score will reset to 0 being tied to that 10/10 in this small bit of logic.


  });

/**

 * TODO Start Over single click resets currentProblem
 *      Start Over double click rests problem sets && score
 */





// let display;
// let previous = null;
// let operator = null;
// let operatorClicked = false;

// /**
//  * Calculates the operation and updates the display.
//  */
// function performOperation() {
//   let result;
//   const current = parseNumber(display.value);
//   previous = parseNumber(previous);

//   switch(operator) {
//     case '+' :
//       result = previous + current;
//     break;
//     case '-' :
//         result = previous - current;
//     break;
//     case '*' :
//         result = previous * current;
//     break;
//     case '/' :
//         result = previous / current;
//     break;
//   }

//   display.value = result;
//   operator = null;
// }

// /**
//  * Parses the display value into a number (float or int).
//  * @param {String} num 
//  */
// function parseNumber(num) {
//   return num.includes('.') ? parseFloat(num) : parseInt(num);
// }

// /**
//  * Capture the previous value and the clicked operator
//  * so that an operation can be performed.
//  */
// function clickOperator(event) {
//   operator = event.target.value;
//   previous = display.value;
//   operatorClicked = true;
// }

// /**
//  * Captures a number click and updates the display value.
//  * @param {Event} event 
//  */
// function clickNumber(event) {
//   const val = event.target.value;

//   if( operatorClicked ) {
//     display.value = val;
//     operatorClicked = false;
//   } else {
//     display.value == 0 ? display.value = val : display.value += val;
//   }

// }

// /**
//  * Resets the display value.
//  */
// function clear() {
//   display.value = 0;
// }

