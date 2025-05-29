// cуворий режим
"use strict";

// !!!================  DOM, BOM, Document. Події =================================

// коли говоримо про previousElementSibling та nextElementSibling - //! знаходяться в межах одного предка(в межах одного і того самого спільного контейнера)

// <body>  //! parentElement  (element.parentElement)
// <h2>Some header</h2> //! previousElementSibling
// <ol>----------------------------------------------
// <li>00</li>  //! children  firstElementChild      -
// <li>11</li> //! children                          -     element
// <li>22</li> //! children                          -
// <li>33</li> //! children  lastElementChild        -
// </ol>--------------------------------------------
//<div> --------------
// Some content      - //! nextElementSibling
// </div> ------------
// </body>

// ======================================================================================================

// Дано елементи div. При натисненіна "Select" підсвічувати div, у якому знаходяться кнопки зеленою рамкою

// <!-- Приклад 1 -->
// <body>

// 					<div>                 <!-- btn.parentElement -->
// 						<button>1</button> <!-- let btn = document.querySelector('button') -->
// 					</div>
// 					<div>
// 						<span>Hello</span>
// 					</div>
// 					<div>
// 						<button>2</button>
// 					</div>

// 					<strong id="operation">Select</strong>
// </body>

// ---------------------------------------------------------------------------------------------------------

// function selectButtonsContainer() {
// 	const btnList = document.querySelectorAll('button')

// 	for (const btn of btnList) {
// 		btn.parentElement.style.border = '4px solid green'
// 	}
// }

// document.querySelector('strong').onclick = selectButtonsContainer

// ======================================================================================================

// Дано елементи div. Знайти div, в якому span та:
// 1. наступний після нього зафарбувати у червоний колір(фон)
// 2. попередній після нього зафарбувати у зелений колір(фон)

// <!-- Приклад 2 -->
// <body>
// 					<div>        <!-- el.previousElementSibling.style.backgroundColor = 'green'-->
// 						<button>1</button>
// 					</div>
// 					<div>   <!-- const el = document.querySelector('div:has(span)') -->
// 						<span>Hello</span>
// 					</div>
// 					<div>         <!-- el.nextElementSibling.style.backgroundColor = 'red'-->
// 						<button>2</button>
// 					</div>

// 					<strong id="operation">Select</strong>
// </body>
// ---------------------------------------------------------------------------------------------------------

// window.onload = function () {
// 	const el = document.querySelector("div.practice__div:has(span)");

//   if (el.previousElementSibling)
//     el.previousElementSibling.style.backgroundColor = "green";
//   el.nextElementSibling.style.backgroundColor = "red";

// }

//------- //! обов'язково потрібно робити перевірки, інакше звернення буде відбуватися до неіснуючого елемента(null), що призведе до помилки
// window.onload = function () {
//   const el = document.querySelector("div.practice__div:has(span)");

//   if (!el) return;

//   if (el.previousElementSibling)
//     el.previousElementSibling.style.backgroundColor = "green";

//   if (el.nextElementSibling)
//     el.nextElementSibling.style.backgroundColor = "red";
// };

// ======================================================================================================

// ----------- Приклад 3
// Усім дочірнім елементам div зробити зелений фон:
// const el = document.querySelector('div.practice__div')

// console.log(el.children[0].children); // HTMLCollection []
// console.log(el.children[1].children); // HTMLCollection [span]
// console.log(el.children[8].children); // HTMLCollection [div]

// console.log(el.children[8].children[0]); // div -посилання на div

// console.log(el.children); // HTMLCollection(8) колекція елементів(ніби як масив, якщо потрібно звернутися до конкретного елемента: console.log(el.children[0].children))
// for (const btn of el.children) {
// 	btn.style.backgroundColor = 'green'
// }

// el.children[3].style.backgroundColor = 'blue'

// <div class="practice__div">
// 						<button>1</button>
// 						<button><span>2</span></button>
// 						<button>3</button>
// 						<button>4</button>
// 						<button>5</button>
// 						<button>6</button>
// 						<button id="testRed">7</button>
// 						<button>8</button>
//                  	<div>
//                      <div>Ok</div>
//                   </div>
// 					</div>

// <strong id="operation">Select</strong>

//-------------------------------------------------------------------------------------
//* Зафарбувати попередні/наступні

// window.onload = function () {
// const testRed = document.getElementById("testRed");

// function makeRedBackground() {
// 	let btn = testRed

// 	while (btn.nextElementSibling) {
// 		btn = btn.nextElementSibling
// 		btn.style.backgroundColor = 'red'
// 	}
// }

// testRed.onclick = makeRedBackground
// }
// ======================================================================================================

// ----------- Приклад 4
//! Однорядковий сапер.
// Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни(використати атрибути). Спочатку клітинки сірі. При натиснені на клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає - зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.

// function onTdClick(event) {
//   console.log(event); // PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
//   const currentTd = event.target; //! target -посилання на той елемент, який призвів до цієї події
//   console.log(currentTd); // посилання на td, на яку клікнули
//   currentTd.style.backgroundColor = "red";
// }

//----
// !!! 'mine' - це нестандартна властивість, тому звертаємось через .getAttribute()

// function onTdClick(event) {
//   const currentTd = event.target; // той, на який клікнули (поточний)

//   if (currentTd.getAttribute("mine") === "0") {
//     // якщо (tdEl.getAttribute("mine") === "0") - тоді будемо рухатись вперед-назад
//     currentTd.style.backgroundColor = "green";

//     let tdEl = currentTd.previousElementSibling; // беремо посилання на попередній елемент
//     while (tdEl) {
//       // якщо не null(якщо існує)(поки попредній елемент існує)-цикл буде працювати
//       if (tdEl.getAttribute("mine") === "1") break;
//       tdEl.style.backgroundColor = "green"; // тоді у попереднього змінюємо backgroundColor
//       tdEl = tdEl.previousElementSibling; // у tdEl записуємо, по-відношенню до нього, попередній елемент(записали адресу: попередній для поперднього)
//     }
//     //------
//     tdEl = currentTd.nextElementSibling;
//     while (tdEl) {
//       if (tdEl.getAttribute("mine") === "1") break;
//       tdEl.style.backgroundColor = "green";
//       tdEl = tdEl.nextElementSibling;
//     }
//   } else currentTd.style.backgroundColor = "red";
// }
// const tdList = document.querySelectorAll("td");
// for (const tdEl of tdList) {
//   tdEl.onclick = onTdClick; // на кожну td окремо "навісили" функцію onTdClick, коли при натисканні на кожну td викликається ця функція і автоматично через параметр (event) отримує об'єкт події(зберігається вся інформація про подію)
// }

//-----
// function onTdClick(event) {
//   const clickedEl = event.target;
//   if (clickedEl.tagName === "TD") {
//     if (clickedEl.getAttribute("mine") === "0")
//       clickedEl.style.backgroundColor = "green";
//     else clickedEl.style.backgroundColor = "red";
//   }
// }

// document.querySelector("table").onclick = onTdClick;

//!closest =========================================================================

// ------------- Приклад 5
// При кліку на strong зробити для першого вверх батьківського div з класом "section" синій колір

/* <div class="section">
      <h1>General title</h1>
      <div class="section">
        <div>
          <h1>Title 1</h1>
          <p>
            some text some text some text <strong>Click me</strong> some text //! для цього <strong></strong> батькивським елементом є p, але в нього немає класу "section" , тому перейде до "діда"(батьківського елемента p), в нього також немає "section" 
            some text
          </p>
        </div>
      </div>
      <div class="section">
        <div>
          <h1>Title 2</h1>
          <p>some text some text some text some text some text</p>
        </div>
      </div>
    </div>

    <strong id="operation">Select</strong> */

// --------------------

// const el = document.querySelector("strong");
// el.onclick = function () {
//    el.closest(".section").style.backgroundColor = 'blue'
// };

// =========================================================================

// ------------- Приклад 6

// Реалізувати додавання та вилучення задач. (використати closest для пошуку контейнера задачі, що потрібно видалити)

/* <div class="practice__div">
						<h1>Додати задачу</h1>
						<div>
							<div>
								<label>
									Назва задачі
									<input type="text" id="taskTitle" />
								</label>
							</div>
							<div>
								<label>
									Пріоритетність задачі
									<input type="number" id="taskPriority" />
								</label>
							</div>
						</div>
						<button id="addButton">Зберегти задачу</button>
					</div>
					<hr />
					<div id="tasksContainer"></div> */
// -----------
// function deleteTask(event) {
//   //! event -об'єкт події
//   const btn = event.target; // кнопочка, на яку натиснули
//   btn.closest(".taskItem").remove();
// }

// // ---- функція для створення розмітки задачі
// function createTaskItemElement(title, priority) {
//   const containerDiv = document.createElement("div");
//   containerDiv.className = "taskItem";

//   const divInfo = document.createElement("div");
//   divInfo.innerText = `${title} - ${priority}`;

//   containerDiv.append(divInfo);

//   const btn = document.createElement("button");
//   btn.innerText = "Delete";
//   btn.onclick = deleteTask;

//   containerDiv.append(btn);

//   return containerDiv;
// }

// // ---- функція для додавання нової задачі
// function addTask() {
//   const taskTitle = document.getElementById("taskTitle").value;
//   const taskPriority = document.getElementById("taskPriority").value;

//   const taskEl = createTaskItemElement(taskTitle, taskPriority);

//   document.getElementById("tasksContainer").append(taskEl);
// }

// document.getElementById("addButton").onclick = addTask;
// document.getElementById("addButton").onclick = () => alert('test') //!!! коли до одного і того самого елемента ще раз присвоюється onclick інша функція-то попередню(в даному випадку addTask) викидає

//! тобто за допомогою onclick можна прив'язати тільки один обробник

// =============================================================================

//! ======================== EVENTS ===============================

// =============================================================================

//! для того, щоб зробити прив'язку до кількох подій, потрібно використовувати addEventListener(подія, функція__обробник, фаза)

// ------------- Приклад 7

// function f1(ev) {
//   console.log(ev);
//   alert("1111");
// }
// function f2() {
//   alert("222");
// }
// function f3() {
//   alert("333");
// }

// const btn = document.getElementById("btn");
// //--- так можна присвоїти тільки одного обробника
// // btn.onclick = f1
// // btn.onclick = f2
// //---- так можна присвоїти багато обробників
// btn.addEventListener("click", f1);
// btn.addEventListener("click", f2);
// btn.addEventListener("click", f3);

// // викликались всі 3 функції в тому порядку, в якому були додані

// //! removeEventListener - видаляє обробника з елемента
// //--- через 5секунд відклчити обробник f2
// setTimeout(() => {
//   btn.removeEventListener("click", f2);
// }, 5000);

//======================================================

// Об'єкт Event у JavaScript містить інформацію про подію, що відбулася на веб-сторінці. Ось деякі його основні властивості:
// - event.target – елемент, на якому сталася подія.
// - event.type – тип події (наприклад, "click", "keydown").
// - event.currentTarget – елемент, до якого було прив’язано обробник події.
// - event.timestamp – час події у мілісекундах від моменту завантаження сторінки.
// - event.isTrusted – показує, чи була подія викликана користувачем (true) або скриптом (false).

// - event.clientX / event.clientY – координати курсора миші відносно вікна браузера.
// - event.pageX / event.pageY – координати курсора відносно всієї сторінки.
// - event.key / event.code – клавіша, яку натиснув користувач (для подій клавіатури).
// - event.ctrlKey / event.shiftKey / event.altKey – показують, чи були натиснуті відповідні клавіші-модифікатори.
// - event.defaultPrevented – чи була скасована дія за замовчуванням.
// - event.relatedTarget – елемент, з якого або на який перемістився курсор (для подій mouseover / mouseout).
// - event.which – код клавіші або кнопки миші, що була натиснута.

// =============================================================================

//! ======================== CANVAS ===============================
// canvas - це полотно в якому можна виводити геометричні фігури, вставляти фрагменти зображень(HTML-елемент, у якому здійснюємо графічні побудови)
// =============================================================================

// ------------- Приклад 8

// let isActive = false; // змінна, яка містить true/false (прапорець - малювати/ не малювати)
// let x;
// let y;

// ccc.onmousedown = function (e) {
//   isActive = true; // увімкнути режим малювання
//   x = e.clientX; // Отримати клієнтські координати миші
//   н = e.clientY;
// };

// ccc.onmouseup = function (e) {
//   isActive = false; // відімкнути режим малювання
// };

// ccc.onmousemove = function (e) {
//   if (isActive) {
//     // let pos=document.getElementById('ccc').getBoundingClientRect()
//     let pos = this.getBoundingClientRect(); // Отримуємо інформацію про положення елемента(ширина, висота вікна)
//     let cx = document.querySelector("canvas").getContext("2d");
//     cx.beginPath(); //починаємо шлях, який будемо малювати
//     cx.moveTo(x - pos.left, y - pos.top); //малюємо лінію від попередньої точки до поточної
//     x = e.clientX;
//     y = e.clientY;
// 	 cx.lineTo(x - pos.left, y - pos.top);
// 	 cx.stroke()
//   }
// };

//=============================================================================================

// =============================================================================

//! ======================== event.preventDefault() ===============================

// event.preventDefault()—це метод у JavaScript, який використовується для скасування стандартної поведінки події браузера. Наприклад, якщо є форма, яка за замовчуванням надсилається при натисканні кнопки, цей метод може запобігти її відправленню.

// Метод викликається на об'єкті події (event), що передається в обробник подій. Його використання дозволяє змінювати поведінку браузера та керувати взаємодією без необхідності змінювати стандартні налаштування.

// Де використовується?
// - Форми (submit) — запобігає їхньому стандартному надсиланню.
// - Посилання (<a href="#">) — блокує перехід за посиланням.
// - Клавіші (keydown, keypress) — запобігає стандартним діям на натискання клавіш.
// - Контекстне меню (contextmenu) — блокує стандартне контекстне меню.
//----
// - preventDefault() не перериває подальше виконання коду та не зупиняє обробку інших обробників подій.
// - Якщо подія не може бути скасована, виклик preventDefault() не матиме ефекту.

//---приклад:
// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Запобігає стандартній відправці форми
//   console.log("Форма не була відправлена!");
// });


// =============================================================================

// ------------- Приклад 9
// Зробити напис на кнопці, на яку натиснуто, червоним
/* <input type="button" id="myButton" value="press" onclick="myHandler(this)"> */ //! коли викликаємо функцію на елементі onclick="myHandler(this)", то (this)-посилання на той елемент, по-відношенню до якого застосовано обробник

// function myHandler(btn) {
// 	// через btn одержуємо адресу кнопки, на яку натиснуто
// 	btn.style.color = 'red'
// }
//!!! АЛЕ ТАК РОБИТИ НЕ ТРЕБА (безпосередньо в розмітці)
//! правильно: напр.: tdEl.onclick = onTdClick

// =============================================================================

// ------------- Приклад 10
// Підраховуємо кількість кліків
// let num = 0;
// window.captureEvents(Event.CLICK);
// window.onclick = (event) => {
//   num++;
//   click_num.innerText = num;
//   //! заблокувати натиснення на посилання (відміняємо переходу за посиланням)
//   if (event.target.tagName === "A") return false;
// };

// =============================================================================

//! ======================== event.stopPropagation() ===============================
// Метод event.stopPropagation() використовується в JavaScript для запобігання поширенню події вгору або вниз по DOM-дереву. Це означає, що подія не буде передаватися батьківським або дочірнім елементам.

// Коли подія виникає на певному елементі, вона зазвичай проходить через три фази:
// - Захоплення (capturing phase) – подія проходить від кореневого елемента до цільового.
// - Цільова фаза (target phase) – подія досягає цільового елемента.
// - Бульбашкове поширення (bubbling phase) – подія піднімається назад до кореневого елемента.
// Якщо викликати event.stopPropagation(), подія не буде поширюватися далі у фазі захоплення або бульбашкового поширення.

// Важливо:
// - stopPropagation() не зупиняє стандартну дію браузера (наприклад, перехід за посиланням). Для цього використовується event.preventDefault().
// - Якщо потрібно повністю зупинити всі обробники подій на поточному елементі, слід використовувати event.stopImmediatePropagation().

// =============================================================================

// ------------- Приклад 10
// * якщо <script></script> пишемо одразу в HTML(після розмітки)-то звертатись через .getElementById не потрібно.
// * звертаємось одразу myP.onclick

// document.getElementById("myP").onclick = function (e) {
//   alert("p");
//   e.stopPropagation(); //пририняє підняття (спливання, поширення) події до батьківських елментів
// };

//! ======================== Делегування обробки події ===============================
// --- приклад з сапером

// function onTdClick(event) {
//   const currentTd = event.target; // той, на який клікнули (поточний)

//   if (currentTd.getAttribute("mine") === "0") {
//     // якщо (tdEl.getAttribute("mine") === "0") - тоді будемо рухатись вперед-назад
//     currentTd.style.backgroundColor = "green";

//     let tdEl = currentTd.previousElementSibling; // беремо посилання на попередній елемент
//     while (tdEl) {
//       // якщо не null(якщо існує)(поки попредній елемент існує)-цикл буде працювати
//       if (tdEl.getAttribute("mine") === "1") break;
//       tdEl.style.backgroundColor = "green"; // тоді у попереднього змінюємо backgroundColor
//       tdEl = tdEl.previousElementSibling; // у tdEl записуємо, по-відношенню до нього, попередній елемент(записали адресу: попередній для поперднього)
//     }
//     //------
//     tdEl = currentTd.nextElementSibling;
//     while (tdEl) {
//       if (tdEl.getAttribute("mine") === "1") break;
//       tdEl.style.backgroundColor = "green";
//       tdEl = tdEl.nextElementSibling;
//     }
//   } else currentTd.style.backgroundColor = "red";
// }

// //! const tdList = document.querySelectorAll("td");
// //! for (const tdEl of tdList) {
// //!  tdEl.onclick = onTdClick; // на кожну td окремо "навісили" функцію onTdClick, коли при натисканні на кожну td викликається ця функція і автоматично через параметр (event) отримує об'єкт події(зберігається вся інформація про подію)
// //! }

// document.querySelector("table").onclick = onTdClick; //* завдяки делегуванню події, ми прив'язуємо onclick на батьківський елемент, а не на кожну td окремо. Тобто, не потрібно прослуховувати подію на кожному дочірньому елементі окремо

//========================================================================

// <!-- Приклад 12 -->
/* <div>Calculator screen
	<input type="text" id="screen" readonly value="">
</div>
<div id="buttons__container">
	<div>
		<button>1</button><button>2</button><button>3</button>
	</div>
	<div>
		<button>4</button><button>5</button><button>6</button>
	</div>
	<div>
		<button>7</button><button>8</button><button>9</button>
	</div>
	<div>
		<button>0</button>
	</div>
</div> */
//---------------------
// document.getElementById('buttonsContainer').onclick = (event) => {
//   console.log(event.target.tagName);
//   if (event.target.tagName === "BUTTON") {
//     //! обов'язково робимо перевірку(адже, можна клікнути і між кнопками), вказуємо великими літерами tagName
//     document.getElementById("screen").value += event.target.innerText;
//   }
// };
//---------------------
// ==============================================================================
//! ======================== Етапи аналізу події ===============================
// 1 - спуск(capturing stage)
// 2 - досягнення цільового елемента(target stage)
// 3 - підняття (bubbling stage)

// У випадку, якщо треба проаналізувати подію:
// 1 - на етапі спуску необхідно призначити функцію обробник за допомогою методу addEventListener з останнім параметром true
// 2 - на етапі підйому-з останнім параметром false
//---- Визначити етап на якому аналізується подія, можна з використанням властивості :
//! event.eventPhase - (спуск=1, підняття=3)
//--------------------------------------------------------------------
// <!-- Приклад 13 -->
// Створити таблицю. При натисканні на клітинку вміст змінює на червоний колір. Створити клас з грою "Міни". Випадковим чином у двомірному масиві розміщують кнопки, для кожної з яких встановлюється атрибут, що містить 0 - немає, 1 - є міна.

// function f_before(e) {
//   alert("before" + this.tagName + "target=" + e.target.tagName);
// }
// function f_after(e) {
//   alert("after" + this.tagName + "target" + e.target.tagName);
// }

// divv.addEventListener("click", f_before, true);
// divv.addEventListener("click", f_after, false); //false за замовчуванням

// ==================================================================================
//! ======================== Генерування подій ===============================
// За допомогою конструктора Event та методу dispatchEvent можна створювати та запускати власні події . Це корисно для автоматизованого тестування або створення інтерактивних компонентів.
// CustomEvent дозволяє створювати власні події з додатковими даними. Це корисно, коли потрібно передавати специфічну інформацію разом із подією.

// ==================================================================================
//*to render-створити(сформувати)розмітку
// <!-- Приклад 14 -->

// "Вільний велосипед". Дано список учасників велосипедного клубу. Кожен з учасників може залишити вільний велосипед (тоді кількість вільних велосипедів відображається зверху списку) або забрати вільний велосипед (якщо такий є)

// за допомогою класів
// class BicycleManager {
//   constructor(membersList) {
//     this.membersList = membersList;
//     this.bicycleNumber = 0;
//   }

//   renderHeader() {
//     const divEl = document.createElement("div");
//     divEl.innerText = "Кількість вільних велосипедів: ";

//     this.bicycleCountSpan = document.createElement("span"); //*можна закинути прям в this
//     this.bicycleCountSpan.innerText = "0";

//     divEl.append(this.bicycleCountSpan);

//     return divEl;
//   }
//   //----
//   addItem(event) {
//     const customEvent = new CustomEvent("add", {
//       detail: {
//         numBicycle: 1 + Math.floor(Math.random() * 3),
//       },
//       bubbles: true,
//     });
//     console.log(customEvent);
//     event.target.dispatchEvent(customEvent);
//   }
//   //----
//   removeItem(event) {
//     const customEvent = new CustomEvent("remove", {
//       detail: {
//         numBicycle: -(1 + Math.floor(Math.random() * 3)),
//       },
//       bubbles: true,
//     });
//     console.log(customEvent);

//     event.target.dispatchEvent(customEvent);
//   }

//   changeBicycleNumber(event) {
//     this.bicycleNumber += event.detail.numBicycle; // об'єкт події-detail
//     this.bicycleCountSpan.innerText = this.bicycleNumber;
//   }

//   //-------

//   //   renderHeader() {
//   //     const divEl = document.createElement("div");
//   //     divEl.innerText = "Кількість вільних велосипедів";

//   //     const bicycleCountSpan = document.createElement("span"); //*можна закинути прям в this
//   //     bicycleCountSpan.innerText = "0";

//   //     divEl.append(bicycleCountSpan);

//   //     return { divEl, bicycleCountSpan }; //* або зробити функцію незалежною, та повернути об'єктом чи масивом
//   //   }
//   //------

//   renderMemberItem(memberName) {
//     const itemContainerDiv = document.createElement("div");
//     itemContainerDiv.className = "member-item";

//     const nameDiv = document.createElement("div");
//     nameDiv.innerText = memberName;
//     itemContainerDiv.append(nameDiv);

//     const btnsDiv = document.createElement("div");
//     btnsDiv.className = "memberBtns";

//     const btnAdd = document.createElement("button");
//     btnAdd.innerText = "Додати";
//     btnAdd.onclick = this.addItem;
//     btnsDiv.append(btnAdd);

//     const btnRemove = document.createElement("button");
//     btnRemove.innerText = "Забрати";
//     btnRemove.onclick = this.removeItem;
//     btnsDiv.append(btnRemove);

//     itemContainerDiv.append(btnsDiv);

//     return itemContainerDiv;
//   }

//   renderMembersList() {
//     const itemsContainer = document.createElement("div");
//     for (const memberName of this.membersList) {
//       const memberEl = this.renderMemberItem(memberName);
//       itemsContainer.append(memberEl);
//     }
//     return itemsContainer;
//   }

//   renderMembersSection() {
//     const sectionContainer = document.createElement("div");
//     const h1El = document.createElement("h1");
//     h1El.innerText = "Члени клубу велосипедистів:";
//     sectionContainer.append(h1El);

//     const membersListEl = this.renderMembersList();
//     membersListEl.className = "members-list";
//     //  membersListEl.addEventListener("add", () => this.changeBicycleNumber(1));
//     //  membersListEl.addEventListener("remove", () =>
//     //    this.changeBicycleNumber(-1)
//     //  );
//     membersListEl.addEventListener("add", this.changeBicycleNumber.bind(this));
//     membersListEl.addEventListener(
//       "remove",
//       this.changeBicycleNumber.bind(this)
//     );

//     sectionContainer.append(membersListEl);

//     return sectionContainer;
//   }

//   render(containerSelector) {
//     // (containerSelector) - куди саме вставити розмітку
//     const managerContainer = document.createElement("div");

//     // const header = this.renderHeader()
//     // managerContainer.append(header)
//     // ---або вставляємо одразу
//     managerContainer.append(this.renderHeader());
//     managerContainer.append(this.renderMembersSection());
//     if (containerSelector)
//       document.querySelector(containerSelector).append(managerContainer);
//     return managerContainer;
//   }
// }

// const membersList = ["Ivan", "Olga", "Petro", "Oksana"];
// //---1
// // const manager = new BicycleManager(membersList)
// // document.querySelector(".manager-selector").append(manager.render());
// //---2
// // const manager = new BicycleManager(membersList).render()
// // document.querySelector('.manager-selector').append(manager)
// //---3
// const manager = new BicycleManager(membersList);
// window.onload = function () {
//   manager.render(".manager-selector");
// };

//---- за допомогою функцій

// const membersList = ["Ivan", "Olga", "Petro", "Oksana"];

// function actionFunc(actionType) {
//   const myEvent = new CustomEvent("member__action", {
//     detail: {
//       type: actionType,
//     },
//     bubbles: true,
//   });
//   this.dispatchEvent(myEvent);
// }

// function createMemberElement(memberName) {
//   const container = document.createElement("div");
//   container.className = "memberItem"
//   //   const containerDiv = document.createElement("div");
//   //   containerDiv.className = "taskItem";

//   const spanEl = document.createElement("span");
//   spanEl.innerText = memberName;
//   container.append(spanEl);

//   const btnAdd = document.createElement("button");
//   btnAdd.innerText = "Залишити";
//   btnAdd.onclick = actionFunc.bind(btnAdd, "add"); // фіксуємо значення actionType = 'add'
//   // btnAdd.onclick = () => actionFunc('add') // альтернативний варіант
//   container.append(btnAdd);

//   const btnGet = document.createElement("button");
//   btnGet.innerText = "Забрати";
//   btnGet.onclick = actionFunc.bind(btnGet, "get"); // фіксуємо значення actionType = 'get'
//   // btnGet.onclick = () => actionFunc('get') // альтернативний варіант
//   container.append(btnGet);

//   return container;
// }

// membersList.forEach((name) => {
//   const memberEl = createMemberElement(name);
//   document.getElementById("members__container").append(memberEl);
// });

// document
//   .getElementById("members__container")
//   .addEventListener("member__action", (e) => {
//     const countEl = document.getElementById("bicycle__count");
//     let currentBicycleNumber = parseInt(countEl.innerText);

// 	 if (e.detail.type === "add") {
//      currentBicycleNumber += 1;
//    } else if (e.detail.type === "get" && currentBicycleNumber > 0) {
//      currentBicycleNumber -= 1;
//    }

//    countEl.innerText = currentBicycleNumber;
// 	});
// ===================================================================


