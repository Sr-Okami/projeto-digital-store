import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    assetsInclude: ['**/*.png', '**/*.svg', '**/*.jpg'],
    assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf'],
    copyPublicDir: true
  }
})