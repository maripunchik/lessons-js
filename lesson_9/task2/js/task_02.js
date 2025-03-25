// cуворий режим
"use strict";

// ==========================================================

//   Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

if (confirm("Почати тестування?")) {
  const userNumElements = parseInt(prompt(`Введіть кількість елементів`, `10`));
  function getArr(userNumElements) {
	let halfArray = Math.floor(userNumElements/2)
	let newArray = new Array(userNumElements)
    .fill(1, 0, halfArray)
    .fill(7, halfArray);
    return newArray
  }

  const resultArray = getArr(userNumElements);
  document.writeln(`<div class="task__subtitle task__subtitle--green">${resultArray}</div>`);
}
