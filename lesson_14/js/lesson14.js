// cуворий режим
"use strict";

// =========================================================

// ========== ОБ'ЄКТИ =========================

// описати об'єкт книга(піб автора, рік, ціна, кількість сторінок)
// const book = {
//   author: "Ivan",
//   year: 2001,
//   price: 2100,
//   pagesNumber: 43,
// };
// console.log(book); // price: 900

// book.price = 900;
// console.log(book); // price: 900 //ЗАВЖДИ БУДЕ ВИВОДИТИСЬ ОСТАННЄ ЗНАЧЕННЯ!!! Для того, щоб побачити попереднє, потрібно спочатку робити копію об'єкта

// ==========================================================

// описати комп'ютер(частота, фірма, об'єм озу, ціна)

// const laptop = {
// 	friquency: 50000,
// 	company:'Asus',
// 	ram: 233000,
// 	price: 232323,
// }
// console.log(laptop);

// ==========================================================

// Задача.  Описати інформацію про товар
// ----- Властивості ------
// назва товару                title
// виробник                    manufacture
//  - назва підприємства          title
//  - адреса                      address
//       * код                         code
//       * місто                       city
//       * вулиця                      street
//       * номер будинку               number
// кінцевий строк споживання    expDate
//  * рік                         year
//  * місяць                      month
//  * день                        day
// ціна                         price

// const product = {
//   title: "Tea",
//   manufacture: {
//     title: "LG",
//     address: {
//       code: 1232,
//       city: "Texas",
//       street: "Tree Ave",
//       num: 32,
//     },
// 	},
// 	expDate: {
// 	  year: 2034,
// 	  month: 10,
// 	  day: 7,
// 	},
//   price: 1212,
// };

// product.manufacture.address.code = 232323
// console.log(product)

// ==========================================================
// Задача. Дано список книг (назва, автор, рік видання, вартість, кількість одиниць).
// const booksList = [
//   {
//     title: "Title 0",
//     author: "Author 0",
//     year: 2000,
//     price: 2000,
//     count: 100,
//   },
//   {
//     title: "Title 1",
//     author: "Author 1",
//     year: 2001,
//     price: 10000,
//     count: 200,
//   },
//   {
//     title: "Title 2",
//     author: "Author 2",
//     year: 2005,
//     price: 200,
//     count: 20,
//   },
//   {
//     title: "Title 3",
//     author: "Author 3",
//     year: 2010,
//     price: 20000,
//     count: 1,
//   },
// ];

// ====== Оленка купила по одній книжці. Скільки всього заплатила Оленка
//--- з використанянм for-of
// let totalPrice = 0
// for (const book of booksList) {
//   totalPrice += book.price
// }
// document.writeln(totalPrice)
//--- з використанням reduce
// let totalPrice = booksList.reduce(
//   (prevTotalPrice, book) => prevTotalPrice + book.price,
//   0
// )
// document.writeln(totalPrice)

// ======  кількість (найменувань, кількість різних) книг (кількість елементів у масиві)
// const totalBooksNumber = booksList.length
// document.writeln(totalBooksNumber)

// ======  кількість книг (загальна кількість екземплярів (усіх разом не залежно від назви))
// const totalItemsNumber = booksList.reduce(
//   (prevSumNumbers, book) => prevSumNumbers + book.count,
//   0
// )
// document.writeln(totalItemsNumber);

// ======  кількість книг (загальна кількість екземплярів), що було видано після 2000 року
// const bookAfter2000 = booksList.reduce(
//   (prevSumNum, book) => (book.year > 2000 ? prevSumNum + book.count : prevSumNum),
//   0
// )
// document.writeln(bookAfter2000)

// ======  знайти загальну вартість всіх книг (тільки загальна ціна)
// const totalPrice = booksList.reduce(
//   (prevTotalPrice, book) => prevTotalPrice + book.count * book.price,
//   0
// )
// document.write(totalPrice)

// ======  знайти загальну вартість кожної із книг (назва - загальна ціна ----  як текст)
// ---- forEach
// 	booksList.forEach((book) =>
//    document.writeln(`${book.title} - ${book.price*book.count}<br>`)
//  );

// ------- map
// const booksReport = booksList.map(
//   (book) => `${book.title} - ${book.price * book.count}`
// );
// document.writeln(booksReport);

// ------ reduce
// const booksReport = booksList.reduce(
//   (prevInfoList,book) => {prevInfoList.push
//     (`${book.title} - ${book.price * book.count}`)
// 	 return prevInfoList
//   },[]
// );
// document.writeln(booksReport);

// ------ reduce (string)
// const booksReport = booksList.reduce((prevInfoString, book) => `${prevInfoString}<br> ${book.title} - ${book.price * book.count}`, '');
// document.writeln(booksReport);

// ======  знайти загальну вартість кожної із книг (назва і загальна ціна як об"єкт)

// ------- 1-ий варіант запису (скорочений)
//-- якщо стрілкова функція повертає об"єкт, то об"єкт записуємо у круглих дужках
// const newBookslist = booksList.map(
// 	book => ({  // обов'язково загортаємо в круглі дужки, щоб не сприймалося як функція(потрібно створити новий об'єкт)
// title:book.title,
// totalPrice:book.price*book.count
// 	})
// )
// console.log(newBookslist)

// ------- 2-ий варіант запису
// const newBookslist = booksList.map((book) => {
// 	return {
//   title: book.title,
//   totalPrice: book.price * book.count,
// }});
// console.log(newBookslist);

// const bookReportList = booksList.map(
//   (book) => ({    title: book.title,    totalPrice: book.count * book.price, })

// )

//--- якщо вказумєо тіло функції за допопомгою фігурних дужок, тоді після return писати круглі дужки довкола об"єкта не потрібно
// const bookReportList = booksList.map((book) => {
//   return { title: book.title, totalPrice: book.count * book.price }
// })

// console.log(bookReportList)

// ======  визначити, чи є книга, що була видана у 2000 році
// if (booksList.some((book) => book.year === 2000)) alert('Була')
// else alert('Не було')

// ======  визначити, чи усі книги були видані після 2005 року
// if (booksList.every((book) => book.year > 2005)) alert('Була')
// else alert('Не було')

// ======  сформувати список книг, ціна яких менше за 1000 грн
// const newList = booksList.filter((book) => book.price < 1000)
// console.log(newList);

// ======  знайти загальну вартість книг, які було видано у 2000 році
// const total2000 = booksList.reduce(
//   (prevSum, book) =>
//     book.year === 2000 ? prevSum + book.price * book.count : prevSum,
//   0
// )
// document.writeln(total2000)

// ======  знайти першу книгу (адреса об"єкта книги), вартість якої більше за 3000грн
// const firstBook3000 = booksList.find((book) => book.price > 3000) //це адреса елемента з масиву !!!!
// console.log(firstBook3000);

// ======  знайти номер першої книги, вартість якої більше за 3000грн
// const firstBook3000Index = booksList.findIndex((book) => book.price > 3000);
// console.log(firstBook3000Index);

// =========================================================================
// ---------------------  ДОДАВАННЯ ВЛАСТИВОСТЕЙ -----------------------------
// =========================================================================

// const auto = {
// 	model: 'Audi',
// 	price: 23324,
// }
// auto.price = 777
// auto.owner = 'Ivan'
// console.log(auto)

// =========================================================================
// ---------------------  ВИДАЛЕННЯ ВЛАСТИВОСТЕЙ ----------------------------
// =========================================================================

// const auto = {
// 	model: 'Audi',
// 	price: 777,
// 	owner: 'Ivan',
// }
// delete auto.owner
// console.log(auto);

// =========================================================================
// ---------------------  ІСНУВАННЯ ВЛАСТИВОСТЕЙ (in)------------------------
// =========================================================================

// const auto = {
// 	model: 'Audi',
// 	price: 23324,
// }
// auto.price = 777
// auto.owner = 'Ivan'
// // console.log(auto)
// for (const propName in auto) {
//   document.writeln(`${propName} - ${auto[propName]} <br>`);
// model - Audi
//   price - 777;
//   owner - Ivan;
// }

// До кожної властивості додати 10

// const myObj = {
// 	a: 1,
// 	b:2,
// 	c:5,
// }
// for (const propName in myObj) {
// myObj[propName] +=10
// }
// console.log(myObj);

// ==============================================================

// Задача. Дано масив імен. Підхраувати кількість входжень кожного імені за зразком
//  namesNumberObject = {  - масив-результат(спочатку порожній)
//        ‘Ivan’ : 12,
//        ‘Olga’ : 7,
//        ‘Petro’ : 2,
//        ‘John’ : 1,
//   };

// const usersNames = [
//   'Ivan',
//   'Petro',
//   'Olga',
//   'Ivan',
//   'Olga',
//   'Petro',
//   'Olga',
//   'Olga',
//   'Ivan',
//   'Ivan',
//   'Petro',
// ]

// const namesNumberObject = {}
// // // // 1) з використанянм циклу for-of
// for (const name of usersNames) {
//   if (name in namesNumberObject === false) namesNumberObject[name] = 1
//   else namesNumberObject[name] += 1
// }

// for (const propertyName in namesNumberObject) {
//   document.write(
//     `${propertyName}   -  ${namesNumberObject[propertyName]} <br>`
//   )
// }
// console.log(namesNumberObject)
// // 2) з використанням reduce
// let namesNumberObject = usersNames.reduce((prevNamesObj, name) => {
//   if (name in prevNamesObj === false) prevNamesObj[name] = 1
//   else prevNamesObj[name] += 1
//   return prevNamesObj
// }, {})

// for (const propertyName in namesNumberObject) {
//   document.write(
//     `${propertyName}   -  ${namesNumberObject[propertyName]} <br>`
//   )
// }

// ==============================================================

// Дано рядок тексту. Підрахувати кількість входжень кожного символу
// const str = 'Hello'
// const statObj = {
// 	}
// for (const char of str) {
// if(char in statObj)
// 	statObj[char]++
// else statObj[char]=1
// }
// console.log(statObj)

// =========================================================================
// ---------------------  Object.fromEntries() ------------------------
// =========================================================================

// let autoData = [
//   ["model", "Audi"],
//   ["weight", "2100"],
//   ["owner", "Ivan"],
// ];
// let auto = Object.fromEntries(autoData);
// //  |
// // \/
// auto = {
//   model: "Audi",
//   weight: 2100,
//   owner: "Ivan",
// };
// console.log(auto)

// =========================================================================
// --------  {... об'єкт для копіювання} ПОВЕРХНЕВЕ КОПІЮВАННЯ (ОБЕРЕЖНО КОЛИ Є ПОСИЛАННЯ НА ВКЛАДЕНІ МАСИВИ ЧИ ОБ'ЄКТИ)-------------
// =========================================================================
// let student = {
//   firstName: "Ivan",
//   secondName: "Kein",
//   classNumber: 7,
//   scores: [9, 10, 8],
// };
// let student2 = { ...student };

// =========================================================================
// --------  JSON.parse(JSON.stringify(об'єкт для копіювання)) ПОВНЕ КОПІЮВАННЯ -------------
// =========================================================================

// let student = {
//   firstName: "Ivan",
//   secondName: "Kein",
//   classNumber: 7,
//   scores: [9,10,8],
// };

// let student2 = JSON.parse(JSON.stringify(student))
// console.log(student2);

// =========================================================================
// --------  Object.assign(об'єкт куди копіювати, список об'єктів звідки копіювати) -------------
// Якщо назви властивостей співпадають, то значення властивостей перезаписуються
// =========================================================================

// let ob1 = {
//   a: 11,
//   b: 22,
// };
// console.log(ob1); // {a: 11, b: 22}

// let ob2 = {
//   c: 33,
//   d: 44,
// };
// console.log(ob2); // {c: 33, d: 44}

// let ob3 = {
//   ...ob1,
//   ...ob2,
// };
// console.log(ob3); //{a: 11, b: 22, c: 33, d: 44}

// ob1.p = 77; // коли потрібно додати одне поле. В цьому випадку НЕ СТВОРЮЄТЬСЯ НОВИЙ ОБ'ЄКТ
// console.log(ob1);
// ob1 = { ...ob1, r: 88, q: 99 }; // коли потрібно додати багато полів. СТВОРЮЄТЬСЯ НОВИЙ ОБ'ЄКТ
// console.log(ob1);

// =========================================================================

// Задача. Розробити функцію, яка буде аналізувати дані користувача (піб, рік, зар.плата) (перевіряти коректність) , і у якій відсутні значення будуть доповнюватися значеннями параметрів за замовчуванням (використати спред оператор)

// function checkValidity(person) {
//   // переданий об"єкт person ми допомовнили відсутні поля значенням за замовчуванням
//   person = {
//     //--значення за замовчуванням
//     name: "Guest",
//     year: 2024,
//     salary: 10000,
//     //-- реальні значення
//     ...person,
//   };

//   // ......  якісь перевірки
//   return person
// }
// //----------------
// let vasja = {
//   name: "Ivan",
//   salary: 23233,
// };
// vasja = checkValidity(vasja);
// console.log(vasja)

// ==============================================================

// let obj1 = { a: 11, b: 22, c: 88 };
// console.log(obj1);
// // ---- кращий варіант запису
// const { a, c } = obj1;
// // ----- те саме, але довше
// // const a = obj1.a
// // const c = obj1.c;

// console.log(a)
// console.log(c);
// ==============================================================

// let ob1 = { a: 11, b: 22, c: 33 };

// console.log(ob1);

// const { a: myA } = ob1; // після двокрапки вказуємо назву, яку хочемо в програмі далі використовувати

// console.log(myA); // 11
// console.log(a); // a is not defined

// ==============================================================

// Задача. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде місяць через N місяців.
// let userDate = {
//   day: 23,
//   month: 5,
//   year: 2023,
// };
// ------- 1) приймаємо об'єкт
// ------- Math.floor(value - min +N)%(max-min+1) + min

// ------ функція без деструктуризації (передається весь об'єкт)
// function getMonthInN(date, N) {
//   return (Math.floor(date.month - 1 + N) % 12) + 1
// }

// document.writeln(getMonthInN(userDate, 27))

//  ------ з деструктуризацією (беремо тільки ті об'єкти, які потрібно) (беремо тільки місяць - {month})
// ----- 2) з об'єкта беремо тільки місяць
// function getMonthInN({ month }, N) {
//   return (Math.floor(month - 1 + N) % 12) + 1;
// }
//---
// function getMonthInN({ month:myMonth }, N) {  // також є можливість переназвати
//   return (Math.floor(myMonth - 1 + N) % 12) + 1; // тоді у функції вже використовуємо myMonth
// }
// document.writeln(getMonthInN(userDate, 27));

// const N = parseInt(prompt('N='))
// const shiftedMonth = getMonthInN(userDate, N)
// alert(`Через місяців ${N} буде місяць № ${shiftedMonth}`)

//======================================================================

// Задача. Розробити функцію, яка б генерувала випадковим чином покази годинника (години, хвилини, секунди)
// function getRandomValue(min, max) {
//   return min + Math.floor(Math.random() * (max - min + 1))
// }
// //-------- 1 -- повертаємо як масив
// // function getRandomTime() {
// //   let hours = getRandomValue(0, 11)
// //   let minutes = getRandomValue(0, 59)
// //   let seconds = getRandomValue(0, 59)
// //   return [hours, minutes, seconds]
// // }
// // let [hours, minutes, seconds] = getRandomTime()
// // document.writeln(`${hours} : ${minutes} : ${seconds}`)

// //------ 2 --- повертаємо як об"єкт

// function getRandomTime() {
//   let hours = getRandomValue(0, 11)
//   let minutes = getRandomValue(0, 59)
//   let seconds = getRandomValue(0, 59)
//   return {
//      hours,
//      minutes,
//      seconds
//   }
// }

// //--- Приймаємо об"єкт і потім виводимо власитвості
// let randomTime = getRandomTime()
// document.writeln(
//   `${randomTime.hours} : ${randomTime.minutes} : ${randomTime.seconds}`
// )
// // --- Через деструктуризацію об"єкта одразу отримуємо змінні-властивості зі значеннями
// let { hours, minutes, seconds } = getRandomTime()
// document.writeln(`${hours} : ${minutes} : ${seconds}`)
