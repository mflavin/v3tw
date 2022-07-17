module.exports = {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        topbar: '3.5rem',
        sidebarmobile: '19.5rem',
        sidebar: '19.5rem',
        content: '4rem',
        '8xl': '90rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};
