// cуворий режим
"use strict";

// =================================================================

// Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)

function getBorderForSelected(event) {
	const cardToChoice = event.target.closest('.card-categories')
	if(cardToChoice) {
		cardToChoice.classList.toggle("card-categories--selected");
	}
}

const cardsContainer = document.querySelector('.task__categories-cards')
if(cardsContainer){
	cardsContainer.addEventListener("click", getBorderForSelected);
}