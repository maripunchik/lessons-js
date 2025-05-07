// cуворий режим
"use strict";

// =================================================================

// Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

// Поля----------- купюри кожного із номіналів від 5 до 200 гривень
// ---------------

// Методи---------- методи знаходження максимальної суми, які може видати банкомат;
// ---------------- методи знаходження мінімальної суми, які може видати банкомат;
// ---------------- метод зняття деякої суми;

// Створити клас Bill(купюра) — бо є повторювана структура (номінал + кількість);

// Створити клас TBankomat, який зберігає всі Bill і керує логікою видачі.

if (confirm("Почати тестування?")) {
  //----- функція для перевірки коректності введеного числа
  function checkNaturalNumber(valueNum, message) {
    if (valueNum <= 0 || isNaN(valueNum) || typeof valueNum !== "number")
      throw new Error(message);
  }
  //--------------------------
  class Bill {
    #denomination;
    #amount;
    constructor(denomination, amount) {
      this.Denomination = denomination;
      this.Amount = amount;
    }
    //----Геттер і Сеттер для Denomination
    get Denomination() {
      return this.#denomination;
    }
    set Denomination(newDenomination) {
      checkNaturalNumber(newDenomination, "Невірно введений номінал банкноти");
      this.#denomination = newDenomination;
    }
    //----Геттер і Сеттер для Amount
    get Amount() {
      return this.#amount;
    }
    set Amount(newAmount) {
      // checkNaturalNumber(newAmount, "Невірно введено кількість купюр");
      if (newAmount < 0) throw new Error(`Невірно введено кількість купюр`);
      this.#amount = newAmount;
    }
    toString() {
      return `${this.Denomination}: ${this.Amount}`;
    }
    valueOf() {
      return this.Denomination * this.Amount;
    }
  }
  //-----------------------------
  class TBankomat {
    constructor(banknotes = []) {
      this.banknotes = banknotes.sort(
        (a, b) => b.Denomination - a.Denomination
      );
    }
    getMaxAvailableAmount() {
      return this.banknotes.reduce(
        (prevSum, bill) => prevSum + bill.valueOf(),
        0
      );
    }
    getMinAvailableAmount() {
      for (let i = this.banknotes.length - 1; i >= 0; i--) {
        if (this.banknotes[i].Amount > 0) {
          return this.banknotes[i].Denomination;
        }
      }
      return 0;
    }

    withdraw(amount) {
      checkNaturalNumber(amount, "Сума зняття повинна бути додатним числом");

      if (amount > this.getMaxAvailableAmount())
        throw new Error("В банкоматі не вистачає купюр");

      let remaining = amount;
      const dispensedBills = [];

      // Копіюємо банкноти для перевірки
      const tempNotes = this.banknotes.map(
        (bill) => new Bill(bill.Denomination, bill.Amount)
      );

      // Алгоритм для вибору купюр
      for (let bill of tempNotes) {
        const countNeeded = Math.floor(remaining / bill.Denomination);
        const countToGive = Math.min(countNeeded, bill.Amount);

        if (countToGive > 0) {
          dispensedBills.push(new Bill(bill.Denomination, countToGive));
          remaining -= countToGive * bill.Denomination;
          bill.Amount -= countToGive;

          // Якщо сума вже видана, завершуємо
          if (remaining === 0) break;
        }
      }

      // Якщо не вдалося видати точну суму
      if (remaining !== 0) {
        throw new Error("Неможливо видати точну суму наявними купюрами");
      }

      // Оновлюємо реальний стан банкомата
      let withdrawSummary = "";
      for (let dispensed of dispensedBills) {
        const original = this.banknotes.find(
          (bill) => bill.Denomination === dispensed.Denomination
        );
        if (original) {
          original.Amount -= dispensed.Amount;
        }
        withdrawSummary += `Видано ${dispensed.Amount} купюр(и) по ${dispensed.Denomination} грн\n`;
      }

      return withdrawSummary;
    }
    toString() {
      return this.banknotes.map((bill) => bill.toString()).join(`\n`);
    }
  }

  const billsList = [
    new Bill(200, 2),
    new Bill(100, 5),
    new Bill(50, 10),
    new Bill(20, 10),
    new Bill(10, 20),
    new Bill(5, 10),
  ];

  const atm = new TBankomat(billsList);

  while (true) {

	if(atm.getMaxAvailableAmount() === 0) {
		alert(`В банкоматі недостатньо коштів для виконання операції`)
		break
	}
    let userInput = prompt(
      `Поточний стан банкомата:\n ${atm.getMaxAvailableAmount()} грн\nВведіть суму для зняття (доступні номінали від 5)грн:`
    );

    if (userInput === null) {
      alert("Ви скасували операцію.");
      break;
    }

    const amount = Number(userInput);
    if (isNaN(amount) || amount < 5 || amount % 5 !== 0) {
      alert("Будь ласка, введіть число не менше 5 грн і кратне 5.");
      continue;
    }

    try {
      const withdrawSummary = atm.withdraw(amount);
      alert(`Успішно знято ${amount} грн:\n${withdrawSummary}`);
      alert(`Стан банкомата після зняття:\n${atm.toString()}`);
      alert(`Поточний стан банкомата:\n${atm.getMaxAvailableAmount()} грн`);
    } catch (error) {
      alert(`Помилка: ${error.message}`);
    }

    const continueOperation = confirm("Бажаєте продовжити зняття?");
    if (!continueOperation) {
      alert("Дякуємо за користування банкоматом!");
      break;
    }
  }
}
