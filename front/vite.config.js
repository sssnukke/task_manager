import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    host: true,
    port: 8080,
  },
  define: {
    'process.env.SECRET_TOKEN': JSON.stringify(process.env.SECRET_TOKEN),
  }
})
