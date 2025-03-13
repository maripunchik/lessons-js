// cуворий режим
"use strict";


// ===================================================================

// 0. Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I
/*
if (confirm("Почати тестування?")) {
  let startCharCode = 'A'.charCodeAt(0);
  const size = 5
  for (let row = 0; row < size; row++) {
    for (let letter = 0; letter < size; letter++) {
      document.write(
        `${String.fromCharCode(startCharCode)}`
      );
      startCharCode++;
    }

    document.write(`<br>`);
    startCharCode -= 4; // зсув рядка
  }
}
  */
// ===================================================================
// 1. Використовуючи цикли вивести на екран 20 символів «о».
/*
if (confirm("Почати тестування?")) {
const symbol = `o`;
	for (let i = 0; i < 20; i++) {
    document.write("symbol");
  }
}
   */
// ===================================================================
// 2. Відобразити трикутник за допомогою символів «о»
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо
/*
if (confirm("Почати тестування?")) {
const num = 7
const symbol = `o`;
for (let row = 1; row <= num; row++) {
  for (let col = 1; col <= row; col++) {
    document.write("symbol");
  }
  document.write("<br>");
}
}
*/
// ===================================================================
// 2.1. Відобразити трикутник за допомогою символів «о»
//        о
//       оо
//      ооо
//     оооо
//    ооооо
//   оооооо
//  ооооооо
/*
if (confirm("Почати тестування?")) {
const symbol = `o`;
  const num = 7;
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      if (rows - row >= col) document.write("&nbsp;");
      else document.write("symbol");
    }
    document.write("<br>");
  }
}
*/

// ===================================================================

// 3. Відобразити трикутник за допомогою символів «о»
// оооооооооооо
// ооооооооооо
// оооооооооо
// ооооооооо
// оооооооо
// …
// оо
// о
/*
if (confirm("Почати тестування?")) {
  const symbol = `o`;
  const rows = 12;
  for (let i = rows; i > 0; i--) {
    document.write(`<br>`);
    for (let j = i; j > 0; j--) {
      document.write(`${symbol}`);
    }
  }
}
*/

// ===================================================================

// 3.1. Відобразити трикутник за допомогою символів «о»
// оооооооооооо
//  ооооооооооо
//   оооооооооо
//    ооооооооо
//     оооооооо
//         …
//           оо
//            о
/*
if (confirm("Почати тестування?")) {
  const symbol = `o`;
  const rows = 12;
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= rows; col++) {
      if (row >= col) document.write("&nbsp;");
      else document.write(`${symbol}`);
    }
    document.write("<br>");
  }
}
*/

// ===================================================================

// 4. Побудувати ялинку
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо
// о
// оо
// ооо
// оооо
// ооооо
/*
if (confirm("Почати тестування?")) {
  const symbol = `o`;
  for (let s = 1; s <= 3; s++) {
    for (let i = 1; i <= 5; i++) {
      document.write(`<br>`);
      for (let j = 0; j < i; j++) {
        document.write(`${symbol}`);
      }
    }
    
  }
}
*/

// ===================================================================

// 5. Інвестор вклав  тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).
/*
if (confirm("Почати тестування?")) {
  const deposit = parseFloat(prompt(`Введіть початкову суму вкладу`, `20000`));
  const term = 20;
  const rate = 20
  let sumDeposit = deposit;
  for (let i = 1; i <= term; i++) {
    sumDeposit += (sumDeposit * rate) / 100;
  }
  document.write(`Інвестор вклав  ${deposit} тис. грн. Через 20 років він отримає: ${sumDeposit.toFixed(2)} тис. грн.`);
}
*/

// ===================================================================

// 6. Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.
/*
if (confirm("Почати тестування?")) {
  const deposit = parseFloat(prompt(`Введіть початкову суму вкладу`, `20000`));
  const term = 20;
  const rate = 20;
  let sumDeposit = deposit;
  for (let i = 1; i <= term; i++) {
    const profit = (sumDeposit * rate) / 100;
    const tax = profit * 0.05;
    sumDeposit += profit - tax;
  }
  document.write(
    `Інвестор вклав  ${deposit} тис. грн. Через 20 років він отримає: ${sumDeposit.toFixed(2)} тис. грн.`);
}
*/

// ===================================================================

// 7. Інвестор вклав  тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних. Визначити за допомогою циклів суму, яку він одержить.
/*
if (confirm("Почати тестування?")) {
  const deposit = parseFloat(prompt(`Введіть початкову суму вкладу`, `20000`));
  const term1 = 20;
  const rate1 = 20;
  const term2 = 17;
  const rate2 = 27;
  let totalDeposit = deposit;
  for (let i = 1; i <= term1; i++) {
    totalDeposit += (totalDeposit * rate1) / 100;
  }
  for (let i = 1; i <= term2; i++) {
    totalDeposit += (totalDeposit * rate2) / 100;
  }

  document.write(
    `Інвестор вклав  ${deposit} тис. грн. За ${term1} років, під ${rate1}% річних, та ${term2} років під ${rate2}% річних він отримає: ${totalDeposit.toFixed(
      2
    )} тис. грн.`
  );
}
*/

// ===================================================================

// 8. Вивести на екран послідовність символів

// а о а о а о а о а о …
// Всього символів 82.
/*
if (confirm("Почати тестування?")) {
	const totalSymbols = 82
	for (let i = 0; i < totalSymbols; i++) {
    if (i%2===0)document.write('a')
		else document.write('o')
  }
}
  */

// ===================================================================

// 9. Вивести на екран
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23
/*
if (confirm("Почати тестування?")) {
	for (let row = 1; row <= 23; row++) {
    document.write(`${row}`);
    for (let col = 1; col <= row; col++) {
      document.write(`${col}`);
    }
    document.write("<br>");
  }
}
*/

// ===================================================================

// 10. Вивести на екран
// 1 1
// 2 1234
// 3 123456789
// 4 1234…16
// 5 1 … 25
// 6 1…36
/*
if (confirm("Почати тестування?")) {
  for (let row = 1; row <= 6; row++) {
    document.write(`${row }`);
    for (let col = 1; col <= row**2; col++) {
      document.write(`${col }`);
    }
    document.write("<br>");
  }
}
*/

// ===================================================================

// 11. Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.
/*
if (confirm("Почати тестування?")) {
	for (let number = 10; number <=99; number++) {
    let firstFigure = Math.floor(number / 10); // Перша цифра (десятки)
     let secondFigure = number % 10; //  щоб знайти останню цифру в будь-якому числі-це остача від ділення % на 10

    if (firstFigure >= secondFigure) {
      document.write(`${number}<br>`); // Вивести число, якщо перша цифра >= другої
    }
   }
 }
*/
/*
for (let c1 = 1; c1 <= 9; c1++) {
   for (let c2 = 0; c2 <= c1; c2++) {
      document.write(`${c1}${c2}<br>`);
   }
}
	*/

// ===================================================================

// 11.1. Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.
// 100-999(237 = c1=2 c2=3 c3=7),
/*
if (confirm("Почати тестування?")) {
for (let num = 100; num <= 999; num++) {
  const c3 = num % 10; // щоб знайти останню цифру в будь-якому числі-це остача від ділення % на 10
  const c2 = Math.floor(num / 10) % 10;
  const c1 = Math.floor(num / 100);
  if (c1 >= (c2 + c3) ) document.write(`${num}<br>`);
}
}
*/

// ===================================================================

// 12. Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу, що передує йому та що слідує за ним.
/*
if (confirm("Почати тестування?")) {
  const firstLetter = "A".charCodeAt(0);
  const lastLetter = "Z".charCodeAt(0);
  let string = ``;

  for (let i = firstLetter; i <= lastLetter; i++) {
    let previousLetter = String.fromCharCode(i - 1); // Символ перед поточним
    let currentLetter = String.fromCharCode(i); // Поточний символ
    let followingLetter = String.fromCharCode(i + 1); // Символ після поточного
    if (i - 1 < firstLetter) {
      previousLetter = "Z";
    } else string += previousLetter;
    string += currentLetter;
    if (i + 1 > followingLetter) {
      followingLetter = "A";
    } else string += followingLetter;

    string += `<br>`;
  }
  document.write(`${string}`); // Вивести символи
}
*/

// ======================= інші ===========================

// 1. З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.
/*
if (confirm("Почати тестування?")) {
let previousNumber = parseInt(prompt("Введіть число"));
let currentNumber = parseInt(prompt("Введіть число"));

let isIncreasing = currentNumber > previousNumber;

while (
  (isIncreasing && currentNumber > previousNumber) ||
  (!isIncreasing && currentNumber < previousNumber)
) {
	document.write(`${previousNumber}<br>`)
  previousNumber = currentNumber;
 currentNumber = parseInt(prompt("Введіть число"));
}
document.write(`Нажаль, числа вже йдуть не в порядку послідовності<br>${currentNumber}`);
}
*/

// ===================================================================

// 2. Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7, наприклад: 2679328712)
/*
if (confirm('Почати тестування?')) {
  let someNumber = parseInt(
    prompt("Введіть число, в якому будуть дві цифри 7", "2679328712")
  );
  someNumber = someNumber.toString();
  let firstSevenIndex = someNumber.indexOf("7");
  let lastSevenIndex = someNumber.lastIndexOf("7");
  let sum = 0;
  let numbersBettwen7 = someNumber.slice(firstSevenIndex + 1, lastSevenIndex); //  витягує частину рядка між першою та останньою цифрою "7"
  for (let i = firstSevenIndex + 1; i < lastSevenIndex; i++) {
    numbersBettwen7 = Number(someNumber[i]);
    sum += numbersBettwen7;
  }
  document.write(
    `Сума цифр числа, що знаходяться між першою і останньою цифрою 7 дорівнює ${sum}`
  );
}
  */

// ===================================================================

// 3. Дано ціле число N. Вивести ті натуральні числа, квадрати яких є меншими або рівними за N.
/*
if (confirm('Почати тестування?')) {
	const number = parseInt(prompt(`Введіть число`, `100`))
	document.write(`${number}<br> `);
	for (let number = 1; number ** 2 <= number; number++) {
      document.write(`${number} `);
   }
}
*/

// ===================================================================

// 4. Знайти суму всіх непарних чисел з діапазону, який вводить користувач з клавіатури.
/*
if (confirm("Почати тестування?")) {
  let start = parseInt(prompt("Введіть початок діапазону:", "10"));
  let end = parseInt(prompt("Введіть кінець діапазону:", "20"));
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (start > end) {
      const tmp = start;
      start = end;
      end = tmp;
    }
    if (i % 2 !== 0) { // Перевіряємо, чи є число непарним
      sum += i;
    }
  }
  document.write(
    `Сума всіх непарних чисел в діапазоні між числами ${start} і ${end}:${sum}`
  );
}
  */

// ===================================================================

// 5. Зобразити рівнобедрений трикутник із символів ^. Висоту задає користувач. Наприклад, на екрані висота =5.
/*
if (confirm("Почати тестування?")) {
  let heightTriangle = parseInt(prompt("Введіть висоту трикутника", "5"));
  document.write(`<div style = "text-align: center; display: inline-block;">`);
  for (let i = 1; i <= heightTriangle; i++) {
    for (let j = 0; j < 2 * i - 1; j++) {
      document.write(`^`);
    }
    document.write(`<br>`);
  }
  document.write(`</div>`);
}
  */

// ===================================================================

// 6. На складі зберігається певна кількість ящиків з яблуками (наприклад, 15). Коли під’їде машина для завантаження, попросити користувача ввести, скільки ящиків завантажити у першу машину, у другу і т. д., поки на складі не закінчаться ящики з яблуками. Передбачити той випадок, коли користувач вводить кількість, що перевищує поточну кількість ящиків на складі.
/*
if (confirm("Почати тестування?")) {
  let boxesOfApples = parseInt(prompt("Введіть кількість ящиків з яблуками", "15"));
   while (boxesOfApples > 0) {
     const userboxesOfApples = parseInt(
       prompt(
         `Вітаю! Скільки ящиків завантажити у першу машину? На складі зберігається:${boxesOfApples}`
       )
     );
     if (userboxesOfApples <= boxesOfApples) {
       alert(`Гарного дня!`);
       boxesOfApples -= userboxesOfApples;
     } else alert(`Вибачте, такої кількості ящиків на складі не зберігається`);
   }
}
*/

// ===================================================================

// 7. Написати програму, яка показуватиме на екрані піднесене до квадрату число, що вводиться користувачем. Користувач вирішує самостійно – виходити з програми або продовжувати ввід. (Підказка: потрібно запустити нескінчений цикл, в тілі якого передбачити його переривання у випадку настання певної умови).
/*
if (confirm("Почати тестування?")) {
  do {
	 let userNumber = parseFloat(prompt('Введіть число для піднесення до квадрату:', '5'))
	 alert(`${userNumber} у квадраті = ${Math.pow(userNumber,2) }`);
  } while (true);
  }
*/

// ===================================================================

// 8. Щоденно спортзал відвідує певна кількість людей. Користувач вводить такі дані: скільки людей відвідало спортзал за день та вік кожного відвідувача. Потрібно вивести вік найстаршого та наймолодшого відвідувачів, а також середній вік всіх відвідувачів спортзалу за день.
/*
if (confirm("Почати тестування?")) {
  let numberOfVisitors = parseInt(
    prompt("Скільки людей відвідали спортзал?", "5")
  );
  let youngest = Infinity;
  let oldest = -Infinity;
  let totalAge = 0;
  for (
    let visitorNumber = 1;
    visitorNumber <= numberOfVisitors;
    visitorNumber++
  ) {
    const visitorAge = parseInt(
      prompt(`Введіть вік відвідувача №${visitorNumber}`, `${visitorNumber}`)
    );

    if (visitorAge > oldest) oldest = visitorAge;
    if (visitorAge < youngest) youngest = visitorAge;

    totalAge += visitorAge;
  }
  let averageAge = totalAge / numberOfVisitors;
  document.write(`Вік найстаршого відвідувача: ${oldest}<br>`);
  document.write(`Вік наймолодшого відвідувача: ${youngest}<br>`);
  document.write(`Середній вік відвідувачів: ${averageAge.toFixed(0)} років`);
}
*/


// ===================================================================

// 10. Для заданого натурального числа n знайти найменше число k, яке задовольняє нерівність k!>=n.
// --- n!=n×(n−1)×(n−2)×⋯×2×1.
// Для 𝑛 = 0, за визначенням, 0!=1
/*
if (confirm("Почати тестування?")) {
  let n = parseInt(prompt("Введіть число n:", "50"));
  let factorial = 1;
  let k = 1; // Починаємо з 1, бо 0! вже рівне 1

  while (factorial < n) {
    factorial *= k; // Оновлюємо факторіал, множачи його на k
    k++;
  }

  document.write(
    `Найменше число k = ${k - 1}, яке задовольняє нерівність k! >= ${n}.`
  );
}
*/

// ===================================================================

// 11. Написати програму, що виводить на екран таблицю множення на k (k вводиться з клавіатури).
/*
if (confirm("Почати тестування?")) {
const number = parseInt(prompt("Введіть число", "7"));
document.write(`<h2>Таблиця множення на ${number}</h2>`); 
for (let i = 1; i <= 10; i++) {
  document.write(`${number} x ${i} = ${number * i}<br>`);
}
}
*/

// ===================================================================

// 12. Знайти найбільший спільний дільник n натуральних чисел.
/*
if (confirm("Почати тестування?")) {
  let firstNumber = parseInt(prompt("Введіть перше число", "70"));
  let secondNumber = parseInt(prompt("Введіть друге число", "25"));

  document.write(
    `НСД(найбільший спільний дільник)  для ${firstNumber} та ${secondNumber} = `
  );

  // Алгоритм Евкліда
  while (secondNumber !== 0) {
    let temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
  }

  document.write(firstNumber);
}
  */

// ===================================================================


// 14. Визначити, чи є натуральне число N степенем числа 3 чи ні.
/*
if (confirm("Почати тестування?")) {
const number = parseInt(prompt("Введіть число", "30"));
let threePowersOfANumber = 1
for (let power = 1; threePowersOfANumber < number; power++) {
  threePowersOfANumber = 3 ** power;
}

if (threePowersOfANumber === number)
  document.write(`Так, число ${number} є степенем числа 3`);
else document.write(`Ні, число ${number} не є степенем числа 3`);
}
*/

// ===================================================================

// 15. Отримати всі можливі способи розміщення п’яти книг різних авторів.
/*
if (confirm("Почати тестування?")) {
const bookAmount = 5;
let factorial = 1;

for (let number = bookAmount; number > 1; number--) {
  factorial *= number;
}

document.write(`Є ${factorial} різних способів розмістити ${bookAmount}  книг різних авторів на полиці.`);
}
*/

// ===================================================================


// 17. Чи можливо задане натуральне число подати як суму квадратів двох чисел.
/*
if (confirm("Почати тестування?")) {
const number = parseInt(prompt("Введіть натуральне число", "10"));
let possible = false;
const limit = Math.floor(Math.sqrt(number));

for (let firstNumber = 0; firstNumber <= limit; firstNumber++) {
  for (let secondNumber = limit; secondNumber >= 0; secondNumber--) {
    if (firstNumber ** 2 + secondNumber ** 2 === number) {
      possible = true;
      document.write(
        `Так, число ${number} можна представити у вигляді суми квадратів двох чисел ${firstNumber} та ${secondNumber}.`
      );
      break;
    }
  }
  if (possible) break; // Завершуємо, якщо пара чисел знайдена
}

if (!possible) {
  document.write(
    `Ні, число ${number} не можна представити у вигляді суми квадратів двох чисел`
  );
}
}
*/

// ===================================================================

// 18. Є n бактерій червоного кольору. Через 1 одиницю часу червона бактерія змінюється на зелену, потім ще через 1 одиницю часу ділиться на червону та зелену. Скільки буде всіх бактерій через k одиниць часу?
/*
if (confirm("Почати тестування?")) {
	  let redBacteria = parseInt(
      prompt("Введіть кількість червоних бактерій", "5")
    );
    let greenBacteria = 0;
    const duration = parseInt(prompt("Введіть кількість одиниць часу", "30"));

    for (let time = 1; time <= duration; time++) {
      greenBacteria += redBacteria;
      redBacteria = greenBacteria - redBacteria;
    }

    document.write(`Усіх бактерій: ${redBacteria + greenBacteria}`);
}
*/

// ===================================================================

// 19. Натуральне число з n цифр є числом Армстронга, якщо сума степенів цифр, кожна з яких піднесена до n, дорівнює самому числу (153=1*1*1+5*5*5+3*3*3). Отримати всі числа Армстронга для n=4 и n=3.
/*
if (confirm("Почати тестування?")) {
for (let number = 100; number <= 9999; number++) {
  // Розбити число на цифри
  const lastDigit = number % 10;
  const secondToLastDigit = Math.floor(number / 10) % 10;
  const thirdToLastDigit = Math.floor(number / 100) % 10;
  const forthToLastDigit = Math.floor(number / 1000);

  // Визначаємо степінь в залежності від кількості цифр
  const power = forthToLastDigit ? 4 : 3;

  // Якщо це 3-значне число, четверта цифра має бути 0
  if (
    lastDigit ** power +
      secondToLastDigit ** power +
      thirdToLastDigit ** power +
      (forthToLastDigit || 0) ** power ===
    number
  ) {
    document.write(`<p>${number}</p>`);
  }
}
}
*/

// ===================================================================

// 20. З клавіатури вводяться n чисел та саме значення n. Написати програму, яка підраховує кількість від’ємних, додатних та нульових чисел серед введених.
/*
if (confirm("Почати тестування?")) {
  const n = parseInt(prompt("Введіть кількість чисел:", "5")); // Вводимо кількість чисел
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Цикл для введення чисел та підрахунку від'ємних, додатних та нульових чисел
  for (let i = 1; i <= n; i++) {
    const number = parseInt(prompt(`Введіть число №${i}:`)); // Вводимо число
    if (number > 0) {
      positiveCount++; // Збільшуємо лічильник додатних
    } else if (number < 0) {
      negativeCount++; // Збільшуємо лічильник від'ємних
    } else {
      zeroCount++; // Збільшуємо лічильник нульових
    }
  }

  // Виведення результатів
  document.write(`Кількість додатних чисел: ${positiveCount}<br>`);
  document.write(`Кількість від'ємних чисел: ${negativeCount}<br>`);
  document.write(`Кількість нульових чисел: ${zeroCount}<br>`);
}
*/

// ===================================================================

// 21. Напишіть програму для переводу мір довжини, торгової та аптекарської ваги (лічильник циклу від 1 до 10)
// сажнів у метри (1 сажень дорівнює 2,1366 м)
// дюймів у сантиметри (1 дюйм дорівнює 2,5 см)
// футів у метри (1 фут дорівнює 0,3048 м)
// драхм у грами (1 драхма дорівнює 3,7325 г)
// унцій у грами (1 унція дорівнює 29,86 г)
// фунтів у кілограми (1 фунт дорівнює 0,40951 кг)
// аршинів у метри (1 аршин дорівнює 0,7112 м)
// золотників у грами (1 золотник дорівнює 4,2657 г)
// дюймів у міліметри (1 дюйм дорівнює 25,3995 мм)

// За умовою (лічильник циклу від 1 до 10)
/*
if (confirm("Почати тестування?")) {
for (let amount = 1; amount <= 10; amount++) {
  document.write(`${amount} сажень - це ${(amount * 2.1366).toFixed(2)} м<br>`)
  document.write(`${amount} дюйм - це ${(amount * 2.5).toFixed(2)} см<br>`);
  document.write(`${amount} фут - це ${(amount * 0.3048).toFixed(2)} м<br>`);
  document.write(`${amount} драхм - це ${(amount * 3.7325).toFixed(2)} г<br>`);
  document.write(`${amount} унція - це ${(amount * 29.86).toFixed(2)} г<br>`);
  document.write(`${amount} фунт - це ${(amount * 0.40951).toFixed(2)} кг<br>`);
  document.write(`${amount} аршин - це ${(amount * 0.7112).toFixed(2)} м<br>`);
  document.write(
    `${amount} золотник - це ${(amount * 4.2657).toFixed(2)} г<br>`
  );
  document.write(`${amount} дюйм - це ${(amount * 25.3995).toFixed(2)} мм<br>`);
}
}
*/

// ===================================================================

// 22. Введіть з клавіатури 10 пар чисел. Порівняйте числа у кожній парі та надрукуйте більше з них.
/*
if (confirm("Почати тестування?")) {
  for (let i = 1; i <= 10; i++) {
    let firstNumber = parseInt(prompt(`Введіть перше число для пари ${i}:`));
    let secondNumber = parseInt(prompt(`Введіть друге число для пари ${i}:`));

    if (firstNumber > secondNumber) {
      document.write(`У парі ${i}: більше число ${firstNumber} <br>`);
    } else if (secondNumber > firstNumber) {
      document.write(`У парі ${i}: більше число ${secondNumber} <br>`);
    } else {
      document.write(`У парі ${i}: числа рівні <br>`);
    }
  }
}
*/

// ===================================================================

// 23. Дано натуральні числа від 20 до 50. Надрукувати ті з них, які діляться на 3, але не діляться на 5.
/*
if (confirm("Почати тестування?")) {
  for (let number = 20; number <= 50; number++) {
    if (number % 3 === 0 && number % 5 !== 0) {
      document.write(`${number}<br>`);
    }
  }
}
  */

// ===================================================================

// 24. Дано натуральні числа від 35 до 87. Надрукувати ті з них, які при діленні на 7 дають остачу 1, 2 або 5.
/*
if (confirm("Почати тестування?")) {
  // Перебираємо числа від 35 до 87
  for (let number = 35; number <= 87; number++) {
    // Перевіряємо залишок при діленні на 7
    let remainder = number % 7;
    // Якщо залишок 1, 2 або 5, вивести число
    if (remainder === 1 || remainder === 2 || remainder === 5) {
      document.write(`${number}<br>`);
    }
  }
}
*/

// ===================================================================

// 10. Дано натуральні числа від 1 до 50. Знайти суму тих, які діляться на 5 чи 7.
/*
if (confirm("Почати тестування?")) {
let sum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0 || i % 7 === 0) {
    sum += i;
  }
}
document.write(`Сума чисел, які діляться на 5 або 7: ${sum}`);
}
*/

// ===================================================================

// 11. Надрукувати всі двоцифрові числа, які діляться на 4, але не діляться на 6.
/*
if (confirm("Почати тестування?")) {
for (let i = 10; i <= 99; i++) {
    if (i % 4 === 0 && i % 6 !== 0) {
      document.write(`${i}<br>`);
    }
}
}
*/

// ===================================================================

// 12. Знайти добуток двоцифрових непарних чисел кратних 13.
/*
if (confirm("Почати тестування?")) {
	let product = 1;

  for (let i = 10; i <= 99; i++) {
    if (i % 2 !== 0 && i % 13 === 0) {
      product *= i;
    }
  }
  document.write(`Добуток двоцифрових непарних чисел кратних 13: ${product}`);
}
*/

// ===================================================================

// 13. Знайти суму всіх чисел від 100 до 200, кратних 17.
/*
if (confirm("Почати тестування?")) {
  let sum = 0;

  for (let i = 100; i <= 200; i++) {
    if (i % 17 === 0) {
      sum += i;
    }
  }
  document.write(`Сума всіх чисел від 100 до 200, кратних 17: ${sum}`);
}
*/

// ===================================================================

// 16. У бригаді, що працює на сінокосі, є N сінокосарок. Перша сінокосарка працювала m годин, а кожна наступна на 10 хв більше, ніж попередня. Скільки годин працювала вся бригада?
/*
if (confirm("Почати тестування?")) {
  const hayMowerAmount = parseInt(prompt("Кількість сінокосарок", "10"));
  const firstHayMowerTime = parseInt(prompt("Скільки хвилин працювала перша сінокосарка?", "480"));
  const extraMinutes = 10;
  let totalTimeMinutes = 0;

  // Обчислення часу для кожної сінокосарки
  for (let i = 0; i < hayMowerAmount; i++) {
    totalTimeMinutes += firstHayMowerTime + i * extraMinutes;
  }

  document.write(`${Math.floor(totalTimeMinutes / 60)} годин працювала бригада`);
}
*/

// ===================================================================

// 17. У комп’ютер вводяться по черзі дані про зріст N учнів класу. Визначити середній зріст учнів класу.
/*
	if (confirm("Почати тестування?")) {
    const pupilsAmount = parseInt(prompt("Скільки у класі є учнів?", "10"));
    let heightSum = 0;

    for (let pupilCount = 1; pupilCount <= pupilsAmount; pupilCount++) {
      heightSum += parseFloat(prompt(`Введіть зріст учня №${pupilCount}`, "128"));
    }

    document.write(
      `Середній зріст ${pupilsAmount} учнів: ${(heightSum / pupilsAmount).toFixed(2)}`);
  }
*/

// ===================================================================

// 18. Задано натуральне число N. Знайти кількість натуральних чисел, що не перевищують N і не діляться на жодне з чисел 2,3,5.
/*
if (confirm("Почати тестування?")) {
const integer = parseInt(prompt("Введіть натуральне число", "35"));
let specificNumbersCount = 0;

for (let number = 1; number <= integer; number++) {
  // Перевіряємо, чи не ділиться число на 2, 3 або 5
  if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0) {
    specificNumbersCount++;
    document.write(`${number}<br>`); // Виводимо це число
  }
}

document.write(`Кількість натуральних чисел, що не перевищують N і не діляться на жодне з чисел 2,3,5: ${specificNumbersCount}`);
}
*/

// ===================================================================

// 19. Два двоцифрових числа, записаних послідовно одне за одним, утворюють чотирицифрове число, що ділиться на їх добуток. Знайти ці числа.
/*
if (confirm("Почати тестування?")) {
for (let number1 = 10; number1 <= 99; number1++) {
  for (let number2 = 10; number2 <= 99; number2++) {
    const fourDigitNumber = 100 * number1 + number2; // Чотирицифрове число
    const product = number1 * number2; // Добуток number1 і number2

    // Перевірка умови
    if (fourDigitNumber % product === 0) {
      document.write(
        `Числа: ${number1} і ${number2} утворюють чотирицифрове число ${fourDigitNumber}, яке ділиться на їх добуток ${product}.<br>`
      );
    }
  }
}
}
*/

// ===================================================================

// 20. Дано два двоцифрові числа А і В. З цих чисел утворили два чотирицифрові числа: перше число отримали шляхом запису спочатку числа А, потім В, друге – шляхом запису спочатку В, потім А. Знайти числа А і В, якщо відомо, що перше чотиризначне число націло ділиться на 99, а друге на 49.
/*
if (confirm("Почати тестування?")) {
for (let a = 10; a <= 99; a++) {
  for (let b = 10; b <= 99; b++) {
    const ab = a * 100 + b; // Перше чотирицифрове число

    // Перевірка, чи ділиться перше число на 99
    if (ab % 99 !== 0) continue;

    const ba = b * 100 + a; // Друге чотирицифрове число

    // Перевірка, чи ділиться друге число на 49
    if (ba % 49 !== 0) continue;

    document.write(`A = ${a}; B = ${b}.<br>`);
  }
}
}
*/

// ===================================================================

// 21. У першокласника Миколи m грн. Морозиво коштує k грн. Микола вирішив наїстися досхочу морозива, для цього він до тих пір, поки йому вистачало грошей, купував по одному морозиву і з'їдав його. Як Миколі дізнатися, скільки грошей залишиться в нього врешті-решт? Врахуйте, що Микола ділити ще не вміє, а вміє тільки віднімати та додавати. Скільки морозив він може з'їсти?
/*
if (confirm("Почати тестування?")) {
  let money = parseFloat(prompt("Скільки грошей у Миколи?", "100"));
  const iceCreamPrice = parseFloat(prompt("Скільки коштує морозиво?", "30"));
  let count = 0;
  while (money >= iceCreamPrice) {
    money -= iceCreamPrice;
    count++;
  }

  document.write(`Микола з'їв ${count} одиниць морозива. Залишилось ${money.toFixed(2)} грн.`);
}
*/

// ===================================================================

// 22. Є шматок тканини довжиною M метрів. Від нього послідовно відрізають шматки різної довжини. Усі дані щодо використання тканини вводяться до комп'ютера. Комп'ютер повинен вивести повідомлення про те, що матеріалу не вистачає, якщо буде потрібен шматок тканини, довжина якого перевищує довжину шматка, що залишився.
/*
if (confirm("Почати тестування?")) {
  let fabricLength = parseFloat(
    prompt("Введіть початкову довжину шматка тканини (в метрах)", "100")
  );

  while (fabricLength > 0) {
    let cutLength = parseFloat(
      prompt(
        `Введіть довжину шматка, який потрібно відрізати. В наявності є ${fabricLength.toFixed(
          2
        )} м.`,
        `30`
      )
    );

    if (cutLength > fabricLength) {
      alert(`Матеріалу не вистачає!`);
      continue;
    }
    fabricLength -= cutLength; 
  }
  alert(`Матеріал використаний повністю.`);
}
*/

// ===================================================================

// 23. Розпочавши тренування, спортсмен першого дня пробіг 10 км. Щодня він збільшував денну норму на 10% від норми попереднього дня. Який сумарний шлях пробіжить спортсмен за 7 днів? Якого дня вперше спортсмен пробіжить понад 20 км? Якого дня вперше сумарний шлях перевищить 60 км?
/*
if (confirm("Почати тестування?")) {
const dailyIncrease = 0.1;
let totalDistance = 0;
let dayOver20 = 0,
  dayOver60 = 0;

for (
  let day = 1, distanceForDay = 10;
  day <= 7;
  day++, distanceForDay *= 1 + dailyIncrease) {
  totalDistance += distanceForDay;

  if (!dayOver20 && totalDistance >= 20) dayOver20 = day;
  if (!dayOver60 && totalDistance >= 60) dayOver60 = day;
}

document.write(`Спортсмен пробіг ${totalDistance.toFixed(2)} км. за 7 діб.<br>`);
document.write(`На ${dayOver20} день спортсмен вперше пробіжить понад 20 км<br>`);
document.write(`Сумарний шлях перевищить 60 км на ${dayOver60} день<br>`);
}
*/

// ===================================================================

// 24. Написати програму, яка виконує перевірку, чи є натуральне число N простим.
/*
if (confirm("Почати тестування?")) {
const integer = parseInt(prompt("Введіть натуральне число", "50"));
let isPrime = true;

for (let number = 2; number <= Math.sqrt(integer); number++) {
  if (integer % number === 0) {
    isPrime = false;
    break;
  }
}
  if (isPrime && integer > 1) {
    document.write(`Число ${integer} є простим числом.`);
  } else {
    document.write(`Число ${integer} не є простим числом.`);
  }
}
*/

// ===================================================================

// 25. Дано ціле число N (N >1). Знайти найменше ціле число K, яке задовольняє нерівність 3K > N.
/*
if (confirm("Почати тестування?")) {
const integer = parseInt(prompt("Введіть ціле число, більше одиниці", "50"));

// Округлюємо вгору результат ділення на 3, щоб знайти найменше ціле число K, яке задовольняє нерівність 3K > N
const smallestInteger = Math.ceil(integer / 3);

document.write(`K = ${smallestInteger}; N = ${integer};<br>`);
document.write(`3 * ${smallestInteger} > ${integer}`);
}
*/

// ===================================================================

// 26. З клавіатури вводяться числа та послідовно сумуються. Знайти кількість введених користувачем чисел, коли їх сума перевищить 100.
/*
if (confirm("Почати тестування?")) {
let count = 0;
let sum = 0; 

while (sum <= 100) {
  let number = parseFloat(prompt("Введіть число", "30"));
  sum += number;

  count++;
}

document.write(
  `Ви ввели ${count} чисел, поки їх сума не перевищила 100.`
);
}
*/

// ===================================================================

// 27. Дано ціле число N (N > 0). Використовуючи операції ділення націло та остачі від ділення, знайти кількість та суму його цифр.
/*
if (confirm("Почати тестування?")) {
  const originalInteger = parseInt(prompt("Введіть ціле число", "100"));

  let sum = 0;
  let count = 0;
  let integer = originalInteger; // Зберігаємо початкове значення числа

  while (integer > 0) {
    let digit = integer % 10; // Остання цифра числа
    sum += digit; // Додаємо цифру до суми
    count++; // Збільшуємо лічильник цифр
    integer = Math.floor(integer / 10); // Видаляємо останню цифру
  }

  // Виведення результатів
  document.write(`Кількість цифр числа ${originalInteger}: ${count}<br>`);
  document.write(`Сума цифр числа ${originalInteger}: ${sum}`);
}
*/

// ===================================================================

// 28. Дано ціле число N (N > 0). Використовуючи операції ділення націло та остачі від ділення, визначити чи є цифра 2 у числі N. Якщо так, то вивести True, якщо ні – False.
/*
if (confirm("Почати тестування?")) {
let integer = parseInt(prompt("Введіть ціле число", "50"));

let containsTheNumber2 = false;

while (integer > 0) {
  let digit = integer % 10;

  if (digit === 2) {
    containsTheNumber2 = true;
    break; 
  }

  integer = Math.floor(integer / 10); // Видаляємо останню цифру
}
if (containsTheNumber2) document.write("True");
else document.write("False");
}
*/

// ===================================================================

// 29. Дано ціле число N (N > 0). Використовуючи операції ділення націло та остачі від ділення, визначити чи є в записі числа N непарні цифри. Якщо так, то вивести True, якщо ні – False.
/*
if (confirm("Почати тестування?")) {
  let integer = parseInt(prompt("Введіть ціле число", "50"));

  let containsOddNumbers = false;

  while (integer > 0) {
    let digit = integer % 10;

    if (digit % 2 !== 0) {
      containsOddNumbers = true;
      break;
    }

    integer = Math.floor(integer / 10); // Видаляємо останню цифру
  }
  if (containsOddNumbers) document.write("True");
  else document.write("False");
}
*/

// ===================================================================
