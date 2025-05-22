// cуворий режим
"use strict";

// =================================================================

// Зробити конвертер валют (курси валют – константи у скрипті)

const dollarAmount = 38.5;
const euroAmount = 41.5;

const rates = {
  USD: 1 / dollarAmount,
  EUR: 1 / euroAmount,
};

class CurrencyConverter {
  static rates = rates;

  static convert(amountUAH, toCurrency) {
    if (isNaN(amountUAH) || amountUAH <= 0) {
      throw new Error("Будь ласка, введіть коректну суму");
    }
    const rate = this.rates[toCurrency];
    if (!rate) {
      throw new Error("Недійсна валюта");
    }
    return amountUAH * rate;
  }
}
//---
function makeConversion() {
	const uahAmount = parseFloat(document.getElementById("grn").value);
	const dollarsAmount =  document.getElementById("res-dollars")
	const eurosAmount = document.getElementById("res-euros")


	try {
		const usd = CurrencyConverter.convert(uahAmount, "USD").toFixed(2);
		const eur = CurrencyConverter.convert(uahAmount, "EUR").toFixed(2);

		if(dollarsAmount) dollarsAmount.innerText = `${usd} $`;
		if (eurosAmount) eurosAmount.innerText = `${eur} €`;

	} catch (error) {
		if(dollarsAmount) dollarsAmount.innerText =`Помилка`
		if (eurosAmount) eurosAmount.innerText = `Помилка`;
	}
}
// ==========================================================

//   function convert() {
//     const course = parseFloat(document.getElementById("course").value);
//     const grn = parseInt(document.getElementById("grn").value);
// 	 const resSpn = document.getElementById("res")
//     if (!isNaN(course) && !isNaN(grn)) {
//       const dollarAmount = (grn / course).toFixed(2);
//       resSpn.innerText = dollarAmount;
//     } else {
//       resSpn.innerText = "";
//     }
//   }
//   window.onload = function () {
//     document.getElementById("course").onchange = convert;
//     document.getElementById("grn").onchange = convert;
//   };

// ============================================


