import React, { PropTypes } from 'react';
import THREE from 'three';
import { stitch } from 'keo';
import radians from 'degrees-radians';

/**
 * @constant propTypes
 * @type {Object}
 */
const propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    devicePixelRatio: PropTypes.number.isRequired
};

/**
 * @method renderFloor
 * @param {Object} scene
 * @return {void}
 */
const renderFloor = scene => {

    const geometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff, shading: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);

    // mesh.rotation.x = radians(90);
    // mesh.rotation.y = radians(180);

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

    scene.add(ambientLight);
    scene.add(hemisphereLight);

};

/**
 * @method renderCube
 * @param {Object} scene
 * @return {void}
 */
const renderCube = scene => {

    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshPhongMaterial({ color: 0xbbbbbb, shading: THREE.FlatShading });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.z = 25;
    mesh.rotation.z = 100;

    scene.add(mesh);

};

/**
 * @method render
 * @param {Object} props
 * @return {XML}
 */
const render = ({ props }) => {

    const { height, width, devicePixelRatio } = props;

    /**
     * @method createScene
     * @param {HTMLElement} element
     * @return {void}
     */
    const createScene = element => {

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0xbbbbbb, 300, 950);

        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
        camera.position.y = -500;
        camera.position.z = 200;
        camera.lookAt({ x: 0, y: 0, z: 0 });

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(width, height);

        renderCube(scene);
        renderLights(scene);
        renderFloor(scene);

        element.appendChild(renderer.domElement);
        renderer.render(scene, camera);

    };

    return <section className="world" ref={createScene} />;

};

export default stitch({ render });
