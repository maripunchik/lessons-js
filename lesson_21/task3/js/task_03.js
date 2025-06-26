// cуворий режим
"use strict";

// =================================================================

// Розробити Класи House,Dog,Bird
//House
// ----властивості -----
// ---------------- Координата Х
// ---------------- Координата У
// ---------------- шлях до зображення
// ---------------- інтервал оновлення
// ----методи ----- генерування елемента розмітки
// ---------------- оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)

//Dog
// ----властивості -----
// ---------------- Координата Х
// ---------------- Координата У
// ---------------- шлях до зображення
// ---------------- інтервал оновлення
// ----методи ----- генерування елемента розмітки
// ---------------- оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))

//Bird
// ----властивості -----
// ---------------- Координата Х
// ---------------- Координата У
// ---------------- шлях до зображення
// ---------------- інтервал оновлення
// ----методи ----- генерування елемента розмітки
// ---------------- оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)
// Подумайте яким має бути спільний клас предок.

class MovableObject {
  $el;
  constructor(x, y, imgSrc, updateInterval) {
    this.x = x;
    this.y = y;
    this.imgSrc = imgSrc;
    this.updateInterval = updateInterval;
  }
  //---
  updatePosition() {
    if (!this.$el) return;

    let transform = `translate(${this.x}px,${this.y}px)`;

    if (typeof this.scale === "number") {
      transform += `scale(${this.scale})`;
    }

    this.$el.style.transform = transform;
  }
  //---
  startUpdating() {
    setInterval(() => {
      this.update();
      this.updatePosition();
    }, this.updateInterval);
  }
  //---
  update() {}
  //---
  getRandomMovement(min = -5, max = 5) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  //---
  limitPositionInContainer(){
	const container = document.querySelector(".movable-objects");
	if(!container || !this.$el) return

	const containerWidth = container.offsetWidth
	const containerHeight = container.offsetHeight

	const objWidth = this.$el.offsetWidth
	const objHeight = this.$el.offsetHeight;

	this.x = Math.max(0, Math.min(this.x, containerWidth - objWidth))
	this.y = Math.max(0, Math.min(this.y, containerHeight - objHeight));
  }
  //---
  render(cssSelector = ".movable-objects") {
    const el = document.createElement("img");
    el.src = this.imgSrc;
    el.className = "movable-objects__image";
    el.style.transform = `translate(${this.x}px,${this.y}px)`;

    if (cssSelector) {
      const cnt = document.querySelector(cssSelector);
      cnt.append(el);
    }

    this.$el = el;
    return this.$el;
  }
}
//---
class House extends MovableObject {
  constructor(x, y, imgSrc, updateInterval) {
    super(x, y, imgSrc, updateInterval);
    this.scale = 1;
    this.scaleStep = 0.01;
  }
  //---
  update() {
    this.scale += this.scaleStep;

    if (this.scale >= 1.2 || this.scale <= 0.8) {
      this.scaleStep = -this.scaleStep;
    }
  }
}
//---
class Dog extends MovableObject {
  constructor(x, y, imgSrc, updateInterval) {
    super(x, y, imgSrc, updateInterval);
  }
  //---
  update() {
    const deltaX = this.getRandomMovement(-10, 10);
    this.x += deltaX;

	 this.limitPositionInContainer()
  }
}
//---
class Bird extends MovableObject {
  constructor(x, y, imgSrc, updateInterval) {
    super(x, y, imgSrc, updateInterval);
  }

  update() {
    const deltaX = this.getRandomMovement(-10, 10);
    const deltaY = this.getRandomMovement(-10, 10);

    this.x += deltaX;
    this.y += deltaY;

	 this.limitPositionInContainer();
  }
}
//---
const house = new House(0, 0, "img/house.jpg", 100);
house.render().classList.add("movable-objects__house");
house.startUpdating();

const dog = new Dog(250, 450, "img/dog.png", 200);
dog.render().classList.add("movable-objects__dog");
dog.startUpdating();

const bird = new Bird(300, 250, "img/bird.png", 150);
bird.render().classList.add("movable-objects__bird");
bird.startUpdating();
