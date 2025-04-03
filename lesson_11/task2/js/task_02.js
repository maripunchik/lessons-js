// cуворий режим
"use strict";

// ==========================================================

// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

if (confirm("Почати тестування?")) {
  const daysNames = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ];

  function generateRandomProfits(
    numStores,
    numDays,
    minProfit = 100,
    maxProfit = 1000
  ) {
    const profits = [];
    for (let rowIndex = 0; rowIndex < numStores; rowIndex++) {
      profits.push([]);
      for (let colIndex = 0; colIndex < numDays; colIndex++) {
        const randProfit =
          minProfit + Math.floor(Math.random() * (maxProfit - minProfit + 1));
        profits[rowIndex].push(randProfit);
      }
    }
    return profits;
  }

  const storesProfits = generateRandomProfits(5, 7); // 5 рядків, 7 стовпців
//   document.writeln(`Таблиця:`);
//   document.writeln(JSON.stringify(storesProfits));

  let tableStoresProfits = storesProfits
    .map((row) => {
      return `<tr>${row.map((el) => `<td>${el}</td>`).join("")}</tr>`;
    })
    .join("");

  document.write(`
<table class="task__table">
<thead>
<tr>
<th>Понеділок (грн)</th>
<th>Вівторок (грн)</th>
<th>Середа (грн)</th>
<th>Четвер (грн)</th>
<th>П'ятниця (грн)</th>
<th>Субота (грн)</th>
<th>Неділя (грн)</th>
</tr>
</thead>
<tbody>
${tableStoresProfits}
</tr>
</tbody>
</table>`);

  // 1) Загальний прибуток кожного магазину за тиждень
  document.writeln(
    `<p class="task__bold">1) Загальний прибуток кожного магазину за тиждень:</p>`
  );

  storesProfits.forEach((storeProfits, index) => {
    let totalProfitForAWeek = storeProfits.reduce(
      (prevProfit, profit) => prevProfit + profit,
      0
    );

    document.writeln(`Магазин № ${index + 1}: ${totalProfitForAWeek} грн;<br>
  `);
  });
  // =====================================================

  // 2) Загальний прибуток усіх магазинів по дням
  document.writeln(
    `<p class="task__bold">2) Загальний прибуток усіх магазинів по дням:</p>`
  );
  let totalProfitByDay = Array(7).fill(0);
  storesProfits.forEach((storeProfits) => {
    storeProfits.forEach((dayProfit, dayIndex) => {
      totalProfitByDay[dayIndex] += dayProfit;
    });
  });
  totalProfitByDay.forEach((totalProfit, dayIndex) => {
    document.writeln(`<p>${daysNames[dayIndex]}: ${totalProfit} грн</p>`);
  });

  // =====================================================

  // 3) Загальний прибуток за робочі дні
  let totalWorkdaysProfit = totalProfitByDay
    .slice(0, 5)
    .reduce((sum, profit) => sum + profit, 0);
  document.writeln(
    `<p class="task__bold">3) Загальний прибуток за робочі дні: ${totalWorkdaysProfit} грн.</p>`
  );

  // =====================================================

  // 4) Загальний прибуток за вихідні дні
  let totalWeekendProfit = totalProfitByDay
    .slice(5)
    .reduce((sum, profit) => sum + profit, 0);
  document.writeln(
    `<p class="task__bold">4) Загальний прибуток за вихідні дні: ${totalWeekendProfit} грн.</p>`
  );

  // =====================================================

  // 5) Максимальний прибуток за середу
  function getMaxProfitWednesday(storesProfits) {
    let max = -Infinity;
    for (
      let storesIndex = 0;
      storesIndex < storesProfits.length;
      storesIndex++
    ) {
      if (storesProfits[storesIndex][2] > max)
        max = storesProfits[storesIndex][2];
    }
    return max;
  }

  document.writeln(
    `<p class="task__bold">5) Максимальний прибуток за середу: ${getMaxProfitWednesday(
      storesProfits
    )} грн.</p>`
  );

  // =====================================================

  // 6) Одновимірний масив з прибутками більше ніж 200
  let arrWithProfitsGreater200 = storesProfits
    .flat()
    .filter((profit) => profit > 200);
  document.writeln(`<p class="task__bold">6) Масив прибутків більше 200:</p>`);
  document.writeln(
    `<p style="max-width: 300px;">[${arrWithProfitsGreater200.join(", ")}]</p>`
  );

  // =====================================================
  //   sort((a, b) => {...})  повертає:
  // Позитивне число, якщо a має бути після b.
  // Негативне число, якщо a має бути перед b.
  // Нуль, якщо вони рівні.

  // 7) Відсортовані тижні за зростанням:
  function sortProfits() {
    return storesProfits.map((store) => [...store].sort((a, b) => a - b));
  }

  const sortedWeeksProfits = sortProfits();
  document.writeln(
    `<p class="task__bold"">7) Відсортовані тижні за зростанням:  </p>`
  );
  document.writeln(
    `<p style="max-width: 300px;text-align:center;">${JSON.stringify(
      sortedWeeksProfits
    )}</p>`
  );

  // =====================================================

  // 8) Сортування тижнів за максимальним елементом у кожному тижні

  const sortedWeeksByMaxProfit = storesProfits.sort((a, b) => {
    return Math.max(...b) - Math.max(...a);
  });

  document.writeln(
    `<p class="task__bold">8) Відсортовані тижні за максимальним елементом:</p>`
  );
  document.writeln(
    `<p style="max-width: 300px;text-align:center;">${JSON.stringify(
      sortedWeeksByMaxProfit
    )}</p>`
  );

  // =====================================================

  // 9) Сортування тижнів за сумою елементів у кожному рядку
  const sortedWeeksBySumProfit = storesProfits.sort((a, b) => {
    const sumA = a.reduce((sum, profit) => sum + profit, 0);
    const sumB = b.reduce((sum, profit) => sum + profit, 0);
    return sumB - sumA;
  });

  document.writeln(
    `<p class="task__bold">9) Відсортовані тижні за сумою елементів:</p>`
  );
  document.writeln(
    `<p style="max-width: 300px;text-align:center;">${JSON.stringify(
      sortedWeeksBySumProfit
    )}</p>`
  );
}
