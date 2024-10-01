/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        darkgray_header: "#1A1A1A", lightgray_body_main: '#F1F1F1', lightgray_sidebar: '#EBEBEB', lightgray_hover_antokiniaina: '#F1F1F1', lightgray_active_antokiniaina: '#FAFAFA'
      },
      screens: {
        xsm: '412px', xxsm: '390px', xxxsm: '375px'
      }
    },
  },
  plugins: [],
}

