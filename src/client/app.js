import React from 'react';
import ReactDOM from 'react-dom'; // 用于前端渲染；

import App from './App.jsx';
// import { AppContainer } from 'react-hot-loader' // eslint-disable-line
// import {
//   Provider,
// } from 'mobx-react'
// import App from './views/App'
// import appState from './store/appState'
//
// const rootEle = document.getElementById('client');
// const render = (Component) => {
//   ReactDOM.render(
//     <AppContainer>
//       <Provider appState={appState}>
//         <Component />
//       </Provider>
//     </AppContainer>,
//     rootEle,
//   )
// };
// render(App);
//
// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./views/App', () => {
//     const nextApp = require('./views/App').default; // eslint-disable-line
//     render(nextApp)
//   })
// }
ReactDOM.render(<App />, document.getElementById('client'));
