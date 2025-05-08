// cуворий режим
"use strict";

// =================================================================

//  Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

if (confirm("Почати тестування?")) {
  const obj1 = {
    arr: [1, 2, 3, 4, 5, 6, 7, 8],
    getSum() {
      return this.arr.reduce((sum, num) => sum + num, 0);
    },
  };
  const obj2 = {
    arr: [5, 2, 8, 1, 2, 6, 9],
    productMinMax(min, max) { 
      return this.arr.reduce((product, num) => { // виправлено, згідно рекомендацій учителя
        return (num > min && num < max) ? product * num : product;
      }, 1);
    },
  };

  const sum1 = obj1.getSum();
  const sum2 = obj1.getSum.call(obj2);

  const prod2 = obj2.productMinMax(1, 10);
  const prod1 = obj2.productMinMax.apply(obj1, [2, 8]);

  document.writeln(
    `<div class="task__subtitle task__subtitle  task__subtitle--green">Масив цілих чисел obj1: ${obj1.arr.join(
      ","
    )}<br>
     Масив цілих чисел obj2: ${obj2.arr.join(",")}</div>`
  );

  document.writeln(
    `<div class="task__subtitle task__subtitle  task__subtitle--green">Сума масиву цілих чисел obj1: ${sum1}<br>Сума масиву цілих чисел obj2: ${sum2} <br>Добуток чисел масиву obj1, які знаходяться між заданими мінімальним і максимальних значенням: ${prod1}<br>
     Добуток чисел масиву obj2, які знаходяться між заданими мінімальним і максимальним значенням: ${prod2}<br></div>`
  );
}
