// cуворий режим
"use strict";

// ==========================================================

//   Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// Знайти першу ціну, що більше за 1000

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
const firstPriceOver1000 = prices.find((price) => price > 1000);

 let tableContent = prices
   .map((price) => {
		const displayPrice =
      price > 1000 && firstPriceOver1000 === price ? price : "-";
     return `
        <tr>
          <td>${price}</td>
          <td>${displayPrice}</td>
        </tr>
      `;
   })
   .join("");

 document.writeln(`
    <table class="task__table">
      <thead>
        <tr>
          <th>Початковий масив цін на цінні папери:</th>
          <th>Перша ціна, що більше за 1000</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  `);
}