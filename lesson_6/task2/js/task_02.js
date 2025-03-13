// cуворий режим
"use strict"

// ==========================================================

// Комерсант, володіючи стартовим капіталом N грн, зайнявся торгівлею, що збільшує його капітал щомісячно на р%. Через скільки років він накопичить суму S, достатню для того, щоб придбати власний магазин?
 if (confirm("Почати тестування?")) {
   let capital = parseFloat(prompt("Стартовий капітал:", "100000"));
   const monthlyCapitalIncrease =
     parseFloat(prompt("Щомісячний відсоток, %:", "5")) / 100;
   const futureCapital = parseFloat(
     prompt("Сума на придбання власного магазина:", "500000")
   );
   let monthCount = 1;

   document.write(
     `<div class="task__subtitle task__subtitle--green">Стартовий капітал: ${capital}грн.<br></div>`
   );
   document.write(
     `<div class="task__subtitle task__subtitle--green">Щомісячний відсоток: ${monthlyCapitalIncrease}<br></div>`
   );
   document.write(
     `<div class="task__subtitle task__subtitle--green">Сума на придбання власного магазина: ${futureCapital}грн.<br></div>`
   );

   while (capital < futureCapital) {
     capital *= 1 + monthlyCapitalIncrease;
     monthCount++;
   }
   let years = monthCount / 12;
   document.write(
     `<div class="task__subtitle task__subtitle--green">Для того, щоб накопичити ${futureCapital} грн, вам потрібно буде ${monthCount} місяців або ${years.toFixed(
       2
     )} років.</div>`
   );
 }