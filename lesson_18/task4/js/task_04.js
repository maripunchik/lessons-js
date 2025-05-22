// cуворий режим
"use strict";

// =================================================================

// Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

const wishesList = [
  "Подорожувати світом",
  "Вивчити нову мову",
  "Прочитати 100 книжок",
  "Займатися спортом регулярно",
  "Завести домашнього улюбленця",
  "Навчитися грати на музичному інструменті",
  "Створити власний блог",
  "Створити власний бізнес",
  "Стати волонтером",
  "Знайти гармонію в житті",
];

function getRandomNum(min, max) {
  if (min > max) [min, max] = [max, min];
  return min + Math.floor(Math.random() * (max - min + 1));
}

class RandomWishGenerator {
  constructor({
    wishesList = [],
    wishesCountToDisplay = 3,
    containerSelector = "#parent",
  }) {
    this.wishesList = wishesList;
    this.wishesCountToDisplay = wishesCountToDisplay;
    this.container = document.querySelector(containerSelector);
  }

  getRandomWishIndexes() {
    let selectedWishes = []
    while (selectedWishes.length < this.wishesCountToDisplay) {
      let randomIndex = getRandomNum(0, wishesList.length - 1);
      if (!selectedWishes.includes(randomIndex)) {
       selectedWishes.push(randomIndex)
      }
    }
	 return selectedWishes
  }

  displayWishes() {
    let randomIndexes = this.getRandomWishIndexes();
	 randomIndexes.forEach(index => {
		const wish = document.createElement("div");
    wish.className = "task__wish";
    wish.innerText = this.wishesList[index];
    this.container.append(wish);
	 })
  }
}
//---
window.onload = function () {
  const generator = new RandomWishGenerator({
    wishesList: wishesList,
    wishesCountToDisplay: 3,
    containerSelector: "#parent",
  });

  generator.displayWishes();
};

// =====================================================

// function getRandomNum(min, max) {
//   if (min > max) [min, max] = [max, min];
//   return min + Math.floor(Math.random() * (max - min + 1));
// }

// function get3RandomWishes(wishesList, count = 3) {
//   for (let i = 0; i < count; i++) {
//     const randWishIndex = getRandomNum(0, wishesList.length - 1);
//     const wish = document.createElement("div");
//     wish.className = "task__wish";
//     const landmark = document.getElementById("parent");
//     wish.innerText = wishesList[randWishIndex];
//     landmark.append(wish);
//   }
// }
// window.onload = function () {
//   get3RandomWishes(wishesList);
// };

// ===================================

// 1.створюємо елемент (потрібно елемент вставити в DOM-дерево)
// const myH1 = document.createElement("h1");
// const myInput = document.createElement('input')
// 2.знаходимо базовий елемент орієнтир
// document.getElementById('myFirstDiv').append(myInput) // можна одразу знайти елемент-орієнтир і вставити створений елемент, або створити const
// const parent = document.getElementById('myFirstDiv')
// 3.вставляємо створений елемент
// parent.before(myInput)
