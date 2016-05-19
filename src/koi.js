import React from 'react';
import { render } from 'react-dom';
import { Scene, Fog, PerspectiveCamera, WebGLRenderer } from 'three';
import World from './components/world';

/**
 * @module Keo
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Koi
 */
(($window, $document) => {

    $document.addEventListener('DOMContentLoaded', () => {

        const mountNode = document.querySelector('.koi');
        const width = $window.innerWidth;
        const height = $window.innerHeight;

        const scene = new Scene();
        scene.fog = new Fog(0xf7d9aa, 100, 950);

        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 10000;

        const camera = new PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.y = 5;

        const renderer = new WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio($window.devicePixelRatio);
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMapEnabled = true;
        // renderer.shadowMapSoft = true;

        render(<World renderer={renderer} scene={scene} camera={camera} />, mountNode);

    });

})(window, document);
