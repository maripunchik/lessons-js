// cуворий режим
"use strict"

// ==========================================================

// 1. Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.

if (confirm("Почати тестування?")) {
	let userNumberCount = parseInt(prompt(`Введіть кількість випадкових чісел`));
  document.write(`<ul>`);
  for (let i = 1; i <= userNumberCount; i++) {
    const randNum = 1 + Math.floor(Math.random() * 100);
    document.write(
      `<li>${randNum}</li>`
    );
  }
  document.write(`</ul>`);
}
