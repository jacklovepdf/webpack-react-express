import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './views/App'

const rootEle = document.getElementById('client');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEle,
  )
};
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const nextApp = require('./views/App').default; // eslint-disable-line
    render(nextApp)
  })
}
