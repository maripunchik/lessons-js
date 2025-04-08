// cуворий режим
"use strict";

// =================================================================

//  Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

if (confirm("Почати тестування?")) {
  const namesArr = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "James",
    "Olivia",
    "David",
    "Ava",
    "Ethan",
    "Isabella",
    "Daniel",
    "Olga",
    "Charlotte",
    "Alexander",
    "Amelia",
    "Matthew",
    "Lily",
    "Benjamin",
    "Grace",
    "William",
    "Zoe",
  ];

  const searchName = "Olga";

  // Функція для виділення імені кольором
  function highlightName(arr, name) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === name) {
        arr[i] = `<span style="color:red;">${arr[i]}</span>`;
      }
    }
    return arr;
  }

  // Функція сортування масиву методом вставок
  function getInsertionSortNamesArr(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentName = arr[i];
      let prevName = i - 1;
      while (prevName >= 0 && arr[prevName] > currentName) {
        arr[prevName + 1] = arr[prevName];
        prevName--;
      }
      arr[prevName + 1] = currentName;
    }
    return arr;
  }

  // Функція бінарного пошуку
  function getIndexFromNamesArr(sortArr, searchName) {
    let start = 0;
    let end = sortArr.length - 1;
    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (sortArr[middle] === searchName) return middle;
      else if (sortArr[middle] < searchName) start = middle + 1;
      else if (sortArr[middle] > searchName) end = middle - 1;
    }
    return -1;
  }

  const namesArrCopy = [...namesArr];
  const sortNamesArr = getInsertionSortNamesArr(namesArrCopy);

  const searchNameIndex = getIndexFromNamesArr(sortNamesArr, searchName);

  // Виведення результатів
  document.writeln(
    `<div class="task__subtitle task__subtitle--violet task__subtitle--italic">Початковий масив імен: [${highlightName(
      namesArr,
      searchName
    ).join(", ")}]</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--darkblue task__subtitle--italic">Відсортований масив імен: [${highlightName(
      sortNamesArr,
      searchName
    ).join(", ")}]</div>`
  );

  if (searchNameIndex >= 0) {
    document.writeln(
      `<div class="task__subtitle task__subtitle--green  task__subtitle--italic">Ім'я ${searchName} знаходиться під індексом ${
        searchNameIndex + 1
      } в відсортованому масиві.</div>`
    );
  } else {
    document.writeln(
      `<div class="task__subtitle task__subtitle--italic">Ім'я ${searchName} не знайдено в масиві.</div>`
    );
  }
}

// =================================================================
