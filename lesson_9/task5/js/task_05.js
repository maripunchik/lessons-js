// cуворий режим
"use strict";

// =================================================================

// Дано масив елементів. Знайти добуток додатних елементів (використати цикл for..of)

if (confirm("Почати тестування?")) {
const elements = [-12, 34, -15, 56, -3, 4, 5,-5,9];
function getProductOfPositiveElements(elements) {
 let product = 1;
 for (const el of elements) {
   if (el > 0) product *= el;
 }
 return product;
}

const productOfPositiveElements = getProductOfPositiveElements(elements);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Масив чисел: ${elements}<br>Добуток додатних елементів: ${productOfPositiveElements}</div>`
);
}

// =================================================================
