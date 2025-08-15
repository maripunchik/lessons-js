// cуворий режим
"use strict";

//* Модулі. Mutation Onserver, Proxy. Асинхронна обробка. fetch

// Приклад знаходження суми та добутку за введеними двома числами

// let data = {
//   num1: 0,
//   num2: 0,
// };

// function calcResults() {
//   const sum = data.num1 + data.num2;
//   const prod = data.num1 * data.num2;

//   document.getElementById("sum").innerText = sum;
//   document.getElementById("prod").innerText = prod;
// }

// function changeNum1() {
//   let num1Val = parseInt(document.getElementById("num1").value);
//   data.num1 = num1Val;
//   calcResults();
// }

// function changeNum2() {
//   let num2Val = parseInt(document.getElementById("num2").value);
//   data.num2 = num2Val;
//   calcResults();
// }

//* Використовуючи Proxy

// let data = {
//   num1: 0,
//   num2: 0,
// };

// // Загортаємо у proxy об'єкт
// // Коли є об'єкт у якого багато властивостей, які потрібно відслідковувати, використовуємо(загортаємо) у proxy
// data = new Proxy(data, {
//   get(target, prop) {
//     // target- proxy-об'єкт, який ми відслідковуємо, prop-назва властивості, яку ми збираємося чи прочитати чи встановити(set)
//     return target[prop];
//   },
//   set(target, prop, val) {
//     // при встановленні нового значення викликається метод set
//     target[prop] = parseInt(val);
//     calcResults();
//   },
// });
// //---
// function calcResults() {
//   const sum = data.num1 + data.num2;
//   const prod = data.num1 * data.num2;

//   document.getElementById("sum").innerText = sum;
//   document.getElementById("prod").innerText = prod;
// }

//===============================================

//* Mutation Onserver (спостерігач за мутаціями)
// це вбудований об'єкт, який спостерігає за елементом DOM
// при змінах викликає функцію-колбек
// дозволяє реагувати на зміну контента, зміну атрибутів

// <div contenteditable="true" id="test"></div>; contenteditable="true" дозволяє із div робити input
// function checkDiv(mutationRecords) {
//   console.log(1111);
//   const record = mutationRecords[0];
//   console.log(record);

//   if (record.target.textContent.length > 5)
//     document.getElementById("test").style.color = "green";
//   else document.getElementById("test").style.color = "red";
// }

// window.onload = function () {
//   let observer = new MutationObserver(checkDiv); // створення MutationObserver

//   const config = {
//     // підключення спостерігання
//     childList: true,
//     subtree: true,
//     characterData: true,
//     attributes: true,
//     characterDataOldValue: true,
//   };

//   observer.observe(document.getElementById("test"), config); // працює відслідковування об'єкту DOM

//    //  setTimeout(() => {
//    //  observer.disconnect(); // для відключення
//    //  }, 4000);

//   //   observer.disconnect(); // для відключення
// };

// Задача. Кожну секунду у деякий контейнер вставляється div з випадковим числом (від 1 до 20). Якщо число більше 10, то видалити його через 1 секунду

// генерування div з випадковим числом (від 1 до 20)
// function createDivWithRandomNumber(minValue = 1, maxValue = 20) {
//   const div = document.createElement("div");
//   div.innerText =
//     minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
//   return div;
// }
// // додавання кожну секунду
// setInterval(() => {
//   document.getElementById("test").append(createDivWithRandomNumber());
// }, 1000);
// // функція перевірки вставлених елементів
// function checkDiv(mutationRecords) {
//   console.log(mutationRecords);
//   mutationRecords.forEach((record) => {
//     record.addedNodes.forEach((element) => {
//       const number = parseInt(element?.innerText);
//       if (number > 10) {
//         setTimeout(() => {
//           console.log(`removed-${number}`);
//           element.remove();
//         }, 1000);
//       }
//     });
//   });
// }
// //створення спостерігача
// window.onload=function () {
// 	let observer = new MutationObserver(checkDiv);
//   //підключення спостерігача
//   const config = {
//     childList: true,
//   };

//     observer.observe(document.getElementById("test"), config);

//   setInterval(() => {
// 	document.getElementById('test').append(createDivWithRandomNumber())
//   }, 1000);
// }

//* Модулі у js
// У двох файлах описані змінні з однаковими іменами
// let someVar=10  (src=".mod1.js")
// let someVar='Hello' (src=".mod2.js")
// Який скрипт буде підключений останній-такий і підключиться

// ;(function test() {
// 	alert('Test Ok')
// })(); //*самовикликаюча функція

//*Модуль-окрема програмна одиниця(окремий файл), яка може бути використана(підключена) при реалізації інших модулів
// це спосіб організувати код у менші, незалежні файли, які можна імпортувати та експортувати між собою. Це робить код більш структурованим, зручним для підтримки та повторного використання.
// Працюють тільки при використанні типу module в html <script type="module" src="main.js"></script>
// обов'язково liveserver

// в одному файлі module1.js:
// export let var1 = 10;
// export const const1 = 50;
// export function mySum(a, b) {
//   return a + b;
// }
// //в іншому main.js: перелічуємо(вказуємо) те, що потрібно
// import { var1, const1, mySum } from "./module1.js"; //! обов'язково фігурні дужки

// console.log(mySum(var1, const1));
// //!якщо перед змінною не буде export-то і використати (import) вже не буде можливості

// //* export default (може бути тільки один) (в одному файлі module1.js:)

// export default function mySum(a, b) {
//   return a + b;
// }
// import mySum, { var1, const1 } from "./module1.js"; // при використанні default, фігурні дужки не потрібно використовувати, якщо просто export-фігурні дужки обов'язково!

// console.log(mySum(var1, const1));

// //*використання псевдонімів під час імпорту

// import { var1 as v1, const1 as c1, mySum as sum } from "./module1.js";
// console.log(sum(v1, c1));

// // В JavaScript можна динамічно імпортувати модулі та обробляти їх асинхронно за допомогою import(), then і await. Це особливо корисно, коли модуль потрібен лише за певних умов або в окремих частинах програми.

// //  Синтаксис з .then()
// import("./message.js").then((module) => {
//   module.default(); // Виклик функції, експортованої за замовчуванням
//   console.log(module.hello); // Вивід іменованого експорту
// });

// // Синтаксис з await
// async function loadModule() {
//   const module = await import("./message.js");
//   module.default();
//   console.log(module.hello);
// }
// loadModule();

// import() повертає Promise, тому його можна обробити через .then() або await — але await працює лише всередині async функції.

//*Асинхронна обробка даних. Promise
// Promise — це об'єкт, який представляє результат асинхронної операції. Він може бути в одному з трьох станів:
//* - pending — очікування
//* - fulfilled — виконано успішно
//* - rejected — завершено з помилкою

// Приклад.  Генеруємо через 3 секунди число. Якщо число від 1 до 12- то генерування успішне

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let month = 1 + Math.floor(Math.random() * 100);
//     if (month <= 12) resolve(month);
//     else reject(new Error(`Month is incorrect`));
//   }, 3000);
// })
// //додаємо опис обробки успішного завершення проміса(якщо викликано resolve)
// promise.then((generatedMonth)=>{
// 	console.log(`Month=${generatedMonth}`)
// })
// //додаємо опис обробки відхиленого завершення проміса(якщо викликано reject)
// // promise.catch(function функція_колбек(результат невдачі){
// // ..................})
// promise.catch((err)=>{
// 	console.log(err.message);
// })
// // додаємо завершальний метод, який буде виконувати обов'язково після закінчення проміса
// //promise.finally(function функція_колбек(результат невдачі){
// // ..................})
// promise.finally(() => {
//   console.log(`Completed`);
// });

//2-ий варіант запису:
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let month = 1 + Math.floor(Math.random() * 100);
//     if (month <= 12) resolve(month);
//     else reject(new Error(`Month is incorrect`));
//   }, 3000);
// })
// .then((generatedMonth)=>{
// 	console.log(`Month=${generatedMonth}`)
// })
// .catch((err)=>{
// 	console.log(err.message);
// })
// .finally(() => {
//   console.log(`Completed`);
// });

// Promise.all() — це метод JavaScript, який дозволяє запускати кілька асинхронних операцій одночасно та чекати, поки всі вони завершаться успішно. Якщо хоча б одна з них завершиться з помилкою — весь Promise.all() буде відхилено.

// Приклад. Завантажити список усіх порід собак. Та вивести випадковим чином вибране зображення собаки якоїсь породи

//---масив з шляхами до API
// const apiEndpoints = {
//   allBreadsList: "https://dog.ceo/api/breeds/list/all",
//   getReadByBreedNameLink: (breedName) =>
//     `https://dog.ceo/api/breed/${breedName}/images/random`,
// };
// //функція завантаження списку усіх порід
// async function loadBreedsList() {
// 	const url = apiEndpoints.allBreadsList
// 	return new Promise((resolve,reject)=>{
// 		fetch(url)
//       .then((response) => response.json())
//       .then((data) => data.message)
// 		.then((listObject)=>{
// 			resolve(Object.keys(listObject))
// 		})
// 		.catch((err)=>{
// 			reject(err)
// 		})
// 	})
// }
// //функція вибору випадкового елемента з масиву
// function getRandomListItem(list) {
// 	const randomIndex =Math.floor(Math.random()*list.length)
// 	return list[randomIndex]
// }
// //функція для завантаження випадкового зображення вказаної породи
// async function loadBreedImage(breedName) {
// 	const url = apiEndpoints.getReadByBreedNameLink(breedName)
// 	return new Promise((resolve,reject)=>{
// 		fetch(url) // відбувається запит на сервер
// 		    .then((response) => response.json())
//       .then((data) => data.message)
// 		.then((imageLink)=>{
// 			resolve(imageLink)
// 		})
// 		.catch((err)=>{
// 			reject(err)
// 		})
// 	})
// }
// //функція створення елемента зображення
// function createImage(imgSrc) {
// 	const img = document.createElement('img')
// 	img.src=imgSrc
// 	 img.alt = "Random Dog";
//    img.style.width = "100%";
// 	return img
// }
// // головна функція виконання усіх кроків
// async function go(params) {
// 	// отримання списку порід
// 	let breedsList=await loadBreedsList()
// 	//вибір випадкової породи
// 	const randomBreed = getRandomListItem(breedsList)
// 	//отриманння випадкового зображення собаки вказаної породи
// 	const imageLink = await loadBreedImage(randomBreed)
// 	//створення і додавання елемента зображення собаки
// 	const cnt = document.querySelector(".practice__div");
// 	if(cnt){
// 		cnt.append(createImage(imageLink))
// 	}else{
// 		console.error("Елемент з класом 'practice__div' не знайдено в DOM");
// 	}
// }
// //виклик головної функції
// go()

//==============================================

//* Взаємодія з мережею. XMLHttpRequest.fetch(метод для організації запитів до серверів)
// https://github.com/public-apis/public-apis#animals - збірка безкоштовних серверів (api) для тестування

// з використанням fetch та await (треба писати у функції з async)
// async function getImage() {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
// 	 console.log(response);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
// 	 console.log(data);
//     const cnt = document.querySelector(".practice__div");

//     if (cnt) {
//       cnt.innerHTML = `<img src="${data.message}" alt="Random Dog Image" style="width: 100%; aspect-ratio: 1 / 1; object-fit: contain; ">`;
//     } else {
//       console.error("Елемент з класом 'practice__div' не знайдено в DOM");
//     }
//   } catch (error) {
//     console.error("Виникла помилка при завантаженні зображення:", error);
//   }
// }


// getImage();

//============================

//  let url = "https://jsonplaceholder.typicode.com/posts";
//  fileInput.addEventListener("change", (event) => {
//    const files = event.target.files; //файли, що було вибрано
//    readImageAsDataURL(files[0]);
//    uploadFile(files[0]); //викликаємо функцію, для надсилання файлу
//  });
//  //функція для зчитування даних і отримання як base64
//  function readImageAsDataURL(file) {
//    let reader = new FileReader();
//    reader.onload = (e) => {
//      imgPreview.src = e.target.result;
//    };
//    reader.readAsDataURL(file);
//  }
//  //функція для надсилання файлу
//  async function uploadFile(file) {
//    let formData = new FormData();
//    formData.append("file", file);
//    let response = await fetch(url, {
//      method: "POST",
//      body: formData,
//    });
//  }
