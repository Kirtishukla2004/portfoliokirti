import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // enables JSX in .jsx and .vue files
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    proxy: {
      // Proxy /api calls to Python backend during dev
      '/api': {
        target: 'https://portfoliokirti.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
