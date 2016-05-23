import test from 'ava';
import sceneReducer, { INITIAL_STATE } from '../../src/reducers/scene';
import { SET_APPARATUS, SET_DIMENSIONS } from '../../src/events';

test('It should return the initial state by default;', t => {
    const state = sceneReducer(undefined, {});
    t.deepEqual(state, INITIAL_STATE);
});

test('It should be able to define the appartus entities;', t => {
    const modifiedState = { renderer: Symbol('a'), camera: Symbol('b'), scene: Symbol('c') };
    const state = sceneReducer(undefined, { type: SET_APPARATUS, ...modifiedState });
    t.not(state, modifiedState);
    t.is(state.apparatus.scene, modifiedState.scene);
    t.is(state.apparatus.camera, modifiedState.camera);
    t.is(state.apparatus.renderer, modifiedState.renderer);
});

test('It should be able to define the height and width;', t => {
    const modifiedState = { width: 800, height: 1000 };
    const state = sceneReducer(undefined, { type: SET_DIMENSIONS, ...modifiedState });
    t.not(state, modifiedState);
    t.is(state.dimensions.width, modifiedState.width);
    t.is(state.dimensions.height, modifiedState.height);
});
