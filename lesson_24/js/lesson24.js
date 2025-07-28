// cуворий режим
"use strict";

//* Symbol. Колекції. Ітератори. Генератори.

// Тип даних Symbol у JavaScript — це примітивний тип, який представляє //!унікальний і незмінний ідентифікатор. Його основна мета — створювати унікальні ключі для властивостей об'єктів, які не конфліктують з іншими ключами, навіть якщо мають однакові назви.

// Основні характеристики Symbol
// -  Унікальність: кожен Symbol — унікальний, навіть якщо створений з однаковим описом.
// -  Не перетворюється автоматично в рядок — це захищає від випадкового доступу.
// -  Корисний для створення прихованих або приватних властивостей в об'єктах.
// -  Використовується в системних символах, таких як Symbol.iterator, Symbol.toStringTag тощо.

//* Створення Symbol
// const sym1 = Symbol();           // без опису
// const sym2 = Symbol("id");       // з описом (тільки для читабельності)
// const sym3 = Symbol("id");

// console.log(sym2 === sym3);      // false — навіть з однаковим описом, це різні символи

// Використання як ключі об'єкта
const userId = Symbol("userId");

const user = {
  name: "Марина",
  [userId]: 12345
};

console.log(user[userId]); // 12345


// Перевага: властивість userId не буде випадково перезаписана або доступна через звичайні ітерації.


//  Символи не видно при ітерації
for (let key in user) {
  console.log(key); // name — але не userId
}

console.log(Object.keys(user)); // ["name"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(userId)]

//* Глобальні символи: Symbol.for()
const globalSym1 = Symbol.for("shared");
const globalSym2 = Symbol.for("shared");

console.log(globalSym1 === globalSym2); // true — глобальний реєстр

// Використовується для спільного доступу до символів між різними частинами програми.

//* Вбудовані символи
// | Символ             |                      Призначення | 
// | Symbol.iterator    | Вказує, що об'єкт ітерований (наприклад, в for...of) | 
// | Symbol.toPrimitive | Кастинг об'єкта до примітиву | 
// | Symbol.toStringTag | Кастомне ім'я при Object.prototype.toString | 
// | Symbol.hasInstance | Кастомна логіка для instanceof | 








