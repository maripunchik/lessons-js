// cуворий режим
"use strict";

// =================================================================

// Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи
// координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm("Почати тестування?")) {
  // Функція для генерації випадкового поля
  function generateRandomField(rowsNum, colsNum) {
    const field = [];
    for (let rowIndex = 0; rowIndex < rowsNum; rowIndex++) {
      field.push([]);
      for (let colIndex = 0; colIndex < colsNum; colIndex++) {
        field[rowIndex].push("🟦");
      }
    }
    return field;
  }
  // Функція розміщення кораблів
  function placeShips(field, numShips) {
    let shipsPlaced = 0;
    while (shipsPlaced < numShips) {
      const row = Math.floor(Math.random() * 6);
      const col = Math.floor(Math.random() * 6);

      if (field[row][col] !== "🚢") {
        field[row][col] = "🚢";
        shipsPlaced++;
      }
    }
  }

  // Функція виведення поля на екран у вигляді таблиці

  function printField(field) {
    let tableContent = field
      .map((row, rowIndex) => {
        return `<tr>
          <td>${rowIndex + 1}</td>
          ${row.map((el) => `<td>${el}</td>`).join("")}
        </tr>`;
      })
      .join("");

    document.writeln(`
  <table class="task__table">
    <thead>
        <tr>
		  <th>⚔️</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>6</th>
  </tr>
    </thead>
    <tbody>
      ${tableContent}
    </tbody>
  </table>
`);
  }

  const field = generateRandomField(6, 6);
  const numShips = 5;
  const maxShots = 10;

  //розміщуємо кораблі
  placeShips(field, numShips);

  let remainingShots = maxShots;
  let killedShips = 0;

  while (remainingShots > 0 && killedShips < numShips) {
    try {
      let userRowInput =
        prompt(
          `Введіть номер клітинки рядка для пострілу. (Від 1 до 6). Залишилося ${remainingShots} пострілів.`
        )

		   if (userRowInput === null) {
        alert("Ви вийшли з гри.");
        break;
      }
		userRowInput = parseInt(userRowInput);

      let userColInput =  prompt(
          `Введіть номер клітинки стовпчика для пострілу. (Від 1 до 6). Залишилося ${remainingShots} пострілів.`
        )
      
		   if (userColInput === null) {
        alert("Ви вийшли з гри.");
        break;
      }
      userColInput = parseInt(userColInput);

      if (
        isNaN(userRowInput) ||
        isNaN(userColInput) ||
        userRowInput < 1 ||
        userRowInput > 6 ||
        userColInput < 1 ||
        userColInput > 6
      ) {
        throw new Error(
          "Некоректні координати! Введіть правильні значення(1-6)"
        );
      }

      userRowInput -= 1;
      userColInput -= 1;

      if (field[userRowInput][userColInput] === "🚢") {
        alert("Ви влучили!");
        field[userRowInput][userColInput] = "❌";
        killedShips++;
      } else if (field[userRowInput][userColInput] === "🟦") {
        alert("Ви промахнулися!");
        field[userRowInput][userColInput] = "⭕";
      } else {
        alert(`Ви вже стріляли в це місце!`);
      }
      remainingShots--;
    } catch (error) {
      alert(error.message);
    }
  }
  // Виводимо результат гри
  if (killedShips === numShips) {
    alert("Вітаємо! Всі кораблі потоплені!");
  } else {
    alert("Гра завершена! Ви не потопили всі кораблі");
  }
  printField(field);
}

// =================================================================
