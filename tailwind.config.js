module.exports = {
   purge: [
     './*.html',
   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
  }