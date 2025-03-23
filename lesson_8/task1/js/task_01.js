// cуворий режим
"use strict";

// =================================================================

// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

if (confirm("Почати тестування?")) {
  // ------ функція для введення елементів масиву
  function getRandomArray(length, min=1, max=5) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const marks = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(marks);
    }
    return arr;
  }
  // ------ функція для знаходження середнього балу
  function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }
  // ------ функція для визначення категорії
function getCategoryPupil(marks) {
	let minMark = marks[0]
	let result = ''
for (let i = 1; i < marks.length; i++) {
	if (marks[i]< minMark) minMark=marks[i]
}
switch (minMark) {
  case 1:
  case 2:
    result = "Двійочник";
    break;
  case 3:
    result = "Трійочник";
    break;
  case 4:
    result = "Хорошист";
    break;
  case 5:
    result = "Відмінник";
    break;
  default:
   throw new Error("Помилка!");
	
}
return result
}
try {
  const lessonQuantity = parseInt(prompt(`Введіть кількість предметів`));
  const pupilGrades = getRandomArray(lessonQuantity, 1, 5);
  const average = getAverage(pupilGrades);
  const pupilCategory = getCategoryPupil(pupilGrades);

  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Кількість предметів: ${lessonQuantity}<br> Оцінки: ${pupilGrades}<br> Середнє значення: ${average.toFixed(
      1
    )}<br> Категорія учня: ${pupilCategory}</div>`
  );
} catch (error) {
  document.writeln(`<div class="task__subtitle">Перевірте, десь помилка!</div>`);
} finally {
  document.writeln(
    `<div class="task__subtitle task__subtitle--green task__subtitle--italic">Дякую, що скористалися нашою програмою! </div>`
  );
}

}

// =================================================================
