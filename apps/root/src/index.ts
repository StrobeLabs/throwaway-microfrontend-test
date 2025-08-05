import { mountVercelToolbar } from '@vercel/toolbar/vite';
import { registerApplication, start } from 'single-spa';
import './globals.css';

console.log('Root application starting...');
console.log('Current URL:', window.location.href);
console.log('User agent:', navigator.userAgent);

// Function to determine which content to load based on current path
function getContentActivityFunction() {
  return () => {
    const path = window.location.pathname;
    console.log('Content activity function called, path:', path);
    const shouldActivate = path === '/' || path === '/profile' || path === '/market1' || path === '/market2';
    console.log('Should activate content:', shouldActivate);
    return shouldActivate;
  };
}

// Function to determine which content component to load
function getContentLoader() {
  return async () => {
    const path = window.location.pathname;
    console.log('Content loader called, path:', path);
    
    try {
      if (path === '/profile') {
        console.log('Loading profile component');
        const module = await import('content/profile');
        console.log('Profile module loaded:', module);
        return module;
      }
      if (path === '/market1') {
        console.log('Loading market1 component');
        const module = await import('market1/market');
        console.log('Market1 module loaded:', module);
        return module;
      }
      if (path === '/market2') {
        console.log('Loading market2 component');
        const module = await import('market2/market');
        console.log('Market2 module loaded:', module);
        return module;
      }
      console.log('Loading landing component');
      const module = await import('content/landing');
      console.log('Landing module loaded:', module);
      return module;
    } catch (error) {
      console.error('Error loading content module:', error);
      throw error;
    }
  };
}

// Register applications with single-spa for lifecycle management
registerApplication(
  'header',
  async () => {
    console.log('Loading header component');
    try {
      const module = await import('navigation/header');
      console.log('Header module loaded:', module);
      return module;
    } catch (error) {
      console.error('Error loading header module:', error);
      throw error;
    }
  },
  () => {
    console.log('Header activity function called');
    return true; // Always active
  },
);

registerApplication(
  'content',
  getContentLoader(),
  getContentActivityFunction(),
);

console.log('Starting single-spa...');
start();
console.log('Single-spa started');

console.log('Mounting Vercel toolbar...');
mountVercelToolbar();
console.log('Vercel toolbar mounted');

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

console.log('Root application initialization complete');
