module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      // textUnderlineOffset: {
      //   3: "3px",
      // },
      // Animation: {
      //   fadeIn: "fadeIn 0.3s linear",
      // },
      // keyframes: {
      //   fadeIn: {
      //     from: {
      //       textUnderlineOffset: none,
      //     },
      //     to: {
      //       textUnderlineOffset: 3,
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
