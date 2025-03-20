// cуворий режим
"use strict"

// =================================================================

// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm("Почати тестування?")) {
  function getSeasonByMonth(monthNumber) {
    let result;
    switch (monthNumber) {
      case 12:
      case 1:
      case 2:
        result = "зима";
        break;
      case 3:
      case 4:
      case 5:
        result = "весна";
        break;
      case 6:
      case 7:
      case 8:
        result = "літо";
        break;
      case 9:
      case 10:
      case 11:
        result = "осінь";
        break;
      default:
        result = "Невірний номер місяця";
    }
    return result;
  }
  const userMonthNumber = parseInt(prompt(`Введіть номер місяця (1-12)`, `7`));
  document.write(
    `<div class="task__subtitle task__subtitle--green"> Місяць за номером ${userMonthNumber} - це ${getSeasonByMonth(
      userMonthNumber
    )}</div>`
  );
}

// =================================================================