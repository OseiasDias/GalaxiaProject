/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-', // Adiciona o prefixo "tw-" às classes do Tailwind

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

