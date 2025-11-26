/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#fdfbf7",
        ink: "#2d2a2e",
        gold: "#c5a059",
        "royal-red": "#8b0000",
        primary: "#2d2a2e", // Mapping primary to ink for compatibility
        secondary: "#fdfbf7", // Mapping secondary to parchment
        accent: "#c5a059", // Mapping accent to gold
        text: "#2d2a2e", // Mapping text to ink
      },
      fontFamily: {
        story: ['"Cinzel Decorative"', 'serif'],
        body: ['Lora', 'serif'],
        sans: ['Lora', 'serif'], // Default to serif for this theme
      },
    },
  },
  plugins: [],
}
