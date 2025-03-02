// cуворий режим
"use strict";

// ==========================================================

// 9. Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

if (confirm("Почати тестування?")) {
  const minRandNum = 0,
    maxRandNum = 10;
  alert(`Загадайте число від ${minRandNum} до ${maxRandNum}`);
  let compNum;
  do {
    compNum = minRandNum + Math.floor(Math.random() *(maxRandNum-minRandNum +1));
  } while (!confirm(`Ви загадали число ${compNum}`));
  document.write(
    `<div class="task__subtitle task__subtitle--green">Ви загадали число${compNum}</div>`
  );
}
