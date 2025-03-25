// cуворий режим
"use strict";

//  Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
/*
const weeklyVisitors = [120,150,130,140,160,155,145]
// ---- індекси передаються як для клієнта(нумерація від 1)
function getSum(arr, startIndex, endIndex, step=1) {
	let sum = 0
	for (let i = startIndex-1; i < endIndex; i+=step) {
sum += arr[i]
	}
	return sum
}
// загальну кількість клієнтів у робочі дні 
const workingSum = getSum(weeklyVisitors,1,5)
// загальну кількість клієнтів у на вихідних.
const weekendSum = getSum(weeklyVisitors, 6, 7);
// загальну кількість клієнтів по парних днях
const evenDaysSum = getSum(weeklyVisitors, 2, 7, 2);

document.writeln(
  `<div class="task__subtitle task__subtitle--green"> Кількість відвідувачів по днях (1-7): ${weeklyVisitors}<br>
	 загальна кількість клієнтів у робочі дні : ${workingSum}<br>
	 загальна кількість клієнтів у на вихідних: ${weekendSum}<br>
	загальна кількість клієнтів по парних днях: ${evenDaysSum}<br>
</div>`
);
*/
// ===============================================================
/*
         0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 
//arr = [2,2,2,2,7,7,7,7,7,7,7, 9, 9, 9, 9, 9]
const arr = new Array(16)
arr.fill(2,0,4)
arr.fill(7,4,11)
arr.fill(9,11) //можна вказати тільки початковий індекс
*/
// ===============================================================

// Дано масив показників температур. Вивести на екран додатні значення показників
/*
function getPositiveValuesOfTempIndicators(temp) {
	const temperatureList = [0, -1, 8, 6, -9, 12];
	let res = []
  for (const tmp of temperatureList) {
    if (tmp > 0) res.push(tmp)
  }
  return res
}
const positiveTemps = getPositiveValuesOfTempIndicators()
document.writeln(`${positiveTemps},`);
*/

// Масив цін товарів. Знайти суму цін, які більші за 100
/*
function getSumOver100(price) {
	let prices = [12, 344, 67, 888, 3, 456];
  let sum = 0;
  for (const price of prices) {
	if(price >100) sum += price
  }
  return  sum
}
const sumOver100 = getSumOver100()
document.writeln(`Sum=${sumOver100}`);
*/
// ===============================================================

// Дано список імен користувачів. Створити функцію для прегляду користувачів при цьому для кожного треба виконати одну з дій: або привітати кожного, або попрощатися з кожним
/*
function sayHello(userList) {
	for(const user of userList) {
		let msg = `Hello ${user}! <br>`
		document.writeln(msg)
	}
}

function sayBye(userList) {
  for (const user of userList) {
    let msg = `Bye ${user}! <br>`;
    document.writeln(msg);
  }
}
let userList =['Ivan','Petro','Olga']
let userAnswer = prompt(`1)Привітати\n2)Попрощатися`)
switch (userAnswer) {
  case "1":
    sayHello(userList);
    break;
  case "2":
    sayBye(userList);
    break;
  default:
    break;
}
	 */
/*
//-------
//функ.форм.вітального повідомлення
function helloMsg(user) { return `Hello ${user} ! <br>`
	
}
//функ.форм.прощального повідомлення
function helloMsg(user) { return `Bye ${user} ! <br>`
	
}

//функція для виведення повідомлення
function sayMsg(userList, messageCreator) {
	for (const user of userList) {
		let msg = messageCreator(user)
		document.writeln(msg)
	}
}
let userList = ["Ivan", "Petro", "Olga"];
let userAnswer = prompt(`1)Привітати\n2)Попрощатися`);
switch (userAnswer) {
  case "1":
    sayMsg(userList, helloMsg);
    break;
  case "2":
    sayMsg(userList, byeMsg);
    break;

  default:
    break;
}
	 */
//----
/*
function sayMsg(userList, messageCreator) {
  for (const user of userList) {
    let msg = messageCreator(user);
    document.writeln(msg);
  }
}
let userList = ["Ivan", "Petro", "Olga"];
let userAnswer = prompt(`1)Привітати\n2)Попрощатися`);
switch (userAnswer) {
  case "1":
    sayMsg(userList, (user)=>`Hello ${user} ! <br>`);
    break;
  case "2":
    sayMsg(userList, (user) => `Bye ${user} ! <br>`);
    break;

  default:
    break;
}
	 */

// ===============================================================

// Дано масив оцінок учнів у 12 бальній шкалі. Користувач задає шкалу, у якій він хоче отримати результати учнів:
// 1) "високий(>7)"/"нижчесереднього(<7)"
// 2)"перводиться у наступний клас(>=5)"/"залишається, не вистачає ${5-бал} якщо(<5)"
// Вивести на екран маркований список з переведеними у дану шкалу оцінками
/*
let scores = [3,9,12,10,8]
// --- Вивід за шкалою 1
function print1(scores) {
	document.writeln('<ul>')
	for (const score of scores) {
		document.writeln(`
			<li>
			${score >= 7 ? 'високий' : 'нижчесереднього'}
			<li>`)
	}
	document.writeln("</ul>");
}
// --- Вивід за шкалою 2
function print2(scores) {
	document.writeln('<ul>')
	for (const score of scores) {
		document.writeln(`
			<li>
			${score >= 5 ? 'переводиться' : 'залишається, не вистачає ${5 - score}'}
			<li>`)
	}
	document.writeln("</ul>");
}
//-----
const userScale = userAnswer === 1 ? getResultByScale1 : getResultByScale2
printByScale(scores,userScale)
//----Результат за шкалою 1
function getResultByScale1(score) {
	return score >= 7 ? "високий" : "нижчесереднього";
}
//----Результат за шкалою 2
function getResultByScale1(score) {
	return score >= 5 ? "переводиться" : "залишається, не вистачає ${5 - score}";
}
// Загальна функція, що приймає правило
function printByScale(scores, userScale) {
	document.writeln("<ul>");
  for (const score of scores) {
    document.writeln(`
			<li>
			${userScale(score)}
			<li>`);
  }
  document.writeln("</ul>");
}
*/
// ===============================================================

// Дано масив показників температур.
// 1)Або кажемо холодно(<17)/тепло,
// 2)або вода замерзла(<=0)/незамерзла
/*/
const typicalTemperatures = [
  -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
];
function checkTempList(arr, messageCreator) {
  const msgList = [];
  for (const tmp of arr) {
    const message = messageCreator(tmp);
    msgList.push(message);
  }
  return msgList;
}
//------
const userChoice = prompt(`1)Або кажемо холодно(<17)/тепло" \n 2)або вода замерзла(<=0)/незамерзла`);
let messageCreator
switch (userChoice) {
  case "1":
    messageCreator = (t) => (t < 17 ? "холодно" : "тепло")
    break;
  case "2":
   messageCreator =  (t) => (t <= 0 ? "замерзла" : "не замерзла")
    break;
}
const res = checkTempList(typicalTemperatures, messageCreator)
document.writeln(res)
*/
// ===============================================================

// Дано масив показників температур. Вивести на екран додатні значення показників
/*
const temperatureList = [0,-1,8,6,-9,12]
temperatureList.forEach((el, indexm, arr) => {
  if (el > 0) document.writeln(el);
});
*/
// ===============================================================
// Дано масив показників температур. Від'ємні замінити на 0
/*
const typicalTemperatures = [
  -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
];
typicalTemperatures.forEach((t,ind,arr) => {
  if (t < 0) arr[ind]=0
});
document.writeln(`typicalTemperatures: ${typicalTemperatures}`)
*/
// ===============================================================

// Дано послідовність років працівників. Вивести список додавши "пенсіонер/ не пенсіонер"
/*
const ages = [21,34,58,88,71,41]
ages.forEach((age) => document.writeln(`${age}- ${age >= 65 ? "пенсіонер" : "не пенсіонер"}<br>`)
);
*/
// ===============================================================
/*
function isEqualArray(arr1,arr2) {
	if(arr1.length!==arr2.length) return false
	let res=true
	for (let i = 0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i]){
			res = false
			break
		}
	}
	return res
}

document.writeln(isEqualArray([11,5,7],[11,5,7]))
*/
// ===============================================================

//Дано масив цін.Створити новий масив додавши 20%(*1.2)
/*
let prices = [100,344,67,888,3,456]
const newPrices = prices.map((price) => (price * 1.2).toFixed(2));
document.writeln(`newPrices : ${newPrices}`);
*/

// ===============================================================

// Дано масив років народження працівників(усі народились 1 січня). Створити масив з кількістю років
/*
let yearsOfBirth = [2000, 2021, 2004, 2007]
const agesList = yearsOfBirth.map((year) => 2025 - year)
document.writeln(`agesList : ${agesList}`);
*/

// ===============================================================

// Дано масив вартості товару у доларах. Створити масив цін у гривнях
/*
let pricesDol = [100, 344, 67, 888, 3, 456];
const pricesInGrn = pricesDol.map((price) => price * 40);
document.writeln(`pricesInGrn : ${pricesInGrn}`);
*/
// ===============================================================
// Дано масив оцінок. Вивести чи це оцінка "відмінно", "хороша"(=4), чи недуже(<4)
/*
let scores = [4, 5, 5, 4, 3, 4, 3, 3, 5]; // потрібно тільки вивести, тому використовуємо forEach
scores.forEach((score) => {
  let res;
  switch (score) {
    case 5:
      res = "відмінно";
      break;
    case 4:
      res = "хороша";
      break;
    default:
      res = "не дуже";
      break;
  }
  document.writeln(`${score} - ${res}<br>`);
});
*/

// ===============================================================

// Дано масив оцінок. Сформувати новий масив у якому треба сказати чи це оцінка "відмінно", "хороша"(=4), чи недуже(<4)
/*
let scores = [4,5,5,4,3,4,3,3,5]// якщо треба створювати новий масив-використовуємо map
 const titles = scores.map((score) => {
   let res;
   switch (score) {
     case 5:
       res = "відмінно";
       break;
     case 4:
       res = "хороша";
       break;
     default:
       res = "не дуже";
       break;
   }
  return `${score} - ${res}`
 });
  document.writeln(titles);
  */
// ===============================================================

// Дано масив років. Після кожного значення 2010 додати 2015
/*
let yearsList = [2001, 1999, 2010, 2010, 2000, 2010, 1998];
for (let i = 0; i < yearsList.length; i++) {
  if (yearsList[i] === 2010) {
    yearsList.splice(i + 1, 0, 2015);
    i++;
  }
}
document.writeln(yearsList);
*/
// ===============================================================

// Дано масив показів температур за рік (12місяців). Видалити значення, що відповідають літнім місяцям
/*
const typicalTemperatures = [
// 0     1     2     3      4     5     6     7     8    9      10    11
  -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
];
typicalTemperatures.splice(5,3)
document.writeln(typicalTemperatures)
*/