// cуворий режим
"use strict"

// =================================================================

// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

if (confirm("Почати тестування?")) {
	const carLicensePlates =['АІ6040ЕЕ','СВ8136АХ','АВ7177ВА','АС1533ВЕ','ВН6040ЕВ','АН4035НХ','АТ3060ВЕ','ВМ1777АВ','ВТ6026АХ','АА6126МЕ']
	let startsWithA =0
	let firstAndLastLettersMatch =0
	let consistOfMoreThan5Chars = 0
for (let i = 0; i < carLicensePlates.length; i++) {
  const numbers = carLicensePlates[i]
  if(numbers[0] === 'А') startsWithA ++
  if(numbers[0] === numbers[numbers.length - 1]) firstAndLastLettersMatch ++
  if (numbers.length > 5) consistOfMoreThan5Chars++;
}

  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Номери машин: ${carLicensePlates}<br> починаються на букву «А»: ${startsWithA};<br> перша і остання літери співпадають: ${firstAndLastLettersMatch};<br>складаються з більше ніш 5 символів: ${consistOfMoreThan5Chars}</div>`
  );
}