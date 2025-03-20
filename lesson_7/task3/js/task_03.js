// cуворий режим
"use strict";

// =================================================================

// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm("Почати тестування?")) {
  function isWorkingDay(dayNumber) {
    let resDay;
    if (dayNumber === 6 || dayNumber === 7) resDay = "вихідний день";
    else if (dayNumber >= 1 && dayNumber <= 5) {
      resDay = "робочий день";
    } else {
      resDay = "Невірний номер дня. Введіть число від 1 до 7.";
    }
	 return resDay;
	}
    const userDayNumber = parseInt(
      prompt(`Введіть номер дня тижня (1-7)`, `7`)
    );
    document.write(
      `<div class="task__subtitle task__subtitle--green"> День за номером ${userDayNumber} - це ${isWorkingDay(
        userDayNumber
      )} </div>`
    );
  }

// =================================================================
