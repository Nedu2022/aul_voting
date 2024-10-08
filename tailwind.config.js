/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      body: ["Lato", "sans-serif"],
      lobster: ["Lobster", "sans-serif"],
      croissant: ["Croissant One", "serif"]
    },
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1200px",
    },
    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '31px',
      },
      colors: {
        background: '#F1F2F3',
        primary: '#002366',
        lprimary: '#003399',
        accent:  '#A020F0',
        neutral: '#FFFFFF',
        secondary:'#F0F0F0',
        Mtext: '#4A4A4A'
        
      },
    },
  },
  plugins: [],
}

// background: White or light gray for a clean and professional look.
// Headers and Navigation Bar: Royal blue to signify authority and consistency with Anchor University’s branding.
// Buttons (e.g., "Vote"): Gold to make important actions stand out.
// Text: Mostly black or dark gray for readability on white or light backgrounds.
