// cуворий режим
"use strict";

// =================================================================

// Користувач задає рік народження. Визначити кількість років користувача.

  function getAge() {
    const currentYear = 2025;
    let usersInputYear = parseInt(document.querySelector("#year").value);
    if (
      !isNaN(usersInputYear) &&
      usersInputYear >= 1 &&
      usersInputYear <= currentYear
    ) {
      const userAge = currentYear - usersInputYear;
      const ageSpan = document.querySelector("#age");
		if(ageSpan) ageSpan.innerText = userAge
    }
  }
  document.querySelector("#year").onchange = getAge

