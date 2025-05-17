// cуворий режим
"use strict";

// =================================================================

// Дано два класи MultiChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу History, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,operation:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,operation:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.

if (confirm("Почати тестування?")) {
  function checkValue(value) {
    const message = "Некоректне значення. Повинно бути скінченним числом";
    if (typeof value !== "number" || isNaN(value) || !isFinite(value))
      throw new Error(message);
  }
  // ---
  function getRandomNum(min = 1, max = 9) {
    checkValue(min);
    checkValue(max);
    if (min > max) [min, max] = [max, min];
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  //---
  function checkUserAnswer(question) {
    const input = prompt(question);
    if (input === null) throw new Error("Ввід скасовано користувачем");
    const userAnswer = parseInt(input, 10);
    checkValue(userAnswer);
    return userAnswer;
  }
  //---
  class TestData {
    constructor({ firstNum, secondNum, operation, userAnswer, correctAnswer }) {
      this.firstNum = firstNum;
      this.secondNum = secondNum;
      this.operation = operation;
      this.userAnswer = userAnswer;
      this.correctAnswer = correctAnswer;
    }
    get isCorrect() {
      return this.userAnswer === this.correctAnswer;
    }
    toString() {
      return `${this.firstNum} ${this.operation} ${this.secondNum} = ${this.userAnswer} (Правильно: ${this.correctAnswer}) `;
    }
  }
  //---
  class History {
    constructor() {
      this.tests = [];
    }
    getResult(TestData) {
      this.tests.push(TestData);
      return this.tests;
    }
    showResult() {
      let correctCount = 0;
      let result = "";
      this.tests.forEach((test, index) => {
        if (test.isCorrect) correctCount++;
        result += `Приклад № ${index + 1}:<br>${test.toString()}<br>`;
      });
      result += `З ${this.tests.length} відповідей, правильних: ${correctCount}`;
      document.writeln(result);
    }
  }
  //---
  class MultiChecker {
    constructor() {
      this.firstNum = getRandomNum();
      this.secondNum = getRandomNum();
      this.operation = "*";
    }
    ask() {
      const userAnswer = checkUserAnswer(
        `${this.firstNum}*${this.secondNum}=?`
      );
      return new TestData({
        firstNum: this.firstNum,
        secondNum: this.secondNum,
        operation: this.operation,
        userAnswer,
        correctAnswer: this.firstNum * this.secondNum,
      });
    }
  }
  // ---
  class AddChecker {
    constructor() {
      this.firstNum = getRandomNum();
      this.secondNum = getRandomNum();
      this.operation = "+";
    }
    ask() {
      const userAnswer = checkUserAnswer(
        `${this.firstNum}+${this.secondNum}=?`
      );
      return new TestData({
        firstNum: this.firstNum,
        secondNum: this.secondNum,
        operation: this.operation,
        userAnswer,
        correctAnswer: this.firstNum + this.secondNum,
      });
    }
  }
  // ---
  class TestManager {
    static #instance;

    static get instance() {
      return this.#instance;
    }

    constructor() {
      if (TestManager.#instance) return TestManager.#instance;
      TestManager.#instance = this;

      this.history = new History();
      this.totalQuestions = 5;
      this.remaining = this.totalQuestions;
    }

    start() {
      const interval = setInterval(() => {
        try {
          const checker =
            Math.random() > 0.5 ? new AddChecker() : new MultiChecker();
          const test = checker.ask();
          this.history.getResult(test);
        } catch (error) {
          alert(error.message);
			 clearInterval(interval)
			 this.history.showResult()
        }

        this.remaining--;
        if (this.remaining === 0) {
          clearInterval(interval);
          this.history.showResult();
        }
      }, 2000);
    }
  }
  //---
  const manager = new TestManager();
  manager.start();
}
