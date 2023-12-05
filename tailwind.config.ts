import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        syne: ['var(--font-syne)'],
        questrial: ['var(--font-questrial)'],
      },
      colors: {
        primary: "#C2B4A4",
        secondary: "#3A3A3A",
        tertiary: "#7A7A7A"
      }
    },
  },
  plugins: [],
}
export default config
