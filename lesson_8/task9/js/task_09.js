// cуворий режим
"use strict";

// ==========================================================

//   Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

if (confirm("Почати тестування?")) {
  const cellCount = parseInt(
    prompt('Введіть кількість клітинок для гри "Морський бій"', "10")
  );
  const amountOfShips = parseInt(
    prompt("Введіть кількість одиночних кораблів", "4")
  );

  function generatePlayingField(length) {
    let cells = [];
    for (let i = 0; i < length; i++) {
      cells.push(0);
    }
    return cells;
  }

  function getShip(num, length) {
    let cells = generatePlayingField(length);
    let shipsPlaced = 0;
    while (shipsPlaced < num) {
      let cell = Math.floor(Math.random() * length);
      if (cells[cell] === 0) {
        cells[cell] = 1;
        shipsPlaced++;
      }
    }
    return cells;
  }

  function playSeaBattle(amountOfShips, cellCount) {
    let cells = getShip(amountOfShips, cellCount);
    let remainingShips = amountOfShips;
    let win = false;

    while (remainingShips > 0) {
      const userInput = parseInt(
        prompt(
          `Введіть число від 1 до ${cellCount}. Залишилось кораблів: ${remainingShips}`,
          ""
        )
      );

      if (isNaN(userInput) || userInput < 1 || userInput > cellCount) {
       break;
      }
      if (cells[userInput - 1] === 1) {
        cells[userInput - 1] = 0;
        remainingShips--;
        alert(`Влучили! Залишилося ${remainingShips} кораблів`);
      } else {
        alert("Не влучили! Спробуйте ще раз.");
      }

      if (remainingShips === 0) {
        win = true;
      }
    }
    return win;
  }

  const win = playSeaBattle(amountOfShips, cellCount);

  if (win) {
    document.writeln(
      `<div class="task__subtitle task__subtitle--green">Ви потопили всі кораблі!</div>`
    );
  } else {
   alert(
      `Гру завершено. Не всі кораблі знищені.`
    );
  }
}
