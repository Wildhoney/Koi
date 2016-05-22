import React from 'react';
import { render } from 'react-dom';
import THREE from 'three';
import World from './components/world';

/**
 * @module Keo
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Koi
 */
(($window, $document) => {

    $document.addEventListener('DOMContentLoaded', () => {

        const mountNode = document.querySelector('.koi');

        render(<World width={$window.innerWidth} height={$window.innerHeight}
                      devicePixelRatio={$window.devicePixelRatio} />, mountNode);

    });

})(window, document);
