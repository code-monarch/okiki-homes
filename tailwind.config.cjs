const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
				serif: ['Josefin Sans', 'sans-serif']
			},
			colors: {
				bg: '#FAFAFA',
				accentBase: '#002165',
				semBlue: '#2549D3',
				borderColor: '#C4C4C4',
				semGray: '#989898',
				semDarkBlue: "#08195A"
			},
			boxShadow: {
				custom: '0px 6px 15px rgba(0, 0, 0, 0.04)',
				card: '0px 2px 6px 0px rgba(0, 0, 0, 0.05)'
			},
			screens: {
				xsm: '1px',
				// => @media (min-width: 1px) { ... }

				sm: '321px',
				// => @media (min-width: 320px) { ... }

				md: '450px',
				// => @media (min-width: 450px) { ... }

				lg: '560px',
				// => @media (min-width: 560px) { ... }

				BigPhones: '640px',
				// => @media (min-width: 640px) { ... }

				tablets: '768px',
				// => @media (min-width: 768px) { ... }

				smLaptops: '1024px',
				// => @media (min-width: 1024px) { ... }

				laptop: '1280px',
				// => @media (min-width: 1280px) { ... }

				desktop: '1426px',
				// => @media (min-width: 1728px) { ... }

				lgDesktops: '2000px'
				// => @media (min-width: 1728px) { ... }
			}
		}
	},
	plugins: []
};
