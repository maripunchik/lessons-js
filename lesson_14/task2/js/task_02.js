// cуворий режим
"use strict";

// =================================================================

// Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

if (confirm("Почати тестування?")) {
  let userDate = {
    day: 22,
    month: 12,
    year: 2025,
  };
  function getYear({ month: myMonth, year }, monthAdd) {
    return year + Math.floor((myMonth + monthAdd - 1) / 12);
  }

  console.log(getYear(userDate, 32));
  console.log(getYear(userDate, 10));
}
