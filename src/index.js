import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index';
import store from './Store';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css';
import './assets/style.scss';
import '../node_modules/argon-design-system-free/assets/css/argon.css';
import './assets/css/socialAuth.css';
import './assets/css/comments.css';
import './assets/css/react-tags.css';
import 'react-quill/dist/quill.snow.css';


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
