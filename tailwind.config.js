/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "node_modules/daisyui/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    extend: {
      screens: {
        landss: { raw: "(min-height: 300px)" },
        // => @media (min-height: 800px) { ... }
      },
      fontFamily: {
        roboto: ["Roboto"],
        "avenir-900": ["AvenirBlack"],
        "avenir-800": ["AvenirHeavy"],
        "avenir-400": ["AvenirRegular"],
        "avenir-300": ["AvenirBook"],
        "avenir-200": ["AvenirLight"],
      },
      colors: {
        primary: "#0A57A4",
        "gal-blue-dark": "#153A69",
        "gal-blue-light": "#29B6FF",
        "gal-blue-lighter": "#DFEDFB",
        "gal-blue-lighthover": "#29B6FF",
        "gal-grey-light": "#EBEDF2",
        "gal-grey-lighter": "#F5F6F9",
        "gal-grey": "#DFE1E5",
        "gal-grey-dark": "#BABCBF",
        "gal-grey-darker": "#636466",
        "gal-yellow": "#FFC226",
      },
    },
  },
  // darkMode: 'class', // or 'class'
  // media: {
  //   '(prefers-color-scheme: dark)': {
  //     '@supports (-webkit-touch-callout: none)': {
  //       '::-webkit-scrollbar': {
  //         width: '0.4em',
  //         height: '0.4em',
  //       },
  //       '::-webkit-scrollbar-thumb': {
  //         backgroundColor: 'transparent',
  //       },
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      // "light",
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#0A57A4",
          // "primary-focus": "#0A57A4",
          "primary-content": "#ffffff",
        },
      },
    ],
  },
  // plugins: [],
  plugins: [require("daisyui")],
};
