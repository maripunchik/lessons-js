// cуворий режим
"use strict";

// =================================================================

// Розробити клас MultChecker для перевірки таблиці множення
// ----Поля ----- Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// ---------------- Кількість правильних відповідей
// ---------------- Кількість неправильних відповідей

// ----методи ----- Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// ---------------- Перевірка правильності вказаної відповіді
// ---------------- render - виведення інформації про тестування на екран

if (confirm("Почати тестування?")) {
  class MultChecker {
    constructor(baseNumber) {
      this.baseNumber = baseNumber;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
    }
    // -- Метод: генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
    generateExample() {
      return Math.floor(Math.random() * 10) + 1;
    }

    // -- Метод: перевірка правильності вказаної відповіді
    checkAnswer(secondNumber, userAnswer) {
      const correct = this.baseNumber * secondNumber;
      if (userAnswer === correct) {
        alert(`Правильна відповідь!`);
        this.correctAnswers++;
      } else {
        alert(`Неправильна відповідь! Правильна - ${correct}`);
        this.incorrectAnswers++;
      }
    }

    // -- Метод: render - виведення інформації про тестування на екран
    render() {
      alert(
        `Результати тестування:\n` +
          `✅ Правильних відповідей: ${this.correctAnswers}\n` +
          `❌ Неравильних відповідей: ${this.incorrectAnswers}`
      );
    }
  }

  const checker = new MultChecker(5);
  const totalQuestions = 3;

  for (let i = 0; i < totalQuestions; i++) {
    const second = checker.generateExample();
    let userAnswer = parseInt(
      prompt(`Скільки буде ${checker.baseNumber}*${second}?`)
    );

    if (!isNaN(userAnswer)) {
      checker.checkAnswer(second, userAnswer);
    } else {
      alert(`Це не число! Введіть правильно число`);
    }
  }
  checker.render();
}
