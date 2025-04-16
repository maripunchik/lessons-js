// cуворий режим
"use strict";

// =================================================================

//   З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одній
// букві наперед заданого слова. З використанням нього розробити гру «Перекладач». Виводимо для користувача опис цього слова і по одній букві користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

if (confirm("Почати тестування?")) {
  function createLetterIterator(word) {
    let index = 0;
   return () => (index < word.length ? word[index++] : null);
  }

  const secretWord = "translator";
  const description = "Англійське слово, що означає 'перекладач'";
  const wordLength = secretWord.length;

  alert(`Опис слова: ${description}`);

  const letterIterator = createLetterIterator(secretWord);

  let correctCount = 0;

  function guessLetter() {
    let currentLetter = letterIterator();

    if (currentLetter === null) {
      alert(`Кінець гри! Ви вгадали ${correctCount} з ${wordLength} букв!`);
      let imgSrc = "";
      if (correctCount === wordLength) {
        imgSrc = "./img/happy.gif";
      } else {
        imgSrc = "./img/4.jpg";
      }
      document.writeln(
        `<img src="${imgSrc}" style="width: 220px; height: 235px; object-fit: contain;">`
      );
      return;
    }

    try {
      const userInput = prompt(
        `Вгадайте букву (${correctCount} правильних з ${wordLength})\n(Натисніть "Скасувати", щоб завершити гру)`
      );

      if (userInput === null) {
        alert(
          `Гру скасовано. Ви вгадали ${correctCount} з ${wordLength} букв.`
        );
        return;
      }

      if (userInput.length !== 1) {
        throw new Error("Потрібно ввести тільки 1 букву!");
      }

      if (userInput.toLowerCase() === currentLetter.toLowerCase()) {
        correctCount++;
        alert(`✅ Правильно! Це буква "${currentLetter}".`);
      } else {
        alert(`❌ Ні, правильна буква — "${currentLetter}".`);
      }

      guessLetter(); //  другий (або більше) виклик: рекурсія
    } catch (error) {
      alert(`Помилка: ${error.message}`);
      guessLetter(); //  також рекурсія
    }
  }

  guessLetter(); //  перший запуск гри
}

// =================================================================
