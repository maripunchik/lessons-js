// cуворий режим
"use strict";

// =================================================================

// Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). На основі класу Person
// розробити клас Worker (додати поля: посада, розмір заробітної плати, кількість відсотів оподаткування; методи:визначення
// 	кількості виплачених коштів за рік, та визначення розміру податків)

class Person {
  constructor(name, age, address, currentYear) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.currentYear = currentYear;
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
  getBirthYear() {
    return this.currentYear - this.age;
  }
  //---
  toString() {
    return `Ім'я: ${this.name}, вік: ${this.age}, адреса: ${
      this.address
    }, рік народження: ${this.getBirthYear()}`;
  }
  //---
  render() {
    const table = document.createElement("table");
    table.className = "worker__table";

    const rows = [
      ["Ім'я", this.name],
      ["Вік(р.)", this.age],
      ["Адреса", this.address],
      ["Рік народження", this.getBirthYear()],
    ];

    Person.appendRowsToTable(table, rows);

    return table;
  }
}
//---
class Worker extends Person {
  constructor(
    name,
    age,
    address,
    currentYear,
    position,
    salary,
    taxPercentage,
    term = 12
  ) {
    super(name, age, address, currentYear);
    this.position = position;
    this.salary = salary;
    this.taxPercentage = taxPercentage;
    this.term = term;
  }
  //---
  getAnnualSalary() {
    return this.salary * this.term;
  }
  //---
  getAnnualTaxes() {
    return (this.getAnnualSalary() * this.taxPercentage) / 100;
  }

  //---
  toString() {
    return `${super.toString()}, Посада: ${
      this.position
    }, Зарплата(грн/місяць): ${this.salary}, Податок(%): ${
      this.taxPercentage
    }%, Виплачено за рік(грн): ${this.getAnnualSalary()}, Сплачено податків:(грн): ${this.getAnnualTaxes()} `;
  }
  //---
  render() {
    const table = super.render();

    const addRows = [
      ["Посада", this.position],
      ["Зарплата (грн/місяць):", this.salary],
      ["Податок(%):", this.taxPercentage],
      ["Виплачено за рік(грн):", this.getAnnualSalary()],
      ["Сплачено податків:(грн):", this.getAnnualTaxes()],
    ];

    Person.appendRowsToTable(table, addRows);

    return table;
  }
}
//---
const worker = new Worker(
  "Євгеній",
  40,
  "м.Київ",
  2025,
  "Керівник проєкту",
  100000,
  18
);

const cnt = document.querySelector(".worker");

if (cnt) {
  const tableWrapper = document.createElement("div");
  tableWrapper.className = "worker__table-wrapper";

  tableWrapper.append(worker.render());

  cnt.append(tableWrapper);
}

console.log(worker.toString())