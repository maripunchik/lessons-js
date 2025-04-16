// cуворий режим
"use strict";

// =================================================================

// Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.

if (confirm("Почати тестування?")) {
  const boys = ["Андрій", "Іван", "Богдан"];
  const girls = ["Ольга", "Марія", "Тетяна"];

  const dancersColors = {
    Андрій: "#a1e35e",
    Іван: "#3892eb",
    Богдан: "#9599eb",
    Ольга: "#f28787",
    Марія: "#e58f32",
    Тетяна: "#b84ec0"
  };

  // Виводимо список хлопців та дівчат
  document.writeln(
    `<p style="font-weight:bold;">Танцори хлопці: ${boys.join(", ")}</p>`
  );
  document.writeln(
    `<p style="font-weight:bold;">Танцори дівчата: ${girls.join(", ")}</p>`
  );

  // Масив для зберігання всіх комбінацій
  let resultCombinations = [];

  // Рекурсивна функція для побудови комбінацій
  function generateCombinations(
    boys,
    girls,
    currentIndex = 0,
    currentCombination = []
  ) {
    if (currentIndex === boys.length) {
      resultCombinations.push([...currentCombination]);
      return;
    }

    for (let i = 0; i < girls.length; i++) {
      const girl = girls[i];
      const remainingGirls = girls.filter((_, index) => index !== i);

      currentCombination.push([boys[currentIndex], girl]); // Зберігаємо як масив пар
      generateCombinations(
        boys,
        remainingGirls,
        currentIndex + 1,
        currentCombination
      );
      currentCombination.pop(); // відкат
    }
  }

  generateCombinations(boys, girls);

  // Функція для створення таблиці
  function getCoupleOfDancersResults(pairs) {
    let table =
      '<table class="task__table">';
    table += `<tr><th>Хлопець</th><th>Дівчина</th></tr>`;

    for (let [boy, girl] of pairs) {
      const boyColor = dancersColors[boy] || "#fff";
      const girlColor = dancersColors[girl] || "#fff";

      table += `<tr>
        <td style="background-color:${boyColor};">${boy}</td>
        <td style="background-color:${girlColor};">${girl}</td>
      </tr>`;
    }

    table += "</table><br>";
    return table;
  }

  // Виведення всіх комбінацій 
  resultCombinations.forEach((combination, index) => {
    document.writeln(`
      <p style="font-weight: bold;">Комбінація №${
        index + 1
      }:</p>
    `);
    document.writeln(getCoupleOfDancersResults(combination));
  });
}





