import React from 'react';
import THREE from 'three';
import { stitch } from 'keo';
import radians from 'degrees-radians';

/**
 * @method renderFloor
 * @param {Object} scene
 * @return {void}
 */
const renderFloor = scene => {

    const geometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xbbbbbb, shading: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.rotation.x = radians(90);
    mesh.rotation.y = radians(180);
    mesh.position.y = -100;
    mesh.receiveShadow = true;

    scene.add(mesh);

};

/**
 * @method renderLights
 * @param {Object} scene
 * @return {void}
 */
const renderLights = scene => {

    const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
    const shadowLight = new THREE.DirectionalLight(0xffffff, .9);
    const ambientLight = new THREE.AmbientLight(0xdc8874, .5);

    // shadowLight.position.set(150, 350, 350);
    shadowLight.position.y = 300;
    shadowLight.castShadow = true;

    shadowLight.position.multiplyScalar(1.3);

    shadowLight.shadow.cameraVisible = true;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    var d = 50;

    shadowLight.shadow.camera.left = -d;
    shadowLight.shadow.camera.right = d;
    shadowLight.shadow.camera.top = d;
    shadowLight.shadow.cameraBottom = -d;

    shadowLight.shadow.camera.far = 2000;
    shadowLight.shadow.camera.darkness = 0.5;

    shadowLight.lookAt({ x: 0, y: 0: z: 0 });

    // scene.add(shadowLight);
    scene.add(ambientLight);

};

/**
 * @method renderCube
 * @param {Object} scene
 * @return {void}
 */
const renderCube = scene => {

    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshPhongMaterial({ color: 0x68c3c0, shading: THREE.FlatShading });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.y = 150;
    mesh.position.z = -150;
    mesh.castShadow = true;

    scene.add(mesh);

};

/**
 * @method render
 * @param {Object} props
 * @return {XML}
 */
const render = ({ props }) => {

    const { renderer, camera, scene } = props;

    /**
     * @method createScene
     * @param {HTMLElement} element
     * @return {void}
     */
    const createScene = element => {

        renderCube(scene);
        renderLights(scene);
        renderFloor(scene);

        element.appendChild(renderer.domElement);
        renderer.render(scene, camera);

    };

    return <section className="world" ref={createScene} />;

};

export default stitch({ render });
