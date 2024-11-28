import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT, // Usa el puerto asignado por Render, o 5173 si no está configurado.
  },
  build: {
    outDir: 'dist', // Define el directorio de salida para producción
    sourcemap: true, // Incluye los mapas de origen para depuración
  },
  define: {
    'process.env': process.env, // Asegura que las variables de entorno estén accesibles
  },
});
