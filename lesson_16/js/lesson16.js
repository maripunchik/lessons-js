// cуворий режим
"use strict";

//======================================================

// const obj = {
//   a: 11,
//   b: 22,
//   show() { //  show() -це змінна, в якій зберігається адреса функції
//     document.writeln(this.a);
//     console.log(this); // {a: 11, b: 22, show: ƒ}
//   },
// };

// obj.show() // все залежить від того, ЯК викликається функція. Якщо викликаємо функцію через об'єкт(obj.show())-то в цьому випадку obj - це this

// let f = obj.show; // якщо не використовувати "use strict" - (об'єкт Window) Window {window: Window, self: Window, document: document, name: '', location: Location, …} , а інакше- Cannot read properties of undefined (reading 'a')
// f() // а якщо адресу цієї функції записати в якусь змінну і викликати функцію-то this береться з зовнішнього оточення по відношенню до запуску. this буде  Window

// ============================================================

// function test() {
//   console.log(this); // якщо не використовувати "use strict" - (об'єкт Window) Window {window: Window, self: Window, document: document, name: '', location: Location, …} , а інакше-undefined
// }
// test()

// ============================================================
// ----- за допомогою function (буде брати this із зовнішнього оточення Window)
// const obj = {
//   a: 11,
//   getShow() {
//     const show = function () {
//       document.writeln(this.a);
//       console.log(this);
//     };
//     return show;
//   },
// };
// // -------------
// const myShow = obj.getShow()
// // console.log(myShow)
// myShow() // Cannot read properties of undefined (reading 'a')

// ----- за допомогою стрілкової функції(коли описується стрілковою функцією, вона запам'ятовує ДЕ саме вона була описана, тобто всередині об'єкта, вона фіксує контекст опису)
// const obj = {
//   a: 11,
//   getShow() {
//     const show = () => {
//       document.writeln(this.a);
//       console.log(this); // {a: 11, getShow: ƒ}
//     };
//     return show;
//   },
// };
// // -------------
// const myShow = obj.getShow();
// // console.log(myShow)
// myShow(); // 11

// ================= call, apply ============================
// ---- call - параметри треба через кому перераховувати: функція.call(новий контекст, аргумент1, аргумент2,...)
// ---- apply - параметри можна передавати в формі масива: функція.apply(новий контекст, список аргументів)
// ----*змінні повинні однаково називатися, інакше буде undefined
//  const obj1 = {
//    a: 11,
//    b: 22,
//    sum() {
//      return this.a + this.b
//    },
//  };
//  // -------
//  const obj2 = {
//    a: 100,
//    b: 200, // у obj2 немає функції знаходження суми, а ми хочемо скористатися, використовуючи call
//  };
//  // -------
// //  document.writeln(obj1.sum())
// const s2 = obj1.sum.call(obj2) // звертаємося до sum(вона знаходиться у obj1).call(по відношенню до об'єкта obj2) тобто в тебе this буде obj2
// document.writeln(s2);
// =========================================================

// function getSum() {
//   let s = 0;
//   for (let i = 0; i < arguments.length; i++) { // arguments - псевдомасив, де зберігаються значення
//     s += arguments[i];
//   }
//   return s
//   return arguments.reduce((prevSum, el) => prevSum + el); //Uncaught TypeError: arguments.reduce is not a function
//arguments-це НЕ МАСИВ, ми не можемо застосувати reduce

//   return [].reduce.call(arguments, (prevSum, el) => prevSum + el); //reduce візьми від масива і виклич його для arguments
// }

// function getSum(...arr) {
// 	 return arr.reduce((prevSum, el) => prevSum + el);
// }
// const s = getSum(2, 1, 56, 3, 123);
// document.writeln(s);
// =========================================================
// ================= ФІКСУВАННЯ КОНТЕНТА.bind ============================
// =========================================================
// ----- функція.bind(новий контекст)
// ----- bind(зв'язувати)

// let obj1 = {
//   prop1: 11,
//   prop2: 22,
//   showProp1: function() {
// 	document.writeln(this.prop1)
//   },
//   getSum: function(val1, val2) {
// 	return this.prop1 + val1 + val2
//   },
// };

// let func = obj1.showProp1.bind(obj1) // прив'язуємо до obj1(вказуємо ЩО потрібно запам'ятати в якості this, тоді він це запам'ятає і змінювати більше не буде)
// func = func() // 11 // коли будемо цю функцію(як незалежну) десь викликати, вона буде пам'ятати this той, який ми вказали, і втрати контекста більше відбуватися не буде
// ===========================================================

// const obj1 = {
//   a: 11,
//   b: 22,
//   sum() {
//     console.log(this); // {a: 11, b: 22, sum: ƒ}

//     return this.a + this.b;
//   },
// };
// // -------
// const obj2 = {
//   a: 100,
//   b: 200, // у obj2 немає функції знаходження суми
// };
// //  obj2.sum2 = obj1.sum // позичили функцію
// //  console.log(obj2) //{a: 100, b: 200, sum2: ƒ}
// //  document.writeln(obj2.sum2()) //300

// obj2.sum2 = obj1.sum.bind(obj1); // позичили функцію, але прив'язали її до obj1
// console.log(obj2); //{a: 100, b: 200, sum2: ƒ}
// document.writeln(obj2.sum2()); // 33 !!!

// ================================================================================
// ----- currying - створення нових функцій шляхом фіксування параметрів інших функцій
// ================================================================================

// let obj1 = {
//   prop1: 11,
//   prop2: 22,
//   showProp1: function() {
// 	document.writeln(this.prop1)
//   },
//   getSum: function(val1, val2) { // у функції вимагається 2 параметри
// 	return this.prop1 + val1 + val2
//   },
// };

// let func = obj1.getSum.bind(obj1,100); // прив'язуємо до obj1, val1=100(другий параметр фіксуємо)

// func = func(51) // getSum(100, 51) // коли викликаємо функцію вже не потрібно вказувати перший параметр, він вже dind(val1=100)
// func = func(200) // getSum(100, 200) // коли викликаємо функцію вже не потрібно вказувати перший параметр, він вже dind(val1=100)

// ================================================================================

// function example (num1,num2) {
// 	document.writeln(`${num1},${num2}`)
// }

// // example(7,2)
// // example(7, 5);
// // example(7, 7);
// // example(7, 9);

// const f2 = example.bind(null,7)
// f2(2);
// f2(5);
// f2(7);
// f2(9);

// ================================================================================
// ------------------------ ІНКАПСУЛЯЦІЯ -----------------------------------------
// ================================================================================
// ------- приватні поля можуть бути використані тільки всередині інших методів цього ж класу!!!
// -------- імена приватних полів починаються з символу "#"
// ------- для доступу до приватних полів(зчитування та заміна значень) як правило, описують відкриту властивість(набір спеціальних функцій: геттерів і сеттерів з однаковою назвою)
// -------- для отримання значення приватного поля можна використати(не обов'язково) спеціальну функцію геттер
// get назва_відкритої_властивості(){
// ...
// }
// для конторольованої зміни значеень приватних полів (не обов'язково) використовуємо спеціальну функцію сеттер
// set назва_відкритої_властивості(нове_значення_яке_хочемо_збеерегти){
// ...
// }
// -------------------------------------

// const pupil = {
//   age: 10,
//   classNum: 5,
// };

// pupil.age = -10;

// ---------------------------------------
// class Pupil {
//   // --- 1) опис приватних полів
//   #age; // --- ім'я закритого типу
//   constructor(initialAge, minAge = 7) {
//     this.minAge = minAge;
//     // --- 4) У конструкторі початкове значення присвоюємо не напряму у закритее поле, а властивості(буде перевірка)
//     this.Age = initialAge;
//   }
//   // --- 2) метод зчитування значення закритого поля(геттер)
//   //(дозволяє отримати значення закритого поля)
//   get Age() {
//     return this.#age;
//   }
//   // --- 3) метод запису значення закритого поля (сеттер)
//   set Age(newAgeValue) {
//     if (newAgeValue < this.minAge)
//       throw new Error("Значення віку учня некоректне");
//     this.#age = newAgeValue;
//   }
// }
// const p1 = new Pupil(12);
// // let s = p1.Age // для виклику функції не потрібно писати "()" завдяки геттеру(get)
// p1.Age = 20; // Буде викликано set (автоматично)

// ====================================================
// Описати клас подія (назва події (не може бути порожньою), номер дня(має бути робочим днем 1-5))
// ---- якщо не використовувати get
// class MyEvent {
// 	constructor(title, dayNum) {
// this.#title = 'ok'
// 	}
// 	#title
// 	// get Title() {
// 	// 	return this.#title
// 	// }
// }
// const e1 = new MyEvent('Drink coffe',1)
// console.log(e1) // MyEvent {#title: 'ok'}
// console.log(e1.#title); // Свойство "#title" недоступно вне класса "MyEvent", так как оно имеет закрытый идентификатор.(якщо без функції get)
// ---- якщо не використовувати set, а напряму написати title
// class MyEvent {
// 	constructor(title, dayNum) {
// this.#title = title // приватне поле небезпечно напряму писати в constructor
// 	}
// 	#title
// 	get Title() {
// 		return this.#title
// 	}
// 	// set
// }
// // const e1 = new MyEvent('Drink coffe',1)
// const e1 = new MyEvent(" ", 1);// в цьому випадку(якщо забули написати) буде виведена порожня сторінка, тому потрібно писати сеттер!!!

// document.writeln(e1.Title)
// // console.log(e1.Title); // дужки для виклику не потрібно писати
// ---------
// class MyEvent {
//   constructor(title, dayNum) {
//     this.Title = title;
//     this.DayNum = dayNum;
// 	 this.daysTitles = [
// 		"Monday",
// 		"Tuesday",
// 		"Wednesday",
// 		"Thursday",
// 		"Friday",
// 		"Saturday",
// 		"Sunday",
// 	 ];
//   }
//   // ---- назва події
//   #title;
//   get Title() {
//     return this.#title;
//   }
//   set Title(newTitle) {
//     // назва така сама Title!!!
//     // ---- перевірка
//     if (newTitle.length === 0) throw new Error("Назва не може бути порожньою!");
//     // ---- присвоєння
//     this.#title = newTitle;
//   }
//   // ---- номер дня
//   #dayNum;
//   get DayNum() {
//     return this.daysTitles[this.#dayNum - 1];
//   }
//   set DayNum(newDay) {
//     // --- перевірка
//     if (newDay < 1 || newDay > 5) throw new Error("День має бути робочим!");
//     // --- присвоєння
//     this.#dayNum = newDay;
//   }
//   toString() {
//     return `${this.DayNum}:${this.Title}`;
//   }
// }
// // ---- пишемо код, який може спровокувати помилку, і ми знаємо, що при виконанні команд може статися помилка(тоді ми пишемо їх всередині try-catch):
// try {
//   const e1 = new MyEvent("Drink coffe", 3); // Drink coffe Bye!
//   //   const e1 = new MyEvent("Drink coffe", -1); // День має бути робочим! Bye!(від'ємне значення)

//   //   const e1 = new MyEvent("", 1); // якщо без try-catch- Error: Назва не може бути порожньою!
//   //  at set Title (lesson16.js:270:38)
//   //  at new MyEvent (lesson16.js:261:16)
//   //  at lesson16.js:276:12
//   // set не допустив присвоєння некоректного значення
//   //   document.writeln(e1);
//   const msg = "Мої події:" + e1;
//   document.writeln(msg);
// } catch (error) {
//   document.writeln(error.message);
// }
// document.writeln("Bye!");
// // завдяки try-catch помилки в console немає(скрипт не впав, не перестав виконуватися), виведено на сторінку : "Назва не може бути порожньою! Bye!"

// ====================================================
//       Приклад. Створити клас «Клієнт»
      // (ім’я – довільний доступ (відкрите поле),
      // номер рахунку – тільки для читання (генерується рандомно),
      // кількість грошей – контрольований доступ (і читання і запис))
      // class Client {
      //   constructor(userName, initialBalance = 0) {
      //     //-- відкрите поле, просто створюємо додавши у this
      //     this.userName = userName
      //     //--- захищене поле, використовуємо приватне поле і setter
      //     this.Balance = initialBalance
      //     //--- приватне, але тільки для читання (немає setter)
      //     this.#accountNumber = Math.random()
      //   }
      //   //---- номер рахунку
      //   #accountNumber
      //   get AccountNumber() {
      //     return this.#accountNumber
      //   }
      //   //-- кількість грошей
      //   //--приватне поле
      //   #balance
      //   //--getter - для читання значення приватного поля
      //   get Balance() {
      //     return this.#balance
      //   }
      //   //--setter - для встановлення нового значення (з контролем)
      //   set Balance(newBalance) {
      //     if (newBalance < 0) throw new Error('Не може бути баланс від\"ємним')
      //     this.#balance = newBalance
      //   }
      //   //-----------
      //   toString() {
      //     return `${this.userName} : ${this.AccountNumber} - ${this.Balance}`
      //   }
      // }
      // //----------
      // const cl1 = new Client('Ivan', 798000)

      // document.writeln(cl1.AccountNumber)
