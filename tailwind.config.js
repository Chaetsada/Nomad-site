/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#FFFFFF',
        'primary-100':'#1A1A1A',
        'primary-200':'#363636',
        'secondary-100':'#deddd7',
        'secondary-200':'#B5734C',
        'main':'#e9e8e4',
      },
    },
  },
  plugins: [],
};
