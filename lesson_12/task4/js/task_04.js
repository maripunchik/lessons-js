// cуворий режим
"use strict";

// =================================================================

// Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .
// Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран (стрілки не потрібні).

if (confirm("Почати тестування?")) {
  document.writeln(
    `<div class="task__subtitle task__subtitle--darkblue task__subtitle--italic">Колір порівняння-синій:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--italic">Колір елемента, який переміщується (обмінюється)-червоний:</div>`
  );

  // Генерація випадкового масиву
  function getRandomNumbersArray(length, min = 1, max = 10) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const randNum = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(randNum);
    }
    return arr;
  }

  // Функція для генерації таблиці порівнянь/обмінів
  function getStagesOfSorting(arr, compareIndexes, swapIndexes) {
    let table = "<table><tr>";

    arr.forEach((item, index) => {
      if (compareIndexes.includes(index)) {
        table += `<td style="background-color: #002c83; color: white">${item}</td>`; // Порівнюваний елемент
      } else if (swapIndexes.includes(index)) {
        table += `<td style="background-color: #ff0000; color: white">${item}</td>`; // Переміщений елемент
      } else {
        table += `<td>${item}</td>`;
      }
    });

    table += "</tr></table>";
    return table;
  }

  const originalArr = getRandomNumbersArray(5);
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Масив до сортування:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">[${originalArr.join(
      ", "
    )}]</div>`
  );

  // ==============================================================================================
  
  // 1) Сортування бульбашкою
  document.writeln(
    `<div class="task__subtitle task__subtitle--violet task__subtitle--italic">Сортування бульбашкою:</div>`
  );

  function getBubbleSortArrCount(arr) {
    let change;
    let bubbleSortArrSwapCount = 0;
    let bubbleSortArrCompareCount = 0;
    let endIndex = arr.length;

    do {
      change = false;
      for (let i = 1; i < endIndex; i++) {
        bubbleSortArrCompareCount++;
        document.writeln(
          `<div>${getStagesOfSorting(arr, [i - 1, i], [])}</div>`
        ); // Порівняння
        if (arr[i - 1] > arr[i]) {
          const temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          bubbleSortArrSwapCount++;
          change = true;

          document.writeln(
            `<div>${getStagesOfSorting(arr, [], [i - 1, i])}</div>`
          ); // Обмін
        }
      }
      endIndex--;
    } while (change);
    return [arr, bubbleSortArrCompareCount, bubbleSortArrSwapCount];
  }

  const bubbleSortArr = [...originalArr];
  const [sortedBubbleArr, bubbleSortArrCompareCount, bubbleSortArrSwapCount] =
    getBubbleSortArrCount(bubbleSortArr);

  document.writeln(
    `<div class="task__subtitle task__subtitle--violet" style="max-width: 300px;">Кількість порівнянь: ${bubbleSortArrCompareCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--violet" style="max-width: 300px;">Кількість обмінів:  ${bubbleSortArrSwapCount}</div>`
  );

  // ==============================================================================================

  // 2) Сортування змішуванням

  document.writeln(
    `<div class="task__subtitle task__subtitle--turquoise task__subtitle--italic">Сортування змішуванням:</div>`
  );

  function getCoctailSortArrCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let coctailSortSwapCount = 0;
    let coctailSortCompareCount = 0;

    while (leftIndex < rightIndex) {
      let changed = false;
      for (let i = leftIndex + 1; i <= rightIndex; i++) {
        coctailSortCompareCount++;
        document.writeln(
          `<div>${getStagesOfSorting(arr, [i - 1, i], [])}</div>`
        ); // Порівняння
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          coctailSortSwapCount++;
          changed = true;

          document.writeln(
            `<div>${getStagesOfSorting(arr, [], [i - 1, i])}</div>`
          ); // Обмін
        }
      }
      rightIndex--;
      if (changed === false) break;
      for (let i = rightIndex; i > leftIndex; i--) {
        coctailSortCompareCount++;
        document.writeln(
          `<div>${getStagesOfSorting(arr, [i - 1, i], [])}</div>`
        ); // Порівняння
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          coctailSortSwapCount++;
          changed = true;
          document.writeln(
            `<div>${getStagesOfSorting(arr, [], [i - 1, i])}</div>`
          ); // Обмін
        }
      }
      leftIndex++;
    }
    return [arr, coctailSortCompareCount, coctailSortSwapCount];
  }

  const coctailSortArr = [...originalArr];
  const [sortedCoctailArr, coctailSortCompareCount, coctailSortSwapCount] =
    getCoctailSortArrCount(coctailSortArr);

  document.writeln(
    `<div class="task__subtitle task__subtitle--turquoise" style="max-width: 300px;">Кількість порівнянь: ${coctailSortCompareCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--turquoise" style="max-width: 300px;">Кількість обмінів:  ${coctailSortSwapCount}</div>`
  );

  // ==============================================================================================

  // 3) Сортування включеннями
  document.writeln(
    `<div class="task__subtitle task__subtitle--blue task__subtitle--italic">Сортування включеннями:</div>`
  );

  function getInsertionSortArrCount(arr) {
    let insertionSortSwapCount = 0;
    let insertionSortCompareCount = 0;

    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      insertionSortSwapCount++;

      while (j >= 0 && arr[j] > current) {
        insertionSortCompareCount++;
        document.writeln(
          `<div>${getStagesOfSorting(arr, [j, j + 1], [])}</div>`
        );
        arr[j + 1] = arr[j];
        j--;
        insertionSortSwapCount++;

        document.writeln(`<div>${getStagesOfSorting(arr, [], [j + 1])}</div>`);
      }

      arr[j + 1] = current;

      document.writeln(`<div>${getStagesOfSorting(arr, [], [j + 1])}</div>`);
    }

    return [arr, insertionSortCompareCount, insertionSortSwapCount];
  }

  const insertionSortArr = [...originalArr];
  const [
    sortedInsertionArr,
    insertionSortCompareCount,
    insertionSortSwapCount,
  ] = getInsertionSortArrCount(insertionSortArr);

  document.writeln(
    `<div class="task__subtitle task__subtitle--blue" style="max-width: 300px;">Кількість порівнянь: ${insertionSortCompareCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--blue" style="max-width: 300px;">Кількість обмінів:  ${insertionSortSwapCount}</div>`
  );

  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Масив після сортування:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">[${sortedBubbleArr.join(
      ", "
    )}]</div>`
  );
}





