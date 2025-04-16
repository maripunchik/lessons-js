// cуворий режим
"use strict";

// ================= ТАЙМЕРИ ==================================

// const firstTimerId = setTimeout(() => { //  setTimeout -один раз
//   alert("hello");
// }, 5000);

// setTimeout(() => {
//   clearTimeout(firstTimerId);
//   console.log("Stop:" + firstTimerId);
// }, 10000);

// ==============================================================

// const intervalId = setInterval(() => {
//   // setInterval - постійно
//   console.log("Hello"); // вивидить кожну секунду
// }, 1000);
// setTimeout(() => clearInterval(intervalId), 4000);

// ==============================================================

// ============== РЕКУРСІЇ ===================================

// function nextB(step, arr) {
//   if (step === 3) document.writeln(`${arr}<br>`);
//   else {
//     nextB(step + 1, [...arr, 0]);
//     nextB(step + 1, [...arr, 1]);
//   }
// }
// nextB(0,[])

// ========================================================

// function getWeekDayNumCounter(initValue) {
//   let currentDayNum;

//   function setInitValue() {
//     if (initValue >= 1 && initValue <= 7) currentDayNum = initValue;
//     else throw new Error("Значення дня тижня некоректне");
//   }
//   setInitValue(initValue)
//   function getCurrentDayNum() {
//     return currentDayNum;
//   }
//   function incrementDayNum() {
//     if (currentDayNum < 7) currentDayNum++;
//   }
//   function decrementDayNum() {
//     if (currentDayNum > 1) currentDayNum--;
//   }
//   return [getCurrentDayNum, incrementDayNum, decrementDayNum];
// }

// const [getDay, incDay, decDay] = getWeekDayNumCounter(2);

// document.writeln(`${getDay()}<br>`);
// decDay();
// document.writeln(`${getDay()}<br>`);
// decDay();
// document.writeln(`${getDay()}<br>`);
// decDay();
// document.writeln(`${getDay()}<br>`);
// const intervalId = setInterval(() => {
//   incDay();
//   document.writeln(`${getDay()}<br>`);
// }, 2000);

// clearInterval(intervalId);

// const intervalId = setInterval(() => {
//   incDay();
//   document.writeln(`${getDay()}<br>`);

//   if (getDay() === 7) {
//     clearInterval(intervalId);
//     document.writeln("Інтервал зупинено<br>");
//   }
// }, 2000);

// =====================================================

// Що побачить користувач 1?
// for (let i = 1; i < 5; i++) {  // на кожному кроці(на кожній ітерації) для кожного значення
// 	setTimeout(function () {
// 		alert(i)
// 	}, 2000)
// }
// створюється окрема область видимості(окремий блок)
// {
//   let i = 1;
//   setTimeout(function () {
//     alert(i);
//   }, 2000);
// }

// {
//   let i = 2;
//   setTimeout(function () {
//     alert(i);
//   }, 2000);
// }
// {
//   let i = 3;
//   setTimeout(function () {
//     alert(i);
//   }, 2000);
// }
// {
//   let i = 4;
//   setTimeout(function () {
//     alert(i);
//   }, 2000);
// }
// ============================

// Що побачить користувач 2?
// let i; // оскільки змінна глобальна-то за 2 секунди дійде до кінцевого значення(5)
// for (i = 1; i < 5; i++) {
//   setTimeout(function () {
//     alert(i);
//   }, 2000);
// }

// ================================

// for (var i = 1; i < 5; i++) { // var вспливає за межі блоку(будуть виведені всі 5), якщо описати в середині функції-то залишиться в середині
//   setTimeout(function () {
//     alert(i);
//   }, 2000);
// }

// ================================

// Що побачить користувач 3?
// let num = 0
// let myTimer =setInterval(function() {
// 	if(num === 5) {
// 		alert(`Stop`)
// 		clearInterval(myTimer)
// 	}else{
// 		num++
// 		alert(num)
// 	}
// }, 1000);

// ================================

// Що побачить користувач 4?
// function myFunc(num) {
// 	setTimeout(() => {
//     if (num < 5) {
//       alert(num);
//       myFunc(num+1);
//     }
//   }, 1000);
// }
// myFunc(1)

