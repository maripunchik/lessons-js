// cуворий режим
"use strict";

// =================================================================

// Дано послідовність оцінок учня. Підрахувати кількість:
// 1. двійок
// 2. кількість хороших оцінок (добре, відмінно);
// 3. кількість оцінок, які нижче середнього.

if (confirm("Почати тестування?")) {
  function getRandomNumbersArray(length, minNumber=1, maxNumber=5) {
    const randomNumbersArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
      randomNumbersArray.push(randomNumber);
    }
    return randomNumbersArray;
  }
function getNumOfMark2(marks) {
	let numOfMark2 = 0
	for (let i = 0; i < marks.length; i++) {
		if(marks[i] === 2) numOfMark2++
	}
	return numOfMark2
}
function getNumOfGoodMarks(marks) {
  let numOfGoodMarks = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 4) numOfGoodMarks++;
  }
  return numOfGoodMarks;
}
function getAverage(marks) {
	let sumMarks = 0;
  for (let i = 0; i < marks.length; i++) {
    sumMarks += marks[i];
  }
return sumMarks/ marks.length
}
function getNumOfBelowAverageMarks(marks) {
	const avgMark = getAverage(marks)
	let res = 0
	for (let i = 0; i < marks.length; i++) {
		if(marks[i]< avgMark) res++
	}
	return res
}
const pupilMarks = getRandomNumbersArray(10)
  const numOfMark2 = getNumOfMark2(pupilMarks)
  const numOfGoodMarks = getNumOfGoodMarks(pupilMarks)
  const avgMark = getAverage(pupilMarks)
  const numOfBelowAverageMarks = getNumOfBelowAverageMarks(pupilMarks)

  document.writeln(
    `<div class="task__subtitle task__subtitle--green"> Оцінки: ${pupilMarks};<br>Середній бал: ${avgMark.toFixed(
      2
    )};<br>Двійок: ${numOfMark2};<br>Кількість хороших оцінок (добре, відмінно): ${numOfGoodMarks};<br>Кількість оцінок, які нижче середнього: ${numOfBelowAverageMarks}. </div>`
  );
}

// =================================================================
