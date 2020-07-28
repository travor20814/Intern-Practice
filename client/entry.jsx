// @flow

import React from 'react';
import { render } from 'react-dom';

import App from './App';

declare var module: {
  hot: {
    accept: Function,
  },
}

function renderPage() {
  const root = document.getElementById('root');

  if (root) {
    render(
      <App />,
      root,
    );
  }
}

if (module.hot) {
  module.hot.accept('./App', () => {
    renderPage();
  });
}

renderPage();
