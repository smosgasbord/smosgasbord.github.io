module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#2d4654',
        sage: '#5e8b7e',
        turquoise: '#7fd1c7',
        cream: '#f5f5f0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
