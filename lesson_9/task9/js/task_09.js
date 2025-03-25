// cуворий режим
"use strict";

// ==========================================================

//   Дано масив імен. Сформувати масив з перших літер цих імен.

if (confirm("Почати тестування?")) {
   const names = [
     "Марина",
     "Агата",
     "Роман",
     "Іван",
     "Никита",
     "Аліна",
   ];
const firstNameLetters = names.map((name) => name[0]);
document.writeln(
  `<div class="task__subtitle task__subtitle--green">Імена: ${names};<br>Ініціали: ${firstNameLetters} </div>`
);
}
