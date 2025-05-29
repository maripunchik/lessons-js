// cуворий режим
"use strict";

// =================================================================

// Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступний на 1 більше за попереднього)

const inputsContainer = document.querySelector(".task__input-items");

if (inputsContainer) {
  inputsContainer.addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT") {
      const allInputs = [...inputsContainer.querySelectorAll("input")];
      if (event.target.value === "") {
        allInputs.forEach((input) => (input.value = ""));
      } else {
        changeValue(event.target);
      }
    }
  });
}

function changeValue(inputEl) {
  const baseValue = parseFloat(inputEl.value);
  if (isNaN(baseValue)) return;

  const allInputs = [...inputsContainer.querySelectorAll("input")];
  const index = allInputs.indexOf(inputEl);
  //---
  for (let nextElSib = index + 1; nextElSib < allInputs.length; nextElSib++) {
    allInputs[nextElSib].value = baseValue + (nextElSib - index);
  }
  //---
  for (let prevElSib = index - 1; prevElSib >= 0; prevElSib--) {
    allInputs[prevElSib].value = baseValue - (index - prevElSib);
  }
}
