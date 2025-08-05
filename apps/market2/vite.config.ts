import { defineConfig, type Plugin } from 'vite';
import { federation } from '@module-federation/vite';
import { microfrontends } from '@vercel/microfrontends/experimental/vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    microfrontends({
      basePath: '/_market2',
    }) as Plugin,
    react(),
    federation({
      name: 'market2',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './market': './src/market-spa.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        'react-dom/': {
          singleton: true,
        },
      },
    }) as Plugin[],
  ],
  build: {
    target: 'chrome89',
  },
}); 