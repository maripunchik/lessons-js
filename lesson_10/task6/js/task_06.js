// cуворий режим
"use strict";

// =================================================================

//   Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// Визначити, чи є ціна, що менше 1000

if (confirm("Почати тестування?")) {
 const userNum = parseInt(prompt("Введіть кількість елементів в масиві"));
 function getRandomPricesArr(userNum, min = 1, max = 10000) {
   const prices = [];
   for (let i = 0; i < userNum; i++) {
     const randomPrice = min + Math.floor(Math.random() * (max - min + 1));
     prices.push(randomPrice);
   }
   return prices;
 }
 const prices = getRandomPricesArr(userNum);
 if (prices.some((price) => price < 1000)) alert("Yes");
 else alert("No");
}

// =================================================================
