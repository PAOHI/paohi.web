/** @type {import('tailwindcss').Config} */
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
				heading: [
					'HostGrotesk',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'sans-serif'
				],
				body: [
					'HostGrotesk',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'sans-serif'
				]
			},
			fontSmoothing: {
				'antialiased': {
					'-webkit-font-smoothing': 'antialiased',
					'-moz-osx-font-smoothing': 'grayscale'
				}
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [aspectRatio, animate],
};

export default config;