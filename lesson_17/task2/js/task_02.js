// cуворий режим
"use strict";

// =================================================================

// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

if (confirm("Почати тестування?")) {
  class CompanyCar {
    static #instance;
	 static get instance(){
		return this.#instance
	 }
    constructor(driver, carModel, licensePlate) {
      if (CompanyCar.instance) return CompanyCar.instance;
      this.driver = driver;
      this.carModel = carModel;
      this.licensePlate = licensePlate;

      CompanyCar.#instance = this;
    }
    toString() {
      return `Водій:${this.driver}, Марка:${this.carModel}, Номер:${this.licensePlate}`;
    }
  }
  const car1 = new CompanyCar("Ivan", "BMW", "AA1234BB");
  console.log(car1); // CompanyCar {driver: "Ivan", carModel: "BMW", licensePlate: "AA1234BB"}
  const car2 = new CompanyCar("Olga", "Peugeot", "AA4321BB");
  console.log(car2); // CompanyCar {driver: "Ivan", carModel: "BMW", licensePlate: "AA1234BB"}
}

// ============================================
