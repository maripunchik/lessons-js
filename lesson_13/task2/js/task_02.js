// cуворий режим
"use strict";

// =================================================================

// Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).

if (confirm("Почати тестування?")) {
  function outputtingResults() {
    const athletesNameList = ["Василь", "Іван", "Марія"];
    const result = [];

    // Колір для кожного спортсмена
    const athleteColors = {
      Василь: "#a1e35e",
      Іван: "#3892eb",
      Марія: "#f28787",
    };

    // Заголовок
    document.writeln(
      `<p style="font-weight:bold;">Спортсмени: ${athletesNameList.join(
        ", "
      )}</p>`
    );

    // Таблиця з кольорами
    function getCompetitionResults(combination) {
      let table = '<table class="task__table"><tr>';

      // Перший рядок — місця
      for (let i = 0; i < combination.length; i++) {
        table += `<th>${i + 1} місце</th>`;
      }
      table += "</tr><tr>";

      // Другий рядок — імена спортсменів
      for (let i = 0; i < combination.length; i++) {
        const name = combination[i];
        const bgColor = athleteColors[name] || "#ffffff"; 
        table += `<td style="background-color:${bgColor};">${name}</td>`;
      }

      table += "</tr></table><br>";
      return table;
    }

    let variantNumber = 1;

    // Генератор перестановок
    const getCombinations = (arr, currentCombination = []) => {
      if (currentCombination.length === arr.length) {
        document.writeln(
          `<p style="font-weight:bold;">Комбінація №${variantNumber++}</p>`
        );
        const showTable = getCompetitionResults(currentCombination);
        document.writeln(showTable);
        result.push([...currentCombination]);
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        if (currentCombination.includes(arr[i])) continue;
        currentCombination.push(arr[i]);
        getCombinations(arr, currentCombination);
        currentCombination.pop(); 
      }
    };

    getCombinations(athletesNameList);
  }

  outputtingResults();
}

// ============================================


// Викликаємо getCombinations(["Василь", "Іван", "Марія"], [])

//   → Додали [] до result

// ├── i = 0 → currentCombination = ["Василь"]
// │   getCombinations(["Василь", "Іван", "Марія"], ["Василь"])
// │   → Додали ["Василь"]
// │
// │   ├── i = 1 → currentCombination = ["Василь", "Іван"]
// │   │   getCombinations(["Василь", "Іван", "Марія"], ["Василь", "Іван"])
// │   │   → Додали ["Василь", "Іван"]
// │   │
// │   │   ├── i = 2 → currentCombination = ["Василь", "Іван", "Марія"]
// │   │   │   getCombinations(["Василь", "Іван", "Марія"], ["Василь", "Іван", "Марія"])
// │   │   │   → Додали ["Василь", "Іван", "Марія"]
// │   │   │
// │   │   │   ← pop → ["Василь", "Іван"]
// │   │   └── ← pop → ["Василь"]
// │   │
// │   ├── i = 2 → currentCombination = ["Василь", "Марія"]
// │   │   getCombinations(["Василь", "Іван", "Марія"], ["Василь", "Марія"])
// │   │   → Додали ["Василь", "Марія"]
// │   │
// │   │   └── i = 3 → currentCombination = ["Василь", "Марія", "Іван"]
// │   │       getCombinations(["Василь", "Іван", "Марія"], ["Василь", "Марія", "Іван"])
// │   │       → Додали ["Василь", "Марія", "Іван"]
// │   │
// │   │       ← pop → ["Василь", "Марія"]
// │   └── ← pop → ["Василь"]

// ├── i = 1 → currentCombination = ["Іван"]
// │   getCombinations(["Василь", "Іван", "Марія"], ["Іван"])
// │   → Додали ["Іван"]
// │
// │   ├── i = 2 → currentCombination = ["Іван", "Марія"]
// │   │   getCombinations(["Василь", "Іван", "Марія"], ["Іван", "Марія"])
// │   │   → Додали ["Іван", "Марія"]
// │   │
// │   │   └── i = 3 → currentCombination = ["Іван", "Марія", "Василь"]
// │   │       getCombinations(["Василь", "Іван", "Марія"], ["Іван", "Марія", "Василь"])
// │   │       → Додали ["Іван", "Марія", "Василь"]
// │   │
// │   │       ← pop → ["Іван", "Марія"]
// │   └── ← pop → ["Іван"]
// │
// └── i = 2 → currentCombination = ["Марія"]
//     getCombinations(["Василь", "Іван", "Марія"], ["Марія"])
//     → Додали ["Марія"]
//     ← pop → []


