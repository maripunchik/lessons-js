// cуворий режим
"use strict"

// =================================================================

// Спортсмен-лижник в перший день тренування пробіг 10 км. Кожного наступного дня він збільшував довжину пробігу на P% від довжини пробігу попереднього дня (P – дійсне число, 0 < P < 50). Визначити, після якого дня тренування сумарний
// пробіг лижника за всі дні перевищить 200 км. Вивести знайдену кількість днів K (ціле) і сумарний пробіг S (дійсне
// число).

if (confirm("Почати тестування?")) {
  const dailyIncrease = parseFloat(
    prompt(`Введіть відсоток збільшення пробігу щодня`, `10`)
  );

  let totalDistance = 0;
  let dayOver200 = 0;
  let distanceForDay = 10;
  let day = 0;

  while (totalDistance <= 200) {
    day++;
    totalDistance += distanceForDay;

    if (totalDistance > 200) {
      dayOver200 = day;
    }

    distanceForDay *= 1 + dailyIncrease / 100;
  }

  document.write(
    `<div class="task__subtitle task__subtitle--green"> Спортсмен пробіг ${totalDistance.toFixed(
      2
    )} км <br></div>`
  );
  document.write(
    `<div class="task__subtitle task__subtitle--green">Сумарний пробіг лижника за всі дні перевищить 200 км на ${dayOver200} день</div>`
  );
}

// =================================================================