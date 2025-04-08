// cуворий режим
"use strict";

// =================================================================

//   Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

if (confirm("Почати тестування?")) {
  const namesArr = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "Olivia",
    "David",
    "Ava",
    "Isabella",
    "Daniel",
    "Olga",
    "Charlotte",
    "Alexander",
    "Amelia",
    "Matthew",
    "Lily",
    "Benjamin",
    "William",
    "Zoe",
  ];

  document.writeln(
    `<div class="task__subtitle task__subtitle--violet task__subtitle--italic">Початковий масив імен: [${namesArr.join(
      ", "
    )}]</div>`
  );

  // Функція для виділення імені кольором
  function highlightName(arr, name) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === name) {
        arr[i] = `<span style="color:red;">${arr[i]}</span>`;
      }
    }
    return arr;
  }

  // Функція сортування масиву методом вставок (за кількістю символів у кожному імені)
  function getInsertionSortNamesByLength(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentName = arr[i];
      let prevName = i - 1;
      while (prevName >= 0 && arr[prevName].length > currentName.length) {
        arr[prevName + 1] = arr[prevName];
        prevName--;
      }
      arr[prevName + 1] = currentName;
    }
    return arr;
  }

  // Функція бінарного пошуку для пошуку імені з певною довжиною
  function getIndexFromNamesArr(sortArr, searchLength) {
    let start = 0;
    let end = sortArr.length - 1;
    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      const name = sortArr[middle];
      if (name.length === searchLength) {
        return middle; 
      }
      if (name.length < searchLength) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return -1; 
  }

  // Відсортуємо масив за довжиною імен
  const sortedNames = getInsertionSortNamesByLength([...namesArr]);

  // Шукаємо ім'я з 5 символами за допомогою бінарного пошуку
  const searchIndex = getIndexFromNamesArr(sortedNames, 5);

  // Виведення результатів
  document.writeln(
    `<div class="task__subtitle task__subtitle--darkblue task__subtitle--italic">Відсортований масив імен: [${highlightName(
      sortedNames,
      sortedNames[searchIndex]
    ).join(", ")}]</div>`
  );

  if (searchIndex >= 0) {
    document.writeln(
      `<div class="task__subtitle task__subtitle--green task__subtitle--italic">Ім'я, яке складається з 5 символів, знаходиться під індексом ${
        searchIndex + 1
      } у відсортованому масиві.</div>`
    );
  } else {
    document.writeln(
      `<div class="task__subtitle task__subtitle--italic">Ім'я довжиною 5 символів не знайдено в масиві.</div>`
    );
  }
}




// =================================================================
