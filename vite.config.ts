import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import packageJson from './package.json';

export default defineConfig({
  base: '/',
  build: {
    sourcemap: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  server: {
    port: 3000,
  },
  plugins: [splitVendorChunkPlugin(), react()],
});
