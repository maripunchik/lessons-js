// cуворий режим
"use strict";

// =================================================================

// Дано 3 таблиці розмірності 3*3 з випадковими числами. Якщо відбувається клік на якійсь із клітинок, то до відповідної таблиці додається червона рамка (спробуйте додати можливість відображення кількості кліків біля назви таблиці з використанням відповідно доданого для цього атрибута).

function createTable(number) {
  const wrapper = document.createElement("div");
  wrapper.className = "task__table-wrapper";

  const title = document.createElement("h3");
  title.className = "task__table-title";

  title.append(`Таблиця ${number} (`);

  const span = document.createElement("span");
  span.className = "click__count";
  span.innerText = "0";

  title.append(span," кліків)");

  const table = document.createElement("table");
  table.className = "task__table";
  table.setAttribute("data-count", "0");

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      row.append(cell);
    }
    table.append(row);
  }
  wrapper.append(title,table);

  return wrapper;
}

function renderMultipleTables(count = 3) {
  const container = document.querySelector(".task__clicks-count");
  for (let i = 1; i <= count; i++) {
    const tableElement = createTable(i);
    container.append(tableElement);
  }
}

function fillTablesWithRandomNumbers(min = 0, max = 99) {
  if (typeof min === "number" && typeof max === "number") {
    document.querySelectorAll(".task__table td").forEach((cell) => {
      cell.innerText = min + Math.floor(Math.random() * (max - min + 1));
    });
  }
}

function calculateClick(event) {
  const td = event.target.closest("td");
  if (!td) return;

  const table = td.closest(".task__table");
  const wrapper = table.closest(".task__table-wrapper");

  if (!table.dataset.count) {
    table.dataset.count = "0";
  }

  let count = parseInt(table.dataset.count, 10);
  table.dataset.count = count + 1;

  table.classList.add("selected");

  const spanEl = wrapper.querySelector(".click__count");
  if (spanEl) {
    spanEl.innerText = table.dataset.count;
  }
}

window.onload = () => {
  renderMultipleTables();
  fillTablesWithRandomNumbers();

  document
    .querySelector(".task__clicks-count")
    .addEventListener("click", calculateClick);
};
