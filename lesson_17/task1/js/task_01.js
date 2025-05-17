// cуворий режим
"use strict";

// =================================================================

// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

if (confirm("Почати тестування?")) {
  class PerformingOperationsOnArrays {
    static countPositiveNumbers(array) {
      return array.reduce((count, value) => (value > 0 ? count + 1 : count), 0);
    }
    static countNegativeNumbers(array) {
      return array.reduce((count, value) => (value < 0 ? count + 1 : count), 0);
    }
    static countOccurrencesOfANumber(array, inputNumber = 5) {
      return array.reduce(
        (count, value) => (value === inputNumber ? count + 1 : count),
        0
      );
    }
    static getRandomNumsArr(length, min = 1, max = 100) {
      const arr = [];
      for (let i = 0; i < length; i++) {
        const randomNum = min + Math.floor(Math.random() * (max - min + 1));
        arr.push(randomNum);
      }
      return arr;
    }
  }
  //---

  try {
    let userNum = parseInt(
      prompt(`Введіть кількість елементів в масиві(до 10):`)
    );
    if (userNum > 10) {
      userNum = 10;
      alert(
        "Максимальна кількість елементів — 10. Масив буде створено з 10 елементів."
      );
    }
    if (isNaN(userNum) || userNum <= 0) {
      throw new Error("Введено некоректну кількість елементів");
    }
    const min = -100;
    const max = 100;

    const array = PerformingOperationsOnArrays.getRandomNumsArr(
      userNum,
      min,
      max
    );

    const userInput = prompt("Введіть число для підрахунку входжень:", " ");
    if (userInput === null) {
      throw new Error("Ввід скасовано користувачем");
    }
    const inputNumber = Number(userInput);
    if (isNaN(inputNumber)) {
      throw new Error("Введено некоректне число");
    }

    document.writeln(`<p>Масив чисел: ${array.join(",")}</p>`);
    document.writeln(
      `<p>Кількість додатних чисел: ${PerformingOperationsOnArrays.countPositiveNumbers(
        array
      )}</p>`
    );
    document.writeln(
      `<p>Кількість від’ємних чисел: ${PerformingOperationsOnArrays.countNegativeNumbers(
        array
      )}</p>`
    );
    document.writeln(
      `<p>Кількість входжень деякого числа ${inputNumber}: ${PerformingOperationsOnArrays.countOccurrencesOfANumber(
        array,
        inputNumber
      )}</p>`
    );
  } catch (error) {
    alert(`Помилка: ${error.message}`);
  }
}

// =======================================================
