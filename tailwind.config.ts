import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E6DCD1',
          300: '#D5C4B1',
          400: '#BFA68D',
          500: '#A4866A',
          600: '#8A6D52',
          700: '#6D543E',
          800: '#4F3D2D',
          900: '#2C2219',
          gold: '#C5A880',
          accent: '#B76E79',
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
