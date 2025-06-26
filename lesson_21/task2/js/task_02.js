// cуворий режим
"use strict";

// =================================================================
// Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції:
// 1.Вивести всіх простих клієнтів;
// 2.Вивести всіх клієнтів GoldenClient;
// 3.Знайти сумарну кількість грошей на рахунку;

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
class Bank {
  constructor() {
    this.clients = [];
  }
  //---
  addClient(client) {
    this.clients.push(client);
  }
  //---
  getSimpleClients() {
    return this.clients.filter((client) => !(client instanceof GoldenClient));
  }
  //---
  getGoldenClients() {
    return this.clients.filter((client) => client instanceof GoldenClient);
  }
  //---
  getTotalBalance() {
    return this.clients.reduce((sum, client) => sum + client.balance, 0);
  }
  //---
  renderClients(clientsArr) {
    const cnt = document.createElement("div");
    clientsArr.forEach((client) => {
      cnt.append(client.render());
    });

    return cnt;
  }
}
//---

const bank = new Bank();

// Прості клієнти
bank.addClient(new Client(1, "Іваненко Петро Іванович", 1200));
bank.addClient(new Client(2, "Сидоренко Марія Василівна", 500));
bank.addClient(new Client(3, "Шевченко Олександр Володимирович", 780));

// Golden-клієнти
bank.addClient(new GoldenClient(4, "Ковальчук Олег Миколайович", 1000, 2000, 8));
bank.addClient(new GoldenClient(5, "Гончар Ольга Степанівна", -500, 1500, 12));
bank.addClient(new GoldenClient(6, "Мельник Ірина Сергіївна", 300, 500, 10));

const simpleClientsBlock = document.getElementById("simpleClients");
simpleClientsBlock.append(bank.renderClients(bank.getSimpleClients()));

const goldenClientsBlock = document.getElementById("goldenClients");
goldenClientsBlock.append(bank.renderClients(bank.getGoldenClients()));

const totalBlock = document.getElementById("totalBalance");
totalBlock.innerText = `${bank.getTotalBalance()} грн.`;
