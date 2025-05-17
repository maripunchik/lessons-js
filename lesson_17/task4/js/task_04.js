// cуворий режим
"use strict";

// =================================================================

// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми

if (confirm("Почати тестування?")) {
  class ManufacturerCompany {
    #nameManufacturer;
    #registrationNumber;

    constructor(name, registrationNumber) {
      this.NameManufacturer = name;
      this.RegistrationNumber = registrationNumber;
    }
    //-- гетер для nameManufacturer
    get NameManufacturer() {
      return this.#nameManufacturer;
    }
    //-- сетер для nameManufacturer
    set NameManufacturer(newName) {
      if (newName.trim() !== "") {
        this.#nameManufacturer = newName;
      } else {
        throw new Error("Недопустима назва виробника");
      }
    }
    //-- гетер для nameManufacturer
    get RegistrationNumber() {
      return this.#registrationNumber;
    }
    //-- сетер для nameManufacturer
    set RegistrationNumber(newRegNum) {
      if (newRegNum.trim() !== "") {
        this.#registrationNumber = newRegNum;
      } else {
        throw new Error("Недопустимий реєстраційний номер");
      }
    }
    toString() {
      return `${this.NameManufacturer} - #${this.#registrationNumber}`;
    }
  }
  class GoodsList {
    #amount;
    constructor(title, measurement, amount, manufacturer) {
      this.title = title;
      this.measurement = measurement;
      this.Amount = amount;
      this.manufacturer = manufacturer;
    }
    //--гетер для amount
    get Amount() {
      return this.#amount;
    }
    //--сетер для amount
    set Amount(newAmount) {
      if (newAmount < 0)
        throw new Error("Кількість товарів не може бути від'ємною");
      this.#amount = newAmount;
    }
    toString() {
      return `${this.title}: ${this.Amount}${this.measurement} ${this.manufacturer} `;
    }
    valueOf() {
      return this.Amount;
    }
  }
  class GoodsDatabase {
    constructor(title) {
      this.title = title;
      this.productsList = [];
    }
    //---
    addProduct(newProd) {
      for (const product of this.productsList) {
        if (
          product.title === newProd.title &&
          product.manufacturer.RegistrationNumber ===
            newProd.manufacturer.RegistrationNumber
        ) {
          product.Amount += newProd.Amount;
          return;
        }
      }
      this.productsList.push(newProd);
    }
    //---
    removeProduct(title, amount) {
      for (const product of this.productsList) {
        if (product.title === title) {
          if (product.Amount >= amount) {
            product.Amount -= amount;
            return;
          } else {
            throw new Error("На складі недостатньо товару для відвантаження");
          }
        }
      }
      throw new Error("Товар з такою назвою не знайдено");
    }
    //---
    filterByTitle(searchProductName) {
      return this.productsList.filter((product) =>
        product.title.toLowerCase().includes(searchProductName.toLowerCase())
      );
    }
    //---
    filterByManufacturerName(searchManufacturer) {
      return this.productsList.filter((product) =>
        product.manufacturer.NameManufacturer.toLowerCase().includes(
          searchManufacturer.toLowerCase()
        )
      );
    }
    //---
    toString() {
      return `${this.productsList
        .map((product) => product.toString())
        .join("<br>")}`;
    }
  }
  //------
  // Створення компаній-виробників
  const company1 = new ManufacturerCompany("Nestle", "N001");
  const company2 = new ManufacturerCompany("Coca-Cola", "C002");

  // Створення товарів
  const product1 = new GoodsList("Вода", "л", 100, company1);
  const product2 = new GoodsList("Кола", "л", 50, company2);
  const product3 = new GoodsList("Вода", "л", 25, company1); // такий же товар — має додатись до існуючого

  // Створення бази товарів
  const warehouse = new GoodsDatabase("Склад №1");

  // Додавання товарів
  warehouse.addProduct(product1);
  warehouse.addProduct(product2);
  warehouse.addProduct(product3); // збільшить кількість "Вода" від Nestle

  // Вивід усіх товарів
  console.log("=== Усі товари на складі ===");
  console.log(warehouse.toString());

  // Відвантаження 30 літрів води
  warehouse.removeProduct("Вода", 30);

  // Спроба відвантажити занадто багато (помилка)
  try {
    warehouse.removeProduct("Кола", 100);
  } catch (error) {
    console.error("❌ " + error.message);
  }

  // Фільтрація за назвою товару
  console.log("=== Фільтрація: назва містить 'вода' ===");
  console.log(
    warehouse
      .filterByTitle("вода")
      .map((p) => p.toString())
      .join("\n")
  );

  // Фільтрація за назвою фірми
  console.log("=== Фільтрація: виробник містить 'coca' ===");
  console.log(
    warehouse
      .filterByManufacturerName("coca")
      .map((p) => p.toString())
      .join("\n")
  );
}
