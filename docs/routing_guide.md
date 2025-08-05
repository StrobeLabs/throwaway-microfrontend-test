# 🎯 **Single-SPA + Vercel Microfrontends Routing: Complete Guide**

Based on our learnings from implementing profile routing and creating new microfrontends, here's a comprehensive guide for proper routing with single-spa and Vercel microfrontends.

## 📋 **Correct Architecture Overview**

### **Three-Layer Routing System:**

1. **Vercel Proxy Layer** (`microfrontends.json`)
   - Routes requests to the appropriate microfrontend application
   - Handles base paths and direct access

2. **Root Application Layer** (single-spa orchestrator)
   - Default application that handles unrouted paths
   - Uses single-spa for dynamic component loading

3. **Module Federation Layer** (runtime code sharing)
   - Dynamically imports components from other microfrontends
   - Enables shared state and dependencies

## ✅ **Correct Implementation Pattern**

### **1. Vercel Configuration (`microfrontends.json`)**
```json
{
  "applications": {
    "root-app": {
      "development": {
        "fallback": "root-app.vercel.app"
      }
      // ✅ NO routing rules = default application
    },
    "content-app": {
      "routing": [
        {
          "paths": ["/_content/:path*"]  // ✅ Direct access only
        }
      ]
    },
    "navigation-app": {
      "routing": [
        {
          "paths": ["/_navigation/:path*"]  // ✅ Direct access only
        }
      ]
    }
  }
}
```

### **2. Root App Single-SPA Configuration**
```typescript
// ✅ Dynamic routing based on URL path
function getContentActivityFunction() {
  return () => {
    const path = window.location.pathname;
    return path === '/' || path === '/profile'; // ✅ Handle multiple routes
  };
}

function getContentLoader() {
  return () => {
    const path = window.location.pathname;
    if (path === '/profile') {
      return import('content/profile'); // ✅ Load from content app
    }
    return import('content/landing'); // ✅ Load from content app
  };
}

registerApplication('content', getContentLoader(), getContentActivityFunction());
```

### **3. Navigation Implementation**
```typescript
// ✅ Proper single-spa navigation
const handleProfile = () => {
  window.location.href = '/profile'; // ✅ Triggers single-spa routing
};
```

## ❌ **Failure Cases & Solutions**

### **Failure Case 1: Wrong Vercel Routing**
**Problem:**
```json
"content-app": {
  "routing": [
    {
      "paths": ["/_content/:path*"]
    },
    {
      "paths": ["/profile"]  // ❌ WRONG! Sends to content app
    }
  ]
}
```
**Error:** `"The server is configured with a public base URL of /_content - did you mean to visit /_content/profile instead?"`

**Solution:** Remove `/profile` routing from content app. Let root app handle it as default.

### **Failure Case 2: Multiple Default Applications**
**Problem:**
```json
"root-app": {
  "routing": [
    {
      "paths": ["/profile"]  // ❌ WRONG! Creates second default
    }
  ]
}
```
**Error:** `"No default application found. At least one application needs to be the default by omitting routing."`

**Solution:** Only one app can be default (no routing rules). Root app should be default.

### **Failure Case 3: Incorrect Navigation Method**
**Problem:**
```typescript
// ❌ Doesn't trigger single-spa routing
window.history.pushState({}, '', '/profile');
window.dispatchEvent(new PopStateEvent('popstate'));
```
**Error:** URL updates but page content doesn't change until refresh.

**Solution:** Use `window.location.href = '/profile'` to properly trigger single-spa.

### **Failure Case 4: Direct Navigation to Microfrontend**
**Problem:**
```typescript
// ❌ Bypasses root app layout
window.location.href = '/_content/profile';
```
**Error:** Shows profile content but no navbar (header missing).

**Solution:** Always navigate through root app (`/profile`) not direct microfrontend paths.

### **Failure Case 5: Single-SPA Lifecycle Errors**
**Problem:**
```typescript
// ❌ Exposing raw React components
exposes: {
  './component': './src/component.tsx', // Raw React component
}
```
**Error:** `"does not export a unmount function or array of functions"`

**Solution:** Always create single-spa entry files:
```typescript
// ✅ Create SPA entry file
// src/component-spa.tsx
import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';
import Component from './component';
import './globals.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Component,
  errorBoundary() {
    return <div>Component failed to load</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// ✅ Expose SPA entry in vite.config.ts
exposes: {
  './component': './src/component-spa.tsx',
}
```

### **Failure Case 6: ESM Compatibility Issues**
**Problem:**
```typescript
// ❌ Using @tailwindcss/vite plugin
import tailwindcss from '@tailwindcss/vite';
plugins: [tailwindcss(), ...]
```
**Error:** `"This package is ESM only but it was tried to load by require"`

**Solution:** Use standard Tailwind CSS setup:
```javascript
// ✅ Standard PostCSS config
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// ✅ CommonJS Tailwind config
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

### **Failure Case 7: Missing CSS Styles**
**Problem:** Components render but have no styling

**Solution:** Ensure proper CSS setup:
```typescript
// ✅ Import CSS in SPA entry
import './globals.css';

// ✅ Create globals.css with Tailwind directives
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🚀 **Best Practices for Future Development**

### **1. Adding New Pages**
```typescript
// ✅ Step 1: Add to content app
// apps/content/src/settings.tsx
export default function Settings() {
  return <div>Settings Page</div>;
}

// ✅ Step 2: Create SPA entry
// apps/content/src/settings-spa.tsx
import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';
import Settings from './settings';
import './globals.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Settings,
  errorBoundary() {
    return <div>Settings failed to load</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// ✅ Step 3: Expose in content app
// apps/content/vite.config.ts
exposes: {
  './landing': './src/landing-spa.tsx',
  './profile': './src/profile-spa.tsx',
  './settings': './src/settings-spa.tsx', // ✅ Add new page
}

// ✅ Step 4: Add to root app routing
// apps/root/src/index.ts
function getContentActivityFunction() {
  return () => {
    const path = window.location.pathname;
    return path === '/' || path === '/profile' || path === '/settings'; // ✅ Add route
  };
}

function getContentLoader() {
  return () => {
    const path = window.location.pathname;
    if (path === '/profile') return import('content/profile');
    if (path === '/settings') return import('content/settings'); // ✅ Add loader
    return import('content/landing');
  };
}

// ✅ Step 5: Add TypeScript declarations
// apps/root/global.d.ts
declare module 'content/settings' {
  const Settings: React.ComponentType;
  export default Settings;
}
```

### **2. Adding New Microfrontends**
```typescript
// ✅ Step 1: Create new app structure
mkdir apps/new-app
cd apps/new-app

// ✅ Step 2: Package.json setup
{
  "name": "microfrontends-single-spa-module-federation-new-app",
  "dependencies": {
    "@vercel/microfrontends": "^1.2.4",
    "@module-federation/vite": "^1.7.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "single-spa-react": "^6.0.2"
  },
  "devDependencies": {
    "@types/react": "^19.1.4",
    "@types/react-dom": "^19.1.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.6.3",
    "vite": "^6.3.5"
  }
}

// ✅ Step 3: Vite configuration
// apps/new-app/vite.config.ts
import { defineConfig, type Plugin } from 'vite';
import { federation } from '@module-federation/vite';
import { microfrontends } from '@vercel/microfrontends/experimental/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    microfrontends({
      basePath: '/_new-app',
    }) as Plugin,
    react(),
    federation({
      name: 'new-app',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './component': './src/component-spa.tsx',
      },
      shared: {
        react: { singleton: true },
        'react/': { singleton: true },
        'react-dom': { singleton: true },
        'react-dom/': { singleton: true },
      },
    }) as Plugin[],
  ],
  build: { target: 'chrome89' },
});

// ✅ Step 4: CSS setup
// apps/new-app/src/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// apps/new-app/tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}

// apps/new-app/postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// ✅ Step 5: Component files
// apps/new-app/src/component.tsx
import React from 'react';

export default function Component(): React.JSX.Element {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <h1 className="text-4xl font-bold">New Component</h1>
    </div>
  );
}

// apps/new-app/src/component-spa.tsx
import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';
import Component from './component';
import './globals.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Component,
  errorBoundary() {
    return <div>Component failed to load</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// ✅ Step 6: Update root app
// apps/root/vite.config.ts - Add to remotes
remotes: {
  // ... existing remotes
  'new-app': {
    type: 'module',
    name: 'new-app',
    entry: '/_new-app/remoteEntry.js',
  },
}

// apps/root/global.d.ts - Add declaration
declare module 'new-app/component' {
  const Component: React.ComponentType;
  export default Component;
}

// apps/root/src/index.ts - Add registration
function getContentLoader() {
  return () => {
    const path = window.location.pathname;
    if (path === '/new-route') {
      return import('new-app/component');
    }
    // ... existing routes
  };
}

function getContentActivityFunction() {
  return () => {
    const path = window.location.pathname;
    return path === '/' || path === '/profile' || path === '/new-route';
  };
}

// ✅ Step 7: Update Vercel config
// apps/root/microfrontends.json
{
  "applications": {
    "microfrontends-single-spa-module-federation-root": {
      "development": {
        "fallback": "microfrontends-single-spa-module-federation-root.vercel.app"
      }
    },
    "microfrontends-single-spa-module-federation-new-app": {
      "routing": [
        {
          "paths": ["/_new-app/:path*"]
        }
      ]
    }
  }
}
```

### **3. Navigation Patterns**
```typescript
// ✅ Always use root app paths for navigation
const handleNavigation = (path: string) => {
  window.location.href = path; // ✅ Triggers single-spa
};

// ❌ Never navigate directly to microfrontend paths
// window.location.href = '/_content/profile'; // ❌ Bypasses layout
```

## 🔧 **Debugging Checklist**

### **When Routing Doesn't Work:**

1. **Check Vercel Configuration**
   - ✅ Only one default application (no routing rules)
   - ✅ Other apps only have direct access paths (`/_app/*`)

2. **Check Single-SPA Configuration**
   - ✅ Activity function includes all routes
   - ✅ Loader function handles all routes
   - ✅ Applications registered correctly

3. **Check Module Federation**
   - ✅ Components exposed in remote app
   - ✅ Components imported in root app
   - ✅ TypeScript declarations added

4. **Check Navigation**
   - ✅ Using `window.location.href` not `pushState`
   - ✅ Navigating to root app paths not microfrontend paths

### **When Components Don't Load:**

1. **Check Single-SPA Lifecycle**
   - ✅ Look for "bootstrap, mount, unmount" errors
   - ✅ Verify SPA entry files are created
   - ✅ Check console for lifecycle errors

2. **Check CSS Loading**
   - ✅ Verify `globals.css` is imported in SPA entries
   - ✅ Check if Tailwind directives are present
   - ✅ Ensure PostCSS and Tailwind configs exist

3. **Check Build Process**
   - ✅ Verify all config files use CommonJS syntax
   - ✅ Check for ESM compatibility errors
   - ✅ Restart dev servers if needed

### **When Styling is Missing:**

1. **Check CSS Setup**
   - ✅ `globals.css` with Tailwind directives
   - ✅ CSS import in SPA entry file
   - ✅ Tailwind and PostCSS configs

2. **Check Build Configuration**
   - ✅ No `@tailwindcss/vite` plugin (use standard setup)
   - ✅ CommonJS syntax in config files
   - ✅ Proper content paths in Tailwind config

## 🚫 **What to Avoid**

### **❌ Never Do:**
1. **Expose raw React components** - Always use single-spa entries
2. **Add routing rules to root app** - Only direct access paths for other apps
3. **Use `@tailwindcss/vite` plugin** - Use standard PostCSS setup
4. **Navigate to direct microfrontend paths** - Always go through root app
5. **Forget CSS imports** - Always import `globals.css` in SPA entries
6. **Use ESM syntax in config files** - Use CommonJS for Tailwind/PostCSS configs

### **✅ Always Do:**
1. **Create SPA entry files** for every exposed component
2. **Import CSS in SPA entries** to ensure styles load
3. **Use CommonJS syntax** for config files
4. **Test both root app routes and direct microfrontend routes**
5. **Check console for single-spa lifecycle errors**
6. **Verify all remotes are accessible** before testing

## 📚 **Key Principles**

1. **Root App is the Shell** - Handles all user-facing routes
2. **Single-SPA Orchestrates** - Manages component loading and lifecycle
3. **Module Federation Shares** - Enables runtime code sharing
4. **Vercel Routes** - Only handles direct microfrontend access
5. **Navigation Goes Through Root** - Never bypass the shell application
6. **Always Use SPA Entries** - Never expose raw React components
7. **Standard CSS Setup** - Avoid ESM-only packages for styling

This architecture ensures proper separation of concerns while maintaining a seamless user experience with consistent layouts and smooth navigation.