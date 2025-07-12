import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, './src'),
      '@server': path.resolve(__dirname, '../server/src'),
      '@shared': path.resolve(__dirname, '../shared/src'),
    },
  },
})
