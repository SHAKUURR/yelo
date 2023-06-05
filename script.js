"use strict";
const mainMenu = document.querySelector(".nav-item");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu-list");
const menu_items = document.querySelectorAll(".linkk");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
	menu.style.display = "block";
	menu.style.opacity = "0";
	setTimeout(function () {
		menu.style.opacity = "1";
	}, 10);
	// mainMenu.style.display = "flex";
	// mainMenu.style.top = "0";
}
function close() {
	menu.style.display = "none";
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});

//Counter
const display = document.querySelector(".count-box");
const count = document.querySelectorAll(".counter");
let interval = 400;

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
	// Check if the display section is in the viewport
	if (entries[0].isIntersecting) {
		// Start the counting
		count.forEach((valueDisplay) => {
			let startValue = 500;
			let endValue = parseInt(valueDisplay.getAttribute("data-val"));
			let duration = Math.floor(interval / endValue);
			let counter = setInterval(function () {
				startValue += 1;
				valueDisplay.textContent = `${startValue}+`;
				if (startValue == endValue) {
					clearInterval(counter);
				}
			}, duration);
		});

		// Stop observing the display section
		observer.disconnect();
	}
});

// Start observing the display section
observer.observe(display);
