import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';
import Market2 from './market';
import './globals.css';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Market2,
  errorBoundary() {
    return <div>Market 2 failed to load</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles; 