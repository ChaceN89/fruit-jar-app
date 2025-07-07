// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    proxy: {
      '/api/fruits': {
        target: 'https://fruity-proxy.vercel.app',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // turns /api/fruits -> /fruits
      }
    }
  }
})
