// cуворий режим
"use strict"

// ==========================================================

//  Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

 if (confirm("Почати тестування?")) {
  const carLicensePlates = [
    "АІ6040ЕЕ",
    "СВ8136АХ",
    "ВН6040ЕВ",
    "АН4035НХ",
    "АТ3060ВЕ",
    "ВМ1777АВ",
    "ВТ6026АХ",
  ];

  const newArrCarLicensePlates = carLicensePlates.filter((el) => el[0] === "А");

  document.writeln(
    `<div class="task__subtitle task__subtitle--green">Номерні знаки: ${carLicensePlates.join(
      ", "
    )};<br> Номерні знаки, які починаються на «А»: ${newArrCarLicensePlates.join(
      ", "
    )}</div>`
  );
 }
