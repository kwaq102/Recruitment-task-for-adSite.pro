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
				darkColor: "#282828",
				lightColor: "#F7F7F7",
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
