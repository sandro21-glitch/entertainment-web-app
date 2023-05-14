/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBg': 'hsl(222.86,30.43%,9.02%)',
        'navBg': 'hsl(223.85,36.11%,14.12%)',
        'primaryRed':'#fc4545',
        'transparentBlack': 'rgba(0, 0, 0, 0.5)',
        'bookmarkBg': 'rgba(16, 20, 30, 0.5)',
        'playButton': 'rgba(255, 255, 255, 0.25)',
        'paraColor': 'rgba(255, 255, 255, 0.55)',
      }
    },
  },
  plugins: [],
}

