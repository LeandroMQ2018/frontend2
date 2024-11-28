import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173, // Usa el puerto asignado por Render, o 5173 si no está configurado.
  },
})
