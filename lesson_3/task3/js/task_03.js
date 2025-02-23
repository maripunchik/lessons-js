// cуворий режим
"use strict";

// ==========================================================

// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// Крок 0. Позначення
// перша спроба - firstAttempt
// друга спроба - secondAttempt

// Крок 1. Вводимо необхідні дані
const randomNumber = 1 + Math.floor(Math.random() * (5-1+1));
const firstAttempt = parseInt(
  prompt("Спроба №1.\nВведіть число від 1 до 5:", "1")
);

// Крок 2. Обчислення
if (firstAttempt === randomNumber)
  document.write(
    `<h2 class="task__subtitle task__subtitle--green"> Вітаю! Ви вгадали число!</h2>`
  );
else {
  const secondAttempt = parseInt(
    prompt("Спроба №2.\n Введіть число від 1 до 5:", "1")
  );

  if (secondAttempt === randomNumber) document.write(
    `<h2 class="task__subtitle task__subtitle--green">Ви вгадали число!</h2>`
  );
  else document.write(
    `<h2 class="task__subtitle">Ви не вгадали число ${randomNumber}!</h2>`
  );
}
// Крок 2. Обчислення

// Крок 3. Виведення результатів

// =================================================================
