/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import aspectRatio from '@tailwindcss/aspect-ratio';
import animate from 'tailwindcss-animate';

const config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,jsx,mdx}',
		'./src/components/**/*.{js,jsx,mdx}',
		'./src/app/**/*.{js,jsx,mdx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		extend: {
			colors: {
				primary: '#4169e1',
				secondary: '#35c925',
				background: '#FAF8FF',
				muted: '#898989',
				mutedForeground: '#E4E4E7',
				dark: '#1a1a2e',
				white: '#ffffff',
				accent: '#d10000',
				error: '#FF0000'
			},
			fontFamily: {
				heading: ['HostGrotesk', 'sans-serif'],
				body: ['HostGrotesk', 'sans-serif'],
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [aspectRatio, animate],
};

export default config;