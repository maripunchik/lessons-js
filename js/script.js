// cуворий режим
"use strict"

// ==========================================================

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.header__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

//  ==========================================================

function highlighSelectedCard() {
  const navLinks = document.querySelectorAll(".header__nav-link");
  const cards = document.querySelectorAll(".practice__task");

  for (const link of navLinks) {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // - Викликається при кліку на посилання, щоб запобігти стандартному переходу за href.
      for (const card of cards) {
        card.classList.remove("practice__task--highlighted");
      }

      const id = link.getAttribute("href").slice(1);
      const selectedCard = document.querySelector(`#${id}`);

      if (selectedCard) {
        selectedCard.classList.add("practice__task--highlighted");
      }
    });
  }
}
//----
window.onload = () => {
	highlighSelectedCard()
};

//  ==========================================================











































