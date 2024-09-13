import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename, "dist");


export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    root: path.resolve(__dirname, 'src'), 
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'), 
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV), 
    },
    server: {
      port: 8080,  
      hot: true,   
    },
    build: {
      outDir: 'public', 
    },
  };
});
