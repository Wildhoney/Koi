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

    const geometry = new THREE.PlaneGeometry(2000, 2000, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xe4e0ba, shading: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);

    mesh.rotation.x = radians(90);
    mesh.rotation.y = radians(180);
    mesh.position.y = -10;

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

    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;

    // shadowLight.shadow.camera.left = -400;
    // shadowLight.shadow.camera.right = 400;
    // shadowLight.shadow.camera.top = 400;
    // shadowLight.shadow.camera.bottom = -400;
    // shadowLight.shadow.camera.near = 1;
    // shadowLight.shadow.camera.far = 1000;
    //
    // shadowLight.shadow.mapSize.width = 2048;
    // shadowLight.shadow.mapSize.height = 2048;

    // scene.add(hemisphereLight);
    scene.add(shadowLight);
    scene.add(ambientLight);

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

        const geometry = new THREE.BoxGeometry(50, 50, 50);
        const material = new THREE.MeshPhongMaterial({ color: 0x68c3c0, shading: THREE.FlatShading });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 15;
        // mesh.position.x = 0;
        mesh.position.z = -150;
        mesh.rotation.set(50, 50, 20);

        scene.add(mesh);
        renderLights(scene);
        renderFloor(scene);

        element.appendChild(renderer.domElement);
        renderer.render(scene, camera);

    };

    return <section className="world" ref={createScene} />;

};

export default stitch({ render });
