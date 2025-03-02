// cуворий режим
"use strict"

// ==========================================================

// -1.Вивести на екран номери місяців весни і літа (від 3 до 8)

if (confirm('Почати тестування?')) {
	let result
	for (let monthNum = 3; monthNum <= 8; monthNum++) {
		if (monthNum <= 5) result = `Місяць весни: ${monthNum}`;
    else result = `Місяць літа: ${monthNum}`;
		document.write(
      `<div class="task__subtitle task__subtitle--green">${result}</div>`
    );
	}
}
