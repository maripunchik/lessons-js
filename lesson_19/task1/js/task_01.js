// cуворий режим
"use strict";

// =================================================================

// Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const divsContainer = document.querySelector(".task__divs-container");
if (divsContainer) {
  divsContainer.addEventListener("click", (event) => {
    const el = event.target.closest(".task__text");
    if (el) {
      makeRedBackground(el);
    }
  });
}

function makeRedBackground(el) {
  let nextEl = el.nextElementSibling;
  while (nextEl) {
    nextEl.style.backgroundColor = "red";
    nextEl = nextEl.nextElementSibling;
  }
}
