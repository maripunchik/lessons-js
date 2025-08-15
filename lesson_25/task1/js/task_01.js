// cуворий режим
"use strict";

// =================================
//*Задача 1.Використовуючи один з АРІ https://github.com/public-apis/public-apis#animals та функцію fetch організувати завантаження та відображення даних. Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки. Окремо клас, який буде робити запити і повертати результати.

import ApiService from "./ApiService.js";
import RenderImage from "./RenderImage.js";

const api = new ApiService("https://randomfox.ca/floof/");
const container = document.querySelector(".wrapper__image-container");
const renderer = new RenderImage(container, api);
renderer.render();


//========================================================================

// class ApiService {
//   constructor(api) {
//     this.api = api;
//   }

//   async getImage() {
//     try {
//       const response = await fetch(this.api);
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//       return data.image;
//     } catch (error) {
//       console.error("Виникла помилка при завантаженні зображення:", error);
//       return null;
//     }
//   }
// }
// //---
// class RenderImage {
//   constructor(containerElement, apiService) {
//     this.containerElement = containerElement;
//     this.apiService = apiService;
//   }
//   //---
//   createImageElement(src) {
//     const img = document.createElement("img");
//     img.src = src;
//     img.alt = "Random Fox Image";
//     return img;
//   }
//   //---
//   createButton() {
//     const btn = document.createElement("button");
//     btn.textContent = "Оновити";
//     btn.addEventListener("click", () => this.render());

//     return btn;
//   }
//   //---
//   async render() {
//     const src = await this.apiService.getImage();
//     if (!src) return;

//     this.containerElement.innerHTML = "";
//     const img = this.createImageElement(src);
//     const btn = this.createButton();

//     this.containerElement.append(img, btn);
//   }
// }
// //---
// const api = new ApiService("https://randomfox.ca/floof/");
// const container = document.querySelector(".wrapper__image-container");
// const renderer = new RenderImage(container, api);
// renderer.render();
