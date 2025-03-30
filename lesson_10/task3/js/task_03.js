// cуворий режим
"use strict";

// =================================================================

// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// Сформувати список з тих цін, які більші за попереднє значення

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
// const pricesGreaterPreviousEl = prices.filter(
//   (price, index, prices) => price > prices[index - 1] || index === 0
// );

let tableContent = prices
  .map((price, index) => {
    const greaterThanPreviousEl = index === 0 || price > prices[index - 1] ? price : "-";
    return `
        <tr>
          <td>${price}</td>
          <td>${greaterThanPreviousEl}</td>
        </tr>
      `;
  })
  .join("");

document.writeln(`
    <table class="task__table">
      <thead>
        <tr>
          <th>Початковий масив цін на цінні папери:</th>
          <th>Ціни, які більші за попереднє значення</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  `);
}

// =================================================================
