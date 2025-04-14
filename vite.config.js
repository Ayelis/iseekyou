import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    devSourcemap: true,  // Debug WTF is happening
  },
  server: {
    headers: {
      "Content-Security-Policy": "default-src 'self' 'unsafe-inline' http://localhost:* ws://localhost:*;",
    },
  },
});
