/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sora: ['Sora Variable', 'sans-serif'],
			},
			colors: {
				primary: '#141b1f',
				secondary: '#1d262b'
			}
		},
	},
	plugins: [],
}
