import React, { PropTypes } from 'react';
import THREE from 'three';
import ColladaLoader from 'three-collada-loader'
import { stitch } from 'keo';
import radians from 'degrees-radians';
import { setApparatus } from '../actions';
import renderFloor from './entities/floor';
import renderLights from './entities/lights';
import renderBird from './entities/bird';

/**
 * @constant modelLoader
 * @type {Object}
 */
const modelLoader = new ColladaLoader();

/**
 * @constant propTypes
 * @type {Object}
 */
const propTypes = {
    pixelRatio: PropTypes.number.isRequired,
    theme: PropTypes.array.isRequired,
    world: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }).isRequired,
    scene: PropTypes.shape({
        renderer: PropTypes.object.isRequired,
        camera: PropTypes.object.isRequired
    }).isRequired
};

/**
 * @method render
 * @param {Object} props
 * @param {Function} dispatch
 * @return {XML}
 */
const render = ({ props, dispatch }) => {

    // Determine whether THREE has already rendered the scene to the canvas.
    const hasRendered = () => element.querySelectorAll('canvas').length > 0

    /**
     * @method createScene
     * @param {HTMLElement} element
     * @return {void}
     */
    const createScene = element => {

        const { width, height } = props.world;

        if (hasRendered()) {

            const { renderer, camera, scene } = props.scene;

            // Scene has already been rendered, so we only need to update the projection matrix.
            renderer.setSize(width, height);
        	camera.aspect = width / height;
        	camera.updateProjectionMatrix();

            return void renderer.render(scene, camera);

        }

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0xE2DDD9, 300, 1000);

        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
        camera.position.y = -500;
        camera.position.z = 100;
        camera.lookAt({ x: 0, y: 0, z: 0 });

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(props.pixelRatio);
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.soft = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Render all of the entities to the scene.
        renderBird(scene);
        renderLights(scene);
        renderFloor(scene);

        // Save the components needed to re-render when required.
        dispatch(setApparatus(renderer, camera, scene));

        // Finally add the THREE.js scene to the DOM element, and render it.
        element.appendChild(renderer.domElement);
        renderer.render(scene, camera);

        // modelLoader.load('/models/tower-bridge.dae', collada => {
        //
        //     const dae = collada.scene;
        //     dae.scale.set(1, 1, 1);
        //     dae.rotation.z = radians(45);
        //
        //     scene.add(dae);
        //     renderer.render(scene, camera);
        //
        // });

        (function loop() {
            camera.position.z += -1;
            camera.lookAt({ x: 0, y: 0, z: 0 });
        	renderer.render(scene, camera);
        	setTimeout(() => requestAnimationFrame(loop), 1000);
        })();

    };

    return <section className="world" ref={element => element && createScene(element)} />;

};

export default stitch({ propTypes, render }, state => state);
