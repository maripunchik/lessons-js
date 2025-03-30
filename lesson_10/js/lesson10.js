// cуворий режим
"use strict";

// Створити функцію, яка для довільної кількості чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100
// ----повертаємо декілька значень з використанням масиву (ВАЖЛИВИЙ ПОРЯДОК ЗМІННИХ)
/*
function getResults(...numbers) {
	let evenNumbers=0, positiveNumbers=0, greater100=0
	for (const num of numbers) {
		if(num % 2 === 0) evenNumbers++
		if(num > 0) positiveNumbers++
		if(num > 100) greater100++
	}
	return [evenNumbers,positiveNumbers,greater100]
}
const [resEven,resPos,res100] = getResults(231,45, 23,-23,54,-122)

document.writeln(`resEven =${resEven}, resPos = ${resPos}, res100= ${res100}`)
*/
// повертаємо декілька значень за допомогою об'єкта (важливі назви змінних)
/*
function getResults(...numbers) {
  let evenNumbers = 0,
    positiveNumbers = 0,
    greater100 = 0;
  for (const num of numbers) {
    if (num % 2 === 0) evenNumbers++;
    if (num > 0) positiveNumbers++;
    if (num > 100) greater100++;
  }
  return {
    resEven: evenNumbers,
    resPos: positiveNumbers,
    res100: greater100,
  };
}
console.log(getResults(231, 45, 23, -23, 54, -122))
const { resEven, resPos, res100 } = getResults(231, 45, 23, -23, 54, -122);
document.writeln(`resEven =${resEven}, resPos = ${resPos}, res100= ${res100}`);
*/

// ------ forEach ------

// Дано масив цін. Вивести їх з індексами окремими div
// let prices = [100, 90, 5, 13, 17, 16, 18]
//------- з використанням звичайного циклу (це найбільш оптимальний, але довгий шлях)
/*
for (let i = 0; i < prices.length; i++) {
document.writeln(`<div>${i} - ${prices[i]}</div>`);
}
*/
// ----- без використання forEach -----
/*
function printEl(el, index, arr) {
	// document.writeln(`<div>${ind} - ${arr[ind]}</div>`)
	document.writeln(`<div>${index} - ${el}</div>`);
}
for (let i = 0; i < prices.length; i++) {
  // переглядаємо всі елементи масиву prices, і для кожного з них викликаємо функцію printEl. Де prices[i] - це значення el, i - index, prices-arr
  printEl(prices[i], i, prices);
}
  */
// ----- з використанням forEach -----
/*
prices.forEach(function printEl(el, index, arr) { // можна так і залишити
  document.writeln(`<div>${index} - ${el}</div>`);
});
*/
/*
prices.forEach((el, index, arr) => // або скоротити(стрілкова функція)
  document.writeln(`<div>${index} - ${el}</div>`)
)
  */

// ========================================================================

// Збільшення кожного елементу масиву на 1:

// let prices = [100, 90, 5, 13, 17, 16, 18];
/*
for (let i = 0; i < prices.length; i++) {
	prices[i]+=1
}
	*/
/*
prices.forEach((el, ind, arr) => (arr[ind] += 1)); // коли з кожним елементом щось треба зробити-пишемо forEach
	document.writeln(prices)
	*/
// ========================================================================

// Переведення елементів масиву в верхній регістр:
/*
const fruits = ["apple", "banana", "cherry"]; // треба змінити існуючий масив
fruits.forEach(
  // якщо з кожним елементом масива треба щось зробити - пишемо forEach
  (el, ind, arr) => (arr[ind] = el.toUpperCase()) // завжди, коли треба змінити, потрібно звертатись до масиву з індексом: arr[ind]
);
document.writeln(fruits);
 */
// ========================================================================

// Перетворення масиву рядків у масив значень:(string треба перетворити в числа)
/*
const prices = ['12','21','679','90'] // потрібно перетворити саме цей масив(не новий)
prices.forEach(
	(el,ind,arr) => (arr[ind] = parseInt(el))
)
console.log(prices)
*/
// ========================================================================

// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
/*
let userArr = [100, 90, 5, 200, 17, 500, 18];
userArr.forEach(
	(el, ind, arr) => {
		if(el>arr[0]) arr[ind] *= 2
	}
)
document.writeln(userArr);
*/
// ========================================================================

// Дано масив цін. Змінити цей масив так, щоб на ціни товарів, які більші за 1000 грн. дати 30% знижки
/*
let prices = [100, 90, 5000, 13000, 17, 500, 18]; // треба змінити вже існуючий
prices.forEach(
	(el, ind, arr) => {
		if(el>1000) arr[ind]*= 0.7
	}
)
document.writeln(prices);
*/
// ========================================================================

// Видалити кінцеві пробіли з кожного рядка масиву
/*
const fruits = ['  apple ', 'banana ', ' cherry']
fruits.forEach(
	(el, ind, arr) => (arr[ind] = el.trim()) // метод .trim видаляє пробіли
)
document.writeln(fruits);
*/
// ========================================================================

// Додати до кожного елементу масиву суфікс "грн."
/*
const arr = ['12', '21', '679', '90'];
arr.forEach(
	(el, ind, baseArr) => (baseArr[ind] += 'грн.')
)
document.writeln(arr);
*/
// ========================================================================

// Перетворити заданий масив значень ціни (вказано валюту) в масив числових значень:
/*
const arr = ['12грн', '21грн', '679грн', '90грн'];
arr.forEach((el, ind, baseArr) => (baseArr[ind] = parseInt(el)));
document.writeln(arr);
*/
// ========================================================================
// Вивести довжину кожного рядка масиву
/*
const fruits = ['apple', 'banana', 'cherry']
fruits.forEach(
	// (el) => console.log(el.length)
	(el) => document.writeln(`${el} - ${el.length}<br>`) // коли змінювати не потрібно- достатньо для виведення вказати тільки el
)
*/
// ========================================================================

// ----------------- map (на основі існуючого створюється новий масив)-------------------------

// Дано масив цін. Створити новий масив, додавши 20% // принципове питання : "Сворити новий масив"

// let prices = [100, 90, 5000, 13000, 17, 500, 18];
// ----- без map -------
/*
// --- функція для знаходження нового значення ----- 
function getNewPriceValue(el, ind, baseArr) {
	return el*1.2
}
const newPrices = []
	for (let i = 0; i < prices.length; i++) {
		const newPrice = getNewPriceValue(prices[i], i, prices)
		newPrices.push(newPrice)
	}
document.writeln(newPrices)
*/
// ----- з map -------

// const newPrices = prices.map(
// 	function getNewPriceValue(el, ind, baseArr) { // перетворюємо на стрілкову
// 	return el*1.2
// 	}
// )
/*
const newPrices = prices.map(
  (el) => el * 1.2 // (el, ind, baseArr) - в даному випадку достатньо тільки el (ind, baseArr - не використовуються)
);
document.writeln(newPrices)
*/

// ============================================================

// Дано масив років народження працівників (усі народились 1 січня). Створити масив з кількістю років
/*
const years = [1998, 2001, 2020, 1995]
const ages = years.map(year=>2025- year)
document.writeln(ages);
*/
// ============================================================

// Дано масив вартості товару у доларах. Створити масив цін у гривнях
/*
let prices = [100, 90, 5000, 13000, 17, 500, 18];
const dolPrices = prices.map((price) => price * 40)
document.writeln(dolPrices);
*/
// ============================================================

// Дано масив імен працівників. Сформувати новий масив, який складається з перших літер імен
/*
let names = ['John', 'Sara', 'Olga']
const firstLetersArray = names.map((name) => name[0])
document.writeln(firstLetersArray);
*/
// ============================================================
// За номером дня вивести назву дня
/*
let daysNames = ['Пон.','Вівт.','Сер.','Четв.','Пн.','Суб.','Нед.']
const dayNum = parseInt(prompt(`Введіть номер дня (1-7)`))
const dayTitle = daysNames[dayNum-1]
document.writeln(dayTitle);
*/
// ============================================================

// Масив номерів днів. Вивести для кожного номера дня відповідну назву дня
//                 0       1        2        3       4      5        6
/*
let daysNames = ["Пон.", "Вівт.", "Сер.", "Четв.", "Пн.", "Суб.", "Нед."];
let daysNumbersList = [3,2,1,5,4,7]
daysNumbersList.forEach(
	(dayNum) => document.writeln(`${daysNames[dayNum-1]}<br>`)
)
	*/
// ============================================================

// Масив номерів днів. Сформувати масив з відповідними назвами днів

//                 0       1        2        3       4      5        6
/*
let daysNames = ["Пон.", "Вівт.", "Сер.", "Четв.", "Пн.", "Суб.", "Нед."];
let daysNumbersList = [3,2,1,5,4,7]
const daysTitles = daysNumbersList.map((dayNum) => daysNames[dayNum - 1]);   // створюємо новий масив

document.writeln(daysTitles);
*/

// ============================================================

//Масив номерів днів. Сформувати масив з відповідними назвами днів (якщо номер некоректний, то буде "помилка")
//                 0       1        2        3       4      5        6

// let daysNames = ["Пон.", "Вівт.", "Сер.", "Четв.", "Пн.", "Суб.", "Нед."];
// let daysNumbersList = [3, 2, 10, 5, 4, 7];
// ------- з використанням if
/*
const daysTitles = daysNumbersList.map((dayNum) => {
	let res
	if(dayNum>=1 && dayNum<=7) res = daysNames[dayNum - 1]
else res ='помилка'
return res
})
document.writeln(daysTitles);
*/
//------------ з використанням тернарного оператора
/*
const daysTitles = daysNumbersList.map((dayNum) => 
  dayNum >= 1 && dayNum <= 7 ? daysNames[dayNum - 1] : 'помилка'
);
document.writeln(daysTitles);
*/

// ============================================================

// ----------------- push/pop(додають і видаляють з кінця)------------------------

// Реєструвати імена працівників (вводити і зберігати у масиві). Виводити  і видаляти їх в порядку надходження
// let users = ["Ivan", "Petro", "Olga"];
// let users = []
// --- реєстрація
// const usersNamesNumber = parseInt(prompt(`Введіть кількість користувачів`))
// for (let i = 0; i < usersNamesNumber; i++) {
// 	const userName = prompt(`Введіть ім'я користувача`)
// 	users.push(userName)
// }
// --- видалення
// document.writeln(`<hr>`);
// while (users.length>0) {
// 	const name = users.shift()// якщо потрібно видаляти спочатку, використовуємо shift(якщо зкінця-unshift)
// 	document.writeln(`${name}<br>`)
// }

// ====================================================================

// Реєструвати імена працівників (вводити і зберігати у масиві). Виводити  і видаляти їх в порядку зворотному до порядку надходження
/*
let users = ['Ivan', 'Petro', 'Olga']
while (users.length>0) {
	const name = users.pop()
	document.writeln(`${name}<br>`)
}
*/
/*
let users = []
// --- реєстрація
const usersNamesNumber = parseInt(prompt(`Введіть кількість користувачів`))
for (let i = 0; i < usersNamesNumber; i++) {
	const userName = prompt(`Введіть ім'я користувача`)
	users.push(userName)
}
// --- видалення
document.writeln(`<hr>`);
while (users.length>0) {
	const name = users.pop()
	document.writeln(`${name}<br>`)
}
*/
// ===============================================================

// ------------------- splice (метод видалення та заміни)(цей метод дозволяє видаляти з певної позиції певну кількість елементів,і на їхньому місці вставляти якісь нові значення. Якщо видаляти не потрібно-вказуємо 0)

// Дано масив показів температур за рік (12 місяців). Видалити значення, що відповідають літнім місяцям
/*
//               0  1  2  3   4   5  6  7  8  9  10 11
let tempList = [12,23,12,455,123,12,34,56,76,34,56,67]
tempList.splice(5, 3) // починаючи з 5-го три штуки
document.writeln(tempList)
*/
// ============================================================

// Дано масив показів температур за рік (12 місяців). Замінити значення літніх місяців нулями
/*
//               0  1  2  3   4   5  6  7  8  9  10 11
let tempList = [12,23,12,455,123,12,34,56,76,34,56,67]
tempList.splice(5, 3, 0, 0, 0) // починаючи з 5-го три штуки, "0,0,0" - на що потрібно замінити
document.writeln(tempList)
*/
// ============================================================

// Дано масив показів температур за рік (12 місяців). Замінити значення літніх місяців двома значеннями 'Ok', та 'Free'
/*
//               0  1  2  3   4   5  6  7  8  9  10 11
let tempList = [12,23,12,455,123,12,34,56,76,34,56,67]
tempList.splice(5, 3, 'Ok','free') // починаючи з 5-го три штуки, "'Ok','free'" - на що потрібно замінити
document.writeln(tempList)
*/
// ============================================================

// Дано масив показів температур за рік (12 місяців). Замінити кожне значення літніх місяців двома значеннями 'Ok', та 'Free'
/*
//               0  1  2  3   4   5  6  7  8  9  10 11
let tempList = [12,23,12,455,123,12,34,56,76,34,56,67]
tempList.splice(5, 3, "Ok", "free", "Ok", "free", "Ok", "free"); // починаючи з 5-го три штуки, "'Ok','free'" - на що потрібно замінити. Але якщо багато елементів-запускаємо цикл
document.writeln(tempList)
*/

// ============================================================

// ------------------- slice (тільки копіює від початкового індекса до обмежуючого. Якщо обмежуючий не вказати-скопіює до кінця)

// Дано масив показів температур за рік (12 місяців). Створити окремі масиви, що складаються зі значень, які відповідають елементам першого і другого півріччя
/*
let tempList = [12, 23, 12, 455, 123, 12, 34, 56, 76, 34, 56, 67];
const halfYear = Math.floor(tempList.length/2)
const firstHalf = tempList.slice(0,halfYear)
const secondHalf = tempList.slice(halfYear)
document.writeln(firstHalf);
document.writeln('<hr style="border: 1px solid grey;">');
document.writeln(secondHalf);
*/
// ===========================================================

// Створити новий масив, у якому поміняна місцями перша і друга половина масиву
/*
let tempList = [12, 23, 12, 455, 123, 12, 34, 56, 76, 34, 56, 67];
const halfYear = Math.floor(tempList.length/2)
tempList = [...tempList.slice(halfYear), ...tempList.slice(0, halfYear)];
// templist = [...secondHalf, ...firstHalf]
document.writeln(tempList);
*/
// ===========================================================

//------indexOf (вказуємо що ми шукаємо, і з якого номера.Якщо не вказати початковий номер-то він починає від 0)-(якщо не знаходить-то результат буде "-1")------
// ------lastIndexOf -шукає справа наліво
// Дано упорядкований за зростанням масив цін. Сформувати новий масив, який складається тільки з різних значень
/*
let prices = [67,67,89,89,89,90,90,122,122,122,900]
let uniquePrices = []
for (const el of prices) {
	if(uniquePrices.indexOf(el)===-1)uniquePrices.push(el)
}
document.writeln(uniquePrices)
*/
// ===========================================================
//Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7, наприклад: 2679328712)
/*
const arr = [2,6,7,9,3,2,8,7,1,2];
const first7Index = arr.indexOf(7)
const last7Index = arr.lastIndexOf(7);
let s = 0
for (let i = first7Index+1; i < last7Index; i++) {
	s+=arr[i]
}
document.writeln(s)
*/
// ===========================================================
// Дано масив чисел, що містить два нулі. Створити масив, що складається з елементів між цими нулями
/*
//          0 1 2 3 4 5 6 7 8  9  10
let arr = [23,1,4,0,4,6,9,0,2,12,75]
const first0Index = arr.indexOf(0);
const last0Index = arr.lastIndexOf(0);
const newArr =[]
for (let i = first0Index + 1; i < last0Index; i++) {
  newArr.push(arr[i])
}
document.writeln(newArr);
*/
// ------- або
/*
let arr = [23,1,4,0,4,6,9,0,2,12,75]
const first0Index = arr.indexOf(0);
const last0Index = arr.lastIndexOf(0);
const newArr = arr.slice(first0Index+1, last0Index)
document.writeln(newArr);
*/
// ===========================================================
// Дано масив чисел, що містить нулі. Створити масив, що складається з елементів між першим і другим нулем
/*
let arr = [23,1,4,0,4,6,9,0,2,12,0,2,11,8,4,53]
const firstZeroIndex = arr.indexOf(0);
const secondZeroIndex = arr.indexOf(0, firstZeroIndex + 1);
const newArr = arr.slice(firstZeroIndex+1, secondZeroIndex)
document.writeln(newArr);
*/
// ===========================================================
// Дано масив чисел, що містить нулі. Створити масив, що складається з елементів між першим і останнім нулем
// map скопіює весь масив, а нам потрібна тільки частина, тому використовуємо метод slice
/*
let arr = [23,1,4,0,4,6,9,0,2,12,0,2,11,8,4,53]
const firstZeroIndex = arr.indexOf(0);
const lastZeroIndex = arr.lastIndexOf(0);
const newArr = arr.slice(firstZeroIndex+1, lastZeroIndex )
document.writeln(newArr);
*/
// ===========================================================
// ------- find/includes (find дозволяє знайти елемент за якоюсь умовою. Напр:el>20)
// ------- findLast - шукає зкінця(справа наліво)

// Дано масив оцінок двійочника.
// а) Визначити першу погану оцінку (<4)
/*
let scores = [8,9,12,4,7,1,10,8,9,2]
const firstBadScore = scores.find((mark) => mark < 4)
document.writeln(firstBadScore)
*/
// б) Визначити останню погану оцінку (<4)
/*
let scores = [8, 9, 12, 4, 7, 1, 3, 8, 9, 12];
const lastBadScore = scores.findLast((mark) => mark < 4);
document.writeln(lastBadScore);
*/

// ==============================================================
// Дано масив років відвідувачів басейну. Визначити вік останнього пенсіонера (вік більше або рівне за 65)
/*
let ages = [21,13,45,68,23,74,66,9,25,56,9]
const lastPensioner = ages.findLast((age) => age>=65)
document.writeln(lastPensioner)
*/
// ==============================================================
// Дано масив з номерами кімнат, які звернулись на рецепцію. Визначити, чи зверталися з кімнати номер 5

// let rooms = [12,15,7,23,5,21,35,8,19]
// --- 1
/*
if (rooms.indexOf(5) === -1) alert('No')
	else alert('yes')
*/
// --- 2
/*
if (!rooms.find((el) => el ===5)) alert("No");
else alert("yes");
*/
// --- 3
/*
if (rooms.includes(5)) alert("yes");
else alert('No');
*/
// ==============================================================
// -------------------- Reduce (поперднє значення + елемент) на основі масива треба щось обчислити:максимальне, мінімальне, кількість 7, кількість 0 і тд
// предається попереднє значення, поточне значення, індекс, посилання на масив(якщо потрібно)
// reduce приймає 2 параметра: функція(перше), початкове значення(якщо не вказати початкове значення"0"-то в якості початкового вставляється перше значення)
// ---- reduceRight (обчислює справа наліво). Якщо не вказати початкове значення-візьме останнє в якості початкового
//===============================================================
// Знайти суму елементів масиву
/*
let arr = [10,4,7]
const s = arr.reduce(
	(prevSum, el, ind, baseArr) => prevSum + el
)
document.writeln(s)
*/
//Знайти добуток елементів масиву
/*
let arr = [-10,-9,5,13,17,16,18,19,21,11,7,-4]
const p = arr.reduce((prevProd, el)=>prevProd*el )
document.writeln(p);
*/
// ==============================================================
// Знайти добуток від'ємних елементів масиву
/*
let arr = [10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4];
const p = arr.reduce((prevProd, el) => el < 0 ? prevProd * el : prevProd,1);
document.writeln(p);
*/
// ==============================================================
// Знайти суму парних елементів
/*
let arr = [13, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4];
const s = arr.reduce((prevSum, el) => (el % 2 === 0 ? prevSum + el : prevSum),0  // перше значення-функція, друге значення-початкове значення=0
)
document.writeln(s);
*/
// Дано масив. Підрахувати кількість 7
/*
let arr = [10,9,5,13,7,16,18,19,21,11,7,4]
const count7 = arr.reduce(
  // (prevCount, el) =>{
  // 	if(el===7) return prevCount+1
  // 	else prevCount
  // }
  (prevCount, el) => (el === 7) ? prevCount + 1 : prevCount, 0
);
document.writeln(count7);
*/
// =================================================================
// Знайти максимальний елемент
/*
let arr = [10, 9, 5, 13, 7, 16, 18, 19, 21, 11, 7, 4];
// const max =Math.max(...arr)
const max = arr.reduce((prevMax, el) => (el > prevMax ? el : prevMax));
document.writeln(max);
*/
// =================================================================
// Знайти максимальний серед від'ємних елемент
/*
let arr = [10, -9, 5, 13, 7, 16, 18, 19, 21, 11, 7, -4];
const maxNegative = arr.reduce(
	(prevMaxN, el) => (el<0 && el>prevMaxN) ? el : prevMaxN, -Infinity
)
document.writeln(maxNegative)
*/
// =================================================================
//Дано масив показів температур за рік (12 місяців). Підрахувати кількість додатних значень
/*
let temperatures = [-10, -9, 5, 13, 7, 16, 18, 19, 21, 11, 7, -4];
const posNumber = temperatures.reduce(
  (prevCount, el) => (el > 0 ? prevCount + 1 : prevCount),
  0
);
document.writeln(posNumber);
*/
// =================================================================
// Дано масив оцінок двійочника. Підрахувати кількість поганих оцінок
/*
let scores = [8, 9, 2, 4, 7, 1, 10, 8, 9, 2];
// ---за допомогою циклу
let badScoresNumber = 0;
for (const score of scores) {
  badScoresNumber = score < 4 ? badScoresNumber + 1 : badScoresNumber
}
// ---- за допомогою функції
function checkScore(prevBadNum, score) {
	if (score<4) return prevBadNum+1
	else return prevBadNum
}
let prevBadNum =0
for (let i = 0; i < scores.length; i++) {
	prevBadNum = checkScore(prevBadNum, scores[i])
	
}
	*/
/* //---- з reduce
const badScoresNumber = scores.reduce(
  (prevBadNum, score) => (score < 4 ? prevBadNum + 1 : prevBadNum),
  0
);
*/
// =================================================================
// Дано масив чисел. Підрахувати кількість чисел, які менші за свій індекс
/*
//            0  1  2  3  4  5  6   7  8  9
let scores = [8, 9, 2, 4, 7, 1, 10, 8, 9, 2];
const num = scores.reduce(
  (prevNum, el, ind) => (el < ind ? prevNum + 1 : prevNum),
  0
);
document.writeln(num);
*/
// =================================================================
// ---------------- filter умова // різниця з find: він знаходить всі елементи, які задовольняють умові. find - тільки одне значення
// Дано покази термометра за місяць.Сформувати покази тільки додатних значень(>0)
/*
let temperaturesList = [-10, 3, -21, 20, 18];
const t = temperaturesList.find((t) => t > 0);
console.log(t);// виводить тільки одне перше значення(3)

const tmpPosList = temperaturesList.filter((t) => t > 0);
console.log(tmpPosList);// всі значення, які задовільняють умові, створюється новий масив, який задовільняє умові
*/
// =================================================================

// Дано покази термометра за місяць. Сформувати покази тільки значень, які знаходяться між 10 і 15 градусами цельсія
/*
let temperaturesList = [-10, 3, -21, 10, 12, 18];
const tempList = temperaturesList.filter((t) => t >= 10 && t <= 15);
document.writeln(tempList);
*/
// =================================================================
// Дано масив цін. Сформувати новий масив, який складається з цін більших за 100 грн.
/*
let prices = [124, 6700, 2345, 322, 99, 324, 9000];
const res = prices.filter((price) => price > 100);
document.writeln(res);
*/
// Дано масив імен учнів. Сформувати масив, які починаються на букви:'А','В','J','S'
/*
let names = ['Nona','John','Sara','Peter','Monica','Andrew','Niko']
const searchLetters = ['A','B','J','S']
const res = names.filter(name=>searchLetters.includes(name[0]))
document.writeln(res)
*/
// =================================================================
// ------------------- some(хоча б один) - every(кожен) // повертають true/false
//Дано масив показників термометра протягом місяця. З'ясувати, чи є серед них дні, коли температура була меншою за 5 градусів
/*
let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4];
if (temperatures.some((t) => t < 5)) alert("Yes");
else alert("No");
*/
// =================================================================
// Визначити, чи є серед вказаних цін товарів ті, які дорожчі за 1000 грн
/*
let prices = [124,6700,2345,322,99,324,9000] // побачить перше значення 6700 > 1000, поверне true, всі інші значення розглядати не буде
if (prices.some((p) => p > 1000)) alert("Yes");
else alert("No");
*/
// =================================================================
// Дано масив оцінок
// let scores = [8,9,12,4,7,5,10,8,9,7]
// 1) визначити, чи є він хорошистом (усі оцінки більші або рівні 7)
/*
if (scores.every((score) => score >= 7)) alert("Yes");
else alert("No");
*/
// 2) визначити, чи є він двійочником (є хоча б одна погана оцінка)
/*
if (scores.some((score) => score <7)) alert("Yes");
else alert("No");
*/
// =================================================================
// ---------- sort - упорядковує в порядку зростання чи спадання
// Упорядкувати масив чисел за зростанням // якщо це не рядки(string)- потрібно написати функцію, яка повинна повернути якесь додатне число, яке перше вважається більшим, якщо меншим-то -1. 0 означає, що вони рівні

// let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4];
// ----
/* arr.sort((num1, num2) => {
	let compareResult
  if (num1 > num2) compareResult = 1;
  else if (num1 < num2) compareResult = -1;
  else compareResult = 0;
return compareResult;
 });
 document.writeln(arr); */
// ----- спрощено
/*
arr.sort((num1, num2) => {
  // коли потрібно впорядкувати за зростанням числа-потрібно повертати різницю
  return num1 - num2;
});
document.writeln(arr);
*/
// =================================================================
// Упорядкувати масив імен за зростанням
/*
let names = ["Nona", "John", "Sara", "Peter", "Monica", "Andrew", "Niko"];
names.sort()
document.writeln(names);
*/
// =================================================================
// Упорядкувати масив чисел за спаданням

// let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4];
/* arr.sort((num1, num2) => {
 if (num1 > num2) return -1;
  else if (num1 < num2) return 1;
 else return 0;
 });
 document.writeln(arr); */
// --- спрощено
/* arr.sort((el1,el2) => el2-el1)
document.writeln(arr); */
// =================================================================
// Упорядкувати масив імен за зростанням за другою буквою(буква з індексом - 1)
/* let names = ["Nona", "John", "Sara", "Peter", "Monica", "Andrew", "Niko"];
names.sort((name1,name2) =>{
	if(name1[1]>name2[1])return 1 // завжди порівнюється 2 значення, коли return > 0(будь-яке число)- то їх треба поміняти місцями. Коли return < 0 або 0-залишаємо як є, міняти місцями не потрібно
	else if(name1[1] < name2[1]) return -1
	else return 0 // 0-це перша літера, 1 - це друга літера
})
document.writeln(names); 
// ----спосіб 1(порівнюємо безпосередньо літери)
// ----спосіб 2 з використанням кодів літер */
// =================================================================
// Упорядкувати за спаданням довжини імен буквою
/*  let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4];
arr.sort((num1, num2) => {
  const len1 = Math.abs(num1).toString().length; // довжина першого числа
  const len2 = Math.abs(num2).toString().length; // довжина другого числа

  return len2 - len1; // сортуємо за спаданням довжини
});
document.writeln(arr);   */
// =================================================================
// Упорядкувати числа так, щоб спочатку йшли парні, потім непарні (між собою парні і непарні не порівнюємо)
/* let arr = [10, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4];
arr.sort((n1, n2) => {
	let compareResult
  if ((n1 % 2 !== 0) && (n2 % 2 === 0)) compareResult = 1;
   if ((n1 % 2 === 0) && (n2 % 2 !== 0)) compareResult = -1;
   else compareResult = 0;
	return compareResult
});
document.writeln(arr);  */
// ===============================================================
// Упорядкувати числа так, щоб спочатку йшли парні, потім непарні(в порядку зростання)
/* let arr = [10, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4];
arr.sort((n1, n2) => {
	let compareResult
  if ((n1 % 2 !== 0) && (n2 % 2 === 0)) compareResult = 1;
   if ((n1 % 2 === 0) && (n2 % 2 !== 0)) compareResult = -1;
   else compareResult = n1-n2; // - в порядку зростання
	// else return n2-n1; // -в порядку спадання
	return compareResult
});
document.writeln(arr);  */