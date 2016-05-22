import * as e from './events';

/**
 * @method setDimensions
 * @param {Number} width
 * @param {Number} height
 * @return {Function}
 */
export const setDimensions = (width, height) => {

    return dispatch => {
        dispatch({ type: e.SET_DIMENSIONS, width, height });
    };

};
