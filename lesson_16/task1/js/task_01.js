// cуворий режим
"use strict";

// =================================================================

// Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

// Поля----------- назва дня;
// --------------- назва місяця;
// --------------- рік;

// Методи---------- збільшення дати на певну кількість днів, місяців чи років
// ---------------- зменшення дати на певну кількість днів, місяців чи років

if (confirm("Почати тестування?")) {
	class TDate {
    #day;
    #month;
    #year;
    // -------
    constructor(day, month, year) {
      this.Year = year;
      this.Month = month;
      this.Day = day;
    }

    // -------  Геттер і сеттер для Day -------
    get Day() {
      return this.#day;
    }

    set Day(newDay) {
      const maxDay = this.getDaysInMonth(this.Month, this.Year);
      if (newDay < 1 || newDay > maxDay) {
        throw new Error(`День має бути від 1 до ${maxDay}!`);
      }
      this.#day = newDay;
    }

    // -------  Геттер і сеттер для Month -------
    get Month() {
      return this.#month;
    }

    set Month(newMonth) {
      if (newMonth < 1 || newMonth > 12) {
        throw new Error("Місяць має бути від 1 до 12!");
      }
      this.#month = newMonth;
    }

    // -------  Геттер і сеттер для Year -------
    get Year() {
      return this.#year;
    }

    set Year(newYear) {
      if (newYear < 1) {
        throw new Error("Рік має бути більшим за 0!");
      }
      this.#year = newYear;
    }

    // ------ перевірка, чи високосний рік
    isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // ------ метод додавання
    addMonths(months) {
      let newMonth = this.Month + months;
      let newYear = this.Year;

      while (newMonth > 12) {
        newMonth -= 12;
        newYear++;
      }

      while (newMonth < 1) {
        newMonth += 12;
        newYear--;
      }

      // Якщо після зміни місяця поточний день більше, ніж максимальний день у новому місяці
      const daysInNewMonth = this.getDaysInMonth(newMonth, newYear);
      if (this.Day > daysInNewMonth) {
        this.Day = daysInNewMonth; // коригуємо день на максимальний для цього місяця
      }

      this.Month = newMonth;
      this.Year = newYear;
    }
    // ------ кількість днів у місяці
    getDaysInMonth(month, year) {
      const daysInMonthArray = [
        31, // Січень
        this.isLeapYear(year) ? 29 : 28, // Лютий
        31, // Березень
        30, // Квітень
        31, // Травень
        30, // Червень
        31, // Липень
        31, // Серпень
        30, // Вересень
        31, // Жовтень
        30, // Листопад
        31, // Грудень
      ];
      return daysInMonthArray[month - 1];
    }

    // ------------
    toString() {
      return `${this.Day}.${this.Month}.${this.Year}`;
    }
  }

// -------------------------------------
const userDate = new TDate(26, 4, 2025);
console.log(`Початкова дата: ${userDate}`);

userDate.addMonths(10); // Додати 10 місяців
console.log(`Після додавання 10 місяців: ${userDate}`);

userDate.addMonths(-10); // Відняти 10 місяців
console.log(`Після віднімання 10 місяців: ${userDate}`);

userDate.Day = 15; // Змінюємо день на 15
console.log(`Змінений день: ${userDate}`);

userDate.Month = 2; // Змінюємо місяць на лютий
console.log(`Змінений місяць: ${userDate}`);

userDate.Year = 2024; // Змінюємо рік на 2024
console.log(`Змінений рік: ${userDate}`);
}

// =======================================================


