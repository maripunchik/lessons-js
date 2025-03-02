// cуворий режим
"use strict";

// ==========================================================

// 0.Вивести на екран 8 кнопок з написом “Hello”.

if (confirm("Почати тестування?")) {
  for (let i = 1; i <= 8; i++) {
    const buttonHello = `Hello`;
    document.write(
      `<button class="task__button">
		<span >${buttonHello}</span></button>`
    );
  }
}
