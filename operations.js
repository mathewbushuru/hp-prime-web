"use strict";

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  console.log(`${a}*${b} = ${a * b}`);
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  console.log(`a: ${a},b: ${b}`);
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
let updatedPreviousCalculationRowsArray = [
  [" 1  ", " 3"],
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
let num1, num2, operator, result;
function keyButtonPressed(e) {
  const keyPressedText = e.target.textContent;
  if (currentCalculations.textContent === "Enter expression to calculate") {
    currentCalculations.textContent = "";
  }
  switch (keyPressedText) {
    case "Enter":
      if (num1) {
        num2 = "";
        for (
          let i = num1.length + 1;
          i < currentCalculations.textContent.length;
          i++
        ) {
          num2 += currentCalculations.textContent[i];
        }
        result = operate(operator, num1, num2);
        result = String(result);
      } else {
        num1 = currentCalculations.textContent;
        result = num1;
      }
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
    case "-":
    case "+":
      operator = keyPressedText;
      num1 = currentCalculations.textContent;
      currentCalculations.textContent += keyPressedText;
      break;
    default:
      currentCalculations.textContent += keyPressedText;
      break;
  }
  // currentCalculations.textContent += keyPressedText;
  console.log(`Num 1: ${num1}`);
  console.log(`Num 2: ${num2}`);
  console.log(`operator: ${operator}`);
  console.log(`result: ${result}`);
  console.log(currentCalculations.textContent);
  if (num2) {
  }
}
