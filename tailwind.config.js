/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        transitionDelay: { '50': '50ms', '400': '400ms', '600': '600ms',},
        transitionDuration: { '50': '50ms', '400': '400ms', '600': '600ms',},
    },
  },
  plugins: [],

  safelist: [
      'delay-50',
      'delay-100',
      'delay-150',
      'delay-200',
      'delay-300',
      'delay-400',
      'delay-500',
      'delay-600',
      'duration-50',
      'duration-100',
      'duration-150',
      'duration-200',
      'duration-300',
      'duration-400',
      'duration-500',
      'duration-600',
  ]
}

