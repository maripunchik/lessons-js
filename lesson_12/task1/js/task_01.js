// cуворий режим
"use strict";

// =================================================================

// Дано масив 30 випадкових цілих чисел.
// 1)Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою
// 2)Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.
// 3)Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

if (confirm("Почати тестування?")) {
  // Генерація випадкового масиву
  function getRandomNumbersArray(length, min = 1, max = 10) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const randNum = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(randNum);
    }
    return arr;
  }

  const originalArr = getRandomNumbersArray(30);
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Масив до сортування:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--green"">[${originalArr.join(
      ", "
    )}]</div>`
  );

  //========================================================================

  // 1) Сортування бульбашкою

  function getBubbleSortArrCount(arr) {
    let change;
    let bubbleSortArrSwapCount = 0;
    let bubbleSortArrCompareCount = 0;
    let endIndex = arr.length;

    do {
      change = false;
      for (let i = 1; i < endIndex; i++) {
        bubbleSortArrCompareCount++;
        if (arr[i - 1] > arr[i]) {
          const temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          bubbleSortArrSwapCount++;
          change = true;
        }
      }
      endIndex--;
    } while (change);
    return [arr, bubbleSortArrCompareCount, bubbleSortArrSwapCount];
  }

  const bubbleSortArr = [...originalArr];
  const [sortedBubbleArr, bubbleSortArrCompareCount, bubbleSortArrSwapCount] =
    getBubbleSortArrCount(bubbleSortArr);

  //========================================================================

  // 2) Сортування змішуванням

  function getCoctailSortArrCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let coctailSortSwapCount = 0;
    let coctailSortCompareCount = 0;
    while (leftIndex < rightIndex) {
      let changed = false;
      for (let i = leftIndex + 1; i <= rightIndex; i++) {
        coctailSortCompareCount++;
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          coctailSortSwapCount++;
          changed = true;
        }
      }
      rightIndex--;
      if (changed === false) break;
      for (let i = rightIndex; i > leftIndex; i--) {
        coctailSortCompareCount++;
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          coctailSortSwapCount++;
          changed = true;
        }
      }
      leftIndex++;
    }
    return [arr, coctailSortCompareCount, coctailSortSwapCount];
  }

  const coctailSortArr = [...originalArr];
  const [sortedCoctailArr, coctailSortCompareCount, coctailSortSwapCount] =
    getCoctailSortArrCount(coctailSortArr);

  //========================================================================
  
  // 3) Сортування включеннями

  function getInsertionSortArrCount(arr) {
    let insertionSortSwapCount = 0;
    let insertionSortCompareCount = 0;
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        insertionSortCompareCount++;
        arr[j + 1] = arr[j];
        j--;
        insertionSortSwapCount++;
      }
      if (j !== i - 1) {
        arr[j + 1] = current;
        insertionSortSwapCount++;
      }
    }
    return [arr, insertionSortCompareCount, insertionSortSwapCount];
  }

  const insertionSortArr = [...originalArr];
  const [
    sortedInsertionArr,
    insertionSortCompareCount,
    insertionSortSwapCount,
  ] = getInsertionSortArrCount(insertionSortArr);

  // Виведення результату
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Масив після сортування:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">[${sortedBubbleArr.join(
      ", "
    )}]</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--violet task__subtitle--italic">Сортування бульбашкою:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--violet" style="max-width: 300px;">Кількість порівнянь: ${bubbleSortArrCompareCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--violet" style="max-width: 300px;">Кількість обмінів:  ${bubbleSortArrSwapCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--turquoise task__subtitle--italic">Сортування змішуванням:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--turquoise" style="max-width: 300px;">Кількість порівнянь: ${coctailSortCompareCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--turquoise" style="max-width: 300px;">Кількість обмінів:  ${coctailSortSwapCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--blue task__subtitle--italic">Сортування включеннями:</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--blue" style="max-width: 300px;">Кількість порівнянь: ${insertionSortCompareCount}</div>`
  );
  document.writeln(
    `<div class="task__subtitle task__subtitle--blue" style="max-width: 300px;">Кількість обмінів:  ${insertionSortSwapCount}</div>`
  );
}
