// cуворий режим
"use strict";

// =================================================================

//  Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та
// оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не
// 	останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.

// ============================================

//-----за допомогою класів

class Validator {
  constructor(value, label) {
    this.value = value;
    this.label = label;
  }

  validateRange(min, max) {
    if (this.value === "" || this.value === null || this.value === undefined) {
      throw new Error(`Значення поля ${this.label} не може бути порожнім`);
    }

    const numberValue = Number(this.value);
    if (isNaN(numberValue)) {
      throw new Error(`Поле ${this.label} повинно бути числом`);
    }
    if (numberValue < min || numberValue > max) {
      throw new Error(
        `Поле ${this.label} повинно бути в межах від ${min} до ${max}`
      );
    }
    this.value = numberValue;
    return this.value;
  }
}
//----
class MonthValidator extends Validator {
  constructor(value) {
    super(value, "місяць");
  }
  //---
  validate() {
    try {
      this.validateRange(1, 12);
      const vacationMonth = [6, 7, 8];
      if (vacationMonth.includes(this.value)) {
        throw new InvalidMonthError("Це канікули, навчання відсутнє");
      }
      return this.value;
    } catch (error) {
      throw new InvalidMonthError(error.message);
    }
  }
}
//---
class GradeValidator extends Validator {
  constructor(value) {
    super(value, "оцінка");
  }
  //---
  validate() {
    try {
      this.validateRange(1, 100);
      return this.value;
    } catch (error) {
      throw new InvalidGradeError(error.message);
    }
  }
}
//---
class InvalidMonthError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidMonthError";
  }
}
//---
class InvalidGradeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidGradeError";
  }
}
//---
class Assessment {
  constructor(monthInput, gradeInput) {
    this.monthInput = monthInput;
    this.gradeInput = gradeInput;
  }
  //---
  canImproveGrade(month, grade) {
    const lastMonths = [5, 12];
    const isBadGrade = grade < 60;
    const isLastMonth = lastMonths.includes(month);

    if (!isBadGrade) {
      return "Оцінка достатня, виправляти не потрібно!";
    } else if (!isLastMonth) {
      return "Учень може виправити оцінку";
    } else {
      return "Учень не може виправити оцінку";
    }
  }
  //---
  showResult(message, isError = false) {
    const resDiv = document.querySelector(".assessment__result");
    resDiv.classList.remove(
      "assessment__result--success",
      "assessment__result--error"
    );
    resDiv.innerText = message;
    if (isError) {
      resDiv.classList.add("assessment__result--error");
    } else {
      resDiv.classList.add("assessment__result--success");
    }

    return resDiv;
  }
  //---
  processAssessment() {
    try {
      const monthValidator = new MonthValidator(this.monthInput);
      const gradeValidator = new GradeValidator(this.gradeInput);

      const month = monthValidator.validate();
      const grade = gradeValidator.validate();

      const message = this.canImproveGrade(month, grade);

      const isError = message.includes("не може виправити");
      this.showResult(message, isError);

      //  showResult(message, false);
    } catch (error) {
      if (
        error instanceof InvalidMonthError ||
        error instanceof InvalidGradeError
      ) {
        this.showResult(`Помилка: ${error.message}`, true);
      } else {
        this.showResult("Сталася невідома помилка", true);
      }
    }
  }
}
//---
window.onload = function () {
  const btn = document.querySelector(".assessment__button");
  btn.addEventListener("click", () => {
    const monthInput = document.getElementById("month").value;
    const gradeInput = document.getElementById("grade").value;

    const assessment = new Assessment(monthInput, gradeInput);
    assessment.processAssessment();
  });
};

//-----за допомогою функцій
// class InvalidMonthError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "InvalidMonthError";
//   }
// }
// //---
// class InvalidGradeError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "InvalidGradeError";
//   }
// }
// //---
// function isInRange(value, label, min = 1, max) {
//   if (value === "" || value === null || value === undefined) {
//     throw new Error(`Значення поля ${label} не може бути порожнім`);
//   }

//   const numberValue = Number(value);
//   if (isNaN(numberValue)) {
//     throw new Error(`Поле ${label} повинно бути числом`);
//   }
//   if (numberValue < min || numberValue > max) {
//     throw new Error(`Поле ${label} повинно бути в межах від ${min} до ${max}`);
//   }

//   return numberValue;
// }
// //---
// function validateMonth(month) {
//   try {
//     const validMonth = isInRange(month, "місяць", 1, 12);
//     const vacationMonth = [6, 7, 8];
//     if (vacationMonth.includes(validMonth)) {
//       throw new InvalidMonthError("Це канікули, навчання відсутнє");
//     }
//     return validMonth;
//   } catch (error) {
//     if (error instanceof InvalidMonthError) throw error;
//     throw new InvalidMonthError(error.message);
//   }
// }
// //---
// function validateGrade(grade) {
//   try {
//     const validGrade = isInRange(grade, "оцінка", 1, 100);
//     return validGrade;
//   } catch (error) {
//     throw new InvalidGradeError(error.message);
//   }
// }
// //---
// function canImproveGrade(month, grade) {
//   const lastMonths = [5, 12];
//   const isBadGrade = grade < 60;
//   const isLastMonth = lastMonths.includes(month);

//   if (!isBadGrade) {
//     return "Оцінка достатня, виправляти не потрібно!";
//   } else if (!isLastMonth) {
//     return "Учень може виправити оцінку";
//   } else {
//     return "Учень не може виправити оцінку";
//   }
// }
// //---
// function showResult(message, isError = false) {
//   const resDiv = document.querySelector(".assessment__result");
//   resDiv.classList.remove(
//     "assessment__result--success",
//     "assessment__result--error"
//   );
//   resDiv.innerText = message;
//   if (isError) {
//     resDiv.classList.add("assessment__result--error");
//   } else {
//     resDiv.classList.add("assessment__result--success");
//   }

//   return resDiv;
// }
// //---
// function processAssessment() {
//   const monthInput = document.getElementById("month").value;
//   const gradeInput = document.getElementById("grade").value;

//   try {
//     const month = validateMonth(monthInput);
//     const grade = validateGrade(gradeInput);

//     const message = canImproveGrade(month, grade);

//     const isError = message.includes("не може виправити");
//     showResult(message, isError);

//     //  showResult(message, false);
//   } catch (error) {
//     if (
//       error instanceof InvalidMonthError ||
//       error instanceof InvalidGradeError
//     ) {
//       showResult(`Помилка: ${error.message}`, true);
//     } else {
//       showResult("Сталася невідома помилка", true);
//     }
//   }
// }
// //---
// window.onload = function () {
//   const btn = document.querySelector(".assessment__button");
//   btn.addEventListener("click", processAssessment);
// };
