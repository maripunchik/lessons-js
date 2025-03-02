// cуворий режим
"use strict";

// ==========================================================

// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
if (confirm("Почати тестування?")) {
  let numWeeks = parseInt(prompt(`Введіть кількість тижнів`, "5"));
  let storeTotalProfit = 0;
  for (let week = 1; week <= numWeeks; week++) {
    let weekProfit = 0;
    for (let day = 1; day <= 7; day++) {
      const dayProfit = parseFloat(
        prompt(`Введіть прибуток за день №${day} тижня ${week}`, "100")
      );
      weekProfit += dayProfit;
    }
    storeTotalProfit += weekProfit;
    document.write(
      `<div class="task__subtitle task__subtitle--green">Прибуток за тиждень №${week} : ${weekProfit}</div>`
    );
  }
  document.write(
    `<div class="task__subtitle task__subtitle--green">Загальна величина прибутку: ${storeTotalProfit}</div>`
  );
}
