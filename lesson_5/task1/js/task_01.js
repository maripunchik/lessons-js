// cуворий режим
"use strict"

// =================================================================

//Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

if (confirm("Почати тестування?")) {
  const startNum = parseInt(prompt("Введіть перше число", "1"));
  const endNum = parseInt(prompt(`Введіть друге число`, "20"));

  if (startNum > endNum) {
    const num = startNum;
    startNum = endNum;
    endNum = num;
  }
  let sum = 0;
  let oddNum = 0;
  do {
    let i = startNum <= endNum;

    if (i % 2 !== 0) {
      sum += i;
      oddNum++;
    }
  } while (oddNum < 5);
  document.write(
    `<div class="task__subtitle task__subtitle--green">Сума п'яти непарних чисел на інтервалі (${startNum}, ${endNum}) = ${sum}</div>`
  );
}

// =================================================================