import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // 1. Quitamos tailwindcss de integrations
  integrations: [], 
  
  // 2. Lo movemos a la sección de vite.plugins
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['*']
  }
});