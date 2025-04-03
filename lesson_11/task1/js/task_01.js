// cуворий режим
"use strict";

// =================================================================

// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1)номери рядків від 0 до половини, стовпці від 0 до половини
// 2)номери рядків від 0 до половини, стовпці від половини до кінця
// 3)номери рядків (від половини до кінця, стовпці від 0 до половини
// 4) номери рядків від половини до кінця , стовпці від половини до кінця
// 5) Суму парних рядків
// 6) Суму непарних стовпців
// 7) У парних рядках – непарні стовпці, у непарних – парні.

// =================================================================

if (confirm("Почати тестування?")) {
  function generateRandomTable(
    rowsNumber,
    colsNumber,
    minValue = 1,
    maxValue = 100
  ) {
    const table = [];
    for (let rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {
      table.push([]);
      for (let colIndex = 0; colIndex < colsNumber; colIndex++) {
        const randNum =
          minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
        table[rowIndex].push(randNum);
      }
    }
    return table;
  }

  const tableTask1 = generateRandomTable(4, 5); // чотири рядочки, 5 стовпців
  document.writeln(`Таблиця:`);
  document.writeln(JSON.stringify(tableTask1));

  // Функція для підрахунку суми елементів у вибраній області
  function sumRegion(table, rowStart, rowEnd, colStart, colEnd) {
    let sum = 0;
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        sum += table[i][j];
      }
    }
    return sum;
  }

  // 1) Номери рядків від 0 до половини, стовпці від 0 до половини
  const sum1 = sumRegion(
    tableTask1,
    0,
    Math.floor(tableTask1.length / 2) - 1, // віднімаємо 1, щоб врахувати рядок, який знаходиться на межі середини, тобто половина елементів з 0 до половини.
    0,
    Math.floor(tableTask1[0].length / 2) - 1 // tableTask1[0].length (всі рядки мають однакову кількість стовпців), віднімаємо 1, щоб врахувати тільки першу половину стовпців.
  );

  // 2) Номери рядків від 0 до половини, стовпці від половини до кінця
  const sum2 = sumRegion(
    tableTask1,
    0,
    Math.floor(tableTask1.length / 2) - 1,
    Math.floor(tableTask1[0].length / 2),
    tableTask1[0].length - 1
  );

  // 3) Номери рядків від половини до кінця, стовпці від 0 до половини
  const sum3 = sumRegion(
    tableTask1,
    Math.floor(tableTask1.length / 2),
    tableTask1.length - 1,
    0,
    Math.floor(tableTask1[0].length / 2) - 1
  );

  // 4) Номери рядків від половини до кінця, стовпці від половини до кінця
  const sum4 = sumRegion(
    tableTask1,
    Math.floor(tableTask1.length / 2),
    tableTask1.length - 1,
    Math.floor(tableTask1[0].length / 2),
    tableTask1[0].length - 1
  );

  // 5) Сума парних рядків
  const sumEvenRows = tableTask1.reduce((sum, row, rowIndex) => {
    if (rowIndex % 2 === 0) {
      row.forEach((el) => {
        sum += el;
      });
    }
    return sum;
  }, 0);
  // 6) Сума непарних стовпців
  const sumOddCols = tableTask1.reduce((acc, row) => {
    row.forEach((el, colIndex) => {
      if (colIndex % 2 !== 0) acc += el;
    });
    return acc;
  }, 0);

  // 7) У парних рядках – непарні стовпці, у непарних – парні
  let sumMixed = 0;
  tableTask1.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      if (
        (rowIndex % 2 === 0 && colIndex % 2 !== 0) ||
        (rowIndex % 2 !== 0 && colIndex % 2 === 0)
      ) {
        sumMixed += el;
      }
    });
  });

  // Створення таблиці з результатами
  let tableContent = tableTask1
    .map((row) => {
      return `<tr>${row.map((el) => `<td>${el}</td>`).join("")}</tr>`;
    })
    .join("");

  document.write(`
<table class="task__table">
<thead>
</thead>
<tbody>
${tableContent}
</tr>
</tbody>
</table>`);

  document.write(`
<table class="task__table">
<thead>
<tr>
<th>Задача</th>
<th>Результат</th>
</tr>
</thead>
<tbody>
<tr>
<td>Сума номерів рядків від 0 до половини, стовпці від 0 до половини :</td>
<td>${sum1}</td>
</tr>
<tr>
<td>Сума номерів рядків від 0 до половини, стовпці від половини до кінця: </td>
<td>${sum2}</td>
</tr>
<tr>
<td>Сума номерів рядків (від половини до кінця, стовпці від 0 до половини):</td>
<td>${sum3}</td>
</tr>
<tr>
<td>Сума номерів рядків від половини до кінця , стовпці від половини до кінця:</td>
<td>${sum4}</td>
</tr>
<tr>
<td>Сума парних рядків:</td>
<td>${sumEvenRows}</td>
</tr>
<tr>
<td>Сума непарних стовпців:</td>
<td>${sumOddCols}</td>
</tr>
<tr>
<td>У парних рядках – непарні стовпці, у непарних – парні:</td>
<td>${sumMixed}</td>
</tr>
</tbody>
</table>`);
}

// ==================================================================
