// cуворий режим
"use strict";

// !!!================  DOM, BOM, Document. Події - початок =================================
// window: Це глобальний об'єкт, що містить все, що є у браузері. Всі інші об'єкти, такі як BOM, DOM та JavaScript, є властивостями або частинами цього об'єкта.

// BOM (Browser Object Model), `: Це модель об'єктів, що дає доступ до браузерних функцій (наприклад, window, navigator, location, history, screen, frames, XMLHttpRequest і т.д.).

// DOM (Document Object Model) : Це модель об'єктів документа, що дає доступ до HTML-елементів на веб-сторінці, таких як елементи ( div, p, img, і т.д.).

// JavaScript : Це мова програмування, що використовується для взаємодії з об'єктами BOM і DOM, а також для реалізації логіки веб-додатків.(Object.Array,Function)

// Таким чином, window є кореневим об'єктом, він містить доступ до BOM і DOM, а також служить средою для виконання коду JavaScript.

// =========================================================

//Задача. Створити дочірнє вікно (url='https://www.ukr.net/') з розмірами, що дорівнюють половині розмірів поточного вікна і закрити його через 2 секунди
//  let w = open(
// 	'https://www.ukr.net/',
// 	'_blank',
// 	`location=yes, height=${parseInt(screen.height) / 2},width=${
// 	  parseInt(screen.width) / 2
// 	},scrollbars=yes,status=yes`
//  )

//  setTimeout(() => {
// 	w.moveBy(100,300)
//  }, 4000)

//  setTimeout(() => {
// 	w.close()
//  }, 7000)

// ========================================================

// Приклад
//!!! ----- getElementById() ----
// document.getElementById('first').style.color = 'red'
// document.getElementById('MyTitle2').style.color = 'blue'

//!!!---- getElementsByTagName() -----
// console.log(document.getElementsByTagName('p')) // HTMLCollection(4) [p#first.edge, p#MyTitle2.middle, p, p.middle, first: p#first.edge, MyTitle2: p#MyTitle2.middle] таким чином можна з'ясувати до якого елемента звертатись(індекс)
// document.getElementsByTagName("p")[2].style.color = 'green'//друга p

/* for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
	document.getElementsByTagName("p")[i].style.color = 'red'
} */ // - так працювати буде, але для того, щоб код працював швидше створюємо const
// const pList = document.getElementsByTagName("p"); // !!! використовуємо константу!!!
// for (let i = 0; i < pList.length; i++) {
// 	pList[i].style.color = "green";
// }
// for (const pEl of pList) {
// 	pEl.style.color = 'red'
// }

//!!!---- getElementsByClassName() -----
// document.getElementsByClassName("middle")[0].style.color = "blue"; // перший з класом middle

//!!!---- querySelector('.назваКласу') -----
// document.querySelector(".middle").style.color = "blue"; // звертається до ПЕРШОГО з колекції

//!!!---- querySelectorAll('.назваКласу') ----- // звертається до всіх елементів

// =========================================================
//!!! ========== створення елементів ============
// 1.створюємо елемент (потрібно елемент вставити в DOM-дерево)
// const myH1 = document.createElement("h1");
// const myInput = document.createElement('input')
// 2.знаходимо базовий елемент орієнтир
// document.getElementById('myFirstDiv').append(myInput) // можна одразу знайти елемент-орієнтир і вставити створений елемент, або створити const
// const parent = document.getElementById('myFirstDiv')
// 3.вставляємо створений елемент
// parent.before(myInput)

// document.getElementById('First1').append(myInput)  //! myInput просто перемістився у вказане місце(нове), зникнувши з попереднього.//!!!рішенням для цього може стати використання cloneNode(true)-глибока копія
// document.getElementById("First1").append(myInput.cloneNode(true))

//--------видалення element.remove()

// setTimeout(() => {
// 	myInput.remove()
// }, 2000); // myInput зникає через 2сек
// =======================================================

// Задача 1. Створити 4 div з рандомними числами
/* function getRandomNumber(min=1,max=100) {
	return min + Math.floor(Math.random()*(max-min+1))
}
function createRandomDiv(min=1,max=100) {
  const divEl = document.createElement("div");
  //   divEl.innerHTML = "<input>"; // getRandomNumber(min,max) //!!! .innerHTML виконає "<input>" тобто він може виконати будь який тег,напр.(<script>)-це небезпечно. Тому безпечніше використовувати .innerText(він заблокує аналіз розмітки і виведе <input>)
//   divEl.innerText = "<input>";
divEl.innerText = getRandomNumber(min, max);
  return divEl;
}
function generateDivList(divNum=4,containerSelector) {
	const container = document.querySelector(containerSelector)
	for (let i = 0; i < divNum; i++) {
		const div = createRandomDiv();
		container.append(div)
	}
}
//--
generateDivList(4,'#myContainer') // !!! коли звертаємось до ID пишемо #
 */

// =======================================================

// Задача 2. Створити таблицю з 3 рядками і 4 стовпцями з рандомними числами
// function getRandomNumber(min = 1, max = 100) {
//   return min + Math.floor(Math.random() * (max - min + 1));
// }
// function createTable(rowNum, colNum) {
//   const tableEl = document.createElement("table");
//   for (let i = 0; i < rowNum; i++) {
//     const rowEl = document.createElement("tr");
//     for (let j = 0; j < colNum; j++) {
//       const colEl = document.createElement("td");
//       colEl.innerText = getRandomNumber();
//       // colEl.style.border = "1px solid black";
//       // colEl.style.padding = "5px";
// 		colEl.style.cssText = "padding:5px;border:1px solid black;"; //!прописуємо стилі за доп. cssText
//       rowEl.append(colEl);
//     }
//     tableEl.append(rowEl);
//   }
//   return tableEl;
// }
//--
// document.body.prepend(createTable(3, 4));// вставить таблицю перед <div class="wrapper">
// document.body.append(createTable(3, 4));// вставить таблицю після <div class="wrapper">

// console.log(createTable(3, 4));
// const container = document.getElementById('myContainer') // 2.знаходимо базовий елемент орієнтир
// container.append(createTable(3,4))  // 3.вставляємо створений елемент
// ===================================================================

// getComputedStyle(elem,[pseudo]) - pseudo -дає можливість отримати властивості псевдоелемента
// getComputedStyle(myDiv)

// ===================================================================

//!!!myDiv.classList.toggle()
// const myDiv = document.getElementById('my')
// setInterval(() => {
// 	myDiv.classList.toggle('selected') // toggle-динамічно додаємо/видаляємо класи(якщо класу немає-додає, якщо клас є-видалить)
// }, 1000);

// ============== .setAttribute(name,value) =====================================================

// Задача. Input спочатку з атрибутом type="text", а через 3 секунди "number"
// const inp=document.querySelector('input')
// inp.setAttribute('type','text')
// setTimeout(() => {
// inp.type = 'number' // можна звернутись, як до властивості
// 	inp.setAttribute("type", "number");
// }, 3000);
// ===================================================================
// ------
// window.onload = function (){
// 	alert('Hello')
// }
//!-----події миші
// | Подія         | Опис                                                          |
// | ------------- | ------------------------------------------------------------- |
// | `click`       | Одинарний клік (натискання і відпускання кнопки миші)         |
// | `dblclick`    | Подвійний клік                                                |
// | `mousedown`   | Натискання кнопки миші                                        |
// | `mouseup`     | Відпускання кнопки миші                                       |
// | `mousemove`   | Рух миші над елементом                                        |
// | `mouseenter`  | Наведення миші на елемент (без врахування дочірніх елементів) |
// | `mouseleave`  | Вихід миші за межі елемента (без врахування дочірніх)         |
// | `mouseover`   | Наведення миші на елемент (включає дочірні елементи)          |
// | `mouseout`    | Вихід миші з елемента (включає дочірні елементи)              |
// | `contextmenu` | Виклик контекстного меню (правий клік)                        |

//!-----події клавіатури
// keydown – виникає при натисканні клавіші (утримування також викликає повторні події).

// keypress (застаріла) — виникає, коли натиснуто клавішу, яка призводить до введення символу. Використовувати не рекомендується.

// keyup – виникає при відпусканні клавіші.
// Властивості події:
// event.key— повертає символ або назву клавіші (наприклад: "a", "Enter", "ArrowUp").

// event.code- Фізичний код клавіші (наприклад: "KeyA", "Digit1").

// event.ctrlKey, event.shiftKey, event.altKey, event.metaKey— показують, чи була натиснута відповідна клавіша-модифікатор.

// event.repeat— true, якщо подія повторюється при утриманні клавіші.

//!----події елемента
// | Тип події   | Опис                        | Приклад елемента    |
// | ----------- | --------------------------- | ------------------- |
// | `click`     | Клік мишкою                 | `button`, `div`     |
// | `dblclick`  | Подвійний клік              | `button`            |
// | `mouseover` | Наведення курсору           | `div`, `img`        |
// | `mouseout`  | Вихід курсору               | `div`, `img`        |
// | `mousedown` | Натискання кнопки миші      | будь-який           |
// | `mouseup`   | Відпускання кнопки миші     | будь-який           |
// | `focus`     | Отримання фокуса            | `input`, `textarea` |
// | `blur`      | Втрата фокуса               | `input`, `textarea` |
// | `change`    | Зміна значення              | `input`, `select`   |
// | `input`     | Кожна зміна текстового поля | `input`, `textarea` |
// | `submit`    | Відправка форми             | `form`              |
// | `scroll`    | Прокрутка елемента          | `div`, `window`     |

//===============================================================================
// зміна backgroundColor при кліку
// const inp = document.querySelector('input') // знаходить перший input
// inp.onfocus = function () {
// 	inp.style.backgroundColor = 'red'
// }
// inp.onblur = function () {
// 	inp.style.backgroundColor='green'
// }
//===============================================================================

// Задача. Знайти загальну суму обіду
// ---- напої ---
// • чай -10 грн.
// • сік – 20 грн
// • кава – 35 грн
// -----перше ---
// • суп – 45 грн
// • борщ - 37 грн.
// ---- друге –
// • паста – 60 грн.
// • картопля з катлетою – 55 грн.
// • гречка з грибами – 49 грн.  if (inp.checked)

// function findTotalSum() {
//   const inpList = document.querySelectorAll("input");
//   let sum = 0;
//   for (const inp of inpList) {
//     if (inp.checked) sum += parseFloat(inp.value);
//   }
//   document.getElementById("result").innerText = sum;
// }
// window.onload = function () {
//   document.querySelector("button").onclick = findTotalSum;
// };
//===============================================================================

// Задача. Знайти загальну суму обіду. Вибирається тільки перше і друге

// -----перше ---
// • суп – 45 грн
// • борщ - 37 грн.
// ---- друге –
// • паста – 60 грн.
// • картопля з катлетою – 55 грн.
// • гречка з грибами – 49 грн.  if (inp.checked)

// function findTotalSum() {
//   const selectList = document.querySelectorAll("select");
//   let sum = 0;
//   for (const select of selectList) {
//    sum += parseFloat(select.value);
//   }
//   document.getElementById("result").innerText = sum;
// }
// window.onload = function () {
//   document.querySelector("button").onclick = findTotalSum;
// };
