// cуворий режим
"use strict"

// ==========================================================

// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість
// цукерок є більшою, або вивести, що кількість однакова.

// Крок 0. Позначення
// ім'я першої дитини - firstChildName
// ім'я другої дитини - secondChildName
// кількість цукерок у першої дитини - firstChildCandies
// кількість цукерок у другої дитини - secondChildCandies

// Крок 1. Вводимо необхідні дані
const firstChildName = prompt("Введіть ім'я першої дитини", 'Дарина');
const secondChildName = prompt("Введіть ім'я другої дитини", 'Василь');
const firstChildCandies = parseInt(prompt(`Скільки цукерок у ${firstChildName}?`, '5'));
const secondChildCandies = parseInt(prompt(`Скільки цукерок у ${secondChildName}?`, '4'));

// Крок 2. Обчислення результату
let whoHasMoreCandies = ''
if (firstChildCandies > secondChildCandies)
  whoHasMoreCandies = firstChildName;
else if (secondChildCandies > firstChildCandies)
  whoHasMoreCandies = secondChildName;
else whoHasMoreCandies = "Кількість цукерок однакова";
  // Крок 3. Виведення результатів
  document.write(
    `<div class="task__subtitle task__subtitle--green">${whoHasMoreCandies}</div>`
  );

// =================================================================