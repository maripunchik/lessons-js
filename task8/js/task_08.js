// cуворий режим
"use strict"

// ==========================================================

// 5. Вивести таблицю

	if (confirm("Почати тестування?")) {
    document.write(`<table class="task__table">`);
    for (let rowNum = 1; rowNum <= 3; rowNum++) {
      document.write(`<tr>`);
      for (let colNum = 1; colNum <= 3; colNum++) {
        document.write(`<td>${colNum}</td>`);
      }
      document.write(`</tr>`);
    }
    document.write(`</table>`);
  }
	