import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/clashroom-landing/', // Match your GitHub repo name
  build: { outDir: 'dist' },
})
