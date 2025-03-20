// cуворий режим
"use strict";

// ==========================================================

//  Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та
// посилання, куди переходимо при кліку на зображення)тег img повинен знаходитись у середині тега a: <a> <img src=”шлях”>

if (confirm("Почати тестування?")) {
  function getBanner(img, title, link) {
    let result = `
		<a href=${link} target="_blank">
		<h2 class="task__subtitle">${title}</h2>
			<img class="task__image" src=${img} alt="Banner" title="Click on me">
		</a>
		`;
    return result;
  }
  const imgSrc = "./img/01.jpg";
  const title = "Національний ботанічний сад імені Миколи Гришка";
  const link = "https://www.kyivpost.com/uk/post/17617";

  document.write(getBanner(imgSrc, title, link));
}
