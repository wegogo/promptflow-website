import { defineConfig } from 'vite'

export default defineConfig({
  base: '/promptflow-website/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
})
