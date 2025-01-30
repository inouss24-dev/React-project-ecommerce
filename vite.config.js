import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  corePlugins: {
    preflight: true, // S'assure que le reset CSS de Tailwind est bien activé
  },
  plugins: [react(),tailwindcss()],
})
