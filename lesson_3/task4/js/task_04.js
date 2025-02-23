// cуворий режим
"use strict"

// ==========================================================

// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником,пенсіонером).

// Крок 0. Позначення
// дитиною у садочку - kindergartenAge
// школяр - schoolAge
// студент - studentAge
// працівник - workAge
// пенсіонер - retirementAge

// Крок 1. Вводимо необхідні дані
const humanAge = parseInt(prompt('Введіть вік людини: ', '30'));
const kindergartenAge = 2;
const schoolAge = 6;
const studentAge = 16;
const workAge = 20;
const retirementAge = 65;
let result 

// Крок 2. Обчислення результату
if (humanAge < kindergartenAge) result = "немовля";
else if (humanAge < schoolAge) result = "дитина у садочку";
else if (humanAge < studentAge) result = "школяр";
else if (humanAge < workAge) result = "студент";
else if (humanAge < retirementAge) result = "працівник";
else if (humanAge > retirementAge) result = "пенсіонер";
// Крок 3. Виведення результатів
document.write(`<h2 class="task__subtitle task__subtitle--green">Ви ${result}</h2>`);

// =================================================================: