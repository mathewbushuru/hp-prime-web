"use strict";

const keyContainer = document.getElementById("keyContainer");
const keyRows = [
    ["Clear","^","( )","Enter"],
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
    keyButton.className="keyButton"
    keyButton.textContent = key;
    keyRow.appendChild(keyButton);
  }
  keyContainer.appendChild(keyRow);
}
