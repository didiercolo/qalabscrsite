/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          dark: "#0A2540", // Lab Blue
          DEFAULT: "#0A2540",
        },
        cyan: {
          DEFAULT: "#00D4FF", // Innovation Cyan
          glow: "#00D4FF80",
        },
        white: {
          DEFAULT: "#FFFFFF", // Excellence White
          dim: "#E0E0E0",
        },
        mentor: {
          DEFAULT: "#FF6B35", // Warm Mentor
        },
        success: {
          DEFAULT: "#10B981", // Success Green
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
