// cуворий режим
"use strict"

// =================================================================

// Створити окремі функції, які для 4 чисел знаходять:<br>1.суму;<br>2.добуток;<br>3.середнє арифметичне;<br>4.мінімальне значення. 


if (confirm("Почати тестування?")) {
let getSum = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
let getProduct = (num1, num2, num3, num4) => num1*num2*num3*num4
let getAverage = (num1, num2, num3, num4) => (getSum(num1,num2,num3,num4))/4
// let getMin4 = (num1, num2, num3, num4) => Math.min(num1, num2, num3, num4);
// --- 2 варіант
function getMin2(num1, num2) {
	return num1<num2 ? num1 :num2
}
function getMin3(num1,num2,num3) {
	const m1 = getMin2(num1,num2)
	return getMin2(m1, num3)
}
function getMin4(num1,num2,num3,num4) {
	let min = getMin2(getMin3(num1,num2,num3), num4)
	return min
}
  const num1 = parseInt(prompt(`Введіть перше число`, `1`));
  const num2 = parseInt(prompt(`Введіть друге число`, `2`));
  const num3 = parseInt(prompt(`Введіть третє число`, `3`));
  const num4 = parseInt(prompt(`Введіть четверте число`, `4`)); 

  const sum = getSum(num1, num2, num3, num4);
  const product = getProduct(num1, num2, num3, num4);
  const average = getAverage(num1, num2, num3, num4);
  const min4 = getMin4(num1, num2, num3, num4);

  document.write(`
<div class="task__subtitle">Для чисел: ${num1},${num2},${num3},${num4}</div>
<table class="task__table">
<thead>
<tr>
<th>Операція</th>
<th>Результат</th>
</tr>
</thead>
<tbody>
<tr>
<td>Сума</td>
<td>${sum}</td>
</tr>
<tr>
<td>Добуток</td>
<td>${product}</td>
</tr>
<tr>
<td>Середнє арифметичне</td>
<td>${average.toFixed(1)}</td>
</tr>
<tr>
<td>Мінімальне значення</td>
<td>${min4}</td>
</tr>
</tbody>
</table>`);


/*
   document.write(
     `<div class="task__subtitle task__subtitle--green">Для чисел: ${num1},${num2},${num3},${num4}</div>`
   );
    document.write(
      `<div class="task__subtitle task__subtitle--green">1)Сума = ${sum}</div>`
    );
    document.write(
      `<div class="task__subtitle task__subtitle--green">2)Добуток = ${product}</div>`
    );
    document.write(
      `<div class="task__subtitle task__subtitle--green">3)Середнє арифметичне: ${average.toFixed(1)}</div>`
    );
    document.write(
      `<div class="task__subtitle task__subtitle--green">4)Мінімальне значення: ${min4}</div>`
    );
	 */
}

// =================================================================

// function getMax2(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }

// function getMax3(num1, num2, num3) {
//   const m1 = getMax2(num1, num2);
//   return getMax2(m1, num3);
// }

// function getMax4(num1, num2, num3, num4) {
// let max = getMax2(getMax3(2, 7, 3), num4)
// return max
// }

// let max = getMax4(2,7,3,9)


// document.write(max);