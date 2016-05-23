import {BoxGeometry, MeshPhongMaterial, FlatShading, Mesh} from 'three';

/**
 * @param {Object} scene
 * @return {void}
 */
const renderCube = scene => {

    const geometry = new BoxGeometry(50, 50, 50);
    const material = new MeshPhongMaterial({ color: 0xA8A39D, shading: FlatShading });
    const mesh = new Mesh(geometry, material);

    mesh.position.z = 25;
    mesh.rotation.z = 100;
    mesh.castShadow = true;

    scene.add(mesh);

};
