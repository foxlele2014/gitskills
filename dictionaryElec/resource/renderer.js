// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import Layout from './components/layout/';
import store from './store.js';

const App = () => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
};

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

// 模块热替换的 API
//如果我们设置了 devServer: { hot: true }，webpack 会暴露 module.hot 给我们的代码；
if (module.hot) {
      render(App);
  }

