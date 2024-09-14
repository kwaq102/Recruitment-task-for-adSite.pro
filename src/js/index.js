const burger = document.querySelector(".menu-burger");
const navListBox = document.querySelector(".nav-items");
const btnNav = document.querySelector(".navBtn");

const toogleMenu = e => {
	e.target.name = e.target.name === "menu" ? "close" : "menu";
	navListBox.classList.toggle("toggleMenu");
	btnNav.classList.toggle("toggleBtn");
};

burger.addEventListener("click", toogleMenu);
