import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#F0FFF9',
          100: '#C8F7DC',
          200: '#A8E6CF',
          300: '#7FD8BE',
          400: '#56CAB0',
          500: '#2ECDC1',
          600: '#06A77D',
          700: '#059a72',
          800: '#047857',
          900: '#064e48',
        },
      },
    },
  },
  plugins: [],
}

export default config