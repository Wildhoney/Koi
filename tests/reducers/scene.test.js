import test from 'ava';
import sceneReducer from '../../src/reducers/scene';
import { SET_APPARATUS } from '../../src/events';

test('It should return the initial state by default;', t => {
    const state = sceneReducer(undefined, {});
    t.deepEqual(state, { renderer: {}, camera: {}, scene: {} });
});

test('It should be able to define the appartus entities;', t => {
    const modifiedState = { renderer: Symbol('a'), camera: Symbol('b'), scene: Symbol('c') };
    const state = sceneReducer(undefined, { type: SET_APPARATUS, ...modifiedState });
    t.not(state, modifiedState);
    t.is(state.scene, modifiedState.scene);
    t.is(state.camera, modifiedState.camera);
    t.is(state.renderer, modifiedState.renderer);
});
