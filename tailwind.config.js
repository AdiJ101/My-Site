/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nature Palette
        midnight: "#0b1026",
        sunset: "#ffb347",
        forest: "#2d4a53",
        glass: "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        header: ['"League Spartan"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        stylish: ['"Jim Nightshade"', 'cursive'], // For section headings
        signature: ['"Italianno"', 'cursive'],       // For name in Hero
      },
      backgroundImage: {
        'nature': "url('/src/assets/nature-bg.png')",
      }
    },
  },
  plugins: [],
}
