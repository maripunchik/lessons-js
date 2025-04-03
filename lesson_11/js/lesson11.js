// cуворий режим
"use strict";

// Дано випадкові значення виграшів - результати ігрового барабана (від -500 до 500)
// let scores = [
//   -56, -78, 252, 23, -122, 0, 122, 436, -111, 344, 21, 0, 3, -356, 342,
// ];

// Обчислити:
//  -3) Сформувати масив з виграшних (>0)
/* 		const winArr = scores.filter(el=>el>0)
		document.writeln(winArr) */
// ============================================================
//  -2) Вивести виграшні значення (>0) //коли тільки вивести, використовуємо forEach
/* 	scores.forEach(el=>{
			if(el>0) document.writeln(`${el}<br>`);
		}) */
// ============================================================
//  -1) Від виграшних значень відняти 20% (*0,8) //змінити існуючий масив, також forEach Коли потрібно змінити, звертаємось до елемента за індексом
/* 	scores.forEach((el,ind,arr) => {
      if (el > 0) arr[ind] *=0.8
		document.writeln(scores.map(score => score.toFixed(2)).join('<br>'));
    }); */
// ============================================================
//  0) Сформувати новий, перевівши їх у долари (/ курс_долара)
/* const dollarRate = 40
		const newArrDol = scores.map((el) => el/dollarRate)
		document.writeln(newArrDol); */
// ============================================================
//  1) Кінцеву виграшну суму (суму усіх елементів)
/* 	const sum = scores.reduce((prevSum, el)=>prevSum+el) //якщо влаштовує, що за початкове значення береться перший елемент-то можна його не вказувати
		document.writeln(sum); */
// ============================================================
//  2) Суму тільки виграшних значень (суму більших за 0)
/* const sum = scores.reduce(
  (prevSum, el) => (el > 0 ? prevSum + el : prevSum), //в цьому випадку(нам потрібні значення тільки більше за 0) необхідно вказати початкове значення, тому що перше значення не відповідає умові(воно від'ємне)
  0
);
document.writeln(sum); */
// ============================================================
//  3) Суму тільки програшних значень (суму менших за 0)
/* const sum = scores.reduce(
  (prevSum, el) => (el < 0 ? prevSum + el : prevSum),
  0
);
document.writeln(sum); */
// ============================================================
//  4) Визначити чи був 0 // коли наперед відомо значення використовуємо includes
/* if(scores.includes(0)) document.writeln(`Yes`)
else document.writeln(`No`); */
// ============================================================
//  5) Підрахувати кількість нулів
/* const zeroNum = scores.reduce(
  (prevZeroNum, el) => (el === 0 ? prevZeroNum + 1 : prevZeroNum),
  0
);
document.writeln(zeroNum); */
// ============================================================
//  7) Підрахувати кількість значень більших за 100
/* const numGr100 = scores.reduce(
  (prevNum100, el) => (el > 100 ? prevNum100 + 1 : prevNum100),
  0
);
document.writeln(numGr100); */
// ============================================================
//  10) Сформувати список тих, які були після першого нуля (<0) // коли наперед відомо який елемент,краще використовувати indexOf
/* const firstZeroIndex = scores.indexOf(0) //знаходимо індекс першого 0
const newArr = scores.slice(firstZeroIndex + 1) // в методі slice потрібно вказати початковий і кінцевий обмежуючий, якщо ввести тільки початковий- буде копіювати до кінця
document.writeln(newArr); */

// ============================================================
//  11) Сформувати список тих, які були після останнього нуля (<0)
/* const lastZeroIndex = scores.lastIndexOf(0); 
const newArr = scores.slice(lastZeroIndex + 1); 
document.writeln(newArr); */
// ============================================================
//  12) Видалити ті, які є меншими за 20
// --- 1 (так краще)
/* scores = scores.filter((el) => el >= 20);
document.writeln(scores); */
// --- 2 (за допомогою цикла)
/* for (let i = 0; i < scores.length;) {
	if(scores[i]<20) scores.splice(i,1)
		else i++
}
document.writeln(scores); */
// ============================================================
//  13) Видалити нулі
/* scores = scores.filter((el) => el !== 0);
document.writeln(scores); */
// ============================================================
//  14) Видалити перше нульове значення
/* scores.splice(scores.indexOf(0),1)
document.writeln(scores) */
// ============================================================
//  15) Упорядквати за зростанням
/* scores.sort((num1,num2)=> num1-num2)
document.writeln(scores); */
// ============================================================
//  16) Упорядквати за спаданням
/* scores.sort((num1, num2) => num2 - num1);
document.writeln(scores); */
// ============================================================
//  17) Упорядкувати так, щоб спочатку були від"ємні (без зміни їх слідування), потім всі інші(без зміни їх слідування)
/* scores.sort((num1, num2) => {
  let result;
  if (num1 < 0 && num2 >= 0) result = -1;
  else if (num1 >= 0 && num2 < 0) result = 1;
  else result = 0;
  return result;
});
document.writeln(scores); */
// ============================================================
//  17.1) Упорядкувати так, щоб спочатку були від"ємні (без зміни їх слідування), потім всі інші(упорядковані)
/* scores.sort((num1, num2) => {
  let result;
  if (num1 < 0 && num2 >= 0) result = -1;
  else if (num1 >= 0 && num2 < 0) result = 1;
  else result = num1 < 0 ? 0 : num1 - num2; //якщо num1<0(тоді і num2 < 0 ) тоді 0- вважаються рівноправними
  return result;
});
document.writeln(scores); */
// ============================================================
//  17.2) Упорядкувати так, щоб спочатку були від"ємні (упорядковані), потім всі інші(без зміни порядку їх слідування)
/* scores.sort((num1, num2) => {
  let result;
  if (num1 < 0 && num2 >= 0) result = -1;
  else if (num1 >= 0 && num2 < 0) result = 1;
  else result = num1 >= 0 ? 0 : num1 - num2;
  return result;
});
document.writeln(scores); */
// ============================================================
//  18) Упорядкувати так, щоб спочатку були нулі, потім від"ємні, потім додатні (між собою упорядковуються)
/* scores.sort((num1, num2) => {
  let result;
  if (num1 === 0 && num2 !== 0) result = -1;
  else if (num1 !== 0 && num2 === 0) result = 1;
  else result =  num1 - num2; 
  return result;
});
document.writeln(scores); */
// ============================================================
//  18.1) Упорядкувати так, щоб спочатку були нулі, потім додатні, потім  від"ємні (між собою упрядковуються)
/* scores.sort((num1, num2) => {
  let result;
  if (num1 === 0 && num2 !== 0) result = -1;
  else if (num1 !== 0 && num2 === 0) result = 1;
  else result = num2 - num1;
  return result;
});
document.writeln(scores); */
// ============================================================
//  19) Упорядкувати так, щоб спочатку були виграші >200, потім всі інші
/* scores.sort((num1, num2) => {
  let result;
  if (num1 > 200 && num2 <=200) result = -1;
  else if (num1 <= 200 && num2 > 200) result = 1;
  else result = 0;
  return result;
});
document.writeln(scores); */
// ============================================================

// ------- БАГАТОВИМІРНІ МАСИВИ --------------------------
// ------ генерування двовимірного масиву
/* function generateRandomTable(rowsNumber, colsNumber, minValue=1, maxValue=100) {
	const table = []
	for (let rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {
		table.push([])
		for (let colIndex = 0; colIndex < colsNumber; colIndex++) {
			const randNum = minValue + Math.floor(Math.random()*(maxValue-minValue+1))
			table[rowIndex].push(randNum)
		}
	}
	return table
}
const table1 = generateRandomTable(2,3)
console.log(table1); */

/* table = [
  [11, 18, 22, 45, 23], // -- rowIndex = 0 table[0].push(11), rowIndex = 0 table[0].push(18)...
  [18, 22, 45, 23], // -- rowIndex = 1 table[1].push(18), rowIndex = 1 table[1].push(22)...
  [18, 22, 45, 23], // -- rowIndex = 2 table[2].push(18)
]; */
// ===============================================================
// ------ введення елементів двовимірного масиву
/* function generateRandomTable(rowsNumber, colsNumber, minValue=1, maxValue=100) {
	const table = []
	for (let rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {
		table.push([])
		for (let colIndex = 0; colIndex < colsNumber; colIndex++) {
			const el = parseInt(prompt(`Введіть елемент рядок: ${rowIndex+1}, стовпець: ${colIndex+1}`))
			table[rowIndex].push(el)
		}
	}
	return table
}
const table1 = generateRandomTable(2,3)
console.log(table1); */

// ===============================================================

// Задача. Дано прибуток магазину за К тижнів. Знайти загальний прибуток
// let incomes = [
//   // 0  1  2  3  4  5  6
//   [1, 2, 5, 2, 1, 2, 9], // 0 // номер рядочка
//   [1, 2, 1, 2, 1, 2, 9], // 1 // номер рядочка
//   [1, 1, 5, 2, 1, 2, 9], // 2 // номер рядочка
//   [1, 6, 5, 2, 1, 2, 9], // 3 // номер рядочка
//   [1, 2, 23, 2, 1, 2, 9], // 4 // номер рядочка
//   [0, 1, 5, 2, 1, 2, 9], // 5  // номер рядочка
//   [1, 1, 54, 21, 1, 2, 9], // 6  // номер рядочка
//   [14, 11, 54, 21, 1, 2, 9], // 7   // номер рядочка
// ];
// --- Загальний прибуток
// const rowsNumber = incomes.length  // incomes.length -кількість елементів/рядків масиву
// const colsNumber = incomes[0].length // incomes[0].length  - кількість елементів в нульовому рядку (якщо квадратна табл. то це кількість стовпців у кожному рядку)
// let sum = 0
/* for (let rowIndex = 0; rowIndex < incomes.length; rowIndex++) {  
  for (let colIndex = 0; colIndex < incomes[0].length; colIndex++) { 
    const element = array[colIndex];
  }
} */
// for (let rowIndex = 0; rowIndex < rowsNumber; rowIndex++) {
//   for (let colIndex = 0; colIndex < colsNumber; colIndex++) {
//    sum += incomes[rowIndex][colIndex]
//   }
// }
// document.writeln(`Sum: ${sum}`);
// --- Сума за робочі дні
/*  const weeksNumber = incomes.length  
 let sum = 0;
  for (let weekIndex = 0; weekIndex < weeksNumber; weekIndex++) {
    for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
      sum += incomes[weekIndex][dayIndex];
    }
  }
document.writeln(`Sum: ${sum}`); */

// ================================================================
// Задача. Дано кількість відвідувачів кафе протягом року (для кожного місяця за кожен заокруглений тиждень - 4).
// const profits = [
//   [1200, 1500, 1700, 1600], // 0 // Прибуток за перший місяць
//   [1400, 1600, 1800, 1700], // 1 // Прибуток за другий місяць
//   [1300, 1550, 1750, 1650], // 2 // Прибуток за третій місяць
//   [1100, 1450, 1600, 1550], // 3 // Прибуток за четвертий місяць
//   [1250, 1500, 1850, 1800], // 4 // Прибуток за п’ятий місяць
//   [1350, 1600, 1900, 1700], // 5 // Прибуток за шостий місяць
//   [1450, 1700, 2000, 1800], // 6 // Прибуток за сьомий місяць
//   [1500, 1750, 2100, 1900], // 7 // Прибуток за восьмий місяць
//   [1550, 1800, 2200, 2000], // 8 // Прибуток за дев’ятий місяць
//   [1600, 1850, 2300, 2100], // 9 // Прибуток за десятий місяць
//   [1650, 1900, 2400, 2200], // 10 // Прибуток за одинадцятий місяць
//   [1700, 2000, 2500, 2300], // 11 // Прибуток за дванадцятий місяць
// ];
// Визначити:
// 1) загальну кількість відвідувачів
// ----- 1
/* let totalVisitorsNumber = 0
for (let monthNum = 0; monthNum < profits.length; monthNum++) {
	for (let weekNum = 0; weekNum < 4; weekNum++) {
    totalVisitorsNumber += profits[monthNum][weekNum];
  }
}
document.writeln(`totalVisitorsNumber: ${totalVisitorsNumber}`); */
// ----- 2 for of
/* let totalProfit = 0;
for (const monthProfits of profits) {
	for (const weekProfit of monthProfits) {
		totalProfit += weekProfit
	}
}
document.writeln(`totalProfit: ${totalProfit}`); */
// 2) кількість відвідувачів за літо
/* let totalVisitorsNumber = 0;
for (let monthNum = 5; monthNum < 8; monthNum++) {
  for (let weekNum = 0; weekNum < 4; weekNum++) {
    totalVisitorsNumber += profits[monthNum][weekNum];
  }
}
document.writeln(`totalVisotorsNumber: ${totalVisitorsNumber}`); */
// 3) кількість відвідувачів за друге півріччя
/* let totalVisitorsNumber = 0;
for (let monthNum = 6; monthNum < profits.length; monthNum++) {
  for (let weekNum = 0; weekNum < 4; weekNum++) {
    totalVisitorsNumber += profits[monthNum][weekNum];
  }
}
document.writeln(`totalVisitorsNumber: ${totalVisitorsNumber}`); */
// =================================================================
//  Дано зріст учнів у школі (у кожному із класів кількість учнів може бути різною).
// let usersHeignts = [
//   [167, 176, 190, 171, 167], //0
//   [167, 176, 167], //1
//   [167, 176, 190, 171, 167, 145, 134], //2    usersHeignts[2]
//   [167, 176], //3
// ];
// Знайти:
// ---- суму всіх
//----1 for of
// let sum = 0
// for (const classHeightsList of usersHeignts) {
// 	for (const height of classHeightsList) {
// 		sum += height
// 	}
// }
// document.writeln(`sum: ${sum}`);
// ----2
//  let sum = 0;
// for (let classIndex = 0; classIndex < usersHeignts.length; classIndex++) {
// 	for (let pupilIndex = 0; pupilIndex < usersHeignts[classIndex].length; pupilIndex++) {
//     sum += usersHeignts[classIndex][pupilIndex];
//   }
// }
// document.writeln(`sum: ${sum}`);
// 1) найвищого учня в школі
/*  let max = -Infinity
 for (const row of usersHeignts) {
	for (const el of row) {
		if(max<el) max =el
	}
 }
document.writeln(`max: ${max}`); */
// 2) найвищого учня у кожному класі

/* for (const row of usersHeignts) {
  const max = Math.max(...row);
  document.writeln(`max: ${max}<br>`);
} */
// 3) знайти середній зріст
// let sum = 0, totalElementsNumber = 0
// for (let classIndex = 0; classIndex < usersHeignts.length; classIndex++) {
// 	for (let pupilIndex = 0; pupilIndex < usersHeignts[classIndex].length; pupilIndex++) {
//     sum += usersHeignts[classIndex][pupilIndex];
//   }
//   totalElementsNumber += usersHeignts[classIndex].length;
// }
// const avg = sum/totalElementsNumber
// document.writeln(`avg: ${avg.toFixed(1)}`);
// 4) знайти середній зріст у кожному класі

/* for (let classIndex = 0; classIndex < usersHeignts.length; classIndex++) {
	let sum = 0;
	for (let pupilIndex = 0; pupilIndex < usersHeignts[classIndex].length; pupilIndex++) {
    sum += usersHeignts[classIndex][pupilIndex];
  }
 const avg = sum / usersHeignts[classIndex].length;
 document.writeln(`${classIndex+1} - ${avg.toFixed(1)}<br>`);
} */
// ========= ТРИВИМІРНІ МАСИВИ =======

// У місті є К шкіл по 11 класів у кожній. Відомі величини зросту учнів. Знайти найвищого учня
// const schoolsData = [
//   [
//     // Перший клас першої школи
//     [160, 165, 170, 150, 145, 180, 175, 155, 140, 165, 170],
//     // Другий клас першої школи
//     [150, 160, 170, 180, 190, 150, 160, 165, 170, 175, 180, 185, 190, 145, 150],
//     // Третій клас першої школи
//     [145, 150, 155, 160, 165, 170, 175, 180, 140, 145, 150],
//     // Четвертий клас першої школи
//     [165, 170, 175, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160],
//     // П'ятий клас першої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 140, 145, 150],
//     // Шостий клас першої школи
//     [160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165],
//     // Сьомий клас першої школи
//     [150, 155, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150],
//     // Восьмий клас першої школи
//     [145, 150, 155, 160, 165, 170, 175, 140, 145, 150, 155, 160],
//     // Дев'ятий клас першої школи
//     [165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165, 170, 175, 180],
//     // Десятий клас першої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 140, 145],
//     // Одинадцятий клас першої школи
//     [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
//   ],
//   [
//     // Перший клас другої школи
//     [150, 155, 160, 165, 170, 175, 180, 145, 150, 155, 160, 165],
//     // Другий клас другої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 140, 145],
//     // Третій клас другої школи
//     [160, 165, 170, 175, 180, 185, 190, 150, 160, 165, 170, 175, 180, 185],
//     // Четвертий клас другої школи
//     [155, 160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160],
//     // П'ятий клас другої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150],
//     // Шостий клас другої школи
//     [160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165, 170, 175],
//     // Сьомий клас другої школи
//     [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150],
//     // Восьмий клас другої школи
//     [145, 150, 155, 160, 165, 170, 175, 140, 145, 150],
//     // Дев'ятий клас другої школи
//     [165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165],
//     // Десятий клас другої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 140, 145],
//     // Одинадцятий клас другої школи
//     [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
//   ],
//   [
//     // Перший клас третьої школи
//     [160, 165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160],
//     // Другий клас третьої школи
//     [150, 155, 160, 165, 170, 175, 180, 185, 140, 145, 150],
//     // Третій клас третьої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155, 160],
//     // Четвертий клас третьої школи
//     [165, 170, 175, 180, 185, 190, 140, 145, 150, 155, 160, 165, 170],
//     // П'ятий клас третьої школи
//     [150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
//     // Шостий клас третьої школи
//     [160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165],
//     // Сьомий клас третьої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 140, 145],
//     // Восьмий клас третьої школи
//     [155, 160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165],
//     // Дев'ятий клас третьої школи
//     [140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 145, 150, 155],
//     // Десятий клас третьої школи
//     [150, 155, 160, 165, 170, 175, 180, 185, 140, 145, 150],
//     // Одинадцятий клас третьої школи
//     [160, 165, 170, 175, 180, 185, 190, 150, 155, 160, 165, 170, 175, 180],
//   ],
// ];
// --- варіант 1
// let max = -Infinity
// for (const school of schoolsData) {
// 	for (const classList of school) {
// 		for (const pupilHeight of classList) {
// 			if(max<pupilHeight) max = pupilHeight
// 		}
// 	}
// }
//  document.writeln(`max: ${max}`);
// --- варіант 2
// з індексами
/*  let max = -Infinity;
 for (let schoolIndex = 0; schoolIndex < schoolsData.length; schoolIndex++) {
	for (let classIndex = 0; classIndex < 11; classIndex++) {
    //schoolsData[schoolIndex][classIndex].length - кількість учнів у школі  № schoolIndex, у класі №classIndex
    for (
      let pupilIndex = 0;
      pupilIndex < schoolsData[schoolIndex][classIndex].length;
      pupilIndex++
    ) {
     const pupilHeight = schoolsData[schoolIndex][classIndex][pupilIndex]
	  if (max < pupilHeight) max = pupilHeight;
    }
  }
 }
 document.writeln(`max: ${max}`); */
// --- варіант 3
//  const max = schoolsData.flat(Infinity) // в результаті з 3-вимірного масиву вийшов одновимірний масив
//  const max = Math.max(...schoolsData.flat(Infinity));
//  document.writeln(`max: ${max}`);
//  console.log(schoolsData.flat(Infinity));

// ==========================================================================

// Дано покази продажу автомобілів компанії за країнами, областями, містами і моделями.
// (поки зберігаємо за номерами (номер країни(3), номер області(4), номер міста(від 3 до 4), номер моделі(3)) як 4-вимірний масив)
// const carSalesData = [
//   [
//     // Перша країна
//     [
//       // Перша область
//       [100, 150, 200], // Перше місто, продажі по трьох моделях
//       [120, 180, 220], // Друге місто, продажі по трьох моделях
//       [110, 140, 230], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Друга область
//       [130, 160, 210], // Перше місто, продажі по трьох моделях
//       [140, 170, 240], // Друге місто, продажі по трьох моделях
//       [150, 180, 250], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Третя область
//       [160, 190, 200], // Перше місто, продажі по трьох моделях
//       [170, 180, 230], // Друге місто, продажі по трьох моделях
//       [180, 200, 210], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Четверта область
//       [190, 210, 240], // Перше місто, продажі по трьох моделях
//       [200, 220, 260], // Друге місто, продажі по трьох моделях
//       [210, 230, 250], // Третє місто, продажі по трьох моделях
//       [220, 240, 270], // Четверте місто, продажі по трьох моделях
//     ],
//   ],
//   [
//     // Друга країна
//     [
//       // Перша область
//       [120, 130, 150], // Перше місто, продажі по трьох моделях
//       [130, 140, 160], // Друге місто, продажі по трьох моделях
//       [140, 150, 170], // Третє місто, продажі по трьох моделях
//       [150, 160, 180], // Четверте місто, продажі по трьох моделях
//     ],
//     [
//       // Друга область
//       [160, 170, 180], // Перше місто, продажі по трьох моделях
//       [170, 180, 190], // Друге місто, продажі по трьох моделях
//       [180, 190, 200], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Третя область
//       [190, 200, 210], // Перше місто, продажі по трьох моделях
//       [200, 210, 220], // Друге місто, продажі по трьох моделях
//       [210, 220, 230], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Четверта область
//       [220, 230, 240], // Перше місто, продажі по трьох моделях
//       [230, 240, 250], // Друге місто, продажі по трьох моделях
//       [240, 250, 260], // Третє місто, продажі по трьох моделях
//       [250, 260, 270], // Четверте місто, продажі по трьох моделях
//     ],
//   ],
//   [
//     // Третя країна
//     [
//       // Перша область
//       [130, 140, 150], // Перше місто, продажі по трьох моделях
//       [140, 150, 160], // Друге місто, продажі по трьох моделях
//       [150, 160, 170], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Друга область
//       [160, 170, 180], // Перше місто, продажі по трьох моделях
//       [170, 180, 190], // Друге місто, продажі по трьох моделях
//       [180, 190, 200], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Третя область
//       [190, 200, 210], // Перше місто, продажі по трьох моделях
//       [200, 210, 220], // Друге місто, продажі по трьох моделях
//       [210, 220, 230], // Третє місто, продажі по трьох моделях
//     ],
//     [
//       // Четверта область
//       [220, 230, 240], // Перше місто, продажі по трьох моделях
//       [230, 240, 250], // Друге місто, продажі по трьох моделях
//       [240, 250, 260], // Третє місто, продажі по трьох моделях
//       [250, 260, 270], // Четверте місто, продажі по трьох моделях
//     ],
//   ],
// ];

// Знайти:
// 1) загальну кількість проданих авто
// const sum = carSalesData.flat(Infinity).reduce((prevSum, el) => prevSum+el)
// document.writeln(`sum: ${sum}`);
// 2) загальну кількість проданих моделей кожного виду
// ----варіант 1(простий для розуміння, алее багато переборів)
// for (let modelIndex = 0; modelIndex < 3; modelIndex++) {
//   let sum = 0;
//   for (const country of carSalesData) {
//     for (const region of country) {
//       for (const city of region) {
//         sum += city[modelIndex];
//       }
//     }
//   }
//   document.writeln(`${modelIndex + 1}: ${sum}<br>`);
// }
// ---- варіант 2 (краще, тому що кожен елемент масиву розглядається 1 раз)
// const modelsSum = [0, 0, 0];
// for (const country of carSalesData) {
//   for (const region of country) {
//     for (const city of region) {
//       for (let modelIndex = 0; modelIndex < city.length; modelIndex++) {
//         modelsSum[modelIndex] += city[modelIndex];
//       }
//     }
//   }
// }
// document.writeln(`${modelsSum}`);
// 3) загальну кількість проданих авто у кожній із країн
// for (const country of carSalesData) {
// 	const sum = country.flat(Infinity).reduce((prevSum, el) => prevSum + el)
//   document.writeln(`${sum}<br>`);
// }

// 4) загальну кількість проданих моделей у кожному із міст
// for (const country of carSalesData) {
// 	for (const region of country) {
// 		for (const city of region) {
//       const sum = city.reduce((prevSum, el) => prevSum + el); // city- ц вже одновимірний масив, тому flat не використовуємо, а тільки одразу reduce
//       document.writeln(`${sum}<br>`);
//     }
// 	}
// }

