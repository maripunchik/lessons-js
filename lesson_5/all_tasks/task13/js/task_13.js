// cуворий режим
"use strict"

// ==========================================================

// 10.Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

if (confirm("Почати тестування?")) {
  const startNum = parseInt(prompt("Введіть перше число", "1"));
  const endNum = parseInt(prompt(`Введіть друге число`, "20"));
   if (startNum > endNum) {
     let num = startNum; ;
     startNum = endNum;
     endNum = num;
   }
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  document.write(
    `<div class="task__subtitle task__subtitle--green">Сума всіх непарних чисел на інтервалі (${startNum}, ${endNum}) = ${sum}</div>`
  );
}

