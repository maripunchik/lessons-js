// cуворий режим
"use strict";

// =================================================================
// Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.

const inputBgColor = document.getElementById("colorChanger");
const changeCounterDisplay = document.getElementById("changeCount");

function changingTheBgColorByUser() {
	if(!inputBgColor || !changeCounterDisplay) return

  const savedColor = localStorage.getItem("backgroundColor");

  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    inputBgColor.value = savedColor;
  }

  let changeCounter = parseInt(sessionStorage.getItem("changeCounter")) || 0;
  changeCounterDisplay.innerText = changeCounter

    inputBgColor.addEventListener("input", () => {
      const selectedColor = inputBgColor.value;
      document.body.style.backgroundColor = selectedColor;

      localStorage.setItem("backgroundColor", selectedColor);
		
      changeCounter++;
      sessionStorage.setItem("changeCounter", changeCounter); 
      changeCounterDisplay.innerText = changeCounter;
    });
  }

changingTheBgColorByUser();