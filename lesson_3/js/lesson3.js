// cуворий режим
"use strict";

document.addEventListener("click", function (e) {
   const targetElement = e.target;
   if (targetElement.closest(".menu-header__icon")) {
      document.documentElement.classList.toggle("menu-open");
   }
});

// ===================================================================

// nextValue = (val + delta)%кількість (min == 0)
// Дано поточну кількість годин, хвилин, секунд(як на годиннику). Визначити:
// 1.Яка кількість секунд (0-59 = 60) буде на годиннику через N секунд
// Крок 0. Позначення
// кількість секунд - seconds
// N секунд - secondsDelta
// Крок 1. Введення необхідних даних
// const seconds = parseInt(prompt('Кількість секунд'))
// const secondsDelta = parseInt(prompt('Кількість секунд для додавання'))
// Крок 2. Обчислення
// const newSecondsValue = (seconds + secondsDelta) % 60
// Крок 3. Виведення результатів
// document.write(`Нова кількість секунд = ${newSecondsValue}`)

// =====================================================================

// Вводимо кількість монет (0-99=100) та їх номінал. Знайти загальну суму вказуючи, скільки це цілих гривень і залишок копійок (3*50=1грн.50коп)
// Крок 0. Позначення
//кількість монет - coinsNumber
//номінал - coinValue
//загальна кількість у копійках - totalSum
//цілих гривень - totalGrnNumber
//залишок копійок - changeCoins
// Крок 1. Введення необхідних даних
//const coinsNumber = parseInt(prompt('Кількість монет'))
//const coinValue = parseInt(prompt('Номінал монет'))
// Крок 2. Обчислення
//const totalSum = coinsNumber * coinValue
//const totalGrnNumber = Math.floor(totalSum/100)
//const changeCoins = totalSum % 100
// Крок 3. Виведення результатів
//document.write(`Загальна сума: ${totalGrnNumber} грн. ${changeCoins} коп.`)
// nextValue = (val + delta)%кількість (min == 0)
// nextValue = (val - min + delta)%(max-min+1)+1 (min <> 0)

// ================================================================================

//З клавіатури вводиться номер дня тижня (від 1 до 7). Визначити, який буде день тижня через N днів.
// Крок 0. Позначення
// номер дня тижня - dayNum
// скільки додаємо днів - dayDelta
// Крок 1. Введення необхідних даних
// const dayNum = parseInt(prompt('Поточний номер дня'))
// const dayDelta = parseInt(prompt('Скільки додаємо днів'))
// Крок 2. Обчислення
// nextValue = (val - min + delta)%(max-min+1)+1 (min <> 0)
// const newday = ((dayNum - 1 + dayDelta) % 7) + 1
// Крок 3. Виведення результатів
// document.write(`Новий номер дня: ${newday}`)

// =========================================================================

// З клавіатури вводиться номер місяця. Визначити, який буде місяць(1-12) через вказану кількість N місяців
// Зашифрувати один введений англійський символ у верхньому регістрі (один з символів: A, B,...Z) методом зміщення (шифр Цезаря)
// Крок 0. Позначення
// введений англійський символ у верхньому регістрі - character
// зміщення - shift
// Крок 1. Введення необхідних даних
// const character = prompt('Введіть англійський символ у верхньому регістрі')
// const shift = parseInt(prompt('Введіть зміщення'))
// Крок 2. Обчислення
// const minCode = 'A'.charCodeAt(0)
// const maxCode = 'Z'.charCodeAt(0)
// document.write(`min = ${minCode}, max = ${maxCode} <br>`)

// const characterCode = character.charCodeAt(0)
// const newCode = ((characterCode - minCode + shift) % 26) + minCode
// const newCharacter = String.fromCharCode(newCode)
// Крок 3. Виведення результатів
// document.write(`${character} => ${newCharacter}`)

// =====================================================================

// Дано кількість дітей. Визначити скільки треба автобусів для перевезення (у одному автобусі 30 місць)
// Крок 0. Позначення
// кількість дітей - childrenNumber
// у одному автобусі 30 місць - busPlacesNum = 30
// скільки треба автобусів - requiredByssesNumber
// Крок 1. Введення необхідних даних
// const childrenNumber = parseInt(prompt('Скільки є дітей'))
// const busPlacesNum = 30
// Крок 2. Обчислення
// const requiredByssesNumber = Math.ceil(childrenNumber / busPlacesNum)
// const fullByssesNumber = Math.floor(childrenNumber / busPlacesNum)
// Крок 3. Виведення результатів
// document.write(`Всього автобусів: ${requiredByssesNumber}, повних автобусів: ${fullByssesNumber}`)

// =====================================================================

// Вводиться кількість грошей користувача і вартість товару. Вивести чи зможе він купити товар
// const money = parseFloat(prompt('Money'))
// const price = parseFloat(prompt('Price'))

// if (money >= price)
// 	document.write('Зможе')
// else
// 	document.write('Не зможе')

// =====================================================================

// На роботу компанія приймає працівників від 32 до 45 років. З клавіатури вводиться вік претендента. З'ясувати, чи може він бути прийнятим на роботу
// Крок 0. Позначення
// вік працівника -workerAge
// мінімальний допустимий вік - minAllowedAge = 32
// максимальний допустимий вік - maxAllowedAge = 45
// Крок 1. Введення необхідних даних
// const workerAge = parseInt(prompt('Введіть вік претендента'))
// const minAllowedAge = 32, maxAllowedAge = 45
// Крок 2. Обчислення
// Крок 3. Виведення результатів
//  if (minAllowedAge<=workerAge<=maxAllowedAge)
// і - &&
// або - ||
// if (minAllowedAge <= workerAge && workerAge <= maxAllowedAge)
// 	document.write('Ok')
// else document.write('No')

// =====================================================================

// Вводиться номер місяця. З'ясувати, чи він коректний
// const monthNum = parseInt(prompt('Введіть номер місяця'))
// if (monthNum < 1 || monthNum > 12)
// 	document.write(`Номер місяця некоректний`)
// else document.write(`Номер місяця коректний`)

// =====================================================================

// Вводиться заробітна плата. Якщо заробітна плата більша за прожитковий мінімум (3500), то зняти податок 20%
// Крок 0. Позначення
// зар.плата - salary
// прожит.мін - minSalary
//податок - tax
// Крок 1. Введення необхідних даних
// const salary = parseFloat(prompt('salary'))
// const minSalary = 3500
// Крок 2. Обчислення
// if (salary > minSalary)
// salary *= 0.8 // salary = salary*0.8  // a+=9 , це a = a + 9
// Крок 3. Виведення результатів
// document.write(`Final salary = ${salary}`)

// ===========================================================

// З клавіатури вводиться кількість балів. Вивести на екран оцінку прописом (задовільно, добре чи відмінно).
// ---розв'зок з використанням if-else
// const score = parseInt(prompt('Введіть оцінку (1-5)'))
// if (score === 5) document.write(`Відмінно`)
// else if (score === 4) document.write(`Добре`)
// else if (score === 3) document.write(`Задовільно`)
// else document.write(`Незадовільно`)
// ---розв'зок з використанням switch
// switch (score) {
// 	case 5: document.write(`Відмінно`)
// 		break;
// 	case 4: document.write(`Добре`)
// 		break;
// 	case 3: document.write(`Задовільно`)
// 		break;
// 	default: document.write(`Незадовільно`)
// 		break;
// }

// ===========================================================

// З клавіатури вводиться номер місця, яку зайняв спортсмен. Вивести, яку медаль він отримає:
// 1-золота
// 2-срібна
// 3-бронзова
// Все інше-грамота
// Крок 0. Позначення
// номер місця - placeNum
// Крок 1. Введення необхідних даних
// const placeNum = parseInt(prompt('Введіть номер місця'))
// switch (placeNum) {
// 	case 1: prize = 'золота'
// 		break;
// 	case 2: prize = 'срібна'
// 		break;
// 	case 3: prize = 'бронзова'
// 		break;
// 	default: prize = 'грамота'
// 		break;
// }
// Крок 2. Обчислення
// Крок 3. Виведення результатів
// document.write(`Ви отримали ${prize}`)

// ==========================================================

// З клавіатури вводиться колір помідора: "red", "yellow" "green".Вивести на екран у якому стані цей помідор:
// "red" - можна їсти,
// "yellow" - дозріває,
// "green" - ще росте
// Крок 0. Позначення
// const tomatoColor = prompt('Введіть колір помідора')
// Крок 1. Введення необхідних даних
// let tomatoState
// switch (tomatoColor) {
// 	case 'red': tomatoState = 'можна їсти'
// 		break;
// case 'yellow': tomatoState = 'дозріває'
// 		break;
// 		case 'green': tomatoState = 'ще росте'
// 		break;
// 	default: tomatoState = 'помідор мутант'
// 		break;
// }
// Крок 2. Обчислення
// Крок 3. Виведення результатів
// document.write(`Стан помідора: ${tomatoState}`)

// ===============================================================

// З клавіатури вводиться номер місяця, вивести на екран пору року
// var score = parseInt(prompt('score', ""));
// var result;
// switch (score) {
// 	case 1:
// 	case 2: result = "Незараховано"
// 		break;
// 	case 3:
// 	case 4:
// 	case 5: result = "Зараховано"
// 		break;
// 	default: result = "Неправильна оцінка"
// 		break;
// }
// document.write(`Оцінка: ${result}`)

// ===============================================================

// З клавіатури вводиться номер дня(1-7). Вивести яким є цей день: робочий чи вихідний
// const dayNum = parseInt(prompt('Введіть номер дня'));
// switch (dayNum) {
// 	case 1:
// 	case 2:
// 	case 3:
// 	case 4:
// 	case 5: document.write(`Робочий день`)
// 		break;
// 	case 6:
// 	case 7: document.write(`Вихідний`)
// 		break;
// 	default: document.write(`Помилка!`)
// 		break;
// }
