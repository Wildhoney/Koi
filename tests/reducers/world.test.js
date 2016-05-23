import test from 'ava';
import worldReducer from '../../src/reducers/world';
import { SET_DIMENSIONS } from '../../src/events';

test('It should return the initial state by default;', t => {
    const state = worldReducer(undefined, {});
    t.deepEqual(state, { width: 0, height: 0 });
});

test('It should be able to define the height and width;', t => {
    const modifiedState = { width: 800, height: 1000 };
    const state = worldReducer(undefined, { type: SET_DIMENSIONS, ...modifiedState });
    t.not(state, modifiedState);
    t.is(state.width, modifiedState.width);
    t.is(state.height, modifiedState.height);
});
