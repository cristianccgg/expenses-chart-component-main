/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        "1-Soft-red": "hsl(10, 79%, 65%)",
        "2-Cyan": "hsl(186, 34%, 60%)",

        // ### Neutral

        "3-Dark-brown": "hsl(25, 47%, 15%)",
        "4-Medium-brown": "hsl(28, 10%, 53%)",
        "5-Cream": "hsl(27, 66%, 92%)",
        "6-Very-pale-orange": "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
