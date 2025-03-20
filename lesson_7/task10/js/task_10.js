// cуворий режим
"use strict";

// ==========================================================

//   Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
if (confirm("Почати тестування?")) {
  function getNegativeTemperatures(temperatures) {
    let negativeCount = 0;
    for (let i = 1; i <= temperatures; i++) {
      const tempValue = parseInt(
        prompt(`Вкажіть ${i} показник температури`, "-3")
      );
      if (tempValue < 0) negativeCount++;

      document.write(
        `<div class="task__subtitle task__subtitle--green">Температура №${i}: ${tempValue};</div>`
      );
    }
    return negativeCount;
  }
  const temperaturesCount = parseInt(
    prompt("Вкажіть кількість показів температури", "5")
  );

  const negativeTemperatures = getNegativeTemperatures(temperaturesCount);

  document.write(`
		<div class="task__subtitle task__subtitle--green">Кількість від’ємних показів температури: ${negativeTemperatures}</div>`);
}
