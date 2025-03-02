// cуворий режим
"use strict"

// ==========================================================

// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).
 if (confirm(`Почати тестування`)) {
   let winCombination = "";
   let winResult = 0;

   for (let index = 0; index < 3; index++) {
     let randImage = 1 + Math.floor(Math.random() * 4);
     winCombination += randImage;
	  	let url =''
     switch (randImage) {
       case 1:
         url = './img/01.png';
         break;
       case 2:
         url = './img/02.png';
         break;
       case 3:
         url = './img/03.png';
         break;
       case 4:
         url = './img/04.png';
         break;
     }
     document.write(
       `<img class="task__img" src="${url}" style="display: inline-flex" width="80" height="80">`
     );
   }
   switch (winCombination) {
     case "111":
       winResult = "100";
       break;
     case "222":
       winResult = "200";
       break;
     case "333":
       winResult = "500";
       break;
     case "444":
       winResult = "1000";
   }
   document.write(
     `<div class="task__subtitle task__subtitle--green">Ваш виграш ${winResult} грн.</div>`
   );
 }
