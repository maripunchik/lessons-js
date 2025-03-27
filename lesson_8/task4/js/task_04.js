// cуворий режим
"use strict"

// =================================================================

// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;


if (confirm("Почати тестування?")) {
  const carLicensePlates = [
    "АІ6040ЕЕ",
    "СВ8136АХ",
    "АВ7177ВА",
    "АС1533ВЕ",
    "ВН6040ЕВ",
    "АН4035НХ",
    "АТ3060ВЕ",
    "ВМ1777АВ",
    "ВТ6026АХ",
    "АА6126МЕ",
  ];

  // Функція для підрахунку номерів, що починаються на букву "А"
  function countStartsWithA(plates) {
    let startsWithA = 0;
    for (let i = 0; i < plates.length; i++) {
      if (plates[i][0] === "А") startsWithA++;
    }
    return startsWithA;
  }

  // Функція для підрахунку номерів, де перша і остання літери співпадають
  function countFirstAndLastLettersMatch(plates) {
    let firstAndLastLettersMatch = 0;
    for (let i = 0; i < plates.length; i++) {
      if (plates[i][0] === plates[i][plates[i].length - 1])
        firstAndLastLettersMatch++;
    }
    return firstAndLastLettersMatch;
  }

  // Функція для підрахунку номерів, що складаються з більше ніж 5 символів
  function countMoreThan5Chars(plates) {
    let consistOfMoreThan5Chars = 0;
    for (let i = 0; i < plates.length; i++) {
      if (plates[i].length > 5) consistOfMoreThan5Chars++;
    }
    return consistOfMoreThan5Chars;
  }

  // Виклик функцій
  const startsWithA = countStartsWithA(carLicensePlates);
  const firstAndLastLettersMatch =
    countFirstAndLastLettersMatch(carLicensePlates);
  const consistOfMoreThan5Chars = countMoreThan5Chars(carLicensePlates);

  // Виведення результату
  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Номери машин: ${carLicensePlates}<br> 
    починаються на букву «А»: ${startsWithA};<br> 
    перша і остання літери співпадають: ${firstAndLastLettersMatch};<br> 
    складаються з більше ніж 5 символів: ${consistOfMoreThan5Chars}</div>`
  );
}

/* if (confirm("Почати тестування?")) {
	const carLicensePlates =['АІ6040ЕЕ','СВ8136АХ','АВ7177ВА','АС1533ВЕ','ВН6040ЕВ','АН4035НХ','АТ3060ВЕ','ВМ1777АВ','ВТ6026АХ','АА6126МЕ']
	let startsWithA =0
	let firstAndLastLettersMatch =0
	let consistOfMoreThan5Chars = 0
for (let i = 0; i < carLicensePlates.length; i++) {
  const plates = carLicensePlates[i]
  if(plates[0] === 'А') startsWithA ++
  if(plates[0] === plates[plates.length - 1]) firstAndLastLettersMatch ++
  if (plates.length > 5) consistOfMoreThan5Chars++;
}

  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Номери машин: ${carLicensePlates}<br> починаються на букву «А»: ${startsWithA};<br> перша і остання літери співпадають: ${firstAndLastLettersMatch};<br>складаються з більше ніш 5 символів: ${consistOfMoreThan5Chars}</div>`
  );
} */