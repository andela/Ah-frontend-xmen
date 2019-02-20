import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index';
import store from './Store';
import './assets/style.scss';
import './assets/css/style.css';
import '../node_modules/argon-design-system-free/assets/css/argon.css';


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
