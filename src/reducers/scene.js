import { SET_DIMENSIONS, SET_APPARATUS } from '../events';

/**
 * @constant INITIAL_STATE
 * @type {Object}
 */
export const INITIAL_STATE = {
    dimensions: {
        width: 0,
        height: 0
    },
    apparatus: {
        scene: {},
        camera: {},
        renderer: {}
    }
};

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_DIMENSIONS:
            const { height, width } = action;
            return { ...state, dimensions: { width, height }};

        case SET_APPARATUS:
            const { renderer, camera, scene } = action;
            return { ...state, apparatus: { renderer, camera, scene }};

    }

    return state;

};
