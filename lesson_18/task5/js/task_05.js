// cуворий режим
"use strict";

// =================================================================

// Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

function getRandomNumber(min = 1, max = 100) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function createTable(rowNum, colNum) {
  const tableEl = document.createElement("table");
  tableEl.className = "task__table";
  for (let i = 0; i < rowNum; i++) {
    const rowEl = document.createElement("tr");
    for (let j = 0; j < colNum; j++) {
      const colEl = document.createElement("td");
      colEl.innerText = getRandomNumber();
      rowEl.append(colEl);
    }
    tableEl.append(rowEl);
  }
  return tableEl;
}

function showTable(rowNum, colNum) {
  const container = document.getElementById("myContainer");
  if (container) {
    container.append(createTable(rowNum, colNum));
  }
}

showTable(3,4)
