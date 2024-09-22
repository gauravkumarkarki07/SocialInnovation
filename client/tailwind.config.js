/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary:'#05445E',
        secondary:'#189AB4',
        tertiary:'#D4F1F4',
        accent:'#75E6DA'
      },
      fontFamily:{
        Poppins:['Poppins','sans-serif']
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}