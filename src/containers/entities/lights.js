import {HemisphereLight, AmbientLight, DirectionalLight} from 'three';

/**
 * @param {Object} scene
 * @return {void}
 */
export default = scene => {

    const hemisphereLight = new HemisphereLight(0xA8A39D, 0x0);
    const ambientLight = new AmbientLight(0x404040);
    const directionalLight = new DirectionalLight(0xFFFFFF, 0.5);

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
