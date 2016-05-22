import { SET_DIMENSIONS } from '../events';

/**
 * @constant INITIAL_STATE
 * @type {Immutable}
 */
const INITIAL_STATE = { width: 0, height: 0 };

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_DIMENSIONS:
            return { ...state, width: action.width, height: action.height };

    }

    return state;

};
