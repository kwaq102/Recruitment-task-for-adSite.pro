/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/src/images/Subtract.png')",
			},
			colors: {
				mainBlue: "#0147FF",
				mainBlueHover: "#1a4bd8",
				textColor: "#282828",
				textColorHover: "#282828",
			},
			fontFamily: {
				roboto: ["Roboto Flex", "sans-serif"],
				robotoCondense: ["Roboto+Condense", "sans-serif"],
				bebasNeue: ["Bebas Neue", "sans-serif"],
			},
		},
		container: {
			center: true,
		},
	},
};
