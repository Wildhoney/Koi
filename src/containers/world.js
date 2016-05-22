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
    world: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }).isRequired,
    scene: PropTypes.shape({
        renderer: PropTypes.object.isRequired,
        camera: PropTypes.object.isRequired
    }).isRequired,
    pixelRatio: PropTypes.number.isRequired
};

/**
 * @method renderFloor
 * @param {Object} scene
 * @return {void}
 */
const renderFloor = scene => {

    const geometry = new THREE.PlaneGeometry(10000, 10000, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xA8A39D, shading: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;

    scene.add(mesh);

};

/**
 * @method renderLights
 * @param {Object} scene
 * @return {void}
 */
const renderLights = scene => {

    const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000);
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

    // Setup the shadows for the directional light.
    directionalLight.position.set(-150, -150, 400);

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

/**
 * @method renderCube
 * @param {Object} scene
 * @return {void}
 */
const renderCube = scene => {

    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshPhongMaterial({ color: 0xA8A39D, shading: THREE.FlatShading });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.z = 25;
    mesh.rotation.z = 100;
    mesh.castShadow = true;

    scene.add(mesh);

};

/**
 * @method render
 * @param {Object} props
 * @param {Function} dispatch
 * @return {XML}
 */
const render = ({ props, dispatch }) => {

    /**
     * @method createScene
     * @param {HTMLElement} element
     * @return {void}
     */
    const createScene = element => {

        const { width, height } = props.world;

        if (element.querySelectorAll('canvas').length > 0) {

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
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        renderCube(scene);
        renderLights(scene);
        renderFloor(scene);

        element.appendChild(renderer.domElement);
        renderer.render(scene, camera);
        dispatch(setApparatus(renderer, camera, scene));

    };

    return <section className="world" ref={element => element && createScene(element)} />;

};

export default stitch({ propTypes, render }, state => state);
