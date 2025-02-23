// cуворий режим
"use strict"

// ==========================================================


// let a = 9
// let b = 7
// let sum = a + b
// alert(`Сума =  ${sum}`)
// alert(`${a} + ${b} = ${sum}`)
// console.log(`${a} + ${b} = ${sum}`);
// document.write(`<h1>${a} + ${b} = ${sum}</h1>`)
// let name = prompt('Як Вас звати','гість')
// document.write(`Привіт ${name} !`)
// const partnerName1 = prompt('Перший партнер', '')
// const partnerName2 = prompt('Другий партнер', '')

// document.write(`${partnerName1} танцює з ${partnerName2}`)

// const number1 = parseInt (prompt('Перше число', '0'))
// const number2 = parseInt (prompt('Друге число', '0'))
// const sum = number1 + number2

// document.write(`Сума = ${sum}`)

// const number1 = parseFloat(prompt('Перше число', '0'))
// const number2 = parseFloat(prompt('Друге число', '0'))
// const sum = number1 + number2

// document.write(`Сума = ${sum}`)

// const randNum = min + Math.floor(Math.random() * (max - min + 1))
// const randNum = 1 + Math.floor(Math.random()*(100-1+1))
// document.write(`rand = ${randNum}`)

// pupilBirthYear - рік народження
// pupilAge - вік учня
// const pupilBirthYear = parseInt(prompt('Введіть рік народження'))
// const currentYear = 2025
// const pupilAge = currentYear - pupilBirthYear
// document.write(`Вам в цьому році виповнилось, або виповниться ${pupilAge} років`)

// ==========================================================

// Крок 0. Позначення
// орендна плата за квартиру (за 1 місяць) - rentPerMonth
// заплатити за 1 рік - rentPer1Year
// заплатити за 2 роки - rentPer2Years
// заплатити за 10 років - rentPer10Years
// Крок 1. Вводимо необхідні дані
//  const rentPerMonth = parseFloat(prompt('Введіть вартість оренди за 1 місяць'))
// Крок 2. Обчислення результату
//  const rentPer1Year = rentPerMonth * 12
//  const rentPer2Years = rentPer1Year * 2
//  const rentPer10Years = rentPer1Year * 10
// Крок 3. Виведення результатів
//  document.write(`За 1 рік ${rentPer1Year} <br>`)
//  document.write(`За 2 роки ${rentPer2Years} <br>`)
//  document.write(`За 10 років ${rentPer10Years} <br>`)

// ==========================================================


// Крок 0. Позначення
// перше число - number1
// друге число - number2
// сума - sum
// добуток - product
// частка - fraction

// Крок 1. Вводимо необхідні дані
const number1 = parseFloat(prompt('Введіть перше число', '7'))
const number2 = parseFloat(prompt('Введіть друге число', '9'))

// Крок 2. Обчислення результату
const sum = number1 + number2
const product = number1 * number2
const fraction = (number1 / number2).toFixed(1)

// Крок 3. Виведення результатів
document.getElementById("number1").textContent = number1;
document.getElementById("number2").textContent = number2;
document.getElementById("sum").textContent = sum;
document.getElementById("product").textContent = product;
document.getElementById("fraction").textContent = fraction;

// =================================================================