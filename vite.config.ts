import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tehnosysteemid.ee/', // Make sure this matches your repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
