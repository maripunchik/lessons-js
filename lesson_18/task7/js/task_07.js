// cуворий режим
"use strict";

// =================================================================

//  Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

function addValuesToSum(elements, conditionFn = () => true) {
  let total = 0;
  for (const el of elements) {
    const value = parseFloat(el.value);
    if (!isNaN(value) && conditionFn(el)) {
      total += value;
    }
  }
  return total;
}

function calculateTotal() {
  let sum = 0;
  
  const transportList = document.querySelectorAll(".travel__select");
  sum += addValuesToSum(transportList);

  const mealsList = document.querySelectorAll(".travel__meals:checked");
  sum += addValuesToSum(mealsList);

  const guidesList = document.querySelectorAll(".travel__guides:checked");
  sum += addValuesToSum(guidesList);

  const result = document.getElementById("totalCost");
  if (result) {
    result.innerText = `Загальна вартість: ${sum} грн`;
  }
}

// =================================================================================

// function calculateTotal() {
// 	let sum = 0;

//   const transportList = document.querySelectorAll(".travel__select");
//   if (transportList.length > 0) {
//     for (const transport of transportList) {
//       sum += parseFloat(transport.value);
//     }
//   }

//   const mealsList = document.querySelectorAll(".travel__meals:checked");
//   if (mealsList.length > 0) {
//     for (const meal of mealsList) {
//       const value = parseFloat(meal.value);
//       if (!isNaN(value)) sum += value;
//     }
//   }

//   const guidesList = document.querySelectorAll(".travel__guides");
//   if (guidesList.length > 0) {
//     for (const guide of guidesList) {
//       if (guide.checked) {
//         const value = parseFloat(guide.value);
//         if (!isNaN(value)) sum += value;
//       }
//     }
//   }

//   const result = document.getElementById('totalCost')
//   if(result) {
// 	  result.innerText = `Загальна вартість: ${sum} грн`;
//   }
// }
