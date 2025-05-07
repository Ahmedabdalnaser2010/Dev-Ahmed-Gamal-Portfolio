import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
      output: {
        comments: false, // Remove comments
      },
    },
    outDir: 'dist', // Explicit output directory
  },
  base: '/', // Changed from GitHub Pages path to root
});