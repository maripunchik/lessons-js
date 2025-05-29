// cуворий режим
"use strict";

// =================================================================

// Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами (кількість елементів у списку випадкова
// від 1 до 10, елементи випадкові – від 1 до 100). При натисненні на кнопку нумеровані списки з парною кількістю елементів
// зафарбувати у зелений колір, інші у червоний.

function generateRandomLists() {
  const container = document.querySelector(".task__lists-container");
  const randomListsNum = 5;
  if (container) {
    for (let i = 0; i < randomListsNum; i++) {
      const ol = document.createElement("ol");
      const itemCount = Math.floor(Math.random() * 10) + 1;

      for (let j = 0; j < itemCount; j++) {
        const li = document.createElement("li");
        li.innerText = Math.floor(Math.random() * 100) + 1;
        ol.append(li);
      }
      container.append(ol);
    }
  }
}

function colorizeLists() {
  document.querySelectorAll(".task__lists-container ol").forEach((ol) => {
    ol.classList.remove("even", "odd");
    if (ol.children.length % 2 === 0) {
      ol.classList.add("even");
    } else {
      ol.classList.add("odd");
    }
  });
}

document.getElementById("colorize").addEventListener("click", colorizeLists);

generateRandomLists();
