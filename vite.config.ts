import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  //base: '/tehnosysteemid.ee/', // Correct base path for GitHub Pages
  // for netlify
  base: '/',
  plugins: [react()],
  build: {
    minify: true,
    outDir: 'dist', // Ensure the output directory is 'dist'
  },
});