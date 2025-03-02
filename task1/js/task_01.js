// cуворий режим
"use strict"

// ==========================================================
// -2.Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.

if (confirm("Почати тестування?")) {
  let oddNum = 0,
    evenNum = 0;
  for (let i = 0; i < 100; i++) {
    const compNum = 1 + Math.floor(Math.random() * 1000);
    if (compNum % 2 === 0) evenNum++;
    else oddNum++;
  }
  document.write(
    `<div class="task__subtitle task__subtitle--green">oddNum : ${oddNum}, evenNum : ${evenNum}</div>`
  );
}
