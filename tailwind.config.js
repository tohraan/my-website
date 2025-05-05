/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'soft-pink': '#ff9e9e',
        'vintage-green': '#3D5744',
        'vintage-beige': '#E5D3BF',
        'vintage-brown': '#BD9B76',
        'primary-bg': 'var(--primary-bg)',
        'secondary-bg': 'var(--secondary-bg)',
        'card-bg': 'var(--card-bg)',
        'accent-bg': 'var(--accent-bg)',
        'primary-text': 'var(--primary-text)',
        'secondary-text': 'var(--secondary-text)',
        'border-color': 'var(--border-color)',
      },
    },
  },
  plugins: [],
};
