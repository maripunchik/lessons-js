// cуворий режим
"use strict";

// =================================================================

// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

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
 const pricesGreater1000 = prices.filter((el) => el > 1000);

let tableContent = prices
  .map((el) => {
    const greaterThan1000 = el > 1000 ? el : "-";
    return `
        <tr>
          <td>${el}</td>
          <td>${greaterThan1000}</td>
        </tr>
      `;
  })
  .join("");
  
document.writeln(`
    <table class="task__table">
      <thead>
        <tr>
          <th>Початковий масив цін на цінні папери:</th>
          <th>Масив, у якому є тільки ті, що більші за 1000 грн.</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  `);

}
// =================================================================
