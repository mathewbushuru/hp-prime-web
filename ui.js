"use strict";

const display = document.getElementById("display");

let previousCalculationRowsArray = [
  ["   ", " "],
  ["  ", "  "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
  ["  ", " "],
];
function renderPreviousCalculations(previousCalculationRowsArray) {
  const display = document.getElementById("display");
  const previousCalculationsDisplay = document.createElement("div");
  previousCalculationsDisplay.className = "previousCalculationsDisplay";
  for (let row of previousCalculationRowsArray) {
    let previousCalculationRow = document.createElement("div");
    previousCalculationRow.className = "previousCalculationRow";
    previousCalculationRow.innerHTML = `<span>${row[0]}</span> <span> ${row[1]}</span>`;
    previousCalculationsDisplay.appendChild(previousCalculationRow);
  }
  display.appendChild(previousCalculationsDisplay);
}
renderPreviousCalculations(previousCalculationRowsArray);

const currentCalculationsDisplay = document.createElement("div");
currentCalculationsDisplay.className = "currentCalculationsDisplay";
currentCalculationsDisplay.textContent = "Enter expression to calculate";
display.appendChild(currentCalculationsDisplay);

const keyContainer = document.getElementById("keyContainer");
const keyRows = [
  ["Clear", " ", " ", "Enter"],
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", " ", " ", "+"],
];
for (let row of keyRows) {
  let keyRow = document.createElement("div");
  keyRow.className = "keyRow";
  for (let key of row) {
    let keyButton = document.createElement("div");
    keyButton.className = "keyButton";
    keyButton.textContent = key;
    keyRow.appendChild(keyButton);
  }
  keyContainer.appendChild(keyRow);
}

//To deal with issues with mobile viewport(safari+chrome)
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
