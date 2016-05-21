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
        const width = $window.innerWidth;
        const height = $window.innerHeight;

        const scene = new THREE.Scene();
        // scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 10000;

        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.y = 500;
        // camera.position.x = 50;
        camera.position.z = 1000;
        camera.lookAt({ x: 0, y: 0, z: 0 });

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setPixelRatio($window.devicePixelRatio);
        renderer.setSize(width, height);
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMapEnabled = true;
        // renderer.shadowMapSoft = true;

        render(<World renderer={renderer} scene={scene} camera={camera} />, mountNode);

    });

})(window, document);
