// cуворий режим
"use strict";

// =================================================================

// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

if (confirm("Почати тестування?")) {
  const num1 = parseInt(prompt(`Введіть число`, `100`));
  const num2 = parseInt(prompt(`Введіть число`, `-50`));
  const num3 = parseInt(prompt(`Введіть число`, `500`));

  function getCalculationOf3(num1, num2, num3) {
    let evenNumber = 0,
      positiveNumber = 0,
      numberOver100 = 0;

    if (num1 % 2 === 0) evenNumber++;
    if (num2 % 2 === 0) evenNumber++;
    if (num3 % 2 === 0) evenNumber++;

    if (num1 > 0) positiveNumber++;
    if (num2 > 0) positiveNumber++;
    if (num3 > 0) positiveNumber++;

    if (num1 > 100) numberOver100++;
    if (num2 > 100) numberOver100++;
    if (num3 > 100) numberOver100++;

    return { evenNumber, positiveNumber, numberOver100 };
  }

  const result = getCalculationOf3(num1, num2, num3); 

  document.write(
    `<div class="task__subtitle task__subtitle--green">Числа: ${num1}, ${num2}, ${num3}. З них:</div>`
  );
  document.write(
    `<div class="task__subtitle task__subtitle--green">Кількість парних чисел: ${result.evenNumber};<br> 
    Кількість додатних чисел: ${result.positiveNumber};<br> 
    Кількість чисел більших за 100: ${result.numberOver100}</div>`
  );

  /* function getEvenNumbers(num1, num2, num3) {
    let evenNumber = 0;
    if (num1 % 2 === 0) evenNumber++;
    if (num2 % 2 === 0) evenNumber++;
    if (num3 % 2 === 0) evenNumber++;
    return evenNumber;
  }
  function getPositiveNumbers(num1, num2, num3) {
    let positiveNumber = 0;
    if (num1 > 0) positiveNumber++;
    if (num2 > 0) positiveNumber++;
    if (num3 > 0) positiveNumber++;
    return positiveNumber;
  }
  function getNumsOver100(num1, num2, num3) {
    let numberOver100 = 0;
    if (num1 > 100) numberOver100++;
    if (num2 > 100) numberOver100++;
    if (num3 > 100) numberOver100++;
    return numberOver100;
  }
  function getCalculationOf3(num1, num2, num3) {
    let calc = "";
    const evenNum = getEvenNumbers(num1, num2, num3);
    const positiveNum = getPositiveNumbers(num1, num2, num3);
    const numOver100 = getNumsOver100(num1, num2, num3);

    calc += `кількість парних чисел: ${evenNum}<br>`;
    calc += `кількість додатних чисел: ${positiveNum}<br>`;
    calc += `кількість чисел більших за 100: ${numOver100}`;

    return calc;
  }
  const num1 = parseInt(prompt(`Введіть число`, `100`));
  const num2 = parseInt(prompt(`Введіть число`, `-50`));
  const num3 = parseInt(prompt(`Введіть число`, `500`));

  let result = getCalculationOf3(num1, num2, num3);
  document.write(
    `<div class="task__subtitle task__subtitle--green">Числа: ${num1}, ${num2}, ${num3}. З них:</div>`
  );
  document.write(
    `<div class="task__subtitle task__subtitle--green">${result}</div>`
  );
  */
}

// =================================================================
