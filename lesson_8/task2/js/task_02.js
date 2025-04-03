// cуворий режим
"use strict";

// ==========================================================

//  Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm("Почати тестування?")) {
  function getRandomVisitorsCount(length, min, max) {
    const visitors = [];
    for (let i = 0; i < length; i++) {
      const randVisitorsCount =
        min + Math.floor(Math.random() * (max - min + 1));
      visitors.push(randVisitorsCount);
    }
    return visitors;
  }
  //номери днів, протягом яких кількість відвідувачів була меншою за 20;
  function getDaysVisitorsLessThan20(visitors) {
    let daysUnder20 = [];
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] < 20) daysUnder20.push(i + 1);
    }
    return daysUnder20;
  }
  // номери днів, коли кількість відвідувачів була мінімальною;
  /*   function getDaysMinVisitors(visitors) {
    let daysMinVisitors = [];
    let minAmountVisitors = visitors[0];
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] < minAmountVisitors) minAmountVisitors = visitors[i];
    }
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === minAmountVisitors) daysMinVisitors.push(i);
    }
    return daysMinVisitors;
  } */

  // Функція для знаходження мінімальної кількості відвідувачів
  function getMinVisitors(visitors) {
    let minAmountVisitors = visitors[0];
    for (let i = 1; i < visitors.length; i++) {
      if (visitors[i] < minAmountVisitors) {
        minAmountVisitors = visitors[i];
      }
    }
    return minAmountVisitors;
  }

  // Функція для знаходження днів, коли кількість відвідувачів була мінімальною
  function getDaysMinVisitors(visitors) {
    const minAmountVisitors = getMinVisitors(visitors); // Отримуємо мінімум
    let daysMinVisitors = [];

    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === minAmountVisitors) {
        daysMinVisitors.push(i + 1);
      }
    }

    return daysMinVisitors;
  }
  // Функція для знаходження максимальної кількості відвідувачів
  function getMaxVisitors(visitors) {
    let maxAmountVisitors = visitors[0];
    for (let i = 1; i < visitors.length; i++) {
      if (visitors[i] > maxAmountVisitors) {
        maxAmountVisitors = visitors[i];
      }
    }
    return maxAmountVisitors;
  }

  // Функція для знаходження днів, коли кількість відвідувачів була максимальною
  function getDaysMaxVisitors(visitors) {
    const maxAmountVisitors = getMaxVisitors(visitors); 
    let daysMaxVisitors = [];

    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === maxAmountVisitors) {
        daysMaxVisitors.push(i + 1);
      }
    }

    return daysMaxVisitors;
  }

  // номери днів, коли кількість відвідувачів була максимальною;
/*   function getDaysMaxVisitors(visitors) {
    let daysMaxVisitors = [];
    let maxAmountVisitors = visitors[0];
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] > maxAmountVisitors) maxAmountVisitors = visitors[i];
    }
    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === maxAmountVisitors) daysMaxVisitors.push(i);
    }
    return daysMaxVisitors;
  } */
  // загальна кількість клієнтів у робочі дні
  function getVisitorsWorkingDays(visitors) {
    let sumVisitorsWorkingDays = 0;
    for (let i = 0; i < 5; i++) {
      sumVisitorsWorkingDays += visitors[i];
    }
    return sumVisitorsWorkingDays;
  }
  // загальна кількість клієнтів у вихідні дні
  function getVisitorsWeekendDays(visitors) {
    let sumVisitorsWeekendDays = 0;
    for (let i = 5; i < 7; i++) {
      sumVisitorsWeekendDays += visitors[i];
    }
    return sumVisitorsWeekendDays;
  }
  const visitorsCount = getRandomVisitorsCount(7, 0, 50);
  const daysUnder20 = getDaysVisitorsLessThan20(visitorsCount);
  const daysMinVisitors = getDaysMinVisitors(visitorsCount);
  const daysMaxVisitors = getDaysMaxVisitors(visitorsCount);
  const sumVisitorsWorkingDays = getVisitorsWorkingDays(visitorsCount);
  const sumVisitorsWeekendDays = getVisitorsWeekendDays(visitorsCount);
  document.writeln(
    `<div class="task__subtitle task__subtitle--green"> Кількість відвідувачів по днях (1-7): ${visitorsCount}<br>
	 Дні, коли відвідувачів було менше 20: ${daysUnder20}<br>
	 Дні, коли кількість відвідувачів була найменшою: ${daysMinVisitors}<br>
	 Дні, коли кількість відвідувачів була найбільшою: ${daysMaxVisitors}<br>
	 Кількість відвідувачів у робочі дні: ${sumVisitorsWorkingDays}<br>
	 Кількість відвідувачів у вихідні дні: ${sumVisitorsWeekendDays}</div>`
  );
}
