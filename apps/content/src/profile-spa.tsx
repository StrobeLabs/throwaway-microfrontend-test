import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';
import Profile from './profile';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Profile,
  errorBoundary() {
    return <div>Profile failed to load</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles; 