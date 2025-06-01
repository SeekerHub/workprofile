import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      config: {
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './public/index.html',
        ],
        theme: {
          extend: {
            fontFamily: {
              "mont": ['Montserrat', 'sans-serif'],
              "roboto": ['Roboto', 'sans-serif'],
            },
            colors: {
              'zinc-900': '#111827',
              'zinc-100': '#f3f4f6',
              'zinc-300': '#d1d5db',
            },
          },
        },
      },
    })
  ],
  
      
})


