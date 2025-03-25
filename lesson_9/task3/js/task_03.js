// cуворий режим
"use strict";

// =================================================================

//   Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.


if (confirm("Почати тестування?")) {
 const userNumElements = parseInt(prompt(`Введіть кількість елементів`, `10`))
 function getArr(userNumElements) {
	 const newArr = new Array(userNumElements);
   newArr.fill(1, 0, 5);
   newArr.fill(7, 5);
   return newArr;
 }

  const resultArray = getArr(userNumElements);
  document.writeln(`<div class="task__subtitle task__subtitle--green">${resultArray}</div>`);
}
  

// =================================================================
