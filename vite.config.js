import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['three', 'gsap'],
  },
  server: {
    host: true, // Écoute sur 0.0.0.0 : accessible depuis le téléphone via l'IP du Mac (ex: http://192.168.1.x:5173)
    port: 5173,
  },
})
