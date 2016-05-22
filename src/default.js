import React from 'react';
import { render } from 'react-dom';
import THREE from 'three';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import World from './containers/world';
import { setDimensions } from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

/**
 * @module Keo
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Koi
 */
(($window, $document) => {

    /**
     * @constant theme
     * @type {Object}
     * @see http://www.colourlovers.com/palette/67170/Trajan
     */
    const theme = ['8D7966', 'A8A39D', 'D8C8B8', 'E2DDD9', 'F8F1E9'];

    /**
     * @method applyDimensions
     * @return {void}
     */
    const applyDimensions = () => store.dispatch(setDimensions($window.innerWidth, $window.innerHeight));

    // Configure the initial dimensions.
    applyDimensions();

    $document.addEventListener('DOMContentLoaded', () => {

        const mountNode = document.querySelector('.koi');
        $window.addEventListener('resize', applyDimensions, false);

        render((
            <Provider store={store}>
                <World theme={theme} pixelRatio={$window.devicePixelRatio} />
            </Provider>
        ), mountNode);

    });

})(window, document);
