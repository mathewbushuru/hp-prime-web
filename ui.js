"use strict";

const display = document.getElementById("display");

const previousCalculationsDisplay = document.createElement("div");
previousCalculationsDisplay.className = "previousCalculationsDisplay";
// previousCalculationsDisplay.textContent = "previous  calculations";
let previousCalculationRows = [
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
  [" 1 + 2 ", "3"],
];
for (let row of previousCalculationRows) {
  let previousCalculationRow = document.createElement("div");
  previousCalculationRow.className = "previousCalculationRow";
  previousCalculationRow.innerHTML = `<span>${row[0]}</span> <span>= ${row[1]}</span>`;
  previousCalculationsDisplay.appendChild(previousCalculationRow);
}
display.appendChild(previousCalculationsDisplay);

const currentCalculationsDisplay = document.createElement("div");
currentCalculationsDisplay.className = "currentCalculationsDisplay";
currentCalculationsDisplay.textContent = "current  calculations";
display.appendChild(currentCalculationsDisplay);

const keyContainer = document.getElementById("keyContainer");
const keyRows = [
  ["Clear", "^", "( )", "Enter"],
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "+/-", "+"],
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
