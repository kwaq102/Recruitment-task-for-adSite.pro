const burger = document.querySelector(".menu-burger");
const navListBox = document.querySelector(".nav-items");
const btnNav = document.querySelector(".navBtn");

const btnsGallery = document.querySelectorAll("[data-tab-target]");

const toogleMenu = e => {
	e.target.name = e.target.name === "menu" ? "close" : "menu";
	navListBox.classList.toggle("toggleMenu");
	btnNav.classList.toggle("toggleBtn");
};

burger.addEventListener("click", toogleMenu);

btnsGallery.forEach(btn => {
	const activeClass = "activeBtnGallery";

	btn.addEventListener("click", () => {
		btnsGallery.forEach(activeBtn => activeBtn.classList.remove(activeClass));
		btn.classList.add(activeClass);
	});
});

// SLIDER
$(".responsive").slick({
	dots: true,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	mobileFirst: true,

	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
	],
});
