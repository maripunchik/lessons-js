// cуворий режим
"use strict";

// =================================================================

//  Дано масив цін. Змінити цей масив так, щоб на ціни товарів, які більші за 1000 грн. дати 30% знижки.


if (confirm("Почати тестування?")) {
	let prices = [2000, 3544, 1067, 888, 300, 456,2500,900,1250,1500];
	 const initialPrices = [...prices];
 const  newPrices = prices.map((price) => {
	if (price > 1000){
		return parseFloat((price * 0.7).toFixed(2));
	} else {
		return price
	}
})

let tableContent = initialPrices
  .map((el, ind) => {
    return `
        <tr>
          <td>${el}</td> 
          <td>${newPrices[ind]}</td> 
        </tr>
      `;
  })
  .join("");
document.writeln(`
    <table class="task__table">
      <thead>
        <tr>
          <th>Масив цін</th>
          <th>Ціни товарів, які більші за 1000 грн. з 30% знижкою:</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  `);

}

// =================================================================
/*
if (confirm("Почати тестування?")) {
  let prices = [2000, 3544, 1067, 888, 300, 456, 2500, 900];
    document.writeln(
      `<div class="task__subtitle task__subtitle--green">Масив цін: ${prices} </div>`
    );
  prices.forEach((price, index, arr) => {
    if (price > 1000) arr[index] = parseFloat((price * 0.7).toFixed(2));
  });

  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Ціни товарів, які більші за 1000 грн. з 30% знижкою: ${prices}</div>`
  );
}
*/
