import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import packageJson from './package.json'
const deps = packageJson.dependencies;


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host1App',
      remotes: {
        remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        zustand: {
          singleton: true,
          requiredVersion: deps.zustand,
        },
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
});
