// cуворий режим
"use strict";

// =================================================================

//  Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

if (confirm("Почати тестування?")) {
 const pupilsNames = ['Дарина','Кристина','Іван','Богдан','Вероніка','Мирослава','Іван','Роман','Марина','Іван']
 function getNumberOfNameIvan(names) {
	let numOfNameIvan = 0
	for (let i = 0; i < names.length; i++) {
		if(names[i] === 'Іван') numOfNameIvan++
	}
	return numOfNameIvan
 }
 const countIvan = getNumberOfNameIvan(pupilsNames, 'Іван')
 document.writeln(
   `<div class="task__subtitle task__subtitle--green">${pupilsNames};<br> Кількість Іванів: ${countIvan}</div>`
 );
  }

// =================================================================
