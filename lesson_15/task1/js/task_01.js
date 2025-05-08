// cуворий режим
"use strict";

// =================================================================

// Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Поля(властивості) ---------------- Масив, у якому зберігається поле з зайцями

// Методи (дії) ------------------Метод пострілу (задається позиція пострілу)
//------------------------------- Виведення ігрового поля

// =================================================================

const maxShots = 5;
let remainingShots = maxShots;

if (confirm("Почати тестування?")) {
  let Tyr = {
    field: [],
    size: 5,
    rabbitsCount: 5,

    initField() {
      // виправлено згідно рекомендацій вчителя
      this.field = [];

      for (let i = 0; i < this.size; i++) {
        this.field[i] = [];
        for (let j = 0; j < this.size; j++) {
          this.field[i][j] = 0;
        }
      }

      let rabbitsPlaced = 0;

      while (rabbitsPlaced < this.rabbitsCount) {
        let randX = Math.floor(Math.random() * this.size);
        let randY = Math.floor(Math.random() * this.size);

        if (this.field[randX][randY] === 0) {
          this.field[randX][randY] = 1;
          rabbitsPlaced++;
        }
      }
    },

    // Метод пострілу
    shoot(x, y) {
      try {
        if (
          isNaN(x) ||
          isNaN(y) ||
          x < 0 ||
          y < 0 ||
          x >= this.size ||
          y >= this.size
        ) {
          throw new Error("Некоректна позиція пострілу.");
        }

        if (this.field[x][y] === "🎯" || this.field[x][y] === "❌") {
          alert(
            `⚠️ Ви вже стріляли в (${x + 1}, ${
              y + 1
            }). Спробуйте іншу клітинку.`
          );
          return;
        }

        if (this.field[x][y] === 1) {
          alert(`🎯 Ви влучили в (${x + 1},${y + 1})! Заєць підстрелений!`);
          this.field[x][y] = "🎯";
          this.rabbitsCount--;
        } else {
          alert(`❌ Ви промахнулись! У (${x + 1},${y + 1}) зайця немає.`);
          this.field[x][y] = "❌";
        }
      } catch (error) {
        alert(`⚠️ ${error.message}`);
      }
    },

    // Метод виведення ігрового поля
    showField() {
      let tableContent = "";

      for (let i = 0; i < this.size; i++) {
        tableContent += "<tr>";
        tableContent += `<td><strong>${i + 1}</strong></td>`;
        for (let j = 0; j < this.size; j++) {
          if (this.field[i][j] === 1) {
            tableContent += `<td>🐰</td>`;
          } else if (this.field[i][j] === "🎯") {
            tableContent += `<td>🎯</td>`;
          } else if (this.field[i][j] === "❌") {
            tableContent += `<td>❌</td>`;
          } else {
            tableContent += `<td>🥕</td>`;
          }
        }
        tableContent += "</tr>";
      }

      let colHeader = "<tr><th>🍀</th>";
      for (let i = 1; i <= this.size; i++) {
        colHeader += `<th>${i}</th>`;
      }
      colHeader += "</tr>";

      document.writeln(`
        <table class="task__table task__table task__table--small">
          <thead>${colHeader}</thead>
          <tbody>${tableContent}</tbody>
        </table>
      `);
    },

    isGameOver() {
      return this.rabbitsCount === 0;
    },
  };

  // Запуск гри
  Tyr.initField();

  // Гра
  while (remainingShots > 0) {
    let x = prompt(
      `Залишилось пострілів: ${remainingShots}\nВведіть номер РЯДКА (1-${Tyr.size}) або 'exit':`
    );
    if (x === null || x.toLowerCase() === "exit") {
      alert("Гру завершено гравцем.");
      break;
    }

    let y = prompt(`Введіть номер СТОВПЦЯ (1-${Tyr.size}):`);
    if (y === null || y.toLowerCase() === "exit") {
      alert("Гру завершено гравцем.");
      break;
    }

    x = Number(x) - 1;
    y = Number(y) - 1;

    if (
      isNaN(x) ||
      isNaN(y) ||
      x < 0 ||
      y < 0 ||
      x >= Tyr.size ||
      y >= Tyr.size
    ) {
      alert("⚠️ Введено некоректні координати. Спробуйте ще раз.");
      continue;
    }

    Tyr.shoot(x, y);
    remainingShots--;

    if (Tyr.isGameOver()) {
      alert("🎉 Ви підстрелили всіх зайців! Гра завершена.");
      break;
    }

    if (remainingShots === 0) {
      alert("❌ Постріли закінчились. Гру завершено.");
    }
  }

  Tyr.showField();
}
