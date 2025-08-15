// cуворий режим
"use strict";

export default class ApiService {
  constructor(api) {
    this.api = api;
  }

  async getImage() {
    try {
      const response = await fetch(this.api);
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data.image;
    } catch (error) {
      console.error("Виникла помилка при завантаженні зображення:", error);
      return null;
    }
  }
}
