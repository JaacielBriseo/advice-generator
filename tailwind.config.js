/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				back: 'hsl(218, 23%, 16%)',
				card: 'hsl(217, 19%, 24%)',
				extra: 'hsl(217, 19%, 38%)',
				neon: 'hsl(150, 100%, 66%)',
				take: 'hsl(193, 38%, 86%)',
			},
			fontFamily:{
				manrope: 'Manrope, sans-serif'
			},
			screens :{
				'lg': '1440px'
			}
		},
	},
	plugins: [],
};
