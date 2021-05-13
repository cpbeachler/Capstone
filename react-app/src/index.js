import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {setModalMount} from './store/modal'
import './index.css';
import App from './App';
import configureStore from './store'

const store = configureStore();

const Root = () => {
  return (
    <>
      <App />
      <div id='modal' />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
