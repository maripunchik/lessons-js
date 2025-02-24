// cуворий режим
"use strict"

// ==========================================================

// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня..

// Крок 0. Позначення
// номер дня тижня - dayNumber
// назва дня тижня - dayName

// Крок 1. Вводимо необхідні дані
const dayNumber = parseInt(prompt('Введіть номер дня тижня (1-7): ', '7'));
let dayName = '';

// Крок 2. Обчислення результату
switch (dayNumber) {
  case 1:
    dayName = "понеділок";
    break;
  case 2:
    dayName = "вівторок";
    break;
  case 3:
    dayName = "середа";
    break;
  case 4:
    dayName = "четвер";
    break;
  case 5:
    dayName = "п'ятниця";
    break;
  case 6:
    dayName = "субота";
    break;
  case 7:
    dayName = "неділя";
    break;

  default:
    dayName = "невірний номер дня!";
    break;
}

// Крок 3. Виведення результатів
document.write(
  `<h2 class="task__subtitle task__subtitle--green">День тижня за номером ${dayNumber} - це ${dayName}</h2>`
);

// =================================================================