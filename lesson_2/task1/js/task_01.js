// cуворий режим
"use strict"

// ==========================================================

// Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

// Крок 0. Позначення
// перше число - number1
// друге число - number2
// сума - sum
// добуток - product
// частка - fraction

// Крок 1. Вводимо необхідні дані
const number1 = parseFloat(prompt('Введіть перше число', '7'))
const number2 = parseFloat(prompt('Введіть друге число', '9'))

// Крок 2. Обчислення результату
const sum = number1 + number2
const product = number1 * number2
const fraction = (number1 / number2).toFixed(1)

// Крок 3. Виведення результатів
document.write(`
<p>Перше число = ${number1}; Друге число = ${number2}.</p>
<table class="task__table">
<thead>
<tr>
<th>Операція</th>
<th>Результат</th>
</tr>
</thead>
<tbody>
<tr>
<td>Сума</td>
<td>${sum}</td>
</tr>
<tr>
<td>Добуток</td>
<td>${product}</td>
</tr>
<tr>
<td>Частка</td>
<td>${fraction}</td>
</tr>
</tbody>
</table>`);

// =================================================================