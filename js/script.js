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
















































