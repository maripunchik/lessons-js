// cуворий режим
"use strict"

// ==========================================================

// Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

// Крок 0. Позначення
// вартість одиниці товару - productCost
// кількість - quantityProduct
// загальна вартість - totalCost
// ПДВ - value added tax = 5

// Крок 1. Вводимо необхідні дані
const productCost = parseFloat(prompt('Введіть ціну товару', '0')).toFixed(2);
const quantityProduct = parseInt(prompt('Введіть кількість товару', '0'));
const valueAddedTax = 5
// Крок 2. Обчислення результату
const totalCost = productCost * quantityProduct;
const tax = ((totalCost / 100) * valueAddedTax).toFixed(2);

// Крок 3. Виведення результатів
document.write(
  `<div class="task__subtitle task__subtitle--green">Вартість одиниці товару:${productCost} грн ;<br> Кількість товару:${quantityProduct};<br> Загальна вартість всіх товарів: ${totalCost}грн;<br> ПДВ: ${tax}грн</div>`
);

// =================================================================