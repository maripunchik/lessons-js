// cуворий режим
"use strict"

// ==========================================================

// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

// Крок 0. Позначення
// сантиметри - lengthCm
// метри - lengthM
// кілометри - lengthKm

// Крок 1. Вводимо необхідні дані
const lengthCm = (parseFloat(prompt('Введіть кількість сантиметрів', '0'))).toFixed(1);

// Крок 2. Обчислення результату
const lengthM = (lengthCm / 100).toFixed(1);
const lengthKm = (lengthM / 1000).toFixed(6);

// Крок 3. Виведення результатів
document.write(
  `<div class="task__subtitle task__subtitle--green">Сантиментри: ${lengthCm} <br> Метри: ${lengthM} <br> Кілометри: ${lengthKm}</div>`
);

// =================================================================