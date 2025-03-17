import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.DEPLOY_ENV === 'github' ? '/tehnosysteemid.ee/' : '/', // Use '/tehnosysteemid.ee/' for GitHub Pages, '/' for Netlify
  plugins: [react()],
  build: {
    minify: true,
    outDir: 'dist',
  },
});
