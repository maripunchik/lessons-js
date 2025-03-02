// cуворий режим
"use strict"

// ==========================================================

// 3. Вивести таблицю з одним рядком і  7 стовпцями.

 if (confirm("Почати тестування?")) {
  document.write(`<table class="task__table">`);
    document.write(`<tr>`);
    for (let i = 1; i <= 7; i++) {
      document.write(`<td>${i}</td>`);
    }
    document.write(`</tr>`);
  document.write(`</table>`);
	}
  