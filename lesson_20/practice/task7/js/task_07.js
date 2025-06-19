// cуворий режим
"use strict";

// =================================================================

//   Перекладач. Користувачу виводять змішані картки з словами на англійській і українській мові. Користувач поступово клікає на картки (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо червоною рамкою і через секунду забираємо рамку.

const words = [
  { id: "0", en: "table", ua: "стіл" },
  { id: "1", en: "car", ua: "автомобіль" },
  { id: "2", en: "bus", ua: "автобус" },
  { id: "3", en: "man", ua: "людина" },
  { id: "4", en: "boy", ua: "хлопець" },
];

const cssObj = {
  container: "container-el",
  word: {
    selected: "selected",
    error: "error",
  },
};
//-----

class WordCard {
  //картка для одного слова (елемент, який відповідає за одне слово ua/en, в нього можуть бути різні стани. Кожен раз, коли по ньому клікаємо, нагору надсилаємо подію)
  constructor(wordData, lang, cssObj, errorShowInterval = 1000) {
    this.wordData = wordData;// передають у картку слово
    this.lang = lang; //мову
    this.cssObj = cssObj; // можемо дати будь-які класи(для стилів)
    this.errorShowInterval = errorShowInterval;
    this.state = null; // 'selected', 'error'
  }
  //---
  deselect() {
    this.state = null;
    this.updateStyleClass();
  }
  //---
  setErrorState() {
    this.state = "error";
    this.updateStyleClass();
    setTimeout(() => {
      this.state = null;
      this.updateStyleClass();
    }, this.errorShowInterval);
  }
  //---
  remove() {
    //видаляє div з DOM-дерева
    this.$el.remove();
  }
  //---
  updateStyleClass() {
    //  if (this.state) this.$el.classList = this.cssObj[this.state];
    //  else this.$el.className = "";
    this.$el.className = this.state ? this.cssObj[this.state] : "";
  }
  //---
  sendCurrentState() {
    const stateEvent = new CustomEvent("onstatechange", {
      detail: {
        id: this.wordData.id,
        lang: this.lang,
        state: this.state,
      },
      bubbles: true,
    });
    this.$el.dispatchEvent(stateEvent);
  }
  //---
  onWordSelect() {
    switch (this.state) {
      case "selected":
        this.state = null;
        break;
      default:
        this.state = "selected";
        break;
    }
    this.updateStyleClass();
	 this.sendCurrentState()
  }
  //---
  render(containerSelector) {
    const divElement = document.createElement("div"); //створили div
    divElement.innerText = this.wordData[this.lang]; // вставили в нього слово
    divElement.onclick = this.onWordSelect.bind(this); // onclick прив1язали метод .bind(this)

    if (containerSelector) {
      //перевірили чи заданий containerSelector
      document.querySelector(containerSelector).append(divElement);
    }
    this.$el = divElement; // запам'ятовуємо для подальшого використання
    return divElement;
  }
}
//----

// wordsItemsObj = {
//   1: new WordCard({ id: 1, en: "car", ua: "автомобіль" }),
//   3: new WordCard({ id: 3, en: "man", ua: "людина" }),
// };

//-----------------
class WordsList {
  constructor(wordsListData, lang, cssObj) {
    this.wordsListData = JSON.parse(JSON.stringify(wordsListData)); // робимо глибоку копію масиву
    this.lang = lang;
    this.cssObj = cssObj;
    this.selectedItemId = null; // id вибраного на даний момент елементу, спочатку жоден елемент невиділений,
    this.wordsItemsObj = {};
  }

  //знаходить випадове слово і видаляє його з списку
  takeOutRandomWord() {
    let wordObj = null;
    if (this.wordsListData.length) {
      // якщо не нульовий
      const randIndex = Math.floor(Math.random() * this.wordsListData.length);
      wordObj = this.wordsListData[randIndex];
      this.wordsListData.splice(randIndex, 1); // видаляємо елемент. wordsListData - це масив, можна застосувати filter(w=>w.id!==wordObj.id),але краще застосувати метод splice
    }

    return wordObj; // return елемент масиву
  }

  // detail: {
  //       id: this.wordData.id,
  //       lang: this.lang,
  //       state: this.state,
  //     },

  sendSelectedWordData(wordData) {
    const selectedWordEvent = new CustomEvent("onwordatachange", {
      detail: wordData,
      bubbles: true,
    });
    this.$el.dispatchEvent(selectedWordEvent);
  }

  onWordSelectionChange(event) {
	  const eventData = event.detail; // витягуємо detail
	  // коли настає подія event, нам прилітає state('selected')
    if (eventData.state === "selected") {
      if (this.selectedItemId) {
        // треба перевірити, чи до цього часу не був виділений якийсь інший елемент
        this.wordsItemsObj[this.selectedItemId].deselect(); // якщо був виділений-звертаємось до об'єкта і .deselect()
      }

      this.selectedItemId = eventData.id; // запам'ятовуємо в selectedItemId, id того елемента, який на даний момент нам прилетів
    } else this.selectedItemId = null;
    this.sendSelectedWordData(eventData);
  }

  deleteSelectedWord() {
    if (this.selectedItemId) {
      this.wordsItemsObj[this.selectedItemId].remove();
      delete this.wordsItemsObj[this.selectedItemId];
      this.selectedItemId = null;
    }
  }

  setErrorState() {
    if (this.selectedItemId) {
      this.wordsItemsObj[this.selectedItemId].setErrorState();
      this.selectedItemId = null;
    }
  }

  render(containerSelector) {
    const containerEl = document.createElement("div");
    containerEl.className = this.cssObj.container;

    let wordData;
    do {
      wordData = this.takeOutRandomWord(); // випадково вибрали слово
      if (wordData) { // перевіряємо умову, чи слово згенерувалось
        const wordObj = new WordCard(wordData, this.lang, this.cssObj.word); // на основі слова створили об'єкт

        this.wordsItemsObj[wordData.id] = wordObj; // добавляємо цей об'єкт в wordsItemsObj [id]-об'єкт
        containerEl.append(wordObj.render()); // добавляємо в контейнер згенеровану картку, на основі цього слова
      }
    } while (wordData);

    containerEl.addEventListener(
      "onstatechange",
      this.onWordSelectionChange.bind(this)
    );

    if (containerSelector) {
      document.querySelector(containerSelector).append(containerEl);
    }

    this.$el = containerEl;
    return containerEl;
  }
}
//-------------------
class Translator {
  constructor(wordsList, cssObject) {
    this.wordsList = wordsList;
    this.cssObj = cssObj;

    this.wordsListCards = {
      en: new WordsList(wordsList, "en", cssObj),
      ua: new WordsList(wordsList, "ua", cssObj),
    };

    this.selectedData = {}; // буде зберігати id вибраних слів
  }

  // detail: {
  //       id: this.wordData.id,
  //       lang: this.lang,
  //       state: this.state,
  //     },

  onWordSelection(event) {
    const wordData = event.detail;
    if (wordData.lang in this.selectedData) {
      // перевіряємо, чи є вже такий "ключ" в  this.selectedData = {};
      if (wordData.state === "selected") {
        // якщо state === "selected" 
        this.selectedData[wordData.lang] = wordData.id; 
      } else {
        delete this.selectedData[wordData.lang]; // якщо не "selected" - видаляємо цей об'єкт
      }
    } else { // подія, коли не існував
      const otherLang = wordData.lang === "en" ? "ua" : "en";  // визначаємо, яка інша мова
      if (otherLang in this.selectedData) { 
        if (this.selectedData[otherLang] === wordData.id) { // порівнюємо
          this.wordsListCards["ua"].deleteSelectedWord();
          this.wordsListCards["en"].deleteSelectedWord();
        } else {
          this.wordsListCards["ua"].setErrorState();
          this.wordsListCards["en"].setErrorState();
        }
        delete this.selectedData[otherLang]; // видаляємо
      } else {
        this.selectedData[wordData.lang] = wordData.id;
      }
    }
  }

  render(containerSelector) {
    const containerEl = document.createElement("div");

    for (const lang in this.wordsListCards) {
      containerEl.append(this.wordsListCards[lang].render());
    }

    containerEl.addEventListener(
      "onwordatachange",
      this.onWordSelection.bind(this)
    );

    if (containerSelector)
      document.querySelector(containerSelector).append(containerEl);

    this.$el = containerEl;
    return containerEl;
  }
}
//--- 1 крок
// window.onload = function () {
//   const w1 = new WordCard(words[0], "en", cssObj);
//   w1.render(".task__container");

//   document.getElementById("btn").onclick = () => w1.setErrorState();
// };
//--- 2 крок
// window.onload = function () {
//   const table = new WordsList(words, 'en',cssObj);
//   table.render(".task__container");
// };
//--- 3 крок
window.onload = function () {
  const trans = new Translator(words, cssObj);
  trans.render(".task__container");
};
