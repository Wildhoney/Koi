import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ready from 'document-ready-promise';
import reducers from './reducers';
import World from './containers/world';

import "./styles/default.scss";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

/**
 * @module Koi
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Koi
 */
(($document) => {

    ready().then(() => {
        
        const mountNode = $document.querySelector('.koi');

        render((
            <Provider store={store}>
                <World />
            </Provider>
        ), mountNode);

    });

})(document);
