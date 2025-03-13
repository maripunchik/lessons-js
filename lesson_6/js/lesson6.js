// cуворий режим
"use strict";

// ===================================================================

// Вивести 5 маркованих списків по 3 випадкових числа (1-100)
// for (let j = 1; j <=5; j++) {
// 	document.write(`<h1>Список № ${j}</h1>`);
// ---- сформуємо 1 список
//   document.write(`<ul>`);
//   for (let i = 0; i < 3; i++) {
//     const randNum = 1 + Math.floor(Math.random() * 100);
//     document.write(`<li>${randNum}</li>`);
//   }
//   document.write(`</ul>`);
// }

// ===================================================================

// Горизонтальну діаграму з 8 рандомними значеннями (0-100)
// document.write(`<div class="practice__container">`);
// for (let i = 0; i < 8; i++) {
// 	const randNum = Math.floor(Math.random() * 100);
// 	document.write(
//    `<div class="practice__item" style="width: ${randNum}%">${randNum}</div>`
//    );
// }
// document.write(`</div>`);

// ===================================================================

// Вивести 4 двовимірні таблиці 5*6. Заповнити рандомними номерами місяців
/*
<table>
   <tr>
   <td></td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td></td>
   <td></td>
   <td></td>
   </tr>
</table>;
*/
/*
for (let tableNum = 1; tableNum <= 4; tableNum++) {
	document.write(`<h1 class="practice__title">Таблиця № ${tableNum}</h1>`);
  // ----- сформуємо одну таблицю 5*6
  document.write(`<table class="practice__table">`);
  for (let rowNum = 0; rowNum < 5; rowNum++) {
    document.write(`<tr>`);
    for (let colNum = 0; colNum < 6; colNum++) {
      const randMonthNum = 1 + Math.floor(Math.random() * (12 - 1 + 1));
      document.write(`<td>${randMonthNum}</td>`);
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}
  */

// =======================================================

// Користувач загадує число (1-5). Комп'ютер задає питання поки не вгадає число користувача (використати confirm)
// let compNum; // обов'язково оголосити змінну ДО, а потім вже використовувати
// do {
//    compNum = 1 + Math.floor(Math.random() * 5);
// } while (!confirm(`Ви загадали число ${compNum}`));
// document.write(`Ви загадали число${compNum}`);

// Користувач загадує число (1-5). Комп'ютер задає питання поки не вгадає число користувача. Максимальна кількість спроб 5
// ----- варіант 1, для того, щоб знати, чи вгадали - використовуємо змінну guessed
/*
let guessed = false;
 let compNum;
 for (let step = 0; step < 5; step++) {
  compNum = 1 + Math.floor(Math.random() * 5);
if (confirm(`Ви загадали число ${compNum}`)) {
   guessed = true;
    break;
  }
}
 if (guessed) document.write(`Ви загадали число${compNum}`);
else document.write(`Мені не вистачило спроб. Число не вгадане`);
 //----- варіант 2, для того, щоб знати, чи вгадали - дивимось на кількість зроблених спроб
*/
/*
let compNum, step;
for (step = 0; step < 5; step++) {
  compNum = 1 + Math.floor(Math.random() * 5);
  if (confirm(`Ви загадали число ${compNum}`)) {
    break;
  }
}
if (step < 5) document.write(`Ви загадали число${compNum}`);
else document.write(`Мені не вистачило спроб. Число не вгадане`);
*/
// =============================================================

// Знайти суму 5 непарних випадкових чисел, що знаходяться між заданими користувачем числами.
// ---- варіант 1
/*const startNum= parseInt(prompt(`Початок інтервалу`))
const endNum = parseInt(prompt(`Кінець інтервалу`));
let sum =0
let oddNum = 0
do {
	const compNum = startNum + Math.floor(Math.random() * (endNum-startNum+1));
	document.write(`compNum = ${compNum}<br>`);
	if (compNum%2>0) {
		sum+=compNum
		oddNum++
	}
} while (oddNum<5);
document.write(`Sum = ${sum}`);
*/
// ---- варіант 2
/*const startNum = parseInt(prompt(`Початок інтервалу`));
const endNum = parseInt(prompt(`Кінець інтервалу`));
let sum = 0;
for (let numInd = 0; numInd < 5;) {
	const compNum =
    startNum + Math.floor(Math.random() * (endNum - startNum + 1));
  document.write(`compNum = ${compNum}<br>`);
  if (compNum % 2 > 0) {
    sum += compNum;
    numInd++;
  }
}
document.write(`Sum = ${sum}`);
*/
// ---- варіант 3
/*const startNum = parseInt(prompt(`Початок інтервалу`));
const endNum = parseInt(prompt(`Кінець інтервалу`));
let sum = 0;
for (let numInd = 0; numInd < 5; ) {
  const compNum =
    startNum + Math.floor(Math.random() * (endNum - startNum + 1));
  document.write(`compNum = ${compNum}<br>`);
  // ------ якщо число парне-то переходимо на наступну ітерацію
  if (compNum % 2 === 0) continue
  // ----- виконуємо тільки коли число непарне (тобто не спрацював continue)
    sum += compNum;
    numInd++;
}
document.write(`Sum = ${sum}`);
*/

// ===============================================================

// Знайти суму 5 перших непарних чисел, що знаходяться між заданими користувачем числами
// 20-50: 21,23,25,27,29
// 1-70:1,3,5,7,9
// let startNum = parseInt(prompt(`Початок інтервалу`));
// const endNum = parseInt(prompt(`Кінець інтервалу`));
// ----- варіант 1
/*let sum = 0, oddNum=0
for (let num = startNum; num < endNum && oddNum<5; num++) {
	if (num%2!==0){
sum+=num
oddNum++
	}
}
document.write(`Sum = ${sum}`);
*/
// ----- варіант 2
/*if (startNum % 2 === 0) startNum++; // якщо парне-то додамо одиницю(щоб було непарним)
let sum = 0,
  oddNum = 0;
for (let num = startNum; num < endNum && oddNum < 5; num += 2) {
  sum += num;
  oddNum++;
}
document.write(`Sum = ${sum}`);
*/
// ----- варіант 3
/*
let sum = 0
for (
  let num = startNum + (1 - (startNum % 2)), oddNum = 0; // якщо парне-то (startNum % 2) буде дорівнювати "0", і ми додамо до startNum "1", а якщо непарне, тоді (startNum % 2) буде дорівнювати "1", тоді(1 - (startNum % 2))-буде дорівнювати "0", і виходить startNum
  num < endNum && oddNum < 5;
  num += 2
) {
  sum += num;
  oddNum++;
}
document.write(`Sum = ${sum}`);
*/
// ===================================================

// Поступово генеруються N чисел (-100 100).Знайти максимальне, мінімальне та середнє значення
/*
const numbersCount = parseInt(prompt(`Введіть кількість чисел`))
let sum = 0, max =-Infinity, min =Infinity
for (let i = 0; i < numbersCount; i++) {
	const compNum =
   -100 + Math.floor(Math.random() * (100 - (-100) + 1));
	if(compNum>max) max=compNum
	if(compNum<min){
		min=compNum
		sum+=compNum
	}
}
const avg = sum/numbersCount
document.write(`min : ${min}, max : ${max}, avg : ${avg.toFixed(3)}`);
*/

// ====================================================

// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних
// ---- варіант 1
/*
let oddNum=0, evenNum=0
for (let i = 0; i < 100; i++) {
	const compNum = 1 + Math.floor(Math.random() * 1000);
	if (compNum%2 === 0) evenNum++
	else oddNum++
}
document.write(`oddNum : ${oddNum}, evenNum : ${evenNum}`);
*/
// ---- варіант 2
/*
let oddNum=0
for (let i = 0; i < 100; i++) {
	const compNum = 1 + Math.floor(Math.random() * 1000);
	if (compNum%2) oddNum++
}
document.write(`oddNum : ${oddNum}, evenNum : ${100-oddNum}`);
*/

// =====================================================

//Вивести високосні роки у вказаному діапазоні (між початковим і кінцевим роками).
// високосний - він кратний 4, але не кратний 100, а також якщо кратний 400
// let startYear = parseInt(prompt(`Початок інтервалу`));
// const endYear = parseInt(prompt(`Кінець інтервалу`));
// ---- варіант 1
/*
for (let year = startYear; year <= endYear; year++) {
  if (year%4===0&&(year%100!==0 || year%400===0))
	document.write(`${year}<br>`);
}
*/
// ---- варіант 2 (знаходимо перший, який ділиться на 4)
// startYear=startYear + (4-startYear%4)
/*
// --- 4 - (startYear % 4) -це скільки потрібно додати до числа.ю щоб воно ділилось на 4 без остачі
if(startYear%4!==0) startYear += 4 - (startYear % 4);
// --- зараз ми впевнені, що число startYear ділиться на 4
for (let year = startYear; year <= endYear; year+=4) {
  if (year % 100 !== 0 || year % 400 === 0)
    document.write(`${year}<br>`);
}
  */
// =====================================================

// Вивести всі трицифрові числа, де друга цифра завжди є меншою або рівною за першу, а третя є меншою або рівною за другу. 100-999(237 = c1=2 c2=3 c3=7)
// -----варіант 1
/*
for (let num = 100; num <= 999; num++) {
	const c3 = num%10 // щоб знайти останню цифру в будь-якому числі-це остача від ділення % на 10
	const c2 = Math.floor(num/10)%10
	const c1 = Math.floor(num/100)
	if(c2<=c1 && c3<=c2)
	document.write(`${num}<br>`);
}
*/
// -----варіант 2
/*
for (let c1 = 1; c1 <= 9; c1++) {
   for (let c2 = 0; c2 <= c1; c2++) {
   for (let c3 = 0; c3 <= c2; c3++) {
      document.write(`${c1}${c2}${c3}<br>`);
   }
   }
}
  */
// =====================================================

// Вивести з кожного десятка(1-10, 11-20, 21-30, ..., 91-100) по три випадкових парних числа
/*
for (let startNum = 1; startNum <= 91; startNum += 10) {
  document.write(`<h1>start:${startNum}-end:${startNum + 9}</h1>`);
  for (let i = 0; i < 3; ) {
    const randNum =
      startNum + Math.floor(Math.random() * (startNum + 9 - startNum + 1));
		if(randNum%2!==0)continue
		i++;
    document.write(`${randNum}<br>`);
  }
}
*/
// =====================================================

//Випадковим чином вивести у рандомних позиціях 10 зображень-смайликів
/*
for (let i = 0; i < 10; i++) {
  const randImageIndex = 1 + Math.floor(Math.random() * 9);
  const randLeftPosition = Math.floor(Math.random() * 100);
  const randTopPosition = Math.floor(Math.random() * 100);
  document.write(
    `<img class="practice__img" src="img/${randImageIndex}.png" style= "position:absolute; left:${randLeftPosition}%;top:${randTopPosition}%"/>`
  );
}
*/
// ======================================================
// Тільки позитивні емоції. з клавіатури вводиться М-максимальна кількість смайликів, які можна вивести. Комп'ютер випадково вибирає якесь із 4 наперед заданих. Серед них є сумний смайл.
// const maxSmileNum =parseInt(prompt(`Максимальна кількість смайлів`))
// const sadSmileIndex =10// індекс сумного смайла
//1) Якщо знаходимо сумний смайл-зупинити
/*
for (let i = 0; i < maxSmileNum; i++) {
  const randImageIndex = 1 + Math.floor(Math.random() * 4);
  const randLeftPosition = Math.floor(Math.random() * 100);
  const randTopPosition = Math.floor(Math.random() * 100);
  if(randImageIndex === sadSmileIndex)break
  document.write(
    `<img class="practice__img" src="img/${randImageIndex}.png" style= "position:absolute; left:${randLeftPosition}%;top:${randTopPosition}%"/>`
  );
}
  */
//2) Якщо знаходимо сумний смайл- пропустити
/*
for (let i = 0; i < maxSmileNum; i++) {
  const randImageIndex = 1 + Math.floor(Math.random() * 10);
  const randLeftPosition = Math.floor(Math.random() * 100);
  const randTopPosition = Math.floor(Math.random() * 100);
  if (randImageIndex === sadSmileIndex) continue
  document.write(
    `<img class="practice__img" src="img/${randImageIndex}.png" style= "position:absolute; left:${randLeftPosition}%;top:${randTopPosition}%"/>`
  );
}
  */
// =====================================================

// Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів(кожного разу користувачу повідомляють, яку ще суму потрібно ввести)
/*
const productPrice = parseFloat(prompt(`Вартість товару`))
let totalMoney =0
do {
	const money = parseFloat(
    prompt(`Потрібно дати ${productPrice - totalMoney}грн`)
  );
	totalMoney+=money
} while (totalMoney<productPrice);
*/
// =======================================================

// Вивести радіо-кнопки для визначення того, скільки років людині у діапазоні (1-10, 11-20, 21-30, ... ,91-100)
/*
for (let startAge = 1; startAge <=91; startAge+=10) {
	document.write(`
		<label>
		Вік в межах від ${startAge} до ${startAge+9}
		<input type="radio" name="age"/>
		</label>
		<hr>
		`);
	
}
	*/
// ====================================================================

// Сформувати select з парними числами від 2 до 20
// <select>
// <option value="1">11</option>
//<option value="2">22</option>
//<option value="3">33</option>
//</select>
/*
document.write(`<select>`);
for (let num = 2; num <=20; num+=2) {
document.write(`<option value="${num}">${num}</option>`);
}

document.write(`</select>`);
*/

// =================================================================

// Користувач вводить два символи у верхньому регістрі. Сформувати два select з кодами символів у заданому діапазоні та символами у заданому діапазоні
/*
const char1 = prompt(`Перший символ`).toUpperCase();
const char2 = prompt(`Другий символ`).toUpperCase();
const char1Code = char1.charCodeAt(0);
const char2Code = char2.charCodeAt(0);
// ------ select з кодами символів у заданому діапазоні
document.write(`<select>`);
for (let num = char1Code; num <= char2Code; num++) {
  document.write(`<option value="${num}">${num}</option>`);
}
document.write(`</select>`);
// ------ select з символами у заданому діапазоні
document.write(`<select>`);
for (let num = char1Code; num <= char2Code; num++) {
  document.write(`<option value="${num}">${String.fromCharCode(num)}</option>`);
}
document.write(`</select>`);
*/

// =================================================================

// Комп'ютер 3 рази випадковим чином вибирає початок і кінець проміжку(проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться в цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10((min-10) --- (max+10))
// const rangeStart =1
/*
for (let i = 1; i <=3; i++) {
	let start = 1 + Math.floor(Math.random() * 100);
	let end = 1 + Math.floor(Math.random() * 100);
	if (start>end) {
		const tmp=start
		start =end
		end=tmp
	}
	const userNum =parseInt(prompt(`Спроба №${i} Введіть число`))
	if(userNum>=end-10 && userNum<=end+10)
		alert(`Виграв! start =${start}, end=${end}`)
	else
	alert(`Програв! start =${start}, end=${end}`);
} 
	*/

// =========================================================

// Морський бій. Комп'ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель
/*
const N = 5,
  M = 5,
  K = 3;
// --- випадковим чином визначаємо позицію корабля
const compRowNum = 1 + Math.floor(Math.random() * N);
const compColNum = 1 + Math.floor(Math.random() * M);
// ---- він поки не знищений
let destroyed = false;
for (let step = 1; step <=K; step++) {
  // --- вводимо позицію пострілу
  const userRowNum = parseInt(prompt(`Введіть номер рядка пострілу`));
  const userColNum = parseInt(prompt(`Введіть номер стовпця пострілу`));
  // --- якщо позиції співпадають
  if (userRowNum === compRowNum && userColNum === compColNum)
    // --- фіксуємо, що знищений 
    destroyed = true;
  break;
}
if (destroyed) alert(`Перемога`);
else alert(`Поразка`);
*/

// ======================================================

// Двоє користувачів поступово вводять 2 числа від 1 до 10. Комп'ютер впипадковим чином загадує число
// 1) якщо користувач вгадав-то має 10 балів
// 2)якщо не вгадав і число користувача співпадає стосовно парності/непарності - 3 бали
// Гра йде до тих пір, поки хтось із користувачів не набере 20 балів
// --- бали гравців, спочатку мають по 0 балів
/*
let scorePlayer1 = 0;
let scorePlayer2 = 0;
while (scorePlayer1 < 20 && scorePlayer2 < 20) {
  const compNum = 1 + Math.floor(Math.random() * 10);
  const user1Num = parseInt(prompt(`Гравець 1.Введіть число`));
  const user2Num = parseInt(prompt(`Гравець 2.Введіть число`));
  if (user1Num === compNum) scorePlayer1 += 10;
  else if ((user1Num + compNum) % 2 === 0) scorePlayer1 += 3;
  if (user2Num === compNum) scorePlayer2 += 10;
  else if ((user2Num + compNum) % 2 === 0) scorePlayer2 += 3;
  alert(
    `compNum=${compNum},scorePlayer1=${scorePlayer1},scorePlayer2=${scorePlayer2}`
  ); // alert не виносимо з циклу, щоб бачити після кожного кроку результат
}
  */

// ========================================================

// Сформувати 5 списків з випадкових чисел. У кожному списку елементи додаються до тих пір, поки числа менші за 50.
/*
for (let listNum = 1; listNum <= 5; listNum++) {
  document.write(`<h1>List №${listNum}</h1>`);
  document.write(`<ul>`);
  let num; // за межами циклу, бо використовується в умові
  do {
    num = 1 + Math.floor(Math.random() * 100);
    if(num<50)// не відображати числа >50
	 document.write(`<li>${num}</li>`);
  } while (num < 50);
  document.write(`</ul>`);
}
  */

// =========================================================

// Ігровий автомат. Випадково вибираємо зображення у трьох позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень.
// Вивести ці зображення і повідомити виграш користувача
// три перших зображення 100 грн, три других-200, три третіх-500, три четвертих зображення - 1000грн
// Використати цикли і switch (для вибору зображення за номером)
/*
// ---- вибираємо перше зображення
const randImageIndex1 = 1 + Math.floor(Math.random() * 4);
document.write(
  `<img class="practice__img" src="img/${randImageIndex1}.png" style= "position:absolute; left:${
    1 * 10
  }%;top:10%"/>`
);
// ---- вибираємо друге зображення
const randImageIndex2 = 1 + Math.floor(Math.random() * 4);
document.write(
  `<img class="practice__img" src="img/${randImageIndex2}.png" style= "position:absolute; left:${
    2 * 10
  }%;top:10%"/>`
);

// ---- вибираємо третє зображення
const randImageIndex3 = 1 + Math.floor(Math.random() * 4);
document.write(
  `<img class="practice__img" src="img/${randImageIndex3}.png" style= "position:absolute; left:${
    3 * 10
  }%;top:10%"/>`
);
let score=0
if (randImageIndex1 === 1 && randImageIndex2 === 1 && randImageIndex3 === 1)
  score = 100;
else if (
  randImageIndex1 === 2 &&
  randImageIndex2 === 2 &&
  randImageIndex3 === 2
)
  score = 200;
else if (
  randImageIndex1 === 3 &&
  randImageIndex2 === 3 &&
  randImageIndex3 === 3
)
  score = 500;
else if (
  randImageIndex1 === 4 &&
  randImageIndex2 === 4 &&
  randImageIndex3 === 4
)
  score = 1000;
  alert(`Виграш ${score}`)

*/
// 1-10    10^1     30
// 2-100    10^2     300
// 3-1000    10^3     3000
// 4-10000    10^4     30000
// --- варіант 2 (з сумами 10 у степені номер зображення)
/*
let sum = 0;
for (let i = 1; i <= 3; i++) {
  const randImageIndex = 1 + Math.floor(Math.random() * 4);
  document.write(
    `<img class="practice__img" src="img/${randImageIndex}.png" style= "position:absolute; left:${
      i * 10
    }%;top:10%"/>`
  );
  sum += Math.pow(10, randImageIndex);
}
let score
switch (sum) {
  case 30:
    score = 100;
    break;
  case 300:
    score = 200;
    break;
  case 3000:
    score = 500;
    break;
  case 30000:
    score = 1000;
    break;
  default:
    score = 0;
    break;
}
alert(`Виграш ${score}`);
*/