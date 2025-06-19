// cуворий режим
"use strict";

// =================================================================

// Простий калькулятор для двох чисеел. Кнопки для різних операцій:додавання, віднімання,
// множення, ділення
//----------------------------------------------------------------
// варіант 1 . ДУЖЕ ПОГАНИЙ!!!!
// function doOperation(event) {
//   const target = event.target;
//   if (target.tagName === "BUTTON") {
//     // * перевірка, щоб click був точно на кнопці
//     const num1 = parseInt(document.getElementById("firstNum").value);
//     const num2 = parseInt(document.getElementById("secondNum").value);
// //!------------Так робити не можна!
//     const res = eval(`${num1}${target.innerText}${num2}`);
//     document.getElementById("res").innerText = res;
//   }
// }

// document.querySelector("#operationsContainer").onclick = doOperation;

//!eval()—це потужна, але потенційно небезпечна функція в JavaScript, яка виконує код, переданий їй у вигляді рядка.

// eval(`${num1}${target.innerText}${num2}`);

// Якщо, наприклад, num1 = 5, target.innerText = '+', num2 = 3, то eval() розглядає рядок "5+3" і виконує його, повертаючи 8.
// Однак важливо бути обережним із використанням eval(), оскільки:
//! - Вона може виконати шкідливий код, якщо отримує небезпечний вхід від користувача.
// - Вона уповільнює роботу програми, оскільки змушує JavaScript-движок інтерпретувати код на льоту.
// - У більшості випадків можна знайти безпечніші альтернативи. Наприклад, тут краще використовувати switch або об'єкт функцій для виконання операцій.
//----------------------------------------------------------------
// варіант 2.

// function doOperation(event) {
//   const target = event.target;
//   if (target.tagName === "BUTTON") {
//     // * перевірка, щоб click був точно на кнопці
//     const num1 = parseInt(document.getElementById("firstNum").value);
//     const num2 = parseInt(document.getElementById("secondNum").value);
//     let res;

//     switch (target.innerText.trim()) {
//       case "+":
//         res = num1 + num2;
//         break;
//       case "-":
//         res = num1 - num2;
//         break;
//       case "*":
//         res = num1 * num2;
//         break;
//       case "/":
//         if (num2 === 0) throw new Error("На нуль ділити не можна");
//         res = num1 / num2;
//         break;
//       default:
//         throw new Error("Невідома операція");
//     }
//     document.getElementById("res").innerText = res;
//   }
// }
// document.querySelector("#operationsContainer").onclick = doOperation;

//----------------------------------------------------------------
// варіант 3.

function doOperation(operation) { // через використання функції call-back
  const target = event.target;
  if (target.tagName === "BUTTON") {
    // * перевірка, щоб click був точно на кнопці
    const num1 = parseInt(document.getElementById("firstNum").value);
    const num2 = parseInt(document.getElementById("secondNum").value);
    let res = operation(num1, num2); // передаємо параметри
    document.getElementById("res").innerText = res;
  }
}
//---
document.getElementById("add").onclick = () =>
  doOperation((num1, num2) => num1 + num2);
document.getElementById("sub").onclick = () =>
  doOperation((num1, num2) => num1 - num2);

document.getElementById("mult").onclick = () =>
  doOperation((num1, num2) => num1 * num2);

document.getElementById("div").onclick = () =>
  doOperation((num1, num2) => num1 / num2);

document.getElementById("reminder").onclick = () =>
  doOperation((num1, num2) => num1 % num2);
//---
document.querySelector("#operationsContainer").onclick = doOperation;
