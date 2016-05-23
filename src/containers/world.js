import React, { PropTypes } from 'react';
import THREE from 'three';
import ColladaLoader from 'three-collada-loader'
import { stitch } from 'keo';
import radians from 'degrees-radians';
import { setApparatus } from '../actions';

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
    scene: PropTypes.shape({
        dimensions: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }),
        apparatus: PropTypes.shape({
            scene: PropTypes.object.isRequired,
            camera: PropTypes.object.isRequired,
            renderer: PropTypes.object.isRequired
        })
    }).isRequired
};

/**
 * @method getEntities
 * @return {Object}
 */
const getEntities(props) => {

    const { theme } = props;

    /**
     * @method renderBird
     * @param {Object} scene
     * @return {void}
     */
    const renderBird = () => {

        const geometry = new THREE.BoxGeometry(50, 50, 50);
        const material = new THREE.MeshPhongMaterial({ color: theme.plain, shading: FlatShading });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.z = 25;
        mesh.rotation.z = 100;
        mesh.castShadow = true;

        scene.add(mesh);

    };

    /**
     * @method renderFloor
     * @param {Object} scene
     * @return {void}
     */
     const renderFloor = () => {

        const geometry = new THREE.PlaneGeometry(10000, 10000, 1, 1);
        const material = new THREE.MeshPhongMaterial({ color: theme.plain, shading: DoubleSide });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.receiveShadow = true;

        scene.add(mesh);

    };

    /**
     * @method renderLights
     * @param {Object} scene
     * @return {void}
     */
    const renderLights = () => {

        const hemisphereLight = new THREE.HemisphereLight(...theme.hemisphereLight);
        const ambientLight = new THREE.AmbientLight(theme.ambientLight);
        const directionalLight = new THREE.DirectionalLight(theme.directionalLight, 0.5);

        // Setup the shadows for the directional light.
        directionalLight.position.set(150, -150, 400);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.left = -400;
    	directionalLight.shadow.camera.right = 400;
    	directionalLight.shadow.camera.top = 400;
    	directionalLight.shadow.camera.bottom = -400;
    	directionalLight.shadow.camera.near = 1;
    	directionalLight.shadow.camera.far = 1000;
        directionalLight.shadow.mapSize.width = 4096;
    	directionalLight.shadow.mapSize.height = 4096;

        scene.add(ambientLight);
        scene.add(hemisphereLight);
        scene.add(directionalLight);

    };

    return { renderBird, renderFloor, renderLights };

};

/**
 * @method render
 * @param {Object} props
 * @param {Function} dispatch
 * @return {XML}
 */
const render = ({ props, dispatch }) => {

    // Determine whether THREE has already rendered the scene to the canvas.
    const hasRendered = () => element.querySelectorAll('canvas').length > 0;
    const entities = getEntities(props);

    /**
     * @method createScene
     * @param {HTMLElement} element
     * @return {void}
     */
    const createScene = element => {

        const { width, height } = props.scene.dimensions;

        if (hasRendered()) {

            const { renderer, camera, scene } = props.scene.apparatus;

            // Scene has already been rendered, so we only need to update the projection matrix.
            renderer.setSize(width, height);
        	camera.aspect = width / height;
        	camera.updateProjectionMatrix();

            return void renderer.render(scene, camera);

        }

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(theme.fog, 300, 1000);

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
        entities.renderBird(scene);
        entities.renderLights(scene);
        entities.renderFloor(scene);

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
