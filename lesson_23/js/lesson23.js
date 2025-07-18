// cуворий режим
"use strict";

let r = new Date();
console.log(r);

const d1 = new Date();

console.log(d1.getFullYear()); //2025

console.log(d1.getMonth()); //6

console.log(d1.getMilliseconds()); //916

console.log(d1.getTime()); //1751808752774

console.log(d1.setDate(5000)); //2183294454540

console.log(d1); //Wed Mar 09 2039 15:40:41 GMT+0100 (за центральноєвропейським стандартним часом)

//-----

const d2 = new Date();

d2.setDate(d2.getDate() + 56);
console.log(d2); //Sun Aug 31 2025 15:43:18 GMT+0200 (за центральноєвропейським літнім часом)
//-------------

// Задача №1. Визначити привітання у залежності від часу доби(Доброго дня(до 16), Доброго ранку(до 11), Доброго вечора)

// function getGreeting() {
//   const currentDate = new Date();

//   const currentHours = currentDate.getHours();

//   let res;

//   if (currentHours < 11) res = "Доброго ранку";
//   else if (currentHours <= 16) res = "Доброго дня";
//   else res = "Доброго вечора";

//   return res;
// }

// document.writeln(getGreeting());

//---------

// Задача №2. Вивести дату у форматі:(місяць-рік-вихідний/робочий)

// function isWorkingDay(date) {
//   const day = date.getDay(); // 0-це неділя
//   return day > 0 && day < 6;
// }
// function getFormattedDate(date) {
//   const dayLabel = isWorkingDay(date) ? "робочий" : "вихідний";
//   const month = date.getMonth();
//   const year = date.getFullYear();

//   return `${month+1} - ${year} = ${dayLabel}`;
// }

// document.writeln(getFormattedDate(new Date()));

//-----------------

// Задача №3. Користуач іде у відпустку на 56 днів. Визначити дату на момент його повернення

// function getReturnDate(holidayDaysNumber) {
//   const currentDate = new Date()
//   currentDate.setDate(currentDate.getDate() + holidayDaysNumber); // setDate()-дні

//   return currentDate
// }

// document.writeln(getReturnDate(56).toLocaleDateString('uk-UA'))

//------------------

// Задача №4. Задаємо користувачу задачу з додавання двох чисел. Визначити скільки секунд було використано для розв'язання задачі.

// function getSecondsForAnswer() {
// 	const start = new Date()
// 	const res = parseInt(prompt('1212+333545=?'))
// 	const end = new Date()
// 	const seconds = (end-start)/1000 // оскільки в мілісекундах, ділимо на 1000
// 	document.writeln(`Ви витратили на обчислення ${seconds}`)
// 	return res
// }

// getSecondsForAnswer()

//---------- ЗБЕРІГАННЯ ДАНИХ У БРАУЗЕРІ (на стороні клієнта) --------------------

// Задача №1. Зберігати ім'я користувача при заході на сайт та кількість відвідувань (localStorage)

// function visitsCounter() {
//   let userName = localStorage.getItem("userName");
//   let visitsNumber;

//   if (userName) {
//     visitsNumber = parseInt(localStorage.getItem("visitsNumber"));
//     visitsNumber++;
//     localStorage.setItem("visitsNumber", visitsNumber);
//   } else {
//     userName = prompt("Name: ");
//     visitsNumber = 1;
// 	 localStorage.setItem('userName', userName)
// 	 localStorage.setItem('visitsNumber', visitsNumber)
//   }
//   document.writeln(`${userName} - ${visitsNumber}`)
// }

// visitsCounter()

//---------------------------------------

//* 1:16 - window.addEventListener('storage', onChangeStorage) зміна мови/валюти на всіх вкладках

//---------------------------------------

//*-------------- РЯДКИ. РЕГУЛЯРНІ ВИРАЗИ --------------

// Задача №1.
// let h = 3;
// let m = 5;
// let time = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`; // при використанні padStart() обов'язково спочатку потрібно пертворити в рядочок toString()
// document.writeln(time)

//---------------------------------------

// Задача №2. Дано адресу сайту. Перевірити, чи є він з шифруванням(починається з "https")
// let url = "Https://test.test";
// if (url.toLocaleLowerCase().startsWith("https")) alert("ok");
// else alert("Danger");

//---------------------------------------

// Задача №3. Дано номер телефоную Перевірити, чи є цей телефон телефоном з України (починається на "+38")

// const phone = "+380506667788";
// document.writeln(phone.startsWith("+38") ? "ua" : "Other");

//---------------------------------------

//* ===================== РЕГУЛЯРНІ ВИРАЗИ (RegExp)======================================
// Дозволяють описувати шаблони фрагментів тексту
// /шаблон/ модифікатори
//*2:03
// Приклад

// const s = "Я купив 12 кг.цукерок, а мій сусід - 23. А моя сестра 211";
// console.log(s.match(/\d/g)); // (7) ['1', '2', '2', '3', '2', '1', '1']
// console.log(s.match(/\d+/g)); // (3) ['12', '23', '211']

//------------ test, search, match -----------------
// Дано номер телефоную Перевірити, чи є цей телефон телефоном з України (починається на "+38")

// const phone = "+380506667788";
// document.writeln(/\+38/.test(phone) ? "ua" : "Other");

// const phone = "333333+380506667788";
// document.writeln(/\+38/.test(phone) ? "ua" : "Other"); //* в цьому випадку знайде всеодно(хоч +38 знаходиться всередині)  і це буде неправильно

// const phone = "333333+380506667788";
// document.writeln(/^\+38/.test(phone) ? "ua" : "Other"); 
//------------------- квантифікатори -----------------------------
// let text = 'Номер мого авто АО1234ВВ. Мені 21 рік.'
// повинен містити один з вказаних символів(вказуємо в квадратних дужках): /[аоуиіе]/.test(text) //true
//--
// хоча один не з вказаних символів /[^список символів]/
//---
// символи з діапазону [start-end]
//---
// не лише символи з діапазону [^ start-end]
//---
//альтернативні варіанти : /(red|green)/  // через або
// .(крапка)-це будь-який символ
//---
// \d  - довільна цифра(0-9)
// text.match(/\d/g)
//---
// \D -- не цифра
// \w - буква(латинського алфавіту), цифра, символ нижнього підкреслювання(A-Z,a-z,0-9)
// \W - не буква, не цифра, не символ нижнього підкреслювання
// + -- принаймні одне входження(попереднього символу) кіл-ть >=1
// "*" -- довільна кількість або відсутність(попереднього символу) >=0 (зірочка відноситься до символу, після якого поставлена) /lo*/g -- або l або lo
// "?" -- входить один раз або відсутність 0<= кількість <=1
// рівно n символів(кількість n) {n}
// не менше n символів (кількість >=0) {n,}
//від n до m n<=кількість<=m {n,m}

//------------ Позиція фрагмента пошуку(початок, кінець) -----------------
// початок рядка "^" (якщо в квадратних дужках[^_ _ _]-шукаємо все, крім цих символів)
//кінець рядка"$"
//початок або кінець слова "\b"
//не початок або кінець слова "\B"

//===========================================================================

// const s ='vlfdvlkjkvj65656 5454kg'
// console.log(s.match(/\d{4}/g)) // (2) ['6565', '5454']
// console.log(s.match(/\d{5}/g)) // ['65656']

// const s2 = "vlfdvlkjkvj23 3323kg 45";
// console.log(s2.match(/\d{2}/g)) // \d{2} - 2 цифри (4) ['23', '33', '23', '45']
// console.log(s2.match(/\b\d{2}/g))  //початок або кінець слова "\b"("відсіялись") (2) ['33', '45']
// console.log(s2.match(/\b\d{2}\b/g))  //початок або кінець слова "\b"("відсіялись")['45']

// console.log(s2.match(/\b\d+/g))  //(2) ['3323', '45'] "+" -- кіл-ть цифр  >=1

// const s3 = "2323 vlfdvlkjkvj23 3323kg 45";
// console.log(s3.match(/\b\d+/g))  // (3) ['2323', '3323', '45'] "+" -- кіл-ть цифр  >=1
// console.log(s3.match(/\B\d+/g))  // не початок або кінець слова "\B" (4) ['323', '23', '323', '5']
// console.log(s3.match(/\b\d+$/g))  // довільна кількість цифр, знаходиться в кінці($) ['45']

//===========================================================================
// Задача. Визначити чи може бути рядок тексту номером банківської картки(приклад:"4142-3433-2323-3434")
// const a = 'myCard:1234-1234-1234-1234 ndvjkdsnj'
// console.log(a.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)); //['1234-1234-1234-1234']
//----
//Задача. Дано адресу сайту. Визначити, чи є він урядовим(містить домен "gov")

// /^https?:\/\//
//*2:44
//---
//Задача. Вибрати усі роки після 2021 року з отриманого повідомлення(чотири цифри)
// /202[2-9]/
// /20[3-9]\d/-якщо роки від 2030, а потім будь-яка цифра(\d)
// let myText = 'aaaa 2000 bbbbb 2024 ccccc 2030 vvv 2029 fff'
// let res = myText.match(/20[3-9]\d|202[2-9]/g)
// console.log(res)  //(3) [' 2024', '2030 ', ' 2029']

//===========================================================================

//* Робота з групами (дозволяють групувати окремі фрагменти рядка)
//*2:50

// let str = 'He said:"She\'s the one!".';
// let reg = /(['"])(.*?)\1/g; // всередині регулярного виразу посилаємось на групи / ..../g
// // []-це один із символяв регулярного виразу:або лапка одинарна, або подвійна
// // (['"]) - круглі дужки означають, що це група(нумерується від 1)
// // "." - довільний символ 
// // "*" - символів може бути довільна кількість >=0
// // "\1" - фрагмент, який відповідає групі під номером 1
// console.log(str.match(reg)) //[`"She's the one!"`]

//=========================================================================
//* Робота з групами (позиція фрагменту у залежності від розташування інших фрагментів)
//*3:05

//*1. Перевірка валідності email-адреси

// function isValidEmail(email) {
//   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return regex.test(email);
// }
// //---
// console.log(isValidEmail("user@example.com")); // true

//* 2. Перевірка номера телефону () "+380123456789", "(123) 456-7890", "12345678922";

//-----
// function isValidPhone(phone) {
//   const regex =
//     /^\+?(?:\d{1,3})?[-.\s]?  (\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
//   // ^ -- Початок рядка
//   // \+? -- Необов’язковий знак «+». \+ — екранування плюса, ? — означає, що він може бути або не бути
//   // (?:\d{1,3})? -- "?:" - групуємо, але не запам'ятовуємо. Необов’язкова група з 1–3 цифр. (?:...) — незахоплююча група, тобто вона не зберігається як окрема частина в результатах
//   // [-.\s]? -- Один необов’язковий роздільник: дефіс (-), крапка (.), або пробіл (\s)
//   // (\(\d{3}\)|\d{3}) -- або з дужками або без дужок: "\(\d{3}\)" "\d{3}" Захоплююча група з 6 цифр (3 + 3)
//   // [-.\s]? --  Знову необов’язковий роздільник
//   // \d{3}  -- Три цифри
//   // [-.\s]? -- Ще один необов’язковий роздільник
//   // \d{4} -- Чотири цифри
//   // $ -- Кінець рядка

//   return regex.test(phone);
// }
// // Приклади
// console.log(isValidPhone("+380123456789")); // true
// console.log(isValidPhone("(123) 456-7890")); // true
// console.log(isValidPhone("12345678922")); // true

// ----------------------------------------------------
//*3. Перевірка пароля (складність)
//Перевірити, чи пароль містить принаймні 8 символів, включаючи великі літери, малі літери, цифри та спеціальні символи
//-----
// function isValidPassword(password) {
//   const regex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   // ^ -- Початок рядка
//   // (?=.*[a-z]) -- ".*"  довільна кількість будь-яких символів --  Пароль має містити хоча б одну малу літеру (a–z)
//   // (?=.*[A-Z]) --  Пароль має містити хоча б одну велику літеру (A–Z) окрема частина в результатах
//   // (?=.*\d)-- Пароль має містити хоча б одну цифру (0–9)
//   // (?=.*[@$!%*?&])-- Пароль має містити хоча б один спеціальний символ із набору @$!%*?&
//   // [A-Za-z\d@$!%*?&] --  Пароль може містити тільки літери, цифри та дозволені спецсимволи
//   //   {8,} -- не менше 8 символів
//   // $ -- Кінець рядка

//   return regex.test(password);
// }

// // Приклади
// console.log(isValidPassword("Password123!")); // true
// console.log(isValidPassword("password123")); // false
// console.log(isValidPassword("Pass!1")); // false
// ----------------------------------------------------
//* 4. Витягнення всіх URL із тексту
//-----
// function extractURLs(text) {
//   const regex = /https?:\/\/[^\s/$.?#]\.[^\s]*/g;
//   // /.../g -- Обгортка регулярного виразу з флагом g — означає глобальний пошук (знайти всі збіги, а не лише перший)
//   // https? -- Збіг з http або https. s? — необов’язковий символ s (може бути, а може і не бути)
//   // :\/\/ -- Екранований :// — частина URL після протоколу
//   // [^\s/$.?#] -- Один символ, який не є пробілом або одним із символів /, $, ., ?, #
//   // \. -- (Будь-який символ) крапка
//   // [^\s]* -- Нуль або більше символів, які не є пробілами

//   return text.match(regex) || [];
// }

// // Приклади
// const text =
//   'Visit http://example.com and https://test.org for more info.'
// console.log(extractURLs(text)) // ["http://example.com", "https://test.org"]
// ----------------------------------------------------
//* 5. Заміна всіх чисел у рядку на "***"
// //-----
// function hideNumbers(text) {
//   const regex = /\d+/g
//   return text.replace(regex, '***')
// }
// // Приклади
// console.log(hideNumbers('My phone is 1234567890')) // "My phone is ***"

//* 6. Заміна номера кредитної картки, зберігаючи останні 4 цифри.
// У рядку знайти номер кредитної картки (16 цифр, можливо з пробілами або дефісами, наприклад, 1234-5678-9012-3456) і замінити всі цифри, крім останніх трьох, на символ *. Наприклад, 1234-5678-9012-3456 → ****-****-****-3456.
//-----
// function maskCreditCard(cardNumber) {
//   const regex = /\b(?:\d{4}[-.\s]?){3}(\d{4})\b/g;
//   // \b -- Межа слова — гарантує, що збіг починається на межі (наприклад, після пробілу або на початку рядка)
//   // (?:\d{4}[-.\s]?){3} -- "?:"не запам'ятовує, як групу. Незахоплююча група, яка повторюється 3 рази: \d{4} — чотири цифри; [-.\s]? — необов’язковий роздільник: дефіс, крапка або пробіл
//   // (\d{4}) -- Захоплююча група — останні чотири цифри
//   // \b -- Межа слова — кінець збігу

//   return cardNumber.replace(regex, "****-****-****-$1 ");
//   // "****-****-****-" -- маскує перші 12 цифр
//   // $1 -- - вставляє захоплену групу №1 з регулярного виразу
//   //     -- Пробіл в кінці — просто додається до результату
// }

// // Приклади
// console.log(
//   maskCreditCard(
//     "Для оплати за номером 1234-5678-9012-3456 потрібно заплатити 20000грн."
//   )
// ); // ****-****-****-3456
// console.log(maskCreditCard("1234567890123456")); // ****-****-****-3456
// console.log(maskCreditCard("1234 5678 9012 3456")); // ****-****-****-3456
// console.log(maskCreditCard("1234.5678.9012.3456")); // ****-****-****-3456

// ----------------------------------------------------

// ----------------------------------------------------
//* 7. Перевірка валідності дати (DD-MM-YYYY)
//-----
// function isValidDate(date) {
//   const regex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/
//   return regex.test(date)
// }

// // Приклади
// console.log(isValidDate('31-12-2023')) // true
// console.log(isValidDate('32-12-2023')) // false
// console.log(isValidDate('15-13-2023')) // false
// ----------------------------------------------------
//* 8. Видалення HTML-тегів із рядка
//-----
// function stripHTML(html) {
//   const regex = /<[^>]+>/g
// /.../g -- Регулярний вираз з флагом g — глобальний пошук (знайти всі збіги)
// < -- Початок HTML-тега
// [^>]+ -- Один або більше символів ("+"), які не є >: [^>] — будь-який символ, крім > --
// ( [...] — символьний клас, тобто набір символів, з яких можна вибрати один
// [^...] — негативний символьний клас (тобто виключення): вибирає будь-який символ, який не входить у вказаний набір
//  > — символ, який ми виключаємо); + — один або більше таких символів 
// > -- Кінець HTML-тега
//   return html.replace(regex, '')
// }

// // Приклади
// console.log(stripHTML('<p>Hello, <b>world</b>!</p>')) // Hello, world!
// console.log(stripHTML('<div>Test <span>123</span></div>')) // Test 123
// console.log(stripHTML('No tags here')) // No tags here
// ----------------------------------------------------
//* 9. Перевірка валідності HEX-коду кольору
// Валідним HEX-кодом кольору (наприклад, #FF0000 або #F00).
//-----
// function isValidHexColor(color) {
//   const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
//   return regex.test(color)
// }

// // Приклади
// console.log(isValidHexColor('#FF0000')) // true
// console.log(isValidHexColor('#F00')) // true
// console.log(isValidHexColor('#GG0000')) // false
// console.log(isValidHexColor('FF0000')) // false
// ----------------------------------------------------
//* 10. Заміна всіх повторюваних пробілів на один
//-----
// function normalizeSpaces(text) {
//   const regex = /\s+/g
//   return text.replace(regex, ' ').trim()
// }

// // Приклади
// console.log(normalizeSpaces('Hello   world!')) // Hello world!
// console.log(normalizeSpaces('Test    123     spaces')) // Test 123 spaces
// console.log(normalizeSpaces('NoSpaces')) // NoSpaces
// ----------------------------------------------------
//* 11. Витягнення всіх хештегів із тексту (наприклад, #javascript, #coding)
//-----
//   function extractHashtags(text) {
//     const regex = /#\w+/g
// Один або більше словникових символів:– \w включає: латинські літери (a–z, A–Z), цифри (0–9), та підкреслення _<br>– + означає один або більше таких символів
//     return text.match(regex) || []
//   }

//   // Приклади
//   console.log(extractHashtags('I love #javascript and #coding!')) // ["#javascript", "#coding"]
//   console.log(extractHashtags('No hashtags here')) // []
//   console.log(extractHashtags('#test #123 #code')) // ["#test", "#123", "#code"]