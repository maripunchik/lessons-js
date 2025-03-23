// cуворий режим
"use strict"

// ==========================================================

//  Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

 if (confirm("Почати тестування?")) {
   const lengthArr = parseInt(prompt("Введіть довжину масиву"));

   function getRandomNumbersArray(length, min, max) {
     let winningAmount = [];
     for (let i = 0; i < length; i++) {
       let randomNumber = min + Math.floor(Math.random() * (max - min + 1));
       winningAmount.push(randomNumber);
     }
     return winningAmount;
   }

   const winningAmount = getRandomNumbersArray(lengthArr, -500, 500);

   let sumWin = 0;
   let winNumber;

   do {
     let userInput = prompt(
       `Введіть число від 1 до ${lengthArr} (або натисніть "Скасувати" для виходу)`
     );

     if (userInput === null || userInput === "") {
       break;
     }

     winNumber = parseInt(userInput);

     if (winNumber >= 1 && winNumber <= lengthArr) {
       sumWin += winningAmount[winNumber - 1];
     } else {
       alert("Невірне число. Спробуйте ще раз.");
     }
   } while (true);

 document.writeln(
   `<div class="task__subtitle task__subtitle--green">Масив - <span>${winningAmount}</span></div>`
 );
   document.writeln(
     `<div class="task__subtitle task__subtitle--green">Сума виграшу: ${sumWin}</div>`);
 }
