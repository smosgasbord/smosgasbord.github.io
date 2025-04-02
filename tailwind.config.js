module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3E6B61',
        secondary: '#7FD1C0',
        dark: '#2C4A42'
      }
    },
  },
  plugins: [require('daisyui')]
};
