module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ],
    enabled: true, // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
