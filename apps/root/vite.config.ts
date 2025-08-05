import { defineConfig, type Plugin } from 'vite';
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import { microfrontends } from '@vercel/microfrontends/experimental/vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    microfrontends() as Plugin,
    react(),
    federation({
      name: 'root',
      manifest: true,
      remotes: {
        navigation: {
          type: 'module',
          name: 'navigation',
          entry: process.env.NODE_ENV === 'production' 
            ? `${process.env.VERCEL_URL || 'https://your-app.vercel.app'}/_navigation/remoteEntry.js`
            : '/_navigation/remoteEntry.js',
        },
        content: {
          type: 'module',
          name: 'content',
          entry: process.env.NODE_ENV === 'production'
            ? `${process.env.VERCEL_URL || 'https://your-app.vercel.app'}/_content/remoteEntry.js`
            : '/_content/remoteEntry.js',
        },
        market1: {
          type: 'module',
          name: 'market1',
          entry: process.env.NODE_ENV === 'production'
            ? `${process.env.VERCEL_URL || 'https://your-app.vercel.app'}/_market1/remoteEntry.js`
            : '/_market1/remoteEntry.js',
        },
        market2: {
          type: 'module',
          name: 'market2',
          entry: process.env.NODE_ENV === 'production'
            ? `${process.env.VERCEL_URL || 'https://your-app.vercel.app'}/_market2/remoteEntry.js`
            : '/_market2/remoteEntry.js',
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
  build: {
    target: 'chrome89',
  },
});
