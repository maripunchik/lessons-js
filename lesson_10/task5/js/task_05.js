// cуворий режим
"use strict";

// =================================================================

// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// Підрахувати кількість змін цін

if (confirm("Почати тестування?")) {
const userNum = parseInt(prompt("Введіть кількість елементів в масиві"));
function getRandomPricesArr(userNum, min = 1, max = 10000) {
  const prices = [];
  for (let i = 0; i < userNum; i++) {
    const randomPrice = min + Math.floor(Math.random() * (max - min + 1));
    prices.push(randomPrice);
  }
  return prices;
}
const prices = getRandomPricesArr(userNum);
const numChanges = prices.reduce(
  (count, price, index, arr) =>
    index > 0 && price !== arr[index - 1] ? count + 1 : count,
  0
);

  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Дано масив з ${prices.length} цін <br> Кількість змін цін: ${numChanges}</div>`
  );
}

// =================================================================
