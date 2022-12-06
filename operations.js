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
      break;
  }
}

const allKeyButtons = document.querySelectorAll(".keyButton");
allKeyButtons.forEach((keyButton) => {
  keyButton.addEventListener("click", keyButtonPressed);
});

const currentCalculations = document.querySelector(
  ".currentCalculationsDisplay"
);

function keyButtonPressed(e) {
  const keyPressedText = e.target.textContent;
  if (currentCalculations.textContent === "Enter expression to calculate") {
    currentCalculations.textContent = "";
  }
  currentCalculations.textContent += keyPressedText;
  console.log(currentCalculations.textContent)
}
