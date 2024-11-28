import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define la URL del backend a través de una variable de entorno
    'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'https://backend2-h2re.onrender.com'),
  },
});
