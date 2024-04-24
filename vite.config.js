import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2136,
    proxy: {
      '/api': {
        //target: 'http://localhost:2138',
        //target: 'http://brawler_api:2138',
        target: 'http://host.docker.internal:2138',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})