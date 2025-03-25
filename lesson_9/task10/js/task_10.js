// cуворий режим
"use strict";

// ==========================================================

//   Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

if (confirm("Почати тестування?")) {
  function createRandomNumbersArray(length, minNumber, maxNumber) {
    let randomNumbersArray = [];

    for (let i = 0; i < length; i++) {
      let randomNumber =
        minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));

      randomNumbersArray.push(randomNumber);
    }

    return randomNumbersArray;
  }
  const tax = 0.2;
  let pricesInGrn = createRandomNumbersArray(10, 500, 10000);
  const taxes = pricesInGrn.map((price) => (price * tax).toFixed(2));
  let tableContent = pricesInGrn.map((price, index) => {
      return `
      <tr>
        <td>${price}</td>
        <td>${taxes[index]}</td>
      </tr>
    `;
    })
    .join("");
  document.writeln(`
    <table class="task__table">
      <thead>
        <tr>
          <th>Ціни</th>
          <th>Податки</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  `);
}