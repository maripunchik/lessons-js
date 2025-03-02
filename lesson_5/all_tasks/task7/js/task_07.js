// cуворий режим
"use strict"

// ==========================================================

//4.Вивести таблицю з 3 рядків і 7 стовпців

  if (confirm("Почати тестування?")) {
   document.write(`<table class="task__table">`);
   for (let rowNum = 1; rowNum <=3; rowNum++) {
     document.write(`<tr>`);
     for (let colNum = 1; colNum <=7; colNum++) {
       document.write(`<td>${colNum}</td>`);
     }
     document.write(`</tr>`);
   }
   document.write(`</table>`);
  }
	