// cуворий режим
"use strict"

// ==========================================================

// 2.Створити 10 елементів для введення цін продуктів

if (confirm("Почати тестування?")) {
	const elementsAmount = 10
	for (let i = 1; i <= elementsAmount; i++) {
    document.write(`
		<label>
		Продукт # ${i}
		<input type="number" placeholder="Введіть ціну продукта" name="productPrice"/>
		</label>
		`);
  }
}
