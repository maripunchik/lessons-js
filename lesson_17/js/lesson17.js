// cуворий режим
"use strict";

//======================================================
// !!! Статичні елементи належать класу, а не об'єкту, тому, відповідно, вони спільні для всіх об'єктів
//======================================================

// class Time {
// 	constructor(h,m){
// 		this.h=h
// 		this.m=m
// 	}
// 	toString(){
// 		return `${this.h}:${this.m} <br>`
// 	}
// }

// const t1= new Time(3,12)
// const t2= new Time(13,32)
// document.writeln(t1) // 3:12
// document.writeln(t2) // 13:32
// t1.h =21
// document.writeln(t1) // 21:12
// document.writeln(t2) // 13:32

//======================================================
//==============//!!! Статичні методи ========================================
//======================================================

// class Time {
// 	static test = 10
// 	constructor(h,m){
// 		this.h=h
// 		this.m=m
// 	}
// 	toString(){
// 		return `${this.h}:${this.m} - ${Time.test}<br>`
// 	}
// }

// const t1= new Time(3,12)
// const t2= new Time(13,32)
// document.writeln(t1) // 3:12 - 10
// document.writeln(t2) // 13:32 - 10
// console.log(t1)
// console.log(t2);
// t1.test =90
// document.writeln(t1); // 3:12 - 10
// document.writeln(t2); // 13:32 - 10
// console.log(t1);
// // Time
// // h:3
// // m:12
// // test:90
// // [[Prototype]]:Object
// // constructor: class Time test:10
// console.log(t2);

// Time.test = 90; // !!!
// document.writeln(t1); // 3:12 - 90
// document.writeln(t2); // 13:32 - 90
// console.log(t1);
// // Time
// // h:3
// // m:12
// // test:90
// // [[Prototype]]:Object
// // constructor: class Time test:10
// console.log(t2);

// ---------------------------------------

// class Time {
//   static timeType = 24;
//   constructor(h, m) {
//     this.h = h;
//     this.m = m;
//   }
//   get H(){
// 	if(Time.timeType === 24) return this.h
// 	else return this.h % 12
//   }
//   toString() {
//     return `${this.H}:${this.m} - ${Time.timeType}<br>`;
//   }
// }
// const t1= new Time(3,12)
// const t2= new Time(13,32)
// document.writeln(t1) // 3:12 - 24
// document.writeln(t2) // 13:32 - 24

// Time.timeType = 12;
// document.writeln(t1); // 3:12 - 12
// document.writeln(t2); // 1:32 - 12

// ---------------------------------------

// Реалізувати конвертер валют. Курси валют та методи перетворення повинні бути статичними

// class Converter {
// 	static dollarRate = 40
// 	static euroRate = 45
// 	static grnToDollar(grnAmount) {
// 		return grnAmount/Converter.dollarRate
// 	}
// 	static grnToEuro(grnAmount) {
// 		return grnAmount/Converter.euroRate
// 	}
// }
// //---------------------
// const grn = 789000
// document.writeln(Converter.grnToDollar(grn).toFixed(2)) //19725.00

//-----------------------------------------------
// Задача. Статистика методів. Дано клас Масив, який зберігає масив і має методи для знаходження суми, добутку, максимального.
// Користувач може створити довільну кількість об’єктів даного класу. Підрахувати загальну кількість викликів кожного із  методів (незалежно від об’єкта)

// class MyArray {
//   static sumCallCount = 0;
//   static prodCallCount = 0;
//   static maxCallCount = 0;

//   constructor(...items) {
//     this.items = items;
//   }
//   getSum() {
//     MyArray.sumCallCount++;
//     return this.items.reduce((prevSum, el) => prevSum + el);
//   }
//   getProd() {
//     MyArray.prodCallCount++;
//     return this.items.reduce((prevProd, el) => prevProd + el);
//   }
//   getMax() {
//     MyArray.maxCallCount++;
//     return Math.max(...this.items);
//   }
//   static getCallInfo() {
//     return `sum:${MyArray.sumCallCount}, prod:${MyArray.prodCallCount}, max:${MyArray.maxCallCount}`;
//   }
// }
// //------
// const arr1 = new MyArray(10, 20, 30, 40, 50);
// const arr2 = new MyArray(101, 201, 301, 401, 501);
// const arr3 = new MyArray(1, 2, 3, 4, 5);
// //------
// const s1 = arr1.getSum();
// const p1 = arr1.getProd();
// const s2 = arr2.getSum();
// //-----
// document.writeln(MyArray.getCallInfo()); // sum:2, prod:1, max:0

//===========================================================
// --------------//!!!Статичні поля.Singleton (патерн, шаблон проектування)----------------------
//===========================================================
// ---- гарантує, що клас матиме тільки один екземпляр
// ---- забезпечує глобальну точку доступу до цього екземпляра
// ---- через низку притаманних недоліків деякі розробники вважають його антипатерном
//------------------------------------------------------------------

// Черговий. Дано список студентів одного курсу(ПІБ, курс).Розробити менеджер чергових, який дозволяє випадковим чином обирати і запам'ятовувати обраного чергового студента(один раз обрали і не змінюємо)

// class StudentsGroup {
// 	static onDutyStudent
// 	constructor(...students) {
// 		this.students = students
// 		if(!StudentsGroup.onDutyStudent)
// 			StudentsGroup.onDutyStudent = this.getRandomStudend()
// 	}
// 	getRandomStudend() {
// 		const randIndex = Math.floor(Math.random()*this.students.length)
// 		return this.students[randIndex]
// 	}
// 	toString(){
// 		return `студенти: ${this.students}, черговий: ${StudentsGroup.onDutyStudent}<br>`
// 	}
// }
// //-----
// const gr1 = new StudentsGroup('Ivan','Olga','Jack'); //  студенти: Ivan,Olga,Jack, черговий: Ivan
// const gr2 = new StudentsGroup("Ivan2", "Olga2", "Jack2"); // студенти: Ivan2,Olga2,Jack2, черговий: Ivan

// document.writeln(gr1)
// document.writeln(gr2);
// ===================================================
//  щоб кожна група мала свого власного чергового зі свого списку , треба зробити onDutyStudent звичайною (нестатичною) змінною:
// ==================================================
// class StudentsGroup {
//   constructor(...students) {
//     this.students = students;
//     this.onDutyStudent = this.getRandomStudent(); // Кожна група має власного чергового
//   }

//   getRandomStudent() {
//     const randIndex = Math.floor(Math.random() * this.students.length);
//     return this.students[randIndex];
//   }

//   toString() {
//     return `студенти: ${this.students.join(", ")}, черговий: ${
//       this.onDutyStudent
//     }<br>`;
//   }
// }
// =======================================================

// Сервер баз даних (адреса, порт). Можна створити тільки одне з'єднання

// class Server{
// 	static connectionServer
// 	constructor(address, port){
// 		if(Server.connectionServer) return Server.connectionServer
// 		this.address = address
// 		this.port =port
// 		Server.connectionServer = this
// 	}
// 	disconect(){
// 		Server.connectionServer=null
// 	}
// 	send(msg){
// console.log(
//   `${Server.connectionServer.address}: ${Server.connectionServer.port}-${msg}`
// );
// 	}
// 	toString(){
// 		return `Current server : ${Server.connectionServer.address}: ${Server.connectionServer.port}<br>`
// 	}
// }
// //---------
// function sendMessage(msg) {
// 	const connection = new Server("https://aaaa.com", "8081")
// 	connection.send(msg)
// }

// function sendWarning(msg) {
//   const connection = new Server("https://bbbb.com", "8085");
//   connection.send(msg);
// }
// //------
// sendMessage('1111') // https://aaaa.com: 8081-1111
// sendWarning('22222') // https://aaaa.com: 8081-22222
// ---------
// const conection1 = new Server('https://aaaa.com', '8081')
// const conection2 = new Server("https://bbbb.com", "8085"); //!!! Current server : https:\aaaa.com: 8081
// document.writeln(conection2)
//---------
// const conection1 = new Server("https://aaaa.com", "8081"); // Current server : https:\aaaa.com: 8081
// document.writeln(conection1);
// conection1.disconect(); //!!!
// const conection2 = new Server("https://bbbb.com", "8085"); // Current server : https:\bbbb.com: 8085
// document.writeln(conection2);

//==================================================================================
//===================== //!!!КОМПОЗИЦІЯ, АГРЕГАЦІЯ =====================================
//==================================================================================
// Композиція та агрегація — це два важливі принципи в об'єктно-орієнтованому програмуванні (ООП), які можна реалізовувати і в JavaScript. Вони описують відносини між об'єктами.
//---
// 🔹 Композиція (Composition)(це має сенс тільки тут) Якщо об'єкт створюється всередині constructor()-це одразу ознака того, що це є композиція
// Композиція це коли один об'єкт вміщує інший і повністю відповідає за його життєвий цикл(частина цілого). Якщо "власник" знищується — з ним знищуються всі його частини.
// 📌 Ключова ознака: сильна залежність.
//---
// 🔹 Агрегація (Aggregation)(принцип включення, цільовий об'єкт отримує адресу об'єктів компонентів, при знищенні цільового об'єкта, об'єкти компоненти можуть продовжувати своє незалежне існування(між об'єктами класів не існує зв'язку за часом існування))
// Агрегація — це слабка форма зв'язку .
// 📌 Ключова ознака: слабка залежність.
//---

// ----------------------------------------------
// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, філтрація за назвою товару, фільтрація за назвою фірми

// class Product {
// 	constructor(title, count, company) {
// 		this.title=title
// 		this.count = count
// 		this.company = company
// 	}
// 	toString() {
// 		return ` ${this.title} : ${this.count}, ${this.company}`
// 	}
// }
// //---
// class Store {
// 	constructor(title){
// 		this.title = title
// 		this.productsList =[]
// 	}
// 	addProduct(newProd){
// 		this.productsList.push(newProd)
// 	}
// 	removeProduct(productTitleToRemove){
// 		this.productsList = this.productsList.filter((prod)=>prod.title!==productTitleToRemove)
// 	}
// 	printProducts(){
// 		document.writeln(`<h1 class="practice__title">${this.title}</h1>`);
// 		document.writeln('<ol>')
// 		this.productsList.forEach(pr=>document.writeln(`<li>${pr}</li>`))
// 		document.writeln("</ol>");
// 	}
// }
// //---
// const store = new Store('АТБ')
// const pr1 = new Product('Tea',21,'Loware')
// store.addProduct(pr1)
// store.addProduct(new Product("Milk", 50, "Молокія"));
// store.addProduct(new Product("Bread", 28, "Мій хліб"));
// store.printProducts()

// store.removeProduct('Milk')
// store.printProducts();

// ----------------------------------------------
//Команда. Дано список студентів (ім"я, кількість балів). По черзі випадковим чином вибирають дві команди. Виграє той, у кого середній бал менше
//Порівняння статичний метод
// class Student {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }
//   toString() {
//     return `${this.name} - ${this.score}`;
//   }
//   valueOf() {
//     return this.score;
//   }
// }
// //----
// class Team {
//   constructor(initList = []) {
//     this.studentsList = initList;
//   }
//   addStudent(student) {
//     this.studentsList.push(student);
//   }
//   getAverageScore() {
//     return (
//       this.studentsList.reduce((prevSum, stud) => prevSum + stud.score, 0) /
//       this.studentsList.length
//     );
//   }
//   toString() {
//     return this.studentsList
//       .reduce((prevNamesList, stud) => [...prevNamesList, stud.name], [])
//       .join("-");
//   }
// }
// // ----
// class Game {
//   constructor(totalStudentsList) {
//     this.studentsList = totalStudentsList;
//     this.team1 = this.getRandomTeam(); // без цих 2-ох полів class Game не може існувати(принцип композиції)
//     this.team2 = this.getRandomTeam(); // без цих 2-ох полів class Game не може існувати(принцип композиції)
//   }
//   getRandomTeam() {
//     const randList = [];
//     this.studentsList.forEach((stud) => {
//       if (Math.random() > 0.5) randList.push(stud);
//     });
//     return new Team(randList);
//   }
//   getWinnerTeamNumber() {
//     if (this.team1.getAverageScore() < this.team2.getAverageScore()) return 1;
//     else if (this.team2.getAverageScore() < this.team1.getAverageScore())
//       return 2;
//     return 0;
//   }
//   toString() {
//     return `Team1: ${this.team1},<br>Team2: ${this.team2}<br>`;
//   }
// }
// // ---
// const studentsList = [
//   new Student("Olga", 4),
//   new Student("Ivan", 10),
//   new Student("Peter", 7),
//   new Student("Maria", 8),
//   new Student("Sidor", 12),
//   new Student("Luck", 6),
// ];

// const game = new Game(studentsList);
// document.writeln(game)
// document.writeln(`Виграла команда: ${game.getWinnerTeamNumber()}`);


