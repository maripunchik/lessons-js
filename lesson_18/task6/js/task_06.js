// cуворий режим
"use strict";

// =================================================================

// Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.

class FindingTheAverageValue {
  constructor(countInput, tableContainer, result) {
    this.countInput = countInput;
    this.tableContainer = tableContainer;
    this.result = result;
  }

  generateTable() {
    const userInputCount = parseInt(this.countInput.value);
    this.tableContainer.innerText = "";

    if (isNaN(userInputCount) || userInputCount < 1) {
      this.result.innerText = `Введіть коректну кількість оцінок`;
      return;
    }

    const table = document.createElement("table");
    table.className = "task__table";

    for (let i = 0; i < userInputCount; i++) {
      const rowEl = document.createElement("tr");
      const colEl = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      input.min = 1;
      input.max = 12;
      input.placeholder = `Оцінка №${i + 1}`;
      input.className = "userInput";
      colEl.append(input);
      rowEl.append(colEl);
      table.append(rowEl);
    }
    this.tableContainer.append(table);
  }

  calculateAverage() {
    const inputs = this.tableContainer.querySelectorAll(".userInput");
    let sum = 0;
    let validCount = 0;

    inputs.forEach((input) => {
      const value = parseFloat(input.value);
      if (!isNaN(value) && value >= 1 && value <= 12) {
        sum += value;
        validCount++;
		  input.style.border = "2px solid green";
      } else {
        input.style.border = "2px solid red";
      }
    });

    if (validCount === 0) {
      this.result.innerText = "Введіть хоча б одну оцінку(1-12)";
    } else {
      const average = sum / validCount;
      this.result.innerText = `Середнє значення з ${validCount} оцінок: ${average.toFixed(
        2
      )}`;
    }
  }
}
//---

window.onload = function () {
  const countInput = document.getElementById("count");
  const tableContainer = document.querySelector(".task__table-box");
  const result = document.getElementById("result");

  const calculateAverage = new FindingTheAverageValue(
    countInput,
    tableContainer,
    result
  );

  document.getElementById("button-table").onclick = () =>
    calculateAverage.generateTable();
  document.getElementById("button-sum").onclick = () =>
    calculateAverage.calculateAverage();
};

