/** @type {import('tailwindcss').Config} */
export default {
  
  theme: {
    extend: {
      // C'est ici que nous ajoutons la classe pour le ratio vertical (Shorts)
      aspectRatio: {
        '9/16': '9 / 16', 
      },
    },
  },
  plugins: [],
}