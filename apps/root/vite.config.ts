import { defineConfig, type Plugin } from 'vite';
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import { microfrontends } from '@vercel/microfrontends/experimental/vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  base: '/',
  build: {
    target: 'chrome89',
  },
  plugins: [
    tailwindcss(),
    microfrontends() as Plugin,
    react(),
    federation({
      name: 'root',
      manifest: true,
      filename: 'remoteEntry.js',
      remotes: {
        navigation: {
          type: 'module',
          name: 'navigation',
          entry: '/_navigation/remoteEntry.js',
        },
        content: {
          type: 'module',
          name: 'content',
          entry: '/_content/remoteEntry.js',
        },
        market1: {
          type: 'module',
          name: 'market1',
          entry: '/_market1/remoteEntry.js',
        },
        market2: {
          type: 'module',
          name: 'market2',
          entry: '/_market2/remoteEntry.js',
        },
      },
      shared: {
        react: { singleton: true },
        'react/': { singleton: true },
        'react-dom': { singleton: true },
        'react-dom/': { singleton: true },
      },
    }) as Plugin[],
  ],
});
