// cуворий режим
"use strict";

// =================================================================

//   Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).


if (confirm("Почати тестування?")) {
	//              0   1   2   3   4   5   6   7   8    9   10   11
  let payments = [500,700,600,554,887,956,324,487,1024,492,1036,589]
  function getTotalSum(payments) {
	  let sum = 0;
    for (let i = 0; i < payments.length; i++) {
      sum += payments[i];
    }
    return sum;
  }
let totalSum = getTotalSum(payments)
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Платіжки за рік:${payments} <br></div>`
);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Загальна сума платіжок за рік: ${totalSum} грн. <br></div>`
);
function getSumForTheFirstHalfYear(payments) {
	let sum = 0
	for (let i = 0; i <= 5; i++) {
		sum += payments[i];
	}
	return sum;
}
let sumForTheFirstHalfYear = getSumForTheFirstHalfYear(payments)
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Загальна сума платіжок за перше півріччя: ${sumForTheFirstHalfYear} грн. <br></div>`
);
function getSumForTheSecondHalfYear(payments) {
  let sum = 0;
  for (let i = 6; i <= 11; i++) {
    sum += payments[i];
  }
  return sum;
}
let sumForTheSecondtHalfYear = getSumForTheSecondHalfYear(payments);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Загальна сума платіжок за друге півріччя: ${sumForTheSecondtHalfYear} грн. <br></div>`
);
function getSumForTheSummer(payments) {
  let sum = 0;
  for (let i = 6; i <= 8; i++) {
    sum += payments[i];
  }
  return sum;
}
let sumForTheSummer = getSumForTheSummer(payments);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Загальна сума платіжок за літо: ${sumForTheSummer} грн. <br></div>`
);
function getSumForTheSecondQuarter(payments) {
  let sum = 0;
  for (let i = 3; i <= 5; i++) {
    sum += payments[i];
  }
  return sum;
}
let sumForTheSecondQuarter = getSumForTheSecondQuarter(payments);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Загальна сума платіжок за другий квартал: ${sumForTheSecondQuarter} грн. <br></div>`
);
function getSumForTheEvenMonths(payments) {
let sum = 0;
for (let i = 0; i < payments.length; i += 2) {
  sum += payments[i];
}
return sum;
}
let sumForTheEvenMonth = getSumForTheEvenMonths(payments);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Загальна сума платіжок за місяці з парними номерами: ${sumForTheEvenMonth} грн. <br></div>`
);
function getSumForMonthStartSeason(payments) {
  let sum = 0;
  for (let i = 2; i < payments.length; i += 3) {
    sum += payments[i];
  }
  return sum;
}
let sumForMonthStartSeason = getSumForMonthStartSeason(payments);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Загальна сума платіжок за місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${sumForMonthStartSeason} грн. <br></div>`
);



}

// =================================================================
