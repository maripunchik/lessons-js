// cуворий режим
"use strict"

// ==========================================================

//  Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

 if (confirm("Почати тестування?")) {
   function getRandomImage(imgSrc1, imgSrc2, imgSrc3, imgSrc4) {
     const imageRandNum = 1 + Math.floor(Math.random() * (4 - 1 + 1));

     switch (imageRandNum) {
       case 1:
         return imgSrc1;
         break;
       case 2:
         return imgSrc2;
         break;
       case 3:
         return imgSrc3;
         break;
       case 4:
         return imgSrc4;
         break;
     }
   }
	const imageSrc = getRandomImage(
    "./img/nature1.webp",
    "./img/nature2.webp",
    "./img/nature3.webp",
    "./img/nature4.webp"
  )
  document.write(`<img src="${imageSrc}" style="max-width: 100%">`);
 }