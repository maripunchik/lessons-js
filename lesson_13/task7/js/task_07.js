// cуворий режим
"use strict";

// =================================================================

// Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

if (confirm("Почати тестування?")) {
	
  function getRandomExamples(minValue = 1, maxValue = 9) {
    let number1 =
      minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
    let number2 =
      minValue + Math.floor(Math.random() * (maxValue - minValue + 1));

    const userInput = prompt(`Обчисліть суму двох чисел: ${number1}+${number2}`)
   

	   if (userInput === null) {
       alert("Тест зупинено користувачем.");
       return;
     }

	  const userAnswer = parseInt(userInput)

    let sum = number1 + number2;

    if (userAnswer === sum) {
      alert(`✅  Так! Це правильна відповідь!`);
    } else {
      alert(`❌ Це неправильна відповідь!Правильна відповідь: ${sum}`);
    }
    setTimeout(getRandomExamples, 10000);
  }
  getRandomExamples();
}
