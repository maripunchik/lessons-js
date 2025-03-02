// cуворий режим
"use strict"

// ==========================================================

// 14.Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

if (confirm("Почати тестування?")) {
const productPrice = parseFloat(prompt(`Вартість товару`));
let totalMoney = 0;
do {
  const money = parseFloat(
    prompt(`Потрібно дати ${productPrice - totalMoney}грн`)
  );
  totalMoney += money;
} while (totalMoney < productPrice);
}

