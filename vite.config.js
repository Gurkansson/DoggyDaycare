import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/DoggyDaycare/",  // Viktigt för GitHub Pages!
  plugins: [react()],
})
