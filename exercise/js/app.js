
// let problems = [
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// ];
// let answer = null;
const maxNum = 10;
let mathProblems = [
    (1 * 2), (2 * 2), (3 * 3), (4 * 4), (5 * 5), (6 * 2), (7 * 3), (8 * 4), (9 * 9)
];

let randomAnswers0 = [(mathProblems[0]),(mathProblems[0] + 5), (mathProblems[0]-8), (mathProblems[0]*2)];
let randomAnswers1 = [(mathProblems[1]),(mathProblems[1] + 5), (mathProblems[1]-8), (mathProblems[1]*2)];
let randomAnswers2 = [(mathProblems[2]),(mathProblems[2] + 5), (mathProblems[2]-8), (mathProblems[2]*2)];
let randomAnswers3 = [(mathProblems[3]),(mathProblems[3] + 5), (mathProblems[3]-8), (mathProblems[3]*2)];
let randomAnswers4 = [(mathProblems[4]),(mathProblems[4] + 5), (mathProblems[4]-8), (mathProblems[4]*2)];
let randomAnswers5 = [(mathProblems[5]),(mathProblems[5] + 5), (mathProblems[5]-8), (mathProblems[5]*2)];
let randomAnswers6 = [(mathProblems[6]),(mathProblems[6] + 5), (mathProblems[6]-8), (mathProblems[6]*2)];
let randomAnswers7 = [(mathProblems[7]),(mathProblems[7] + 5), (mathProblems[7]-8), (mathProblems[7]*2)];
let randomAnswers8 = [(mathProblems[8]),(mathProblems[8] + 5), (mathProblems[8]-8), (mathProblems[8]*2)];
let randomAnswers9 = [(mathProblems[9]),(mathProblems[9] + 5), (mathProblems[9]-8), (mathProblems[9]*2)];



function getRandomNumber(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
}

/**
 * Parses the display value into a number (float or int).
 * @param {String} num 
 */
function parseNumber(num) {
    return num.includes('.') ? parseFloat(num) : parseInt(num);
}






























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

document.addEventListener('DOMContentLoaded', () => {


});