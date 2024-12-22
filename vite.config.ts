// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// export default defineConfig({
//   base:"/deploy-github/",
//   plugins: [react()],
// })
// vite.config.ts
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/akathi-spotify/', // Ensure this matches your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
