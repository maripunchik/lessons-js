// cуворий режим
"use strict";

// =================================================================
//* Створити клас Client

// ---- Поля(властивості) -----
// ID;
// ПІБ;
// Кількість грошей на рахунку

// ---- Методи(дії) -----
// Додавання грошей
// Зняття грошей
// ToString

//* На основі цього класу створити клас GoldenClient

// ---- Поля(властивості) -----
// ID;
// ПІБ;
// Кількість грошей на рахунку
// Ліміт кредитних коштів
// Відсоток за використання кредитних коштів

// ---- Методи(дії) -----
// Додавання грошей
// Зняття грошей
// Визначення пені за використання кредитних коштів
// ToString

// =================================================================

class Client {
  constructor(id, fullName, balance = 0) {
    this.id = id;
    this.fullName = fullName;
    this.balance = balance;
  }
  //---
  static appendRowsToTable(table, rows) {
    rows.forEach(([label, value]) => {
      const tr = document.createElement("tr");
      const tdLabel = document.createElement("td");
      tdLabel.innerText = label;

      const tdValue = document.createElement("td");
      tdValue.innerText = value;

      tr.append(tdLabel, tdValue);
      table.append(tr);
    });
  }
  //---
  static validateAmount(amount) {
    if (typeof amount !== "number" || isNaN(amount)) {
      throw new Error("Сума повинна бути числовим значенням");
    }
    if (amount <= 0) {
      throw new Error("Сума має бути більшою за 0");
    }
  }
  //---
  deposit(amount) {
    Client.validateAmount(amount);
    this.balance += amount;
  }
  //---
  withdraw(amount) {
    Client.validateAmount(amount);
    if (amount > this.balance) throw new Error("Недостатньо коштів на рахунку");
    this.balance -= amount;
  }
  //---
  toString() {
    return `ID: ${this.id}, ПІБ: ${this.fullName}, Кількість грошей на рахунку(грн.): ${this.balance}`;
  }
  //---
  render() {
    const table = document.createElement("table");
    table.className = "client__table";

    const rows = [
      ["ID", this.id],
      ["ПІБ", this.fullName],
      ["Кількість грошей на рахунку (грн.)", this.balance],
    ];

    Client.appendRowsToTable(table, rows);

    return table;
  }
}

//---
class GoldenClient extends Client {
  constructor(id, fullName, balance = 0, creditLimit = 0, creditPercent = 0) {
    super(id, fullName, balance);
    this.creditLimit = creditLimit;
    this.creditPercent = creditPercent;
  }
  //---
  getAvailableFunds() {
    return this.balance + this.creditLimit;
  }
  //---
  withdraw(amount) {
    Client.validateAmount(amount);

    if (amount > this.getAvailableFunds()) {
      throw new Error(
        "Недостатньо коштів для зняття(враховуючи кредитний ліміт)"
      );
    }

    this.balance -= amount;
  }
  //---
  getCreditPenalty() {
    return this.balance >= 0 ? 0 : (-this.balance * this.creditPercent) / 100;
  }
  //---
  toString() {
    return `${super.toString()}, Кредитний ліміт (грн.): ${
      this.creditLimit
    }, Відсоток за кредит (%): ${
      this.creditPercent
    }, Розмір пені за використання кредитних коштів (грн.): ${this.getCreditPenalty().toFixed(
      2
    )}`;
  }
  //---
  render() {
    const table = super.render();

    const addRows = [
      ["Кредитний ліміт (грн.)", this.creditLimit],
      ["Відсоток за кредит (%)", this.creditPercent],
      [
        "Розмір пені за використання кредитних коштів (грн.)",
        this.getCreditPenalty().toFixed(2),
      ],
    ];

    Client.appendRowsToTable(table, addRows);

    return table;
  }
}
//---

const input = document.querySelector(".client__input");
const depositBtn = document.querySelector(".client__button--deposit");
const withdrawBtn = document.querySelector(".client__button--withdraw");

const resDiv = document.querySelector(".client__result");
//для тестування класу Client :
// const client = new Client(
//   123,
//   "Мельник Вероніка Богданівна",
//   500,
//   1000,
//   10
// );

const client = new GoldenClient(
  123,
  "Клименко Дмитро Євгенійович",
  500,
  1000,
  10
);

console.log(client.toString())
resDiv.append(client.render());
//---
function handleTransaction(action, errorMsg) {
  resDiv.classList.remove("client__result--success", "client__result--error");
  resDiv.innerText = "";

  try {
    const amount = Number(input.value);
    action(amount);

    resDiv.append(client.render());
    resDiv.classList.add("client__result--success");
  } catch (error) {
    resDiv.innerText = `${errorMsg}: ${error.message}`;
    resDiv.classList.add("client__result--error");
  }
}
//---
depositBtn.addEventListener("click", () => {
  handleTransaction(client.deposit.bind(client), "Помилка внесення");
});
//---
withdrawBtn.addEventListener("click", () => {
  handleTransaction(client.withdraw.bind(client), "Помилка зняття");
});
