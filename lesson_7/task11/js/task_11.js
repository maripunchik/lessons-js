// cуворий режим
"use strict";

// ==========================================================

//   Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

if (confirm("Почати тестування?")) {
  const tempNumbers = parseInt(
    prompt("Вкажіть кількість показів температури", "5")
  );
  function getAverageFromPositiveTempValue(temperatures) {
    let positiveTempSum = 0;
    let positiveCount = 0;
    for (let i = 1; i <= temperatures; i++) {
      const tempValue = parseInt(
        prompt(`Вкажіть ${i} показник температури`, "0")
      );
      if (tempValue > 0) {
        positiveTempSum += tempValue;
        positiveCount++;
      }

      document.write(
        `<div class="task__subtitle task__subtitle--green">Температура №${i}: ${tempValue};</div>`
      );
    }
    const average = positiveTempSum / positiveCount;
    return average;
  }

  const averagePositiveTemperature =
    getAverageFromPositiveTempValue(tempNumbers);
  document.write(`
		<div class="task__subtitle task__subtitle--green">Середнє значення для додатних показів температури складає ${averagePositiveTemperature.toFixed(
      1
    )}</div>`);
}
