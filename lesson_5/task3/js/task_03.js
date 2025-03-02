// cуворий режим
"use strict"

// ==========================================================

// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач
// намагається потопити корабель.

if (confirm("Почати тестування?")) {
  const colNum = parseInt(prompt("Введіть кількість колонок:", "5"));
  const rowNum = parseInt(prompt("Введіть кількість рядків:", "5"));
  const shellsNum = parseInt(prompt("Введіть кількість снарядів", "3"));
  const compColNum = 1 + Math.floor(Math.random() * (colNum - 1 + 1));
  const compRowNum = 1 + Math.floor(Math.random() * (rowNum - 1 + 1));
  for (let i = 1; i <= shellsNum; i++) {
    let shotCol = parseInt(
      prompt(`Введіть колонку для пострілу від 1 до ${colNum}`)
    );
    let shotRow = parseInt(
      prompt(`Введіть рядок для пострілу від 1 до ${rowNum} `)
    );

    if (shotCol === compColNum && shotRow === compRowNum) {
      alert(
        `Ви потопили корабель!`
      );
      break;
    } else alert(`Не влучив!`);
  }
}

// =================================================================: