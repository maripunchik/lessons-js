// cуворий режим
"use strict"

// ==========================================================

// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

// Крок 0. Позначення
// вартість за одиницю товару товару №1 - priceProduct1
// кількість одиниць товару №1 - amountProduct1
// загальна вартість товару №1 - totalPriceProduct1
// вартість за одиницю товару товару №2 - priceProduct2
// кількість одиниць товару №2 - amountProduct2
// загальна вартість товару №2 - totalPriceProduct2
// вартість за одиницю товару товару №3 - priceProduct3
// кількість одиниць товару №3 - amountProduct3
// загальна вартість товару №3 - totalPriceProduct3

// Крок 1. Вводимо необхідні дані
const priceProduct1 = parseFloat(prompt("Введіть вартість за одиницю товару №1", "1000"));
const amountProduct1 = parseInt(prompt("Введіть кількість товарів №1", "3"));
const priceProduct2 = parseFloat(prompt("Введіть вартість за одиницю товару №2", "3.21"));
const amountProduct2 = parseInt(prompt("Введіть кількість товарів №2", "10"));
const priceProduct3 = parseFloat(prompt("Введіть вартість за одиницю товару №3", "99.99"));
const amountProduct3 = parseInt(prompt("Введіть кількість товарів №3", "5"));

// Крок 2. Обчислення результату
const totalPriceProduct1 = priceProduct1 * amountProduct1;
const totalPriceProduct2 = priceProduct2 * amountProduct2;
const totalPriceProduct3 = priceProduct3 * amountProduct3;
const totalPrice = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;

// Крок 3. Виведення результатів
document.write(`
	<div class="task__check">
	<h2 class="task__subtitle"> Фіскальний чек</h2><br>
	Товар #1:   ${amountProduct1}шт.............${totalPriceProduct1}грн <br> 
   Товар #2:   ${amountProduct2}шт.............${totalPriceProduct2}грн <br> 
   Товар #3:   ${amountProduct3}шт.............${totalPriceProduct3}грн <br> <br> 
   Сума: .................................${totalPrice.toFixed(2)}грн
	</div>`)



// =================================================================