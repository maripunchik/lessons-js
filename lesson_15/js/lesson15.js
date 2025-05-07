// cуворий режим
"use strict";

//======================================================

// const user = {
//   //-----властивості
//   name: "Ivan",
//   age: 21,
//   //-----методи
//   sayHi: function () {
//     document.writeln(`Hello from ${this.name}! I'm ${this.age} years old!`);
//   },
//   sayBye() {
//     document.writeln("Bye!");
//   },
//   greetting() {
//     this.sayHi();
//     this.sayBye();
//   },
//   getLettersNumInName(letter) {
//     letter = letter.toLowerCase();
//     const lowerName = this.name.toLowerCase();
//     let num = 0;
//     for (const c of lowerName) {
//       if (c === letter) num++;
//     }
//     return num;
//   },
// };
// // user.sayBye()
// // user.sayHi();
// // user.greetting();
// const res = user.getLettersNumInName("a");
// document.writeln(res);

//======================================================

// Описати об'єкт час доби. Визначити чи вечір, чи ранок. Дії збільшення кількості годин на 1 і збільшення кількості хвилин на 1

// const dayHour = {
//   //---- властивості(характеристика об'єкта)
//   hours: 11,
//   minutes: 59,
//   //-----методи (дії)
//   // Визначити чи вечір
//   isEvening(startEvening = 16) {
//     return this.hours > startEvening;
//   },
//   // Визначити чи ранок.
//   isMorning(endMorning = 11) {
//     return this.hours <= endMorning;
//   },
//   // Дії збільшення кількості годин на 1
//   increaseHours(hoursNum = 1) {
//     this.hours = (this.hours + hoursNum) % 24;
//   },
//   // збільшення кількості хвилин на 1
//   increaseMinutes(minutesNum = 1) {
//     this.minutes += minutesNum;
//     if (this.minutes >= 60) {
//       const extraHours = Math.floor(this.minutes / 60);
//       this.minutes %= 60;
//       this.increaseHours(extraHours);
//     }
//   },
//   // ----
//   displayData() {
//     document.writeln(`${this.hours}: ${this.minutes}<br>`);
//   },
// };
// // -------
// dayHour.displayData(); //11: 59

// dayHour.increaseHours(5);
// dayHour.displayData(); //16: 59

// dayHour.increaseMinutes(65);
// dayHour.displayData(); //  18: 4

//======================================================

// Товари (назва, ціна, кількість). Методи: дати знижку на товар, збільшити кількість товару

// const product = {
//   // ---- властивості
//   title: "Tea",
//   price: 12,
//   count: 21,
//   // ---- методи
//   setDiscount(discountPercentageValue) {
//     this.price *= 1 - discountPercentageValue / 100;
//   },
//   increaseCount(prodNum) {
//     this.count += prodNum;
//   },
//   toString(){
//     // ця функція викликається автоматично
//     console.log(`11111`); // викликалось, поки не було  valueOf
//     return `${this.title}: ${this.price}`;
//   },
//   valueOf () {
// return this.price
//   }
// };
// //-----------
// product.increaseCount(10)
// console.log(product)
// // const res = 'У мене на складі є такий товар: ' + product
// // document.writeln(product) // виведе тип даних [object Object] тому використувуємо toString
// // document.writeln(res);
// document.writeln(product*2); // NaN : js намагається використати результат, який дає toString(рядок)

//======================================================

// порядок написання немає значення
//  toString() - перетворення в рядок
// valueOf() - перетворення в число

//            ======================================================
// ----- БЛОКУВАННЯ ОБ'ЄКТІВ(константні об'єкти) Object.freeze(об'єкт, що потрібно зафіксувати) ---------
//            ======================================================
// не змінено/ не додано / не видалено
// не можна змінювати значення властивостей,
// не можна додавати нові властивості,
// Не можна видаляти властивості.
// "заморожує об'єкт", помилку не видає, ніяк не повідомляє, і ніяких дій не виконує

// const obj = {
// 	a:11,
// 	b:22,
// }
// Object.freeze(obj)

// obj.a = 100
// console.log(obj) // при використанні "use strict"; видасть помилку: lesson15.js:135 Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>'

//            ======================================================
// ----------- Object.keys(об'єкт, для якого потрібно знайти список його властивостей(назви)) ---------
//            ======================================================

//            ======================================================
// ----------- Object.values(об'єкт, для якого потрібно знайти список значень властивостей) ---------
//            ======================================================

//            ======================================================
// ----------- ФУНКЦІЯ-ФАБРИКА - створює об'єкт грунтуючись на початкових значеннях полів ---------
//            ======================================================

//            ======================================================
// ----------- ФУНКЦІЯ-КОНСТРУКТОР (this, new) нічого return не потрібно, це призведе до помилки!!! ---------
//            ======================================================
// function test(initA, initB) {
//   const obj = {};
//   obj.a = initA;
//   obj.b = initB;
//   return obj;
// }
// const obj1 = test(11, 22);
// console.log(obj1);
//---- те саме, але вже не потрібно писати   const obj = {}; та  return obj;, це робиться автоматично (ПИШЕМО new)
// ---- ці функції-конструктори(назву) пишемо з великої літери
// function Test(initA, initB) {
//   //   this = {}; // неявно створюється новий об’єкт
//   this.a = initA; // додаємо властивості до цього об’єкта
//   this.b = initB; // додаємо властивості до цього об’єкта
//   this.show = function () {
//     document.writeln(`a =${this.a}, b=${this.b}`);
//   };
//   //   return this; // неявно повертається цей об’єкт
// }
// const obj1 = new Test(11, 22); // (ПИШЕМО new) без new працювати не буде
// const obj2 = new Test(11, 22);
// console.log(obj1);
// console.log(obj2);

// ==================================================

// const obj = {
// 	a:11,
// 	b:22,
// }
// document.writeln(obj.c) //  undefined
// ==================================================
// -------- prototype - резервна копія ------------
// ==================================================

// function Test(initA, initB) {
//   this.a = initA;
//   this.b = initB;
// }
// Test.prototype.c = 99
// Test.prototype.a = 77;
// // -------
// const obj = new Test(11, 22);
// // document.writeln(obj.c);  //  undefined (без prototype)
// document.writeln(obj.c); // 99
// document.writeln(obj.a); // 11 - спочатку шукає в себе, якщо немає йде в prototype
// console.log(obj)
// Test {a: 11, b: 22}
// a: 11
// b: 22
// [[Prototype]]: Object
// c: 99 // знаходиться в Prototype

// ==================================================
// ------------------ КЛАСИ -----------------------
// ==================================================

// Розробити клас «Передбачувач». Дозволяє кожні вказані кількість секунд отримувати передбачення
// Властивості :
//      масив можливоих передбачень,
//      інтервал між передбаченнями
// Методи:
//      вибір випадкового передбачення
//      метод run, що ініціює запуск таймера і генерування передбачень

// class Predictor {
//   constructor(initialPredictionsList, initialInterval) {
//     this.predictionList = initialPredictionsList;
//     this.interval = initialInterval;
//   }
//   getRandomPrediction() {
//     const randIndex = Math.floor(Math.random() * this.predictionList.length);
//     return this.predictionList[randIndex];
//   }
//   run() {
//     setInterval(() => {
//       document.writeln(this.getRandomPrediction()); // кожні 2 секунди з'являється передбачення, бо стрілкова функція пам'ятає ДЕ вона була описана
//     }, this.interval);
//   }
//   //   run() {
//   //     setInterval(function () { // this бере із зовнішнього оточення
//   //       document.writeln(this.getRandomPrediction()); // Uncaught TypeError: this.getRandomPrediction is not a function
//   //     }, this.interval);
//   //   }
// }
// //-------------
// const initialPredictionsList = [
//   "PEACE",
//   "LOVE",
//   "MONEY",
//   "BIG MONEY",
//   "BEER",
//   "Шовдарь",
//   "Пікниця",
// ];
// const predictor1 = new Predictor(initialPredictionsList, 2000);
// predictor1.run();
// // document.writeln(predictor1.getRandomPrediction())
// console.log(predictor1);

// let superPredictor = new Predictor(initialPredictionsList, 2000);
// superPredictor.run();

// ===================================================================
