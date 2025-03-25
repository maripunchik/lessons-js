// cуворий режим
"use strict";

// =================================================================

//   Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

if (confirm("Почати тестування?")) {
  const elements = [
    8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
  ];
  const initialElements = [...elements];
  elements.forEach((el, ind, arr) => {
    if (el > arr[0]) arr[ind] *= 2;
  });
  let tableContent = initialElements
    .map((el, ind) => {
      return `
        <tr>
          <td>${el}</td> 
          <td>${elements[ind]}</td> 
        </tr>
      `;
    })
    .join("");
  document.writeln(`
    <table class="task__table">
      <thead>
        <tr>
          <th>Масив елементів</th>
          <th>Елементи, більші за перший елемент * 2</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  `);
}

// =================================================================
