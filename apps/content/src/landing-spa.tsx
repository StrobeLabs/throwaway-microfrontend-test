import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';
import Landing from './landing';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Landing,
  errorBoundary() {
    return <div>Landing failed to load</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles; 