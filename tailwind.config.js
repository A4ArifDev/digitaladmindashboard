/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBgLight': "url('./assets/mainbg.jpg')",
        'mainBgDark':"linear-gradient(to left top, #0B1120, #0B1120), url('./assets/mainbg.jpg')",

        'subBgLight':"linear-gradient(to left, rgba(255,255,255,0.7), rgba(255,255,255,0.3))",
        'subBgDark':"linear-gradient(to left top, #182133, #182133), url('./assets/mainbg.jpg')",

        'sideBarBgDark':"linear-gradient(to left top, rgb(15, 22, 41), rgb(15, 22, 41)), url('./assets/mainbg.jpg')",
       
      }
    },
    variants: {
      extend: {
        backgroundImage: ['dark'],
      },
    },
  },
  plugins: [],
}
