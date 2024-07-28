/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			'orchid': {
        '50': '#fcf3fa',
        '100': '#fae9f7',
        '200': '#f7d3f0',
        '300': '#f2afe4',
        '400': '#e97dd1',
        '500': '#e05fc0',
        '600': '#cc36a0',
        '700': '#b02683',
        '800': '#92226c',
        '900': '#7a215c',
        '950': '#4a0d35',
    },
    
		}
	},
  },
  plugins: [],
}

