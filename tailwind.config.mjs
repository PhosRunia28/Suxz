/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#8C82FC',
				secondary: '#F8F8FF',
				success: '#DDFFF9'
			},
			fontFamily: {
				manrope: ['Manrope', 'sans-serif']
			}
		}
	},
	plugins: []
}
