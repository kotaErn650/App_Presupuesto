
// mi plugin permite que proceslos jsx y tsx
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// llamando Mi puerto 3000 local
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      overlay: true,
    },
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

