// cуворий режим
"use strict";

// ========================================

//* 1. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
function isDateInCurrentWeek(date) {
  const inputDate = new Date(date); // перетворюємо введену дату
  const currentDate = new Date(); // поточна дата
  const currentDayOfWeek = currentDate.getDay(); //день тижня
  const diffToMonday = (currentDayOfWeek + 6) % 7; // скільки днів потрібно відняти, щоб дійти до пн

  const startWeek = new Date(currentDate);
  startWeek.setDate(currentDate.getDate() - diffToMonday); //setDate()зменшує поточну дату на diffToMonday(щоб отримати пн)
  startWeek.setHours(0, 0, 0, 0);

  const endWeek = new Date();
  endWeek.setDate(startWeek.getDate() + 6);
  endWeek.setHours(23, 59, 59, 999);

  return inputDate >= startWeek && inputDate <= endWeek;
}

const datesToCheck = [
  new Date(2025, 6, 11),
  new Date(2025, 6, 7),
  new Date(2025, 5, 30),
  new Date(2025, 0, 1),
];

datesToCheck.forEach((date) => {
  const formattedDate = date.toLocaleDateString();
  const inOrOutTheWeek = isDateInCurrentWeek(date) ? `входить` : `не входить`;

  const isInWeek = `Дата ${formattedDate} ${inOrOutTheWeek} у поточний тиждень`;
  console.log(isInWeek);
});
// ========================================

//* 2.  Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває.
function isProcedureStillOngoing(hour, minute) {
  const currentTime = new Date();
  console.log(currentTime);
  const startTime = new Date();
  startTime.setHours(hour, minute, 0, 0);
  console.log(startTime);
  const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);
  console.log(endTime);

  const formattedStart = startTime.toLocaleTimeString();
  const formattedEnd = endTime.toLocaleTimeString();

  let statusInfo = "";
  let timeInfo = "";

  if (currentTime < startTime) {
    statusInfo = "Процедура ще не розпочалась";
    timeInfo = `Початок в ${formattedStart}`;
  } else if (currentTime >= startTime && currentTime < endTime) {
    statusInfo = "Процедура ще триває";
    timeInfo = `Закінчиться в ${formattedEnd}`;
  } else {
    statusInfo = "Процедура вже закінчилась";
    timeInfo = `в ${formattedEnd}`;
  }

  const result = `${statusInfo} ${timeInfo}`;
  return result;
}
console.log(isProcedureStillOngoing(14, 30));
// ========================================

//* 3.Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
const entryTime = new Date();
let mouseMove = false;

function getFirstMouseMoveTime() {
  if (!mouseMove) {
    mouseMove = true;
    const currentTime = new Date();
    const diffInSec = ((currentTime - entryTime) / 1000).toFixed(2);
    console.log(
      `Перший рух мишки через ${diffInSec} секунд після заходу на сайт`
    );

    window.removeEventListener("mousemove", getFirstMouseMoveTime);
  }
}
window.onload = function () {
  window.addEventListener("mousemove", getFirstMouseMoveTime);
};
// ========================================

//* 4. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і вставкою.
function getRandomNumbersArray(length, min = 1, max = 800) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomNum = min + Math.floor(Math.random() * (max - min + 1));
    arr.push(randomNum);
  }
  return arr;
}
const originalArr = getRandomNumbersArray(1000);
//1. сортування бульбашкою
function bubbleSortTime(arr) {
  const startSort = new Date();
  let endIndex = arr.length;

  let change;
  do {
    change = false;
    for (let i = 1; i < endIndex; i++) {
      if (arr[i - 1] > arr[i]) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        change = true;
      }
    }
    endIndex--;
  } while (change);
  const endSort = new Date();
  return endSort - startSort;
}
//2. сортування вставкою
function insertionSortTime(arr) {
  const startSort = new Date();

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    if (j !== i - 1) {
      arr[j + 1] = current;
    }
  }
  const endSort = new Date();

  return endSort - startSort;
}
const bubbleSortArr = [...originalArr];
const insertionSortArr = [...originalArr];

const bubbleTime = bubbleSortTime(bubbleSortArr);
const insertionTime = insertionSortTime(insertionSortArr);

console.log("Час сортування бульбашкою:", bubbleTime, "мс");
console.log("Час сортування вставкою:", insertionTime, "мс");

if (bubbleTime > insertionTime) {
  console.log(
    "Сортування вставкою швидше на",
    bubbleTime - insertionTime,
    "мс"
  );
} else if (insertionTime > bubbleTime) {
  console.log(
    "Сортування бульбашкою швидше на",
    insertionTime - bubbleTime,
    "мс"
  );
} else {
  console.log("Обидва алгоритми мають однаковий час виконання");
}

// =======================================
