/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        'primary-light': '#F3E8CC',
        'element-light': '#B3D5FF',
        'sidebar-light': '#CCB8A3',
        'primary-dark': '#332F2B',
        'element-dark': '#334A76',
        'sidebar-dark': '#4D433C',
      },
      textColor: {
        'text-light': '#001D3D',
        'text-dark': '#F3E8CC',
        'icon-light': '#1A1C18',
        'icon-focus-light': '#FFFFFF',
        'icon-dark': '#F3E8CC',
        'icon-focus-dark': '#CCB8A3',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
    },
  },
};
