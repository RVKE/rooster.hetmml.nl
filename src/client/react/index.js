/**
 * Copyright (C) 2018 Noah Loomans
 *
 * This file is part of rooster.hetmml.nl.
 *
 * rooster.hetmml.nl is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * rooster.hetmml.nl is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with rooster.hetmml.nl.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose as reduxCompose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import moment from 'moment';

import createHistory from 'history/createBrowserHistory';

import reducer from './store/reducers';
import App from './App';
import './index.scss';

// Set the locale for moment.js to dutch. This ensures that the correct week
// number logic is used.
moment.locale('nl');

const history = createHistory();

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;

const store = createStore(
  connectRouter(history)(reducer),
  // Redux devtools extension
  // https://github.com/zalmoxisus/redux-devtools-extension
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);

ReactDOM.render(
  <App store={store} history={history} />,
  document.querySelector('#root'),
);

// We only want to focus the input on page load. NOT on a in-javascript
// redirect. This is because that is when people usually want to start typing.
document.querySelector('#searchInput').focus();
