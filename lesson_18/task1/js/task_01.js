// cуворий режим
"use strict";

// =================================================================

// Розробити калькулятор

class Calculator {
  static operators = ["+", "-", "*", "/"];

  static calculate(operator, num1, num2) {
    if (!this.operators.includes(operator)) {
      throw new Error("Невідома операція");
    }

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) throw new Error("На нуль ділити не можна");
        return num1 / num2;
      default:
        throw new Error("Невідома операція");
    }
  }
}
//---
function processCalculation(operator) {
  const num1 = parseFloat(document.getElementById("first").value);
  const num2 = parseFloat(document.getElementById("second").value);

  try {
    if (!isNaN(num1) && !isNaN(num2)) {
      const result = Calculator.calculate(operator, num1, num2);
      document.getElementById("result").innerText = result;
    } else {
      throw new Error("Будь ласка, введіть коректні числа");
    }
  } catch (error) {
    document.getElementById("result").innerText = error.message;
  }
}

// ==========================================================

//  function getSum() {
//    const num1 = parseInt(document.getElementById("first").value); //!!! parseInt
//    const num2 = parseInt(document.getElementById("second").value);
// 	const sum = num1+num2
// 	document.getElementById('result').innerText = sum
//  }
//  //---
//  window.onload = function() { //!! виконає функцію, коли сторінка буде повністю завантажена
// 	document.querySelector('button').onclick = getSum
//  }

// =======================================================
