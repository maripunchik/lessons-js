// cуворий режим
"use strict";

// =================================================================

//   Задача 1. Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).

class Snowflake {
  constructor(container, maxTop) {
    this.container = container;
    this.maxTop = maxTop;

    this.element = document.createElement("div");
    this.element.classList.add("snowflake");

    this.container.append(this.element);

    this.initializeElValue();
  }
  //---
  initializeElValue() {
    this.x = Math.random() * window.innerWidth;
    this.y = 0;

    const minSpeed = 1;
    const maxSpeed = 10;

    this.speed = minSpeed + Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) 

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
  //---
  fall() {
    this.y += this.speed;

    if (this.y > this.maxTop) {
      this.initializeElValue();
    }
    this.element.style.top = `${this.y}px`;
  }
}

class Snowfall {
  constructor(selector, count = 50, maxTop = window.innerHeight) {
    this.container = document.querySelector(selector);
    this.flakes = [];

    this.maxTop = maxTop;

    for (let i = 0; i < count; i++) {
      this.flakes.push(new Snowflake(this.container, this.maxTop));
    }

   //  this.start();
  }

  start() {
    this.interval = setInterval(() => {
      this.flakes.forEach((flake) => flake.fall());
    }, 30);
  }
}
//---
window.onload = () => {
	const snowfall = new Snowfall(".snowfall", 50);
	snowfall.start()
};
