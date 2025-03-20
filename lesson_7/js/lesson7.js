// cуворий режим
"use strict";

// ===================================================================

//  Знайти суму двох випадкових днів тижня
/*
function getRandomWeekDay() {
	let day = 1 + Math.floor(Math.random()*7)
	return day
}
*/
/*
function getRandomWeekDay() { // функція не повинна нічого виводити, функція повинна результат повертати
  return 1 + Math.floor(Math.random() * 7); // можна одразу return результат без додаткових констант і змінних(якщо вираз викор-ся 1 раз)
 
}
*/

/*
const d1 = getRandomWeekDay()
document.write(`Day:${d1}`);

const d2 = getRandomWeekDay();
document.write(`Day:${d2}`);

const s = d1 + d2
document.write(`sum = ${s}`);
*/
/*
const s = getRandomWeekDay() + getRandomWeekDay()
document.write(`sum = ${s}`);
*/
// ===================================================================

// Знайти розмір заробітної плати
// (ставка (salary) + надбавка(benefits) - податок(tax%))
/*
function getFinalSalary(salary, benefits, tax) { // формальні параметри
	return (salary + benefits) * (1 - tax/100)
}

let salaryResult = getFinalSalary(50000, 15000, 25) // фактичні параметри
*/
// ===================================================================

// Визначити середню оцінку з трьох предметів

// get(отримати щось), якщо функція щось обчислює і return-то в цьому випадку може бути приставка get
// сукупність дієслів sendMessage , якщо якісь дії(напр. надстлання листа кудись)
// open-якщо відкриває щось
// is - коли функція повертає значення true/false
/*
function getAverageScore(score1, score2, score3) {
	return (score1+score2+score3)/3
}
let resultScore = getAverageScore(12,10,9)
*/
// ===================================================================
// Вивести привітання декількома мовами(створити функцію: мова задається(ua, en), а виводиться привітання потрібною мовою ("привіт", "hello"))
/*
function getGreeting(lang) {
	switch (lang) {
    case 'ua':
      return 'привіт';
    case 'en':
      return 'hello';
  }
}
  */

//  let result // якщо змінна описана ЗА межами функції- то по-відношенню до функції-це глобальна змінна, але КАТЕГОРИЧНО так робити НЕ МОЖНА. Функція повинна бути автономна(її тоді легко перенести в інший модуль і легко в будь-якому місті використати), тому змінну потрібно записувати в функції
/*
function getGreeting(lang) { // спочатку результат потрібно знайти, а потім один раз його return
  // 1. знаходимо результат
  let result // змінна без присвоєння буде давати результат undefined. 
  switch (lang) {
    case "ua":
      result = "привіт";
      break;
    case "en":
      result = "hello";
      break;
  }
  // 2. повертаємо результат
  return result // якщо забули написати(тобто функція нічого не повертає)- то результат також буде undefined
}
document.write(getGreeting('en'))
*/

// ===================================================================

// Знайти максимальне серед 2-х чисел
/*
function getMax2(num1,num2) {
	if(num1>num2) return num1
	else return num2
}
document.write(getMax2(2,7));
*/
/*
function getMax2(num1, num2) {
	let res
  if (num1 > num2) res= num1;
  else res= num2;
  return res
}
document.write(getMax2(2, 7));
*/
/*
function getMax2(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
document.write(getMax2(2, 7));
*/
/*
function getMax2(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

let m = getMax2(2,7)

document.write(m);
*/
// ===================================================================

// Знайти максимальне серед 3-х чисел
/*
function getMax3(num1, num2, num3) {
  let m = num1;
  if (num2 > m) m = num2;
  if (num3 > m) m = num3;
  return m;
}

let max = getMax3(2, 7, 3);

document.write(max);
*/
/*
function getMax2(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function getMax3(num1, num2, num3) {
  const m1 = getMax2(num1, num2);
  return getMax2(m1, num3);
}

let max = getMax3(2, 7, 3);

document.write(max);
*/

// ===================================================================

// Знайти максимальне серед 4-х чисел
/*
function getMax2(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function getMax3(num1, num2, num3) {
  const m1 = getMax2(num1, num2);
  return getMax2(m1, num3);
}

function getMax4(num1, num2, num3, num4) {
let max = getMax2(getMax3(2, 7, 3), num4)
return max
}

let max = getMax4(2,7,3,9)


document.write(max);
*/

// ===================================================================

// Знайти вартість оренди авто за заданою вартістю на місяць і кількістю місяців
/*
discription: Обчислює загальну вартість оренди
params: 
@rentPerMonth: Number вартість оренди на місяць
@monthNum: Number кількість місяців
result: Number загальна вартість оренди
*/
/*
// ---------- 1) описали функцію
function getTotalRentPrice(rentPerMonth, monthNum) {
	return rentPerMonth*monthNum
}
// ---------- 2) використовуємо для розв'язання задачі
const rentM = parseFloat(prompt(`Вартість оренди за місяць`))
const monthNum = parseInt(prompt(`Введіть кількість повних місяців оренди`))

const total = getTotalRentPrice(rentM, monthNum)
document.write(`Загальна вартіть оренди авто = ${total}`);
*/

// ===================================================================

// Знайти прибуток банку при купівлі та реалізації вказаної суми доларів
/*
function getProfitForBuy(dollarNumber, profitPerDolar) {
	return dollarNumber*profitPerDolar
}

document.write(getProfitForBuy(200, 0.1));
*/

// ===================================================================

// Розрахувати середній бал студента на основі декількох предметів, де кожен предмет має свою вагу. Додатково визначити чи буде переведено студента на наступний рік (середня кількість балів більша за 60)
/*
function getAverageWeigedScored(score1, w1, score2, w2, score3, w3) {
  return score1 * w1 + score2 * w2 + score3 * w3;
}

function isPassed(avgScore, scoreLimit) {
	// if (avgScore >= scoreLimit) return true
	// else return false
	return avgScore >= scoreLimit;
}

const avgScore = getAverageWeigedScored(70, 0.7, 81, 0.2, 50, 0.1);
document.write(avgScore);

if (isPassed(avgScore, 60)) document.write('Ok')
	else document.write("No");
*/

// ===================================================================

// Задано покази таймера відліку. Знайти колір, який треба застосувати для його виведення (100-80-зелений, 79-30-жовтий, 29-0-червоний)
/*
function getTimerColor(timerValue) {
	let resColor
	if(timerValue<=29) resColor='red'
	else if(timerValue<=79) resColor='yellow'
   else resColor='green'
	return resColor
}
document.write(getTimerColor(55));
*/

// ===================================================================

// Двоє гравців кидають двічі разів кубик і визначається сумарна кількість балів. Визначити переможця
/*
// ----- одне підкидання кубика
function getRandomScoreFromDice() {
	return 1 + Math.floor(Math.random()*6)
}
// -------- загальна кількість балів (два підкидання кубика)
function getPlayerScore() {
	return getRandomScoreFromDice() + getRandomScoreFromDice()
}

const player1Score = getPlayerScore()
const player2Score = getPlayerScore();
let res
if (player1Score > player2Score) res = 'Виграв перший'
else if (player1Score < player2Score) res = 'Виграв другий'
else res = 'Нічия'

document.write(res);
*/
/*
// ----- одне підкидання кубика
function getRandomScoreFromDice() {
  return 1 + Math.floor(Math.random() * 6);
}
// -------- загальна кількість балів (два підкидання кубика)
function getPlayerScore() {
  return getRandomScoreFromDice() + getRandomScoreFromDice();
}
// ------- функція гри
function game() {
  const player1Score = getPlayerScore();
  const player2Score = getPlayerScore();
  let res;
  if (player1Score > player2Score) res = "Виграв перший";
  else if (player1Score < player2Score) res = "Виграв другий";
  else res = "Нічия";
  return res;
}

document.write(game());
*/
//----
/*
function getRandomScoreFromDice() {
  return 1 + Math.floor(Math.random() * 6);
}
const r1 = getRandomScoreFromDice // без дужок!!! Інакше буде обчислення
const r2 = r1
document.write(r2());
*/
// --------
/*
// ----- одне підкидання кубика (1-6)
function getRandomScoreFromDice() {
  return 1 + Math.floor(Math.random() * 6);
}
// ----- з діапазону від -10 до 10
function getRandomScoreFromRange() {
  return -10 + Math.floor(Math.random() * 21); // 10 - - 10 + 1
}
// ----- з діапазону від 1 до 10
function getRandomOddEvenScore() {
  let num = 1 + Math.floor(Math.random() * 10);
  return num % 2 == 0 ? num : -num;
}
// -----------------------------------
// -------- загальна кількість балів (функцію для визначення кількості балів передаємо як параметр)
function getPlayerScore(funcForGettingScore) {
  return funcForGettingScore() + funcForGettingScore();
}

// ------- функція гри
function game(funcForGettingScore) {
  const player1Score = getPlayerScore(funcForGettingScore);
  const player2Score = getPlayerScore(funcForGettingScore);
  document.write(
    `player1Score = ${player1Score}<br>player2Score = ${player2Score}<br>`
  );
  let res;
  if (player1Score > player2Score) res = "Виграв перший";
  else if (player1Score < player2Score) res = "Виграв другий";
  else res = "Нічия";
  return res;
}

document.write(game(getRandomOddEvenScore));
*/

// ===================================================================
/*
function func1() {
	document.write(`111111`);
}
function func2() {
  document.write(`222222`);
}
function func3() {
  document.write(`3333333`);
}
//  -------------
function general(g) { // немає значення, як буде названа змінна(умовно:  let g)
  g()
}
// ==========
general(func3)
*/

// ===================================================================

// Обчислити S = Max(a,b)+Min(c,d)+Max(a,c)
/*
function max(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}
function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
let a = parseFloat(prompt("a="));
let b = parseFloat(prompt("b="));
let c = parseFloat(prompt("c="));
let d = parseFloat(prompt("d="));

let m1 = max(a, b);
let m2 = min(c, d);
let m3 = max(a, c);

let s = m1 + m2 + m3;
document.write(`S =${s}`)
*/

// ===================================================================

// Знайти площу фігури, що складається з прямокутника та двох півкіл
/*
function rectangle__area(side1, side2) {
  return side1 * side2;
}
function circle__area(radius) {
  return Math.PI * radius ** 2;
}
let a = parseFloat(prompt("a="));
let b = parseFloat(prompt("b="));

let s1 = rectangle__area(a, b);
let s2 = circle__area(b / 2) / 2;
let s3 = circle__area(a / 2) / 2;

let s = s1 + s2 + s3;

document.write(`S =${s.toFixed(2)}`);
*/

// ===================================================================
/*
function sum(num1, num2) {
  return num1 + num2;
}
// let sum = function sum(num1, num2) {
//   return num1 + num2;
// };
// стрілкова функція(спрощений запис функції)
let sum = (num1, num2) => num1 + num2 // стрілочка заміняє return
*/
// ===================================================================
/*
function getSquare(x) {
  return x*x
}
let getSquare = x => x*x // якщо один параметр- дужок не треба
*/
// ===================================================================
/*
function sum(num1, num2) {
  //   num2 = num2 || 0 // якщо 2 не буде задано(логічний вираз перевірив undefined(еквівалентний false))-то буде записано значення 0
  num2 ??= 0 //умовне присвоєння: якщо  num2 undefined, або null-то 0 буде записано в  num2 
  return num1 + num2;
}
  */
/*
function sum(num1, num2=0) { // резервне значення, на випадок, якщо не передається друге значення
  return num1 + num2;
}
document.write(sum(5,5));
*/
/*
function sum(num1 = 0, num2 = 0) { // можуть бути обидва резервних значення
  // резервне значення, на випадок, якщо не передається друге значення
  return num1 + num2;
}
document.write(sum());
*/
/*
function sum(num1 = 0, num2) { // !!! але не може бути такого, щоб тільки перше значення було з резервним значенням, завжди треба ставити значення за замовченнм в кінець
  // можуть бути обидва резервних значення
  // резервне значення, на випадок, якщо не передається друге значення
  return num1 + num2;
}
document.write(sum(0));
*/
/*
function sum(num1, num2 = 0, num3 = 0) {
  return num1 + num2 + num3;
}
document.write(sum(7, 8, 9));
*/

