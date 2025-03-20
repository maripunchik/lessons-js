// cуворий режим
"use strict"

// ==========================================================

//  Створити функцію, яка за номером місяця повертає його назву.
 if (confirm("Почати тестування?")) {
   function getTheNameByNumber(monthNumber) {
		let result;
    switch (monthNumber) {
      case 12: result = 'грудень';
		break;
      case 1:result = 'січень';
		break;
      case 2:
        result = 'лютий';
        break;
      case 3:result = 'березень';
		break;
      case 4:result = 'квітень';
		break;
      case 5:
        result = 'травень';
        break;
      case 6:result = 'червень';
		break;
      case 7:result = 'липень';
		break;
      case 8:
        result = 'серпень';
        break;
      case 9:result = 'вересень';
		break;
      case 10:result = 'жовтень';
		break;
      case 11:
        result = 'листопад';
        break;
      default:
        result = 'Невірний номер місяця';
    }
    return result;
  }
  const userMonthNumber = parseInt(prompt(`Введіть номер місяця (1-12)`, `7`));
  document.write(
    `<div class="task__subtitle task__subtitle--green"> Місяць за номером ${userMonthNumber} - це ${getTheNameByNumber(
      userMonthNumber
    )}</div>`
  );
	}
 