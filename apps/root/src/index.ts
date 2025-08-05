import { mountVercelToolbar } from '@vercel/toolbar/vite';
import { registerApplication, start } from 'single-spa';
import './globals.css';

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
  return () => {
    const path = window.location.pathname;
    console.log('Content loader called, path:', path);
    
    if (path === '/profile') {
      console.log('Loading profile component');
      return import('content/profile');
    }
    if (path === '/market1') {
      console.log('Loading market1 component');
      return import('market1/market');
    }
    if (path === '/market2') {
      console.log('Loading market2 component');
      return import('market2/market');
    }
    console.log('Loading landing component');
    return import('content/landing');
  };
}

// Register applications with single-spa for lifecycle management
registerApplication(
  'header',
  () => {
    console.log('Loading header component');
    return import('navigation/header');
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

start();
mountVercelToolbar();
