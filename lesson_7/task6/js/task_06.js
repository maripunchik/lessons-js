// cуворий режим
"use strict"

// =================================================================

//  Створити окремі функції, які переводять:
// 	Сантиметри у дюйми;
// 	Кілограми у фунти;
// 	Кілометри у милі.


if (confirm("Почати тестування?")) {
let convertSmToInch = (cmNum) => cmNum / 2.54;
let convertKgToLb = (kgNum) => kgNum * 2.20462;  
let convertKmToMiles = (kmNum) => kmNum * 0.621;

const cm = parseInt(prompt(`Введіть довжину в сантиметрах:`, `80`));
const kg = parseInt(prompt(`Введіть вагу в кілограмах:`, `200`));
const km = parseInt(prompt(`Введіть відстань в кілометрах:`, `500`));

document.write(
  `<div class="task__subtitle task__subtitle--green">У ${cm} сантиметрах ${convertSmToInch(
    cm
  ).toFixed(2)} дюймів</div>`
);
document.write(
  `<div class="task__subtitle task__subtitle--green">У ${kg} кілограмах ${convertKgToLb(
    kg
  ).toFixed(2)} фунтів</div>`
);
document.write(
  `<div class="task__subtitle task__subtitle--green">У ${km} кілометрах ${convertKmToMiles(
    km
  ).toFixed(2)}милі</div>`
);

}

// =================================================================