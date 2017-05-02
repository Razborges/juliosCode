import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from 'redux-promise';

import App from './main/app';
import reducers from './main/reducer';
import './estilo/index.css';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__
            && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promise, thunk, multi)(createStore)(reducers, devtools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);