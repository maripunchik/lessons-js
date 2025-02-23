// cуворий режим
"use strict"

// ==========================================================

// Обчислити значення виразів

// Крок 0. Позначення
// число a - a
// число b - b
// число c - c
// площа - s (1,2,3,4)

// Крок 1. Вводимо необхідні дані
const a = parseFloat(prompt('Введіть значення числа a', '1'));
const b = parseFloat(prompt('Введіть значення числа b', '1'));
const c = parseFloat(prompt('Введіть значення числа c', '1'));
// Крок 2. Обчислення результату
const s1 = a + 12 + b;
const s2 = (Math.sqrt((a + b) / (2 * a))).toFixed(3);
const s3 = (Math.cbrt((a + b) * c)).toFixed(3);
const s4 = (Math.sin(a / (-b))).toFixed(3);
// Крок 3. Виведення результатів
document.write(`<div class="task__subtitle task__subtitle--green">Введені дані:<br> a=${a}; b=${b}; c=${c};<br>Рішення:<br>
	S1 = ${s1};<br> S2 = ${s2};<br> S3 = ${s3};<br> S4 = ${s4}</div>`);
// =================================================================

document.write(
  `<h2 class="task__subtitle task__subtitle--green">${result}</h2>`
);