// cуворий режим
"use strict"

// ==========================================================
//7.Вивести на екран N абзаців (N вводиться користувачем) за зразком:

 if (confirm("Почати тестування?")) {
 const numberUserParagraphs = parseInt(prompt("Введіть кількість абзаців", "4"));
 for (let num = 1; num <= numberUserParagraphs; num++) {
   document.write(`<h1 class="task__title">Заголовок ${num}</h1>`);
   for (let paragraph = 1; paragraph <= num; paragraph++) {
     document.write(`<p>Розділ ${num}, параграф ${paragraph}</p>`);
   }
 }
}
