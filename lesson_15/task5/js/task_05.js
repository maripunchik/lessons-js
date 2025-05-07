// cуворий режим
"use strict";

// =================================================================
// Розробити клас «Керівник танців»
// Поля-------------------- Масив імен хлопців
// -------------------------Масив імен дівчат 

// Методи---------------------- Метод випадкового вибору імені хлопця
// ---------------------------- Метод випадкового вибору імені дівчини
// --------------------------- Метод виведення пари для танців
// -------------------------- Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців



if (confirm("Почати тестування?")) {
 class DanceDirector {
   constructor(boysNames, girlsNames) {
     this.boysNames = boysNames;
     this.girlsNames = girlsNames;
   }

   // -- Метод випадкового вибору імені хлопця
   chooseRandomBoyName() {
     const randomIndex = Math.floor(Math.random() * this.boysNames.length);
     return this.boysNames[randomIndex];
   }
   // -- Метод випадкового вибору імені дівчини
   chooseRandomGirlName() {
     const randomIndex = Math.floor(Math.random() * this.girlsNames.length);
     return this.girlsNames[randomIndex];
   }
   // -- Метод виведення пари для танців
	printDancePair(){
		const boy = this.chooseRandomBoyName()
		const girl = this.chooseRandomGirlName()
	// 	document.writeln(
   //    `<p>Пара для танців: ${boy} та ${girl}</p>`
   //  );
	console.log(`Пара для танців: ${boy} та ${girl}`);
	}
   // -- Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
	run() {
		setInterval(() => {
      this.printDancePair();
    }, 5000);
	}
 }

 const boysNames = ["Олександр", "Максим", "Іван", "Олег", "Дмитро"];
 const girlsNames = ["Марія", "Анна", "Олена", "Ірина", "Катерина"];

 const danceDirector = new DanceDirector(boysNames,girlsNames)
 danceDirector.run()
}


// =================================================================
