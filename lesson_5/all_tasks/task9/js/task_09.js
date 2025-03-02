// cуворий режим
"use strict"

// ==========================================================
// 6.Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній)

	if (confirm("Почати тестування?")) {
		let numberCount =1
	for (let tableNum = 1; tableNum <= 3; tableNum++) {
    document.write(`<table class="task__table">`);
    for (let rowNum = 1; rowNum <=3; rowNum++) {
      document.write(`<tr>`);
      for (let colNum = 1; colNum <=3; colNum++) {
        document.write(`<td>${numberCount}</td>`);
		  numberCount++
      }
      document.write(`</tr>`);
    }
    document.write(`</table>`);
  }
}
