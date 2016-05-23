import test from 'ava';
import { spy } from 'sinon';
import * as action from '../src/actions';
import * as event from '../src/events';

test('It should be able to dispatch `setDimensions` with passed in args;', t => {

    const dispatcher = spy();
    const setDimensions = action.setDimensions(1000, 800);
    setDimensions(dispatcher);

    t.is(dispatcher.callCount, 1);
    t.deepEqual(dispatcher.args[0][0], { type: event.SET_DIMENSIONS, width: 1000, height: 800 });

});

test('It should be able to dispatch `setApparatus` with passed in args;', t => {

    const dispatcher = spy();
    const setApparatus = action.setApparatus('renderer', 'camera', 'scene');
    setApparatus(dispatcher);

    t.is(dispatcher.callCount, 1);
    t.deepEqual(dispatcher.args[0][0], { type: event.SET_APPARATUS, renderer: 'renderer', camera: 'camera', scene: 'scene' });

});
