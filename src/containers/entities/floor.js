import {PlaneGeometry, MeshPhongMaterial, Mesh, DoubleSide} from 'three';

/**
 * @param {Object} scene
 * @return {void}
 */
 export default scene => {

    const geometry = new PlaneGeometry(10000, 10000, 1, 1);
    const material = new MeshPhongMaterial({ color: 0xA8A39D, shading: DoubleSide });
    const mesh = new Mesh(geometry, material);
    mesh.receiveShadow = true;

    scene.add(mesh);

};
