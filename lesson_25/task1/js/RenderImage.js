// cуворий режим
"use strict";


export default class RenderImage {
  constructor(containerElement, apiService) {
    this.containerElement = containerElement;
    this.apiService = apiService;
  }
  //---
  createImageElement(src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Random Fox Image";
    return img;
  }
  //---
  createButton() {
    const btn = document.createElement("button");
    btn.textContent = "Оновити";
    btn.addEventListener("click", () => this.render());

    return btn;
  }
  //---
  async render() {
    const src = await this.apiService.getImage();
    if (!src) return;

    this.containerElement.innerHTML = "";
    const img = this.createImageElement(src);
    const btn = this.createButton();

    this.containerElement.append(img, btn);
  }
}