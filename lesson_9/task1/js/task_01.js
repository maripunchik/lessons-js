// cуворий режим
"use strict";

// =================================================================

// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

if (confirm("Почати тестування?")) {
 const userNumElements = parseInt(prompt(`Введіть кількість елементів`, `10`))
 function getArr(userNumElements) {
	return new Array(userNumElements).fill(0);
 }

 document.writeln(
   `<div class="task__subtitle task__subtitle--green">${getArr(userNumElements)} </div>`
 );

}
// =================================================================
