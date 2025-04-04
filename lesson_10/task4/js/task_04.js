// cуворий режим
"use strict";

// =================================================================

// Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

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
  // Знаходимо максимальну ціну
  const maxPrice = Math.max(...prices);
  const ml = 100 / maxPrice; // ml (multiplier-множник)
  const priceValuesInPercentToMax = prices.map((price) =>
    (price * ml).toFixed(2)
  );

  // Виводимо результати в таблицю
  let tableContent = prices
    .map((price,index) => {
      return `
        <tr>
          <td>${price}</td>
          <td>${priceValuesInPercentToMax[index]}%</td>
        </tr>
      `;
    })
    .join("");

  document.writeln(`
    <table class="task__table">
      <thead>
        <tr>
          <th>Початковий масив цін на цінні папери<br>(максимальне ${maxPrice}):</th>
          <th>Масив, що міститить значення цін у відсотках стосовно максимального</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  `);
}
