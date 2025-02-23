// cуворий режим
"use strict"

// ==========================================================

// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

// Крок 0. Позначення
// номер місяця - monthNumber
// пора року - seasonName

// Крок 1. Вводимо необхідні дані
const monthNumber = parseInt(prompt('Введіть номер місяця (1-12): ', '1'));
let seasonName = '';

// Крок 2. Обчислення результату
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    seasonName = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    seasonName = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    seasonName = 'літо';
    break;
  case 9:
  case 10:
  case 11:
    seasonName = 'осінь';
    break;
  default:
    seasonName = 'невірний номер місяця';
    break;
}
// Крок 3. Виведення результатів
document.write(
  `<h2 class="task__subtitle task__subtitle--green">Пора року місяця за номером ${monthNumber} - це ${seasonName}.</h2>`
);

// =================================================================