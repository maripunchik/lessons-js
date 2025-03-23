// cуворий режим
"use strict";

// ================  ФУНКЦІЇ  ====================================
/*
  function getSeasonByMonth(monthNumber) {
    let result;
    switch (monthNumber) {
      case 12:
      case 1:
      case 2:
        result = "зима";
        break;
      case 3:
      case 4:
      case 5:
        result = "весна";
        break;
      case 6:
      case 7:
      case 8:
        result = "літо";
        break;
      case 9:
      case 10:
      case 11:
        result = "осінь";
        break;
      default:
        throw new Error('Month is not correct') // якщо якась помилкова ситуація
    }
    return result;
  }

try {
  let res = getSeasonByMonth(12); //команда, яка може призвести до помилки
  document.write(`res = ${res}`); // що робити, якщо помилки немає
} catch (error) {
  document.write(`${error.message}`); // що робити, коли сталася помилка
} finally {
  document.write(`<br>Bye!`); // що робити у будь-якому випадку
}
*/

// ====================================================================

// Створити функцію, яка дозволяє визначити чи вказаний місяць (1-12) є літнім (6-8)
/*
function isMonthSummer(monthNum) {
	return monthNum>=6 && monthNum<=8
}

const userMonthNum = parseInt(prompt('Month'))
if(isMonthSummer(userMonthNum)) document.writeln(`Summer`)
	else document.writeln(`Not summer`);
*/

// ====================================================================

// Створити функцію, яка дозволяє визначити чи є працівник пенсіонером (вік >= 65)
/*
function isRetied(age, retiedAge=65) {
	return age>=retiedAge
}
const userAge = parseInt(prompt('Age'));
let resMessage
if (isRetied(userAge)) resMessage = 'Retied'
else resMessage = 'Not retied'
document.writeln(resMessage);
*/

// ====================================================================

// Створити функцію, яка дозволяє визначити за числовим значенням оцінки (1-12) прописом
/*
function getMarkTitle(markNum) {
  let res;
  switch (markNum) {
    case 12:
    case 11:
    case 10:
      res = "Відмінно";
      break;
    case 9:
    case 8:
    case 7:
      res = "Добре";
      break;
    case 6:
    case 5:
    case 4:
      res = "Задовільно";
      break;
    case 3:
    case 2:
    case 1:
      res = "Незадовільно";
      break;
    default:
      throw new Error("Оцінка некоректна");
  }
  return res;
}
// -------
const mark = parseInt(prompt("Введіть оцінку"));
try {
  const markTitle = getMarkTitle(mark);
  document.writeln(markTitle);
} catch (error) {
  document.writeln(error.message);
} finally {
  document.writeln("<h1> Дякую, що скористалися нашою програмою! </h1>");
}
*/

// ====================================================================

// Поступово генеруються R номерів робочих днів (1-5) коли буде перевірка. Іван працює тільки по парних днях. Підрахувати скільки разів під час перевірки буде присутнім Іван.
/*
function getRandomWorkingDay(startDay=1, endDay=5) { // функція, яка передає випадковий робочий день
	return startDay + Math.floor(Math.random() * (endDay-startDay+1))
}
function isWorkingDayForIvan(dayNum) { // чи буде Іван на роботі чи ні, для нього робочий день чи ні
	return dayNum%2 === 0
}
function getRevisionDaysNumberWithIvan(totalrevisionDaysNumber, startDay=1, endDay=5) { // загальна функція (скільки рандомних днів)
	let revisionDaysNumberWithIvan = 0
	for (let i = 0; i < totalrevisionDaysNumber; i++) {
   const revisionDayNum = getRandomWorkingDay(startDay, endDay)
	if(isWorkingDayForIvan(revisionDayNum)) revisionDaysNumberWithIvan ++
  }
  return revisionDaysNumberWithIvan
}
// -------
document.writeln(getRevisionDaysNumberWithIvan(15, 2, 5));
*/

// ====================================================================

// Поступово генерується R чисел [0-1) для яких знаходять суму та М чисел, для яких знаходять добуток. Визначити що є більшим
/*
function getRandomSum(numbersCount) {
	let sum = 0
	for (let i = 0; i < numbersCount; i++) {
		sum += Math.random()
	}
	return sum
}

function getRandomProduct(numbersCount) {
  let prod = 0;
  for (let i = 0; i < numbersCount; i++) {
    prod *= Math.random();
  }
  return prod;
}
// -----
const s = getRandomSum(12)
const p = getRandomProduct(10);
if (s > p) document.writeln("Сума більша");
else if (s < p) document.writeln("Сума менша");
else document.writeln('Однакові');
*/

// ==================== МАСИВИ ================================================

// Дано вартості товарів (12, 45,67,1212). Знайти суму
//               0  1  2  3   prices.length = 4  // < prices.length (номер повинен бути менше за довжину, тому що нумерація іде від 0)
/*/
const prices = [12,45,67,1212]
let s = 0
// s+=prices[0]
// s += prices[1];
// s += prices[2];
// s += prices[3];
// for (let i = 0; i <=3; i++) {
// s+=prices[i]
// }
for (let i = 0; i < prices.length; i++) {
	// або писати <= prices.length-1(але це зайві кожного разу обчислення), або < prices.length
  s += prices[i];
}
document.writeln(`Sum = ${s}`);
*/

// ==============================================================================

// Вартості товарів вводяться. Знайти суму
// ------ функція для введення елементів масиву

// function inputArray(elementsNumber) {
// 	const arr = []
// 	for (let i = 0; i < elementsNumber; i++) {
//     const el = parseFloat(prompt('Введіть елемент'))
// 	 arr.push(el)
//   }
//   return arr
// }
// // -------- спитатись скільки буде елементів масиву (скільки цін)
// const pricesNumber = parseInt(prompt('Скільки буде цін товарів?'))
// // -------- введення масиву
// /*
// const prices = [] // спочатку масив порожній
// for (let i = 0; i < pricesNumber; i++) {
// 	//вводимо ціну
// 	const price = parseFloat(prompt('Введіть ціну'))
// 	//додаємо масив
// 	prices.push(price)
// }
// 	*/
// 	const prices = inputArray(pricesNumber)
// // -------
// let s = 0
// for (let i = 0; i < prices.length; i++) {
// 	s+=prices[i]
	
// }

// document.writeln(s);

// ==================================================================================
/*
//         0 1 2 3 4 5 6 7 8 9  // length = 10
let arr = [2,1,4,2,4,6,2,6,7,78]
// Знайти суму елементів у першій половині масиву

let s = 0
// for (let i = 0; i < 5; i++) {
// 	s+=arr[i]
// }
const arrHalf = arr.length/2 //вводимо змінну, щоб не виконувати кожен раз обчислення
for (let i = 0; i < arrHalf; i++) { // якщо не бачимо масив
  s += arr[i];
}
document.writeln(s);
*/
// ==================================================================================

// //         0 1 2 3 4 5 6 7 8 9  // length = 10
// let arr = [2,8,4,2,4,6,2,6,7,78]
// // Знайти кількість елементів більших за 5 елементів у першій половині масиву
// /*
// let count = 0
// const arrHalf = arr.length / 2;
// for (let i = 0; i < arrHalf; i++) { 
//   if(arr[i] > 5) count++
// }
// document.writeln(count);
// */
// // Знайти кількість елементів більших за 5 елементів у другій половині масиву
// let count = 0;
// const arrHalf = Math.floor(arr.length / 2)
// for (let i = arrHalf; i < arr.length; i++) {
//   if (arr[i] > 5) count++;
// }
// document.writeln(count);

// ==================================================================================

// Дано розміри доходу магазину за кожен місяць протягом року. Знайти:
//             0 1 2 3 4   5  6  7  8   9  10 11
// let profits = [2,1,4,5,12,23,45,213,12,23,45,213]
//1) загальний дохід за рік(1-12)
//2)загальний дохід за перше півріччя(1-6)
//3)загальний дохід за рік(0-5)
//4)загальний дохід за друге півріччя(7-12)
//5)загальний дохід за другий квартал(4-6)
//6)знайти загальний дохід за парні місяці (0,2,4...)
/*
let s=0
for (let m = 0; m < profits.length; m+=2) {
	s+=profits[m]
}
document.writeln(s)
*/
// знайти загальний дохід за місяці, які є початками кварталів
/*
let s = 0;
for (let m = 0; m < profits.length; m += 3) {
  s += profits[m];
}
document.writeln(s);
*/
//у місяцях, які є початками кварталів відняти 3
/*
for (let m = 0; m < profits.length; m += 3) {
profits[m] -=3
}
document.writeln(profits);
*/
// у місяцях, де значення є меншими за 5, додати 10
/*
for (let m = 0; m < profits.length; m++) { // як змінюються індекси елементів, які треба проаналізувати
	if(profits[m]<5) profits[m] += 10; //що треба зробити з кожним елементом
}
document.writeln(profits);
*/
// ===============================================================================
// ---- за допомогою arguments(псевдомасив)
// function sum() {
// 	let s =0
// 	for (let i = 0; i < arguments.length; i++) {
// 		s+= arguments[i];
// 	}
// 	return s
// }
// const s1 = sum(2,9,7,5,56,23)
// const s2 = sum(2, 9, 7);
// ---- за допомогою ...numbers(arr)
/*
function sum(...arr) { // Rest Parameter (може бути тільки один, і завжди ставити вкінці)
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}
const s1 = sum(2,9,7,5,56,23)
const s2 = sum(2, 9, 7);
*/

// ===========================================================================

// Створити функцію, яка приймає рік виходу на пенсію, та довільну кількість значень років працівників. Визначити кількість пенсіонерів
//----- функція для підрахунку кількості пенсіонерів(передіється пенсійний вік і довільна кількість(через кому) років працівників) за допомогою  Rest Parameter
/*
function getPensionersNumber(pensionAge, ...workersAgesList) {
	let count = 0
	for (let i = 0; i < workersAgesList.length; i++) {
    if(workersAgesList[i]>=pensionAge)
		count++
  }
  return count
}
// ----
document.writeln(getPensionersNumber(65,21,56,78,92,45,76));
*/
//---- функція для генерування масиву з випадкових елементів
/*
function getRandomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randNum = min + Math.floor(Math.random() * (max - min + 1));
    arr.push(randNum);
  }
  return arr;
}
  */
//------ функція для підрахунку кількості пенсіонерів(передіється пенсійний вік і масив років працівників)
/*
function getPensionersNumber(pensionAge, workersAgesList) {
  let count = 0;
  for (let i = 0; i < workersAgesList.length; i++) {
    if (workersAgesList[i] >= pensionAge) count++;
  }
  return count;
}
// ----
// const workersAges = [21, 56, 78, 92, 45, 76];
const workersAges = getRandomArray(12,21,78)
document.writeln(getPensionersNumber(65, workersAges));
*/

// ===========================================================================

// Згенерувати випадковим чином 32 числа (0-100). Знайти суму парних
/*
function getRandomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randNum = min + Math.floor(Math.random() * (max - min + 1));
    arr.push(randNum);
  }
  return arr;
}
// ----функція, яка будее рахувати суму парних чисел
function getSumEvenNumbers(arr) {
	let s = 0
	for (let i = 0; i < arr.length; i++) {
		if(arr[i]%2===0) s += arr[i]
	}
	return s
}
//------
let myArray = getRandomArray(10,0,100)
document.writeln(myArray);
document.writeln('<hr style="border: 1px solid grey;">');
document.writeln(getSumEvenNumbers(myArray));
*/
