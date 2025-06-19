// cуворий режим
"use strict";

// =================================================================

//Кухня. Три секції:
// меню: список страв, які може вибрати користувач (при кліку переміщується на кухню)
// кухня: список страв, які готуються (при кліку переноситься у секцію "на виніс")
// на виніс: страви, які вже приготовлені (при кліку переміщуються в історію)

function onSelect(e) {
  const target = e.target;
  if (target.classList.contains("restaurant__item")) {
    const section = target.closest(".restaurant__section");
    if (section && section.nextElementSibling) {
      section.nextElementSibling
        .querySelector(".restaurant__items")
        .append(target);
    } else {
      document.querySelector("#historyContainer").append(target);
    }
  }
}

window.onload = function () {
  //   const dishesList = ["Суп", "Борщ", "Котлети", "Вареники"];

  const restaurantElement = document.querySelector(".restaurant");
  if (restaurantElement) {
    restaurantElement.onclick = onSelect;
  }
};
