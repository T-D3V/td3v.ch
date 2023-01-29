/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        robotomono: ['Roboto Mono']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
