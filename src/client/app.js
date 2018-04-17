import React from 'react';
import ReactDOM from 'react-dom'; // 用于前端渲染；
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';
import App from './views/App.jsx';
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
// import {
//   Provider,
// } from 'mobx-react'
// import appState from './store/appState'

const store = createStore(reducer);
const rootEle = document.getElementById('client');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
    </AppContainer>,
    rootEle,
  )
};
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const nextApp = require('./views/App.jsx').default; // eslint-disable-line
    render(nextApp)
  })
}
