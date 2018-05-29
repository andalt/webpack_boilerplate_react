import css from 'Styles/index.scss';
import pug from 'Pug/index.pug';

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import AppRoot from './app/AppRoot';
import AppReducers from './app/AppCombineReducers';

const history = createHistory();

const composeEnhancer = compose;
const store = createStore(
    connectRouter(history)(AppReducers),
    composeEnhancer(applyMiddleware((thunk), routerMiddleware(history)))
);

const renderRoot = () => render(
    <AppContainer>
        <Provider store={store}>
            <AppRoot history={history} />
        </Provider>
    </AppContainer>,
    document.getElementById('index')
);

renderRoot();

if (module.hot) {
    module.hot.accept('./app/AppRoot', () => {
        renderRoot();

        renderRoot(require('./app/AppRoot'));
    });

    module.hot.accept('./app/AppCombineReducers', () => {
        store.replaceReducer(connectRouter(history)(require('./app/AppCombineReducers').default));
    });
}
