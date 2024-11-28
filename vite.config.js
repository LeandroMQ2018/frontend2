import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 8080, // Render espera que usemos el puerto 8080
    host: '0.0.0.0', // Asegúrate de que el servidor sea accesible desde cualquier IP
  },
  build: {
    outDir: 'dist', // La carpeta de salida debe ser 'dist', que es la predeterminada de Vite
  },
});
