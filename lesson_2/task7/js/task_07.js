// cуворий режим
"use strict"

// ==========================================================

// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
// const randNum = min + Math.floor(Math.random() * (max - min + 1))
// const randNum = 1 + Math.floor(Math.random()*(100-1+1))
// document.write(`rand = ${randNum}`)
// Крок 0. Позначення
// випадковий номера місяця - randomMonthNumber
// випадковий номер дня - randomDayNumber
// сума - sumRandMonthAndDay

// Крок 1. Вводимо необхідні дані
const minMonth = 1;
const maxMonth = 12;
const minDay = 0;
const maxDay = 6;

// Крок 2. Обчислення результату
const randomMonthNumber = minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1));
const randomDayNumber = minDay + Math.floor(Math.random() * (maxDay - minDay + 1));
const sumRandMonthAndDay = randomMonthNumber + randomDayNumber;
// Крок 3. Виведення результатів
document.write(
  `<div class="task__subtitle task__subtitle--green">Випадковий номер місяця (від 1 до 12): ${randomMonthNumber}; <br>Випадковий номер дня (від 0 до 6): ${randomDayNumber};<br>Сума випадкового номера місяця та випадкового номера дня: ${sumRandMonthAndDay}</div>`
);

// =================================================================