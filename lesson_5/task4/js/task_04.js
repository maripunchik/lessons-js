// cуворий режим
"use strict"

// ==========================================================

//Користувач поступово вводить показники температури протягом року. Знайти середню температуру.

if (confirm("Почати тестування?")) {
  let numMonth = 12;
  let tempSum = 0;
  for (let i = 1; i <= numMonth; i++) {
    let tempIndicators = parseFloat(
      prompt(`Введіть показник температури за ${i}місяць`, "7")
    );
    tempSum += tempIndicators;
  }
  const averageTemp = tempSum / numMonth;
  document.write(
    `Середня температура за ${numMonth} місяців - ${averageTemp.toFixed(2)}°C`
  );
}

// =================================================================