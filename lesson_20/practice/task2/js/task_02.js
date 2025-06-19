// cуворий режим
"use strict";

// =================================================================

// Компонент діаграма. Значення від 0 до 100. Область розділено на 3 частини (значення у першій частині – червоне заповнення, значення у другій частині – синій колір, значення у третій – зелений.

let sectionsColorsList = ["red", "blue", "green"];

let dataList = [
  {
    title: "Ivan",
    value: 7,
  },
  {
    title: "Petrov",
    value: 54,
  },
  {
    title: "Olga",
    value: 29,
  },
  {
    title: "Vlad",
    value: 98,
  },
];

class Diagram {
  constructor(title, dataList, sectionsColorsList, cssObj) {
    this.title = title;
    this.dataList = dataList;
    this.sectionsColorsList = sectionsColorsList;
    this.cssObj = cssObj;
  }
  //---
  renderItemTitle(itemTitle) {
    const titleContainer = document.createElement("div");
    titleContainer.innerText = itemTitle;
    titleContainer.className = this.cssObj.title;

    return titleContainer;
  }
  //---
  getItemColor(itemValue) {
    const sectionWidth = 100 / this.sectionsColorsList.length;
    const colorIndex = Math.ceil(itemValue / sectionWidth) - 1; // віднімаємо 1, оскільки нумерація починається з 0

    return this.sectionsColorsList[colorIndex];
  }
  //---
  renderItemValue(itemValue) {
    const valueContainer = document.createElement("div");
    valueContainer.className = this.cssObj.value;

    const valueBar = document.createElement("div");
    valueBar.style.width = `${itemValue}%`;
    valueBar.style.height = `100%`;
    valueBar.style.backgroundColor = this.getItemColor(itemValue);



    //*---- можна не створювати метод getItemColor() , а відобразити таким чином:
	//  valueBar.style.backgroundColor = "";
   //  if (itemValue <= 33) {
   //    valueBar.style.backgroundColor = this.sectionsColorsList[0]; // red
   //  } else if (itemValue <= 66) {
   //    valueBar.style.backgroundColor = this.sectionsColorsList[1]; // blue
   //  } else {
   //    valueBar.style.backgroundColor = this.sectionsColorsList[2]; // green
   //  }

    valueContainer.append(valueBar);

    return valueContainer;
  }
  //---
  renderItem(itemData) {
    // -itemData - це безпосередньо один елемент, для якого нам необхідно намалювати розмітку(який містить title: та value:)
    const itemContainer = document.createElement("div");

    itemContainer.append(this.renderItemTitle(itemData.title));
    itemContainer.append(this.renderItemValue(itemData.value));

    return itemContainer;
  }
  //---
  renderHeader() {
    const headerContainer = document.createElement("h2");
    headerContainer.innerText = this.title;

    return headerContainer;
  }
  //---
  render(containerSelector) {
    const itemsContainer = document.createElement("div");

    itemsContainer.append(this.renderHeader());

    for (const item of this.dataList) {
      itemsContainer.append(this.renderItem(item));
    }
    if (containerSelector) {
      document.querySelector(containerSelector).append(itemsContainer);
    }
    return itemsContainer;
  }
}

window.onload = function () {
  const cssObj = {
    value: "item-2",
    title: "title-2",
  };
  //--------------- Приклад використання 1
  const d1 = new Diagram(
    "Успішність учнів",
    dataList,
    sectionsColorsList,
    cssObj
  );
  d1.render("#dataContainer");

  //--------------- Приклад використання 2
  const tasksList = [
    {
      title: "Випити каву",
      value: 50,
    },
    {
      title: "Попрацювати",
      value: 90,
    },
    {
      title: "Відпочити",
      value: 10,
    },
  ];

  const d2 = new Diagram(
    "Виконання задач",
    tasksList,
    sectionsColorsList,
    cssObj
  );
  d2.render("#tasksContainer");
};



// Розробити Loader(задається title,value). Зімітувати завантажеення за допомогою таймера