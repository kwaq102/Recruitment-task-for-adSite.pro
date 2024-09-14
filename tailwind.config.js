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
			},
			fontFamily: {
				sans: ["Roboto Flex", "sans-serif"],
			},
		},
		container: {
			center: true,
		},
	},
};
