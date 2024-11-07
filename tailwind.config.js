/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../src/assets/images/cacd_hero.png')",
        'about-image': "url('../src/assets/images/cacd_bg.png')",
        'divider-image': "url('../src/assets/images/cacd-divider.png')",
      }, 
      colors: {
        cacdRed: {
          light: '#3a86ff', // You can add variants like 'light'
          DEFAULT: '#B3261E', // Default shade
          dark: '#03045e', // Dark variant
        },
      },
    },
  },
  plugins: [],
}

