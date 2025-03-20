// cуворий режим
"use strict";

// =================================================================

//  Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm("Почати тестування?")) {
  function createTable(rows, columns, message) {
    let table = ``;
    table += `<table class="task__table">`;
    for (let row = 0; row < rows; row++) {
      table += `<tr>`;
      for (let col = 0; col < columns; col++) {
        table += `<td>${message}</td>`;
      }
      table += `</tr>`;
    }
    table += `</table>`;
    return table;
  }

  const rowsNum = parseInt(prompt(`Введіть кількість рядків таблиці:`, `5`));
  const columnsNum = parseInt(
    prompt(`Введіть кількість колонок таблиці:`, `5`)
  );
  const message = prompt(
    "Введіть повідомлення, яким буде заповнена таблиця",
    "JavaScript"
  );


  document.write(createTable(rowsNum, columnsNum, message));
}

// =================================================================
