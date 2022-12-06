"use strict";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      console.log(`${operator} operation not available`);
      return;
      break;
  }
}

const allKeyButtons = document.querySelectorAll(".keyButton");
allKeyButtons.forEach((keyButton) => {
  keyButton.addEventListener("click", keyButtonPressed);
});
window.addEventListener("keypress", keyButtonPressed);

const currentCalculations = document.querySelector(
  ".currentCalculationsDisplay"
);

let updatedPreviousCalculationRowsArray = [
  ["  ", " "],
  ["  ", "  "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  [" ", " "],
];

function updatePreviousCalculations(previousCalculationRowsArray) {
  const display = document.getElementById("display");
  let currentCalculationsDisplay = document.querySelector(
    ".currentCalculationsDisplay"
  );
  let lastPreviousCalculationsDisplay = document.querySelector(
    ".previousCalculationsDisplay"
  );
  display.removeChild(lastPreviousCalculationsDisplay);
  const previousCalculationsDisplay = document.createElement("div");
  previousCalculationsDisplay.className = "previousCalculationsDisplay";
  for (let row of previousCalculationRowsArray) {
    let previousCalculationRow = document.createElement("div");
    previousCalculationRow.className = "previousCalculationRow";
    previousCalculationRow.innerHTML = `<span>${row[0]}</span> <span> ${row[1]}</span>`;
    previousCalculationsDisplay.appendChild(previousCalculationRow);
  }
  display.insertBefore(previousCalculationsDisplay, currentCalculationsDisplay);
}

function keyButtonPressed(e) {
  let keyPressedText;
  if (e.type === "keypress") {
    keyPressedText = e.key;
  } else {
    keyPressedText = e.target.textContent;
  }
  if (currentCalculations.textContent === "Enter expression to calculate") {
    currentCalculations.textContent = "";
  }
  switch (keyPressedText) {
    case "Clear":
      currentCalculations.textContent = "";
      updatedPreviousCalculationRowsArray = [
        ["  ", " "],
        ["  ", "  "],
        ["  ", " "],
        ["  ", " "],
        ["  ", " "],
        ["  ", " "],
        ["  ", " "],
        ["  ", " "],
        [" ", " "],
      ];
      updatePreviousCalculations(updatedPreviousCalculationRowsArray);
      break;
    case "Enter":
      let result = calculateResult(currentCalculations.textContent);
      updatedPreviousCalculationRowsArray.shift();
      updatedPreviousCalculationRowsArray.push([
        `${currentCalculations.textContent}`,
        `${result}`,
      ]);
      updatePreviousCalculations(updatedPreviousCalculationRowsArray);
      currentCalculations.textContent = "";
      break;
    case "/":
    case "*":
      // update when BODMAS is implemented
      let intermediateResult = calculateResult(currentCalculations.textContent);
      updatedPreviousCalculationRowsArray.shift();
      updatedPreviousCalculationRowsArray.push([
        `${currentCalculations.textContent}`,
        `${intermediateResult}`,
      ]);
      updatePreviousCalculations(updatedPreviousCalculationRowsArray);
      currentCalculations.textContent = `${intermediateResult}${keyPressedText}`;
      break;
    case "-":
    case "+":
      currentCalculations.textContent += keyPressedText;
      break;
    default:
      currentCalculations.textContent += keyPressedText;
      break;
  }
}

function calculateResult(expression) {
  let expressionArr = expression.split(""); //['3', '+', '2', '+', '5']
  let isOperatorArr = expressionArr.map((i) => isNaN(i)); //[false, true, false, true, false]
  let num1 = "";
  let num2 = "";
  let index = 0;
  let operator;
  let result;
  for (; index < isOperatorArr.length; index++) {
    if (isOperatorArr[index]) {
      if (expressionArr[index] === ".") {
        num1 += expressionArr[index];
        continue;
      }
      break;
    }
    num1 += expressionArr[index];
  }
  operator = expressionArr[index];
  index += 1;
  for (; index < isOperatorArr.length; index++) {
    if (isOperatorArr[index]) {
      if (expressionArr[index] === ".") {
        num2 += expressionArr[index];
        continue;
      }
      break;
    }
    num2 += expressionArr[index];
  }
  if (!num2) {
    //no operator in expression
    return num1;
  }
  result = operate(operator, num1, num2);
  // more than 2 operators
  while (index < isOperatorArr.length) {
    operator = expressionArr[index];
    index += 1;
    num1 = result;
    num2 = "";
    for (; index < isOperatorArr.length; index++) {
      if (isOperatorArr[index]) {
        if (expressionArr[index] === ".") {
          num2 += expressionArr[index];
          continue;
        }
        break;
      }
      num2 += expressionArr[index];
    }
    result = operate(operator, num1, num2);
  }
  result = Math.floor(result * 10000) / 10000;
  return result;
}
