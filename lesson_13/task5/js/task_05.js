// cуворий режим
"use strict";

// =================================================================

//  З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одному
// значенню від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде
// мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.

if (confirm("Почати тестування?")) {
  function createIterator(min, max) {
    let current = min - 1;

    function increment() {
      current++;
      if (current > max) {
        current = min;
      }
      return current;
    }
    return increment;
  }

let monthsList = createIterator(1, 12);

  for (let i = 0; i < 15; i++) {
    document.writeln(
      `<div class="task__subtitle task__subtitle task__subtitle--blue task__subtitle--italic">місяць №${monthsList()}</div>`
    );
  }

}


// =================================================================
