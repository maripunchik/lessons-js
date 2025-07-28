// cуворий режим
"use strict";

// =================================
//*Задача 1.Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050…. à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
  constructor(phoneNumber, operatorsList) {
    this.phoneNumber = phoneNumber;
    this.operatorsList = operatorsList;
    this.cleaned = this.#cleanNumber(phoneNumber);
  }
  //---
  #cleanNumber(number) {
    return number.replace(/[\s()\+\-]/g, "");
  }
  //---
  #getPrefix() {
    if (this.cleaned.startsWith("380")) {
      return this.cleaned.slice(2, 5);
    } else if (this.cleaned.startsWith("0")) {
      return this.cleaned.slice(1, 4);
    } else {
      return this.cleaned.slice(0, 3);
    }
  }
  //---
  getOperatorInfo() {
    if (!/^(\+?38)?0\d{9}$/.test(this.cleaned)) {
      return "Невалідний номер";
    }
    const prefix = this.#getPrefix();
    const operator = this.operatorsList.find((op) =>
      op.prefixes.includes(prefix)
    );

    return operator ? operator.name : "Невідомий оператор";
  }
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? this.getOperatorInfo() : this.phoneNumber;
  }
}
//---
const operators = [
  { name: "Vodafone", prefixes: ["050", "066", "095", "099"] },
  { name: "Kyivstar", prefixes: ["067", "068", "096", "097", "098"] },
  { name: "Lifecell", prefixes: ["063", "073", "093"] },
  { name: "3Mob", prefixes: ["091", "092", "094"] },
];
//---
const phone = new PhoneNumber("+380501234567", operators);
console.log(`Задача 1`);
console.log(`${phone}`);
// =================================
//*Задача 2.Дано Shop -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

class Product {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return this.price * this.count;
      case "string":
      default:
        return this.name;
    }
  }
}
//---
class Shop {
  constructor(products) {
    this.products = products;
  }
  *[Symbol.iterator]() {
    for (const product of this.products) {
      yield `${product.name} - ${product.price * product.count}`;
    }
  }
}
// ---
const products = [
  new Product("Ручка", 15, 10),
  new Product("Зошит", 12, 5),
  new Product("Олівець", 8, 7),
  new Product("Лінійка", 20, 3),
  new Product("Маркер", 25, 4),
];
//---
const shop = new Shop(products);
console.log(`Задача 2`);

for (const item of shop) {
  console.log(item);
}

// ==================================
//*Задача 3.Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function* generateRandomEvenNumbers(amount, min = 2, max = 100) {
  while (amount) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber % 2 === 0) {
      yield randomNumber;
      amount--;
    }
  }
}
//---
const result = generateRandomEvenNumbers(7);
console.log(`Задача 3`);

for (const evenNumber of result) {
  console.log(evenNumber);
}
// ==================================
//*Задача 4.Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).

const urls = [
  "https://www.google.com",
  "https://mail.yahoo.com",
  "https://example.org",
  "https://university.edu",
  "http://myblog.net",
  "https://another.edu",
  "https://opensource.org",
  "http://news.com",
  "https://docs.python.org",
  "https://test.edu",
];

function getDomains(urlsList) {
  const tldList = [];
  for (const url of urlsList) {
    const regexp =
      /^(?:https?:\/\/)?(?:www\.)?[^\/]+\.(?<tld>[a-z]{2,})(?:\/|$)/i;
    const match = url.match(regexp);
    const tld = match && match.groups && match.groups.tld;
    if (tld) {
      tldList.push(tld);
    }
  }
  return tldList;
}

function getDomainsCount(urlsList) {
  const domainsList = getDomains(urlsList);
  const domainsCounter = new Map();

  for (const tld of domainsList) {
    domainsCounter.set(tld, (domainsCounter.get(tld) || 0) + 1);
  }
  return domainsCounter;
}

//---
const tldCounter = getDomainsCount(urls);
console.log(`Задача 4`);

tldCounter.forEach((count, tld) => {
  console.log(`${tld} - ${count} шт`);
});

// ===================================
//*Задача 5.Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.

function getTotalPriceByAuthor(books) {
  const priceByAuthor = new Map();

  for (const { author, price } of books) {
    priceByAuthor.set(author, (priceByAuthor.get(author) || 0) + price);
  }

  return priceByAuthor;
}
//---
const booksArr = [
  { title: "Кобзар", year: 1840, author: "Тарас Шевченко", price: 250 },
  {
    title: "Тіні забутих предків",
    year: 1911,
    author: "Михайло Коцюбинський",
    price: 190,
  },
  { title: "Земля", year: 1902, author: "Ольга Кобилянська", price: 210 },
  { title: "Маруся Чурай", year: 1979, author: "Ліна Костенко", price: 270 },
  {
    title: "Хіба ревуть воли, як ясла повні?",
    year: 1875,
    author: "Панас Мирний",
    price: 230,
  },
  { title: "Лісова пісня", year: 1911, author: "Леся Українка", price: 200 },
  {
    title: "Записки українського самашедшого",
    year: 2010,
    author: "Ліна Костенко",
    price: 260,
  },
];
//---
const totalPrices = getTotalPriceByAuthor(booksArr);
console.log(`Задача 5`);

totalPrices.forEach((totalPrice, author) => {
  console.log(`${author}: ${totalPrice} грн`);
});
// ===============================
//*Задача 6.Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.

function getVisitsCount(logins) {
  const visitsCounter = new Map();

  for (const login of logins) {
    visitsCounter.set(login, (visitsCounter.get(login) || 0) + 1);
  }

  return visitsCounter;
}
//---
const visitors = [
  "ivanov123456",
  "petrenko25041990",
  "ivanov123456",
  "sydorenko987456",
  "ivanov123456",
  "petrenko15151515",
  "melnyk1708",
  "sydorenko987456",
  "melnyk1708",
  "petrenko25041990",
  "ivanov123456",
  "petrenko25041990",
  "sydorenko454545",
  "sydorenko454545",
];
//---
const resultCountVisits = getVisitsCount(visitors);
console.log(`Задача 6`);

resultCountVisits.forEach((count, login) => {
  console.log(`${login} - ${count} відвідувань`);
});

// ===================================
//*Задача 7.Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const students = [
  { name: "Іван Петренко", course: 1, faculty: "Філологія" },
  { name: "Марія Іванчук", course: 2, faculty: "Фізика" },
  { name: "Олег Коваленко", course: 1, faculty: "Математика" },
  { name: "Катерина Сидоренко", course: 3, faculty: "Філологія" },
  { name: "Юрій Шевченко", course: 2, faculty: "Фізика" },
  { name: "Андрій Бондар", course: 1, faculty: "Математика" },
  { name: "Ольга Ткаченко", course: 3, faculty: "Історія" },
  { name: "Світлана Козак", course: 4, faculty: "Філологія" },
];
//---
class StatisticOfStudentsByFaculty {
  constructor(students) {
    this.students = students;
  }
  //---
  getUniqueFaculties() {
    const uniqueList = new Set();
    this.students.forEach((student) => {
      uniqueList.add(student.faculty);
    });
    return uniqueList;
  }
  //---
  getCountBy(field) {
    const map = new Map();
    this.students.forEach((student) => {
      const key = student[field];
      map.set(key, (map.get(key) || 0) + 1);
    });
    return map;
  }
  //---
  getCountByCourse() {
    return this.getCountBy("course");
  }
  //---
  getCountByFaculty() {
    return this.getCountBy("faculty");
  }
  //---
  *generateCountLines(map, label = "") {
    for (const [key, count] of map) {
      yield `${label}${key}: ${count} студентів`;
    }
  }
  //---
  print() {
    for (const line of this.render()) {
      console.log(line);
    }
  }
  //---
  *render() {
    const faculties = this.getUniqueFaculties();
    yield `Кількість різних факультетів: ${faculties.size}`;

    yield `Кількість студентів на кожному курсі:`;
    yield* this.generateCountLines(this.getCountByCourse(), "Курс ");

    yield `Кількість студентів на кожному факультеті:`;
    yield* this.generateCountLines(this.getCountByFaculty());
  }
}
//---

console.log(`Задача 7`);

const statistic = new StatisticOfStudentsByFaculty(students);

statistic.print();

//== за допомогою функції =====
// function studentStatistic(students) {
// 	const facultySet = new Set()
// 	const courseCounts= new Map()

// 	for (const student of students) {
// 		facultySet.add(student.faculty);

// 		const course = student.course
// 		if (courseCounts.has(course)) {
// 			courseCounts.set(course, courseCounts.get(course)+1)
// 		}else{
// 			courseCounts.set(course,1)
// 		}
// 	}

// 	console.log(`Кількість різних факультетів: ${facultySet.size}`);

// 	courseCounts.forEach((count, course) => {
// 	console.log(`Курс ${course}: ${count} студентів`);

// 	});
// }
// //---
// console.log(`Задача 7`);
// studentStatistic(students)
// ===================================
//*Задача 8.Дано масив показів температур. Підрахувати кількість входжень кожного із показів let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]. Заокруглити вверх значення та підрахувати кількість різних показів.

console.log(`Задача 8`);

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
console.log(temperatures);

function countEntries(temperatures) {
  const resMap = new Map();

  for (const temp of temperatures) {
    if (resMap.has(temp)) {
      resMap.set(temp, resMap.get(temp) + 1);
    } else {
      resMap.set(temp, 1);
    }
  }

  return resMap;
}
//---

function countRoundedTemp(temperatures) {
  const roundedTemperatures = temperatures.map((t) => Math.ceil(t));
  const roundedSet = new Set(roundedTemperatures);

  console.log(`Кількість різних входжень після округлення: ${roundedSet.size}`);
}
//---

const countTempEntries = countEntries(temperatures);
console.log(`Кількість входжень кожного значення:`);
countTempEntries.forEach((num, temp) => {
  console.log(`${temp} - ${num}`);
});

countRoundedTemp(temperatures);
// ===================================
//*Задача 9.Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.

console.log(`Задача 9`);

const mathClub = ["Іваненко", "Петренко", "Сидоренко", "Коваленко", "Мельник"];

console.log(`Студенти математичного гуртка: ${mathClub}`);

const historyClub = [
  "Сидоренко",
  "Ковальчук",
  "Іваненко",
  "Гончаренко",
  "Степаненко",
  "Мельник",
];
console.log(`Студенти історичного гуртка: ${historyClub}`);

function createClubSets(list1, list2) {
  return {
    mathClubSet: new Set(list1),
    historyClubSet: new Set(list2),
  };
}

function getStudentsFromBothClubs(list1, list2) {
	const {mathClubSet,historyClubSet} = createClubSets(list1,list2)

  const historyAndMathClubStudents = mathClubSet.intersection(historyClubSet);

  return historyAndMathClubStudents.size;
}

function getStudentsFromAtLeastOneClub(list1, list2) {
	const { mathClubSet, historyClubSet } = createClubSets(list1, list2);
  const uniqueStudents = mathClubSet.union(historyClubSet);

  return uniqueStudents.size;
}

console.log(
  `Студенти гуртка з історії, також відвідують гурток з математики: ${getStudentsFromBothClubs(
    mathClub,
    historyClub
  )}`
);

console.log(
  `Студенти відвідують хоча б один гурток: ${getStudentsFromAtLeastOneClub(
    mathClub,
    historyClub
  )}`
);
