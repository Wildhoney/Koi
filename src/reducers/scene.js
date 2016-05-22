import { SET_APPARATUS } from '../events';

/**
 * @constant INITIAL_STATE
 * @type {Object}
 */
const INITIAL_STATE = { renderer: {}, camera: {} };

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_APPARATUS:
            return { ...state, renderer: action.renderer, camera: action.camera };

    }

    return state;

};
