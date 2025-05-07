// cуворий режим
"use strict";

// =================================================================

// Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

if (confirm("Почати тестування?")) {
  //---- функція для перевірки коректності введеної суми
  function validateUAHAmount(
    value,
    errorMessage = "Сума повинна бути додатнім числом"
  ) {
    if (typeof value !== "number" || isNaN(value) || value < 0) {
      throw new Error(errorMessage);
    }
  }

  class TMoney {
    #dollarAmount;
    #dolExchangeRate;

    constructor(dollarAmount = 0, dolExchangeRate = 40) {
      this.DollarAmount = dollarAmount; 
      this.DolExchangeRate = dolExchangeRate; 
    }

    // Геттер і сеттер для суми в доларах
    get DollarAmount() {
      return this.#dollarAmount;
    }

    set DollarAmount(newDollarAmount) {
      if (typeof newDollarAmount === "number" && newDollarAmount >= 0) {
        this.#dollarAmount = newDollarAmount;
      } else {
        throw new Error("Сума у доларах повинна бути додатнім числом");
      }
    }

    // Геттер і сеттер для курсу долара
    get DolExchangeRate() {
      return this.#dolExchangeRate;
    }

    set DolExchangeRate(newRate) {
      validateUAHAmount(newRate, "Курс повинен бути додатнім числом");
      this.#dolExchangeRate = newRate;
    }

    // Метод для отримання гривневої суми
    getUAH() {
      return this.#dollarAmount * this.#dolExchangeRate;
    }

    // Метод додавання в грн (додавання грошей в доларах)
    addUAH(uahAmount) {
      validateUAHAmount(uahAmount, "Сума повинна бути додатнім числом");
      this.#dollarAmount += uahAmount / this.#dolExchangeRate;
    }

    // Метод зняття в грн (вилучення грошей в доларах)
    withdrawUAH(uahAmount) {
      validateUAHAmount(uahAmount, "Сума повинна бути додатнім числом");
      const dollarAmountToWithdraw = uahAmount / this.#dolExchangeRate;
      if (dollarAmountToWithdraw > this.#dollarAmount) {
        throw new Error("Недостатньо коштів");
      }
      this.#dollarAmount -= dollarAmountToWithdraw;
    }

    // Метод для визначення курсу, при якому гривнева сума збільшиться на N (в прикладі на 100)
    getRateForPlusNUAH(changeUAH = 100) {
      const newUAH = this.getUAH() + changeUAH;
		if(this.#dollarAmount === 0) throw new Error("Сума у доларах дорівнює нулю");
		
      return newUAH / this.#dollarAmount;
    }

    // Метод для виведення стану об'єкта у вигляді рядка
    toString() {
      return `Сума: ${this.DollarAmount.toFixed(2)}$ = ${this.getUAH().toFixed(
        2
      )} грн, Курс: ${this.DolExchangeRate.toFixed(2)}`;
    }
  }

  try {
    const wallet = new TMoney(100); // Початкова сума в доларах
    console.log(wallet);
    document.writeln(
      `<div class="task__subtitle task__subtitle--green">${wallet}</div>`
    );

    // Додавання коштів (800 грн)
    wallet.addUAH(800); // +$20
    console.log(wallet);
    document.writeln(
      `<div class="task__subtitle task__subtitle--green">${wallet}</div>`
    );

    // Вилучення коштів (400 грн)
    wallet.withdrawUAH(400); // -$10
    console.log(wallet);
    document.writeln(
      `<div class="task__subtitle task__subtitle--green">${wallet}</div>`
    );

    // Визначення курсу долара для збільшення гривневої суми на N (в прикладі на 100)
    console.log("Курс для +100 грн:", wallet.getRateForPlusNUAH().toFixed(2));
    document.writeln(
      `<div class="task__subtitle task__subtitle--green">Курс для +100 грн = ${wallet
        .getRateForPlusNUAH()
        .toFixed(2)}</div>`
    );
  } catch (error) {
    document.writeln(`<div class="task__subtitle">${error.message}</div>`);
  }
}

// ============================================
