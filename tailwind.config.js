/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'soundlift': "url('../static/projects/soundlift.png')"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
 

