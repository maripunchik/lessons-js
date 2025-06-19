// cуворий режим
"use strict";

// =================================================================

//  Crazy button. При наведенні кнопка повинна змінювати свій колір і позицію випадковим чином зміщаючись у деякому напрямку.

class CrazyButton {
  constructor(btnTitle, maxStep) {
    this.btnTitle = btnTitle;
    this.maxStep = maxStep;
  }
  //---
  getRandomStep() {
    return -this.maxStep + Math.floor(Math.random() * 2 * this.maxStep);
  }
  //---
  setNewPosition() {
    const deltaLeft = this.getRandomStep();
    const deltaTop = this.getRandomStep();
    this.left += deltaLeft;
    this.top += deltaTop;
  }
  //---
  setBtnPosition() {
    this.btn.style.left = this.left + "px"; //! обов'язково вказуємо одиницю виміру
    this.btn.style.top = this.top + "px";
    //  this.btn.style.left = parseInt(this.btn.style.left) + deltaLeft + "px"; //! обов'язково вказуємо одиницю виміру
    //  this.btn.style.top = parseInt(this.btn.style.top) + deltaTop + "px";
  }
  //---
  jump() {
    this.setNewPosition();
    this.setBtnPosition();
  }
  //---
  setInitPosittion() {
    this.left = this.getRandomStep() * 10;
    this.top = this.getRandomStep() * 10;
  }
  //---
  setInitButtonPosition() {
    this.setInitPosittion();
    this.setBtnPosition();
  }
  //---
  render(containerSelector) {
    const btn = document.createElement("button");
    btn.innerText = this.btnTitle;
    btn.onmouseover = this.jump.bind(this);
    this.btn = btn; // зберегли кнопочку

    this.setInitButtonPosition();

    if (containerSelector) {
      document.querySelector(containerSelector).append(btn);
    }
  }
}

window.onload = function () {
  for (let i = 0; i < 10; i++) {
    const b1 = new CrazyButton("test", 50);
    b1.render("#container");
  }
};
