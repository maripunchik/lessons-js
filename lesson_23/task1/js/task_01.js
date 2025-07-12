// cуворий режим
"use strict";

// ===========================================
const strings = [
  "Добрий день!",
  "абв123",
  "aq1sw2de3fr4",
  "HELLO!",
  "бвгджзклмн",
  "7894556122",
  "ABCDE1234",
  "ауеоиі",
];
//* Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
const withDigits = strings.filter((str) => /\d/.test(str)); // \d  - довільна цифра(0-9)
console.log("1. З цифрами:", withDigits);
// ============================================

//* Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
const withoutDigits = strings.filter((str) => !/\d/.test(str)); // \d  - довільна цифра(0-9)
console.log("2. Без цифр:", withoutDigits);
// =============================================

//* Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
const withVowels = strings.filter((str) => /[аеєиіоуюяaeiou]/i.test(str)); // повинен містити один з вказаних символів(вказуємо в квадратних дужках): /[аоуиіе]/.test(text) //true, i--"ignore case"--ігнорувати реєстр літер
console.log("3. Є голосні літери:", withVowels);
// =============================================

//* Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
const withoutVowels = strings.filter((str) => !/[аеєиіоуюяaeiou]/i.test(str)); // повинен містити один з вказаних символів(вказуємо в квадратних дужках): /[аоуиіе]/.test(text) //true, i--"ignore case"--ігнорувати реєстр літер
console.log("4. Немає голосних літер:", withoutVowels);
// =============================================

//* Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
const with1or3 = strings.filter((str) => /[13]/.test(str)); // повинен містити один з вказаних символів(вказуємо в квадратних дужках): /[аоуиіе]/.test(text) //true
console.log("5. Є або цифра 1 або цифра 3:", with1or3);
// =============================================

// ==============================================

const text =
  "Ми зустрілися 12.07.2024, об 11:30. Мар'яна принесла 12 книжок, 5 ручок(із них 2 червоного кольору), і 100 гривень! А ти — 45 зошитів, так?";
console.log(text);
//* Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
const numbersInText = text.match(/\d+/g); // "усі числа" g -- "знайди все"
console.log("6.Усі числа, які є у тексті:", numbersInText);
//=============================================

//* Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
const punctuationMarks = text.match(/[.,!?;:\-_’()'"`]/g); // дефіс екрануємо, або на початок
console.log("7.Усі знаки пунктуації, які були використано:", punctuationMarks);
//==============================================

//* Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
const separatedComponentsByPM = text.match(/[^.,!?;:()-\s]+/g); // початок рядка "^" (якщо в квадратних дужках[^_ _ _]-шукаємо все, крім цих символів),"+"-- принаймні одне входження(попереднього символу) кіл-ть >=1
// const separatedComponentsByPM = text.split(/[.,!?;:()-\s]+/);//"+"-- принаймні одне входження(попереднього символу) кіл-ть >=1
console.log(
  "8.Усі складові, які розділені розділовими знаками:",
  separatedComponentsByPM
);
//==============================================

//* Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
const dateInFormat = /\b\d{2}\.\d{2}\.\d{4}\b/.test(text); //початок або кінець слова "\b"(межа слова)
const result9 = dateInFormat
  ? "Містить дату у форматі dd.mm.yyyy"
  : "Не містить дату у форматі dd.mm.yyyy";
console.log("9.Дата у форматі dd.mm.yyyy:", result9);
//==============================================

//* Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
const twoDigitalNumbers = text.match(/\b\d{2}\b/g);
if (twoDigitalNumbers) {
  const twoDigitalNumbersCount = twoDigitalNumbers
    ? twoDigitalNumbers.length
    : 0;
  console.log(
    "10.Кількість двоцифрових чисел у рядку:",
    twoDigitalNumbersCount
  );
}
//==============================================

//* Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
const a =
  "myFirstCard:4142-3433-2323-3434 vkvjljl someNumber:35864564 number:5478-8975-3233 mySecondCard:1234-1234-1234-1234";
const card = a.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g);
console.log("11.Номер банківської картки:", card);
//==============================================

//* Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

const webSites = [
  "https://dkcjkcj.gov.ua",
  "https://dkcjkcj.egov.ua",
  "https://dkcjkcj.egovw.ua",
  "http://data.org.ua",
  "http://data.gov.ua",
  "https://dkcjkcj.gov.uk",
  "https://dkcjkcj.gov",
];

const governmentWebsites = webSites.filter((url) =>
  /\.gov(\.[a-z]{2,})?\b/i.test(url)
);
console.log("12.Урядові сайти:", governmentWebsites);
//==============================================

//* Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
const message = "aaaa 2000 bbbbb 2024 ccccc 2030 vvv 2029 fff llkkll 2050 3000";
const yearsAfter2021 = message.match(/20[3-9]\d|202[2-9]|2[1-9]\d\d|[3-9]\d\d\d/g);
console.log("13.Усі роки після 2021 року:", yearsAfter2021);
//==============================================

//* Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
const phoneNumber = "+380506667788";
const isUa = /^\+38/.test(phoneNumber) ? "ua" : "Other";
console.log(`14.Номер:${phoneNumber}`, isUa);
//==============================================

//* Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
function replaceSpace() {
  const input = document.getElementById("fullname").value.trim();
  const whitespaceChange = input.replace(/\s+/g, "-");
  document.getElementById("result").innerText = whitespaceChange;
  console.log(`15.Замінити пробіл на дефіс: ${whitespaceChange}`);
}
// window.onload = function () {
//   const button = document.getElementById("formatBtn");
//   button.onclick = replaceSpace;
// };
//==============================================

//* Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
function convertDateFormat() {
  const input = document.getElementById("dateInput").value.trim();
  const formattedDate = input.replace(/\./g, "/");
  document.getElementById("dateResult").innerText = formattedDate;
  console.log(`16.Перетворення формату дати: ${formattedDate}`);
}
// window.onload = function () {
//   const button = document.getElementById("convertDateBtn");
//   button.onclick = convertDateFormat;
// };
//==============================================

//* Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є цей день вихідним
function checkIfWeekend() {
  const input = document.getElementById("dayInput").value.trim().toLowerCase();
  const resultEl = document.getElementById("dayResult");

  const isValidInput = /^([0-6]|sun|mon|tue|wed|thu|fri|sat)$/.test(input);
  if (!isValidInput) {
    resultEl.innerText = "Невірне значення";
    console.log(`Невірний ввід:${input}`);
    return;
  }
  const isWeekend = /^(0|6|sun|sat)$/.test(input) ? "Вихідний" : "Не вихідний";
  resultEl.innerText = isWeekend;
  console.log(`17.Чи є цей день вихідним: день'${input}' ${isWeekend}`);
}
//---15-17
window.onload = function () {
  //Задача 15
  const button15 = document.getElementById("formatBtn");
  button15.onclick = replaceSpace;
  //Задача 16
  const button16 = document.getElementById("convertDateBtn");
  button16.onclick = convertDateFormat;
  //Задача 17
  const button17 = document.getElementById("checkDayBtn");
  button17.onclick = checkIfWeekend;
};
//==============================================
