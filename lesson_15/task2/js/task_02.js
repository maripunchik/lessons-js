// cуворий режим
"use strict";

// =================================================================

// Створити об’єкт «Авто».
// Поля(властивості) -------------Марка
//--------------------------------Розмір бака
//--------------------------------Кількість наявних літрів
//--------------------------------Кількість місць
//--------------------------------Кількість пасажирів

//Методи (дії)--------------------Заправка на вказану кількість літрів
//-------------------------------Виведення кількості пасажирів
//--------------------------------Додавання пасажирів
//--------------------------------Висадка пасажирів

if (confirm("Почати всі тестування?")) {
  function isPositive(value, label = "Значення") {
    if (value < 0) throw new Error(label);
  }
  let Auto = {
    brand: "Peugeot",
    tankSize: 60,
    currentFuel: 20,
    seats: 5,
    passengers: 2,

    //----------------------------
    // Метод: Заправка на вказану кількість літрів
    refuel(liters) {
      isPositive(liters, "⚠️ Введіть додатню кількість літрів для заправки.");

      let possibleFuel = this.currentFuel + liters;

      if (possibleFuel > this.tankSize) {
        console.log(
          `⛽ Перелив! Можна заправити лише ${
            this.tankSize - this.currentFuel
          } л.`
        );
        this.currentFuel = this.tankSize;
      } else {
        this.currentFuel = possibleFuel;
        console.log(
          `⛽ Заправлено ${liters} л. Поточний рівень пального: ${this.currentFuel} л.`
        );
      }
    },

    //----------------------------
    // Метод: Виведення кількості пасажирів
    showPassengers() {
      console.log(`🚗 Поточна кількість пасажирів: ${this.passengers}`);
    },

    //----------------------------
    // Метод: Додавання пасажирів
    addPassengers(count) {
      isPositive(count, "⚠️ Введіть додатню кількість пасажирів.");

      if (this.passengers + count > this.seats) {
        console.log(
          `🚫 Занадто багато пасажирів! Доступно лише ${
            this.seats - this.passengers
          } місць.`
        );
      } else {
        this.passengers += count;
        console.log(
          `✅ Додано ${count} пасажирів. Загалом: ${this.passengers}`
        );
      }
    },

    //----------------------------
    // Метод: Висадка пасажирів
    removePassengers(count) {
      isPositive(count, "⚠️ Введіть додатнє число для висадки.");

      if (count > this.passengers) {
        console.log(
          `🚫 У машині лише ${this.passengers} пасажирів. Неможливо висадити ${count}.`
        );
      } else {
        this.passengers -= count;
        console.log(
          `🧍 Висаджено ${count} пасажирів. Залишилось: ${this.passengers}`
        );
      }
    },
  };

  Auto.refuel(10); // Дозаправити 10 літрів
  Auto.showPassengers(); // Вивести кількість пасажирів
  Auto.addPassengers(2); // Додати 2 пасажирів
  Auto.removePassengers(1); // Висадити 1 пасажира
}
