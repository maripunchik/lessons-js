// cуворий режим
"use strict";

// =================================================================

// Дано масив елементів. Вивести на екран елементи, що більші за 100  ( використати цикл for..of)

if (confirm("Почати тестування?")) {
  const elements = [12, 344, 67, 888, 3, 456];
  function getNumsOver100(elements) {
    let numsOver100 = [];
    for (const el of elements) {
      if (el > 100) {
        numsOver100.push(el);
      }
    }
    return numsOver100;
  }

  const numsOver100 = getNumsOver100(elements);
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Дано масив: ${elements} <br> Елементи більше за 100: ${numsOver100}</div>`
  );
}
