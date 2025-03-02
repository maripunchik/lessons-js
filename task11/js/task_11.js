// cуворий режим
"use strict"

// ==========================================================
// 8.Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

if (confirm("Почати тестування?")) {
	let userNumber= parseInt(prompt("Введіть загадане число(від 1 до 5)", ""));
	let compNum, attempt;
  for (attempt = 0; attempt < 3; attempt++) {
    compNum = 1 + Math.floor(Math.random() * 5);
    if (confirm(`Ви загадали число ${compNum}?`)) {
      break;
    }
  }
  if (attempt < 3) document.write(
    `<div class="task__subtitle task__subtitle--green">Ви загадали число${compNum}</div>`
  );
  else document.write(`Не вгадав`);
}
