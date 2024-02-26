/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Futura-PT':['futura-pt','sans-serif'],
        'Futura-PT-Bold':['futura-pt-bold', 'sans-serif'],
      },
      colors:{
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "red-d-1": "var(--red-d-1)",
      },
      fontSize:{
        "4xs":"var(--text-4xs)",
        "3xs":"var(--text-3xs)",
        "2xs":"var(--text-2xs)",
        "xs":"var(--text-xs)",
        "s":"var(--text-s)",
        "m":"var(--text-m)",
        "l":"var(--text-l)",
        "xl":"var(--text-xl)",
        "2xl":"var(--text-2xl)",
        "3xl":"var(--text-3xl)",
        "4xl":"var(--text-4xl)",
      },
      spacing:{
        "4xs":"var(--space-4xs)",
        "3xs":"var(--space-3xs)",
        "2xs":"var(--space-2xs)",
        "xs":"var(--space-xs)",
        "s":"var(--space-s)",
        "m":"var(--space-m)",
        "l":"var(--space-l)",
        "xl":"var(--space-xl)",
        "2xl":"var(--space-2xl)",
        "3xl":"var(--space-3xl)",
        "4xl":"var(--space-4xl)",
      },
    },
  },
  plugins: [],
}

