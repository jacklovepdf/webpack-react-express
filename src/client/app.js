import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './App.jsx';

const rootEle = document.getElementById('client');
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEle
    )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const nextApp = require('./App.jsx').default;
        render(nextApp)
    })
}




