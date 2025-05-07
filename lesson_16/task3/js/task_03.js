// cуворий режим
"use strict";

// =================================================================

// Об’єкт “Фірма” (використати члени-класи)

// Поля----------- назва фірми;
// --------------- дата заснування (рік, місяць);

// --------------- послуги (назва послуги, вартість, термін виконання);

// --------------- адреси філіалів (країна, місто, вулиця, номер будинку);

// Методи---------- визначення кількості років існування фірми;
// ---------------- виведення всіх філіалів фірми у вказаному місті;
// ---------------- виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

if (confirm("Почати всі тестування?")) {
  //----- функція для перевірки коректності введеного числа
  function checkNaturalNumber(valueNum, message) {
    if (valueNum <= 0 || isNaN(valueNum) || typeof valueNum !== "number")
      throw new Error(message);
  }
  // ----- значення поточного року
  const currentYear = new Date().getFullYear();
  //-----
  class Company {
    #name;
    #foundingDate;
    #services;
    #branchAddresses;
    constructor(name, foundingDate, services = [], branchAddresses = []) {
      this.Name = name;
      this.FoundingDate = foundingDate;
      this.Services = services;
      this.BranchAddresses = branchAddresses;
    }
    //------Геттер і Сеттер для Name
    get Name() {
      return this.#name;
    }
    set Name(newName) {
      if (typeof newName === "string") {
        this.#name = newName;
      } else {
        throw new Error("Введена некоректна назва Фірми");
      }
    }
    //------Геттер і Сеттер для FoundingDate
    get FoundingDate() {
      return this.#foundingDate;
    }
    set FoundingDate(newFoundingDate) {
      let { year, month } = newFoundingDate;

      if (typeof year !== "number" || year < 1900 || year > currentYear) {
        throw new Error(
          `Введено некоректний рік заснування. Рік має бути між 1900 і ${currentYear}.`
        );
      }

      if (typeof month !== "number" || month < 1 || month > 12) {
        throw new Error(
          "Введено некоректний місяць заснування. Місяць має бути між 1 і 12."
        );
      }
      this.#foundingDate = newFoundingDate;
    }

    //----Геттер і Сеттер для Services
    get Services() {
      return this.#services;
    }
    set Services(newServices) {
      if (!Array.isArray(newServices)) {
        throw new Error("Services має бути масивом");
      }
      this.#services = newServices;
    }
    //------Геттер і Сеттер для BranchAddresses
    get BranchAddresses() {
      return this.#branchAddresses;
    }
    set BranchAddresses(newAddresses) {
      if (!Array.isArray(newAddresses)) {
        throw new Error("BranchAddresses має бути масивом");
      }
      this.#branchAddresses = newAddresses;
    }
    //-----визначення кількості років існування фірми;
    getCompanyAge() {
      const presentDate = {
        month: 4,
        year: currentYear,
      };
      let companyYears = presentDate.year - this.#foundingDate.year;
      if (presentDate.month < this.#foundingDate.month) companyYears--;
      return companyYears;
    }
    //------виведення всіх філіалів фірми у вказаному місті;
    printBranchesInCity(cityName) {
      document.writeln(`Філіали у місті ${cityName}:`);
      this.BranchAddresses.filter(
        (branch) => branch.City.toLowerCase() === cityName.toLowerCase()
      ).forEach((branch) =>
        document.writeln(
          `<div class="task__subtitle task__subtitle task__subtitle--green">${branch}</div>`
        )
      );
    }
    //------виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
    printServicesByPriceAndDeadline(maxPrice, maxDays) {
      document.writeln(
        `Послуги до ${maxPrice} грн і до ${maxDays}днів виконання:`
      );
      this.Services.filter(
        (service) => service.Price <= maxPrice && service.Deadline <= maxDays
      ).forEach((service) =>
        document.writeln(
          `<div class="task__subtitle task__subtitle task__subtitle--green">${service}</div>`
        )
      );
    }
    //----
    toString() {
      return `${this.Name}. Дата заснування - ${String(
        this.#foundingDate.month
      ).padStart(2, "0")}.${this.#foundingDate.year}`;
    }
  }
  //-----Клас для Послуг
  class Service {
    #name;
    #price;
    #deadline;
    constructor(name = "", price, deadline) {
      this.Name = name;
      this.Price = price;
      this.Deadline = deadline;
    }
    //----
    get Name() {
      return this.#name;
    }
    set Name(newName) {
      if (typeof newName === "string") {
        this.#name = newName;
      } else {
        throw new Error("Введена некоректна назва послуги");
      }
    }
    //-----
    get Price() {
      return this.#price;
    }
    set Price(newPrice) {
      checkNaturalNumber(newPrice, "Введено некоректну вартість послуги");
      this.#price = newPrice;
    }
    //----
    get Deadline() {
      return this.#deadline;
    }
    set Deadline(newDeadline) {
      checkNaturalNumber(
        newDeadline,
        "Введено некоректний термін виконання послуги"
      );
      this.#deadline = newDeadline;
    }
    //-----
    toString() {
      return `Послуга - ${this.Name}; Ціна - ${this.Price}; Термін виконання - ${this.Deadline}діб`;
    }
  }
  //------Клас для Адрес філіалів
  class BranchAddress {
    #country;
    #city;
    #street;
    #houseNumber;
    constructor(country, city, street, houseNumber) {
      this.Country = country;
      this.City = city;
      this.Street = street;
      this.HouseNumber = houseNumber;
    }
    // -----
    get Country() {
      return this.#country;
    }
    set Country(newCountry) {
      if (typeof newCountry === "string") {
        this.#country = newCountry;
      } else {
        throw new Error("Некоректно введено назву країни");
      }
    }
    //----
    get City() {
      return this.#city;
    }
    set City(newCity) {
      if (typeof newCity === "string") {
        this.#city = newCity;
      } else {
        throw new Error("Некоректно введено назву міста");
      }
    }
    // ----
    get Street() {
      return this.#street;
    }
    set Street(newStreet) {
      if (typeof newStreet === "string") {
        this.#street = newStreet;
      } else {
        throw new Error("Некоректно введено назву вулиці");
      }
    }
    //----
    get HouseNumber() {
      return this.#houseNumber;
    }
    set HouseNumber(newHouseNumber) {
      checkNaturalNumber(newHouseNumber, "Некоректно введено номер будинку");
      this.#houseNumber = newHouseNumber;
    }
    //----
    toString() {
      return `Адреса філіалу: ${this.Country}, ${this.City}, ${this.Street}, ${this.HouseNumber}`;
    }
  }

  const newWaveServices = [
    new Service("Розробка веб-сайтів", 5000, 30),
    new Service("SEO оптимізація", 1500, 7),
    new Service("Розробка мобільних додатків", 10000, 90),
  ];
  const newWaveBranchAddresses = [
    new BranchAddress("Україна", "Київ", "Вулиця 1", 10),
    new BranchAddress("Польща", "Варшава", "Вулиця 2", 5),
  ];

  //----Створення об'єкта Company
  try {
    const company = new Company(
      "NewWave",
      { year: 2000, month: 7 },
      newWaveServices,
      newWaveBranchAddresses
    );

    // Виведення інформації про компанію, послуги і філіали
    //  console.log(company.toString()); // NewWave. Дата заснування - 07.2000
    document.writeln(`Назва фірми(дата заснування):`);
    document.writeln(
      `<div class="task__subtitle task__subtitle task__subtitle--green">${company}р.</div>`
    );

    document.writeln(`Послуги фірми:`);
    company.Services.forEach((service) => {
      // console.log(service.toString());
      document.writeln(
        `<div class="task__subtitle task__subtitle task__subtitle--green">${service}</div>`
      );
    });

    document.writeln(`Адреси філіалів:`);
    company.BranchAddresses.forEach((address) => {
      // console.log(address.toString());
      document.writeln(
        `<div class="task__subtitle task__subtitle task__subtitle--green">Адреси філіалів фірми у вказаному місті: ${address}</div>`
      );
    });

    // Використання методів
    document.writeln(`Вік компанії:`);
    document.writeln(
      `<div class="task__subtitle task__subtitle task__subtitle--green">${company.getCompanyAge()}р.</div>`
    );
    company.printBranchesInCity("Київ");
    company.printServicesByPriceAndDeadline(6000, 30);
  } catch (error) {
    document.writeln(`<div class="task__subtitle">${error.message}</div>`);
  }
}
