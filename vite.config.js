import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173, // Usa el puerto proporcionado por Render
    host: true, // Asegúrate de que el servidor esté accesible desde cualquier IP
  },
  build: {
    outDir: 'dist', // Asegúrate de que el directorio de salida sea 'dist'
  },
});
